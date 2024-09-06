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

// Jireh ------------
// const pageSize = ref<number | null>(null);
// const error = ref<string | null>(null);

// watch(pageSize, (newSize) => {
//   if(newSize !== null && newSize > 9) {
//     pageSize.value = 9;
//   } else {
//     error.value = null;
//   }
//   currentPage.value = 1;
// });
// ---------------------
</script>
<template>
  <h1 class="text-2xl font-bold">Medal Tally</h1>
  <p>This is where your main content goes.</p>
<div class="flex justify-between items-center mb-4">
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
    <div class="flex items-center">
      <label for="pageSize" class="text-gray-700 mr-2">Number of countries per page: </label>
      <input id="pageSize" type="number" min="1" max="9" v-model.number="pageSize" class="border border-gray-300 rounded p-2 mt-1 w-14"/>
    <p v-if="error" class="text-red-500 ml-2"> {{ error  }}</p>
    </div>
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
