<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <nav class="w-1/4 bg-[rgb(231,224,224)] p-8">
      <ul>
        <li class="mb-4"><a class="hover:bg-yellow-400 hover:rounded-lg hover:px-4 hover:py-2 transition-all">
          <RouterLink exact-active-class="font-extrabold text-2xl" :to="{ name: 'medal-tally-view' }">Medal Tally</RouterLink>
        </a></li>
        <li class="mb-4"><a class="hover:bg-yellow-400 hover:rounded-lg hover:px-4 hover:py-2 transition-all">
          <RouterLink exact-active-class="font-extrabold text-2xl" :to="{ name: 'sport-list-view' }">List of Sports</RouterLink>
        </a></li>
        <li class="mb-4"><a href="#" class="hover:bg-yellow-400 hover:rounded-lg hover:px-4 hover:py-2 transition-all">
          About (Do we need this?? I don't want to work on it -Bay)
        </a></li>
      </ul>
    </nav>

    <div class="flex-1 bg-gray-100 p-8">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped></style>
