<script setup lang="ts">
import CountrySpList from '@/components/CountrySpList.vue';
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
      <CountrySpList/>
    </tbody>
  </table>
</template>
