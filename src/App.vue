<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <nav class="w-1/4 bg-[rgb(231,224,224)] p-8 fixed h-full">
      <ul>
        <li class="mb-4">
          <RouterLink
            :to="{ name: 'medal-tally-view' }"
            class="block hover:bg-yellow-400 hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="font-extrabold text-2xl rounded-lg px-4 py-2"
          >
            Medal Tally
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            :to="{ name: 'sport-list-table-view' }"
            class="block hover:bg-yellow-400 hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="font-extrabold text-2xl rounded-lg px-4 py-2"
          >
            List of Sports
          </RouterLink>
        </li>
        <li class="mb-4">
          <a
            href="#"
            class="hover:bg-yellow-400 hover:rounded-lg hover:px-4 hover:py-2 transition-all"
          >
            About (Do we need this?? I don't want to work on it -Bay)
          </a>
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
