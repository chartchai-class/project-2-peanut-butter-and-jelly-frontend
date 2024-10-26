<script setup lang="ts">
import SportListTable from '@/components/sportLists/SportListTable.vue'
import SportService from '@/services/SportService'
import { ref } from 'vue'
import { type Sport } from '@/types'

const sports = ref<Sport[] | null>(null)
SportService.getSportList().then((res) => {
  sports.value = res.data
  console.log(sports.value)
})
</script>
<template>
  <h1 class="text-5xl font-bold">Table of Sport Titles</h1>
  <p class="max-w-3xl pb-6 px-3 pt-2">
    Here we provide a list of sports and what medals the country get, you can click on any sport
    title to view or write a comment to cheer up your favorite athlete
  </p>
  <table class="min-w-full bg-white border border-gray-300" v-if="sports">
    <thead>
      <tr class="bg-gray-200 text-gray-700 text-left">
        <th class="py-2 px-4 border-b w-1/2">Sport Titles</th>
        <th class="py-2 px-4 border-b">&#x1f947; Gold</th>
        <th class="py-2 px-4 border-b">&#x1f948; Silver</th>
        <th class="py-2 px-4 border-b">&#x1f949; Bronze</th>
      </tr>
    </thead>
    <tbody>
      <SportListTable v-for="sport in sports" :key="sport.title" :sport="sport" />
    </tbody>
  </table>
</template>
