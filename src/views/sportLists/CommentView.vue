<script setup lang="ts">
import { useSportStore } from '@/stores/sport'
import { computed, watchEffect } from 'vue'

const sportStore = useSportStore()
const sport = computed(() => sportStore.sport)

// Watch for changes in sport data
watchEffect(() => {
  console.log('Sport data:', sport.value)
})
console.log(sport)
</script>
<template>
  <div v-if="sport">
    <h1 class="text-5xl font-bold">{{ sport.sport_title }}</h1>
    <div class="py-4">
      <h1>&#x1f947; <a class="font-bold">1st place:</a> {{ sport.gold }}</h1>
      <h1>&#x1f948; <a class="font-bold">2nd place:</a> {{ sport.silver }}</h1>
      <h1>&#x1f949; <a class="font-bold">3rd place:</a> {{ sport.bronze }}</h1>
    </div>
  </div>
</template>
