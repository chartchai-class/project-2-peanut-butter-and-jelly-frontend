<script setup lang="ts">
import { toRefs, computed } from 'vue'
import { type Country } from '@/types'

const props = defineProps<{
  country: Country
}>()
const { country } = toRefs(props)
const sportsCount = computed(
  () =>
    country.value.goldMedals.length +
    country.value.silverMedals.length +
    country.value.bronzeMedals.length
)
</script>
<template>
  <div class="country-detail p-6 max-w-4xl mx-auto text-center">
    <h1 class="text-4xl font-bold mb-4">{{ country.countryName }}</h1>
    <img :src="country.img" :alt="`${country.countryName} flag`" class="w-32 mx-auto mb-4" />
    <p class="text-lg text-gray-700 mb-6">{{ country.desc }}</p>

    <div class="medal-count grid grid-cols-3 gap-4 mb-8">
      <div class="p-4 border rounded-lg bg-yellow-100">
        <p class="text-2xl font-semibold">{{ country.amountGold }}</p>
        <p class="text-lg text-gray-500">Gold</p>
      </div>
      <div class="p-4 border rounded-lg bg-gray-100">
        <p class="text-2xl font-semibold">{{ country.amountSilver }}</p>
        <p class="text-lg text-gray-500">Silver</p>
      </div>
      <div class="p-4 border rounded-lg bg-orange-100">
        <p class="text-2xl font-semibold">{{ country.amountBronze }}</p>
        <p class="text-lg text-gray-500">Bronze</p>
      </div>
    </div>
    <div class="sports-joined text-xl font-medium mb-6">
      <p class="text-lg font-medium text-gray-600 text-left">
        Number of Sports Participated: {{ sportsCount }}
      </p>
      <p class="text-lg font-medium text-gray-600 text-left">
        First Olympic Appearance: {{ country.firstOlympicAppearance }}
      </p>
      <p class="text-lg font-medium text-gray-600 text-left">
        Number of Olympics Participated: {{ country.numberOfOlympicsParticipatedIn }}
      </p>
    </div>
  </div>
</template>
