<script setup lang="ts">
console.log('Hi')
</script>

<template>
    <h1 class="text-2xl font-bold">Medal Tally</h1>
  <RouterLink :to="{ name: 'sports-managed-view'}" button class="absolute top-10 right-8 px-4 py-2 text-white bg-red-950 rounded hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red- flex items-center">
    <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
      Update Sport List
    </RouterLink>

  <RouterLink :to="{ name: 'sport-list-table-view' }">
    <div class="py-2">
      <div class="inline-block">
        <h1 class="text-2xl text-slate-600 hover:bg-gray-300 px-4 py-2 rounded inline-block">
          List of Sports
        </h1>
      </div>
    </div>
  </RouterLink>
  <div class="py-2"></div>
  <RouterView />
</template>
