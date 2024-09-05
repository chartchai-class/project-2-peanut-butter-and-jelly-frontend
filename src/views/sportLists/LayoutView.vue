<script setup lang="ts">
console.log('Hi')
</script>

<template>
  <RouterLink :to="{ name: 'sport-list-table-view' }">
    <div class="py-2">
      <!-- Container div with no background -->
      <div class="inline-block">
        <!-- Apply hover effects only to the text with a highlight effect -->
        <h1 class="text-2xl text-slate-600 hover:bg-gray-300 px-4 py-2 rounded inline-block">
          List of Sports
        </h1>
      </div>
    </div>
  </RouterLink>
  <div class="py-2"></div>
  <RouterView />
</template>
