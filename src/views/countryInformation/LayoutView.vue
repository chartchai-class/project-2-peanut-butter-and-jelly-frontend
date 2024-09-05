<script setup lang="ts">
import { ref } from 'vue'

// Track the currently selected tab
const activeTab = ref('country-details')

// Methods to change tabs
const selectTab = (tab: string) => {
  activeTab.value = tab
}
import { useCountryStore } from '@/stores/country';
import { storeToRefs } from 'pinia';

const countryStore = useCountryStore()
const { country } = storeToRefs(countryStore)
</script>

<template>
  <!-- Container for the Country Information Page -->
  <div class="country-info-page">

    <!-- Tab Navigation -->
    <div class="flex justify-start space-x-4 border-b-2 pb-2 mb-4">
      <!-- Country Details Tab -->
      <button
        @click="selectTab('country-details')"
        :class="activeTab === 'country-details' ? 'text-red-950 border-b-4 border-red-950 font-bold' : 'text-slate-600 hover:text-red-950 hover:border-red-950 hover:font-bold cursor-pointer transition-colors duration-200'"
        class="text-2xl px-4 py-2 focus:outline-none">
        Country Details
      </button>

      <!-- List of Sports Tab -->
      <button
        @click="selectTab('list-of-sports')"
        :class="activeTab === 'list-of-sports' ? 'text-red-950 border-b-4 border-red-950 font-bold' : 'text-slate-600 hover:text-red-950 hover:border-red-950 hover:font-bold cursor-pointer transition-colors duration-200'"
        class="text-2xl px-4 py-2 focus:outline-none">
        List of Sports
      </button>

      <!-- Comment Tab -->
      <button
        @click="selectTab('comment')"
        :class="activeTab === 'comment' ? 'text-red-950 border-b-4 border-red-950 font-bold' : 'text-slate-600 hover:text-red-950 hover:border-red-950 hover:font-bold cursor-pointer transition-colors duration-200'"
        class="text-2xl px-4 py-2 focus:outline-none">
        Comment
      </button>
    </div>

    <!-- Country Details Section -->
    <div v-if="activeTab === 'country-details'" class="py-4">
      <h1 class="text-xl font-bold mb-2">Country Details</h1>
    </div>

    <!-- List of Sports Section -->
    <div v-if="activeTab === 'list-of-sports'" class="py-4">
      <h1 class="text-xl font-bold mb-2">List of Sports</h1>
    </div>

    <!-- Comment Section -->
    <div v-if="activeTab === 'comment'" class="py-4">
      <h1 class="text-xl font-bold mb-2">Comment</h1>
    </div>

  </div>
  <div class="py-2"></div>
  <RouterView :country="country"/>
</template>

<style scoped>
/* Optional: Add some hover effect to the tab buttons */
button:hover {
  cursor: pointer;
}
</style>
