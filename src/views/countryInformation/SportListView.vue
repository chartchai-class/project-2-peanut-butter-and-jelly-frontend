<script setup lang="ts">
import CountrySpList from '@/components/CountrySpList.vue';
import { toRefs } from 'vue'
import { type Country } from '@/types'

const props = defineProps<{
  country: Country
  id: string
}>()
const { country } = toRefs(props)
</script>
<template>
    <h1>Sport Lists</h1>
    <table class="min-w-full bg-white border border-gray-300" v-if="true">
    <thead>
      <tr class="bg-gray-200 text-gray-700 text-left">
        <th class="py-2 px-4 border-b w-2/3">Sport Titles</th>
        <th class="py-2 px-4 border-b">Medal</th>
      </tr>
    </thead>
    <tbody>
      <CountrySpList v-for="sport in country.goldMedals" :key="sport.id" :sport="sport" :medal="'GOLD'"/>
      <CountrySpList v-for="sport in country.silverMedals" :key="sport.id" :sport="sport" :medal="'SILVER'"/>
      <CountrySpList v-for="sport in country.bronzeMedals" :key="sport.id" :sport="sport" :medal="'BRONZE'"/>
    </tbody>
  </table>
</template>
