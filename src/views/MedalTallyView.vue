<script setup lang="ts">
import MedalTally from '@/components/sportLists/MedalTally.vue';
import SportService from '@/services/SportService';

import { type Country } from '@/types';


import { ref, computed, watch } from 'vue';

const Countries = ref<Country[]>([]); // กำหนดให้ countries เป็นอาร์เรย์ของวัตถุประเภท Country

const pageSize = ref(15); // Default number of countries per page
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(Countries.value.length / pageSize.value));

const paginatedCountries = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize.value;
  const endIndex = startIndex + pageSize.value;
  return Countries.value.slice(startIndex, endIndex);
});

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++; 

  }
};

// Watch for changes in pageSize and update pagination accordingly
watch(pageSize, () => {
  currentPage.value = 1; // Reset to the first page when pageSize changes
});
const countries = ref<Country[] | null>(null)
SportService.getMedalTally(10,0).then((res) => {
  countries.value = res.data
})


</script>
<template>
  <h1 class="text-2xl font-bold">Medal Tally</h1>
  <p>This is where your main content goes.</p>
  <div>
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">«</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">»</button>
    </div>

    <div class="countries-list">
      <CountryCard v-for="country in paginatedCountries" :key="country.id" :country="country" />
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
