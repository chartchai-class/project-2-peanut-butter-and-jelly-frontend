<script setup lang="ts">
import MedalTally from '@/components/sportLists/MedalTally.vue';
import SportService from '@/services/SportService';
import { type Country } from '@/types';
import { ref, computed, watchEffect,onMounted } from 'vue';
import { useRouter } from 'vue-router'


const countries = ref<Country[] | null>(null)

const router = useRouter()

const totalCountries = ref(0)
var totalPage = 0
const hasNextPage = computed(() => {
  totalPage = Math.ceil(totalCountries.value / 2) // change with limit naa
  return page.value < totalPage
})
const props = defineProps({
  page: {
    type: Number,
    required: true
  },
})

const page = computed(() => props.page)
console.log(page.value + '   ddfsdfs')
onMounted(() => {
  watchEffect(() => {
    SportService.getMedalTally(2, page.value) // change with limit naa
    .then((response) => {
      countries.value = response.data
      totalCountries.value = response.headers['x-total-count']
    })
    
  })
})


</script>
<template>
  <h1 class="text-2xl font-bold">Medal Tally</h1>
  <p>This is where your main content goes.</p>
  <div class="w-[300px]">
      <RouterLink
        :to="{ name: 'medal-tally-view', query: { page: page - 1 } }"
        rel="prev" class="text-left text-custom-gray"
        v-if="page != 1"
        >&lt; Prev Page</RouterLink
      >
      <RouterLink v-for="i in totalPage" 
      :key="i" :to="{ name:  'medal-tally-view', query: { page: i } }" >
       &nbsp; {{ i }} 
      </RouterLink>
      &nbsp;
      <RouterLink
        :to="{ name: 'medal-tally-view', query: { page: page + 1 } }"
        rel="next" class="text-right text-custom-gray"
        v-if="hasNextPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  <table class="min-w-full bg-white border border-gray-300">
    <thead>
      <tr class="bg-gray-200 text-gray-700 text-left">
        <th class="py-2 px-4 border-b w-1/2">Country</th>
        <th class="py-2 px-4 border-b w-1/2">Flag</th>
        <th class="py-2 px-4 border-b">&#x1F947; Gold</th>
        <th class="py-2 px-4 border-b">&#x1F948; Silver</th>
        <th class="py-2 px-4 border-b">&#x1F949; Bronze</th>
        <th class="py-2 px-4 border-b">Total</th>
      </tr>
    </thead>
    <tbody>
      <MedalTally v-for="country in countries" :key="country.id" :country="country" />
    </tbody>
  </table>
</template>
