<script setup lang="ts">
import { useCountryStore } from '@/stores/country'
import { storeToRefs } from 'pinia'

const countryStore = useCountryStore()
const { country } = storeToRefs(countryStore)
</script>

<template>
  <!-- Container for the Country Information Page -->
  <div class="country-info-page">
    <!-- Tab Navigation -->
    <div class="flex justify-start space-x-4 border-b-2 pb-2 mb-4">
      <!-- Country Details Tab -->
      <RouterLink
        :to="{ name: 'country-information-view' }"
        class="text-slate-600 hover:text-red-950 hover:border-red-950 hover:font-bold cursor-pointer text-2xl px-4 py-2 focus:outline-none"
        exact-active-class="text-red-950 border-b-4 border-red-950 font-bold"
      >
        Country Details
      </RouterLink>

      <!-- List of Sports Tab -->
      <RouterLink
        :to="{ name: 'country-sport-list-view' }"
        class="text-slate-600 hover:text-red-950 hover:border-red-950 hover:font-bold cursor-pointer text-2xl px-4 py-2 focus:outline-none"
        exact-active-class="text-red-950 border-b-4 border-red-950 font-bold"
      >
        List of Sports
      </RouterLink>

      <!-- Comment Tab -->
      <RouterLink
        :to="{ name: 'country-comment-view' }"
        class="text-slate-600 hover:text-red-950 hover:border-red-950 hover:font-bold cursor-pointer text-2xl px-4 py-2 focus:outline-none"
        exact-active-class="text-red-950 border-b-4 border-red-950 font-bold"
      >
        Comment
      </RouterLink>
    </div>
  </div>
  <div class="py-2"></div>
  <RouterView :country="country" />
</template>

<style scoped>
/* Optional: Add some hover effect to the tab buttons */
button:hover {
  cursor: pointer;
}
</style>
