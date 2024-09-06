<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <nav class="w-1/4 bg-[rgb(231,224,224)] p-8 fixed h-full">
      <div class="mb-6">
        <h1 class="text-4xl font-bold mb-4 text-red-950">Olympic Report</h1>
      </div>
      <ul>
        <li class="mb-4">
          <RouterLink
            :to="{ name: 'medal-tally-view' }"
            class="block hover:bg-red-950 hover:text-white hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="font-extrabold text-2xl rounded-lg px-4 py-2"
          >
            Medal Tally
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            :to="{ name: 'sport-list-table-view' }"
            class="block hover:bg-red-950 hover:text-white hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="font-extrabold text-2xl rounded-lg px-4 py-2"
          >
            List of Sports
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="w-1/4"></div>
    <div class="flex-1 bg-gray-100 p-8 h-fit min-h-screen">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
