<script setup lang="ts">
import MedalTally from '@/components/sportLists/MedalTally.vue';
import SportService from '@/services/SportService';
import { ref } from 'vue'
import { type Country } from '@/types';

const countries = ref<Country[] | null>(null)
SportService.getMedalTally(10,0).then((res) => {
  countries.value = res.data
})


</script>
<template>
  <h1 class="text-2xl font-bold">Medal Tally</h1>
  <p>This is where your main content goes.</p>
  <table class="min-w-full bg-white border border-gray-300">
    <thead>
      <tr class="bg-gray-200 text-gray-700 text-left">
        <th class="py-2 px-4 border-b w-1/2">Country</th>
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
