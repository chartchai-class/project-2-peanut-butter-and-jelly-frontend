<script setup lang="ts">
import MedalTally from '@/components/sportLists/MedalTally.vue';
import SportService from '@/services/SportService';
import { type Country } from '@/types';
import { useLimitStore } from '@/stores/limit'
import { ref, computed, watchEffect, onMounted } from 'vue';

const countries = ref<Country[] | null>(null);

const limitStore = useLimitStore(); // Using Pinia store

const totalCountries = ref(0);
const limit = computed(() => limitStore.limit); // Limit from store
const totalPage = computed(() => Math.ceil(totalCountries.value / (limit.value || 1))); // Fallback to avoid division by 0

const hasNextPage = computed(() => {
  return page.value < totalPage.value;
});

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const page = computed(() => props.page);

onMounted(() => {
  watchEffect(() => {
    SportService.getMedalTally((limit.value || 1), page.value)
      .then((response) => {
        countries.value = response.data;
        totalCountries.value = response.headers['x-total-count'];
      });
  });
});
</script>
<template>
  <h1 class="text-2xl font-bold">Medal Tally</h1>
  <RouterLink :to="{ name: 'countrymanaged-view' }" class="absolute top-10 right-8">
    <button class= "px-4 py-2 text-white bg-red-950 rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red- flex items-center">
    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
      Add Country Details
      </button>
    </RouterLink>
  <p>This is where the main content goes.</p>
<div class="flex justify-between items-center mb-4">
  <div class="w-[300px] inline-flex -space-x-px text-sm">
      <RouterLink
        :to="{ name: 'medal-tally-view', query: { page: page - 1 } }"
        rel="prev" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-red-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        v-if="page != 1"
        > Previous </RouterLink
      >
      <RouterLink v-for="i in totalPage" 
      :key="i" :to="{ name:  'medal-tally-view', query: { page: i } }" class="flex items-center justify-center px-2 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-red-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
      
      {{ i }} 
      </RouterLink>

      <RouterLink
        :to="{ name: 'medal-tally-view', query: { page: page + 1 } }"
        rel="next" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-e-lg hover:bg-red-200 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        v-if="hasNextPage">Next </RouterLink
      >
    </div>
    <div class="flex items-center">
      <label for="pageSize" class="text-gray-700 mr-2">Number of countries per page: </label>
      <input id="pageSize" type="number" min="1" max="9" v-model.number="limitStore.limit" class="border border-gray-300 rounded p-2 mt-1 w-14"/>

      <p v-if="limit > totalCountries" class="text-red-500 ml-2">The maximum allowed number of countries per page is {{ totalCountries }}</p>


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
