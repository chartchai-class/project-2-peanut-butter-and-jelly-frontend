<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <SpeedInsights/>
  <div class="flex h-screen">
    <nav class="w-1/4 bg-custom-red p-8 fixed h-full">
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
        <li class="mb-4">
          <RouterLink
            :to="{ name: 'about-view' }"
            class="block hover:bg-red-950 hover:text-white hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="font-extrabold text-2xl rounded-lg px-4 py-2"
          >
            About 
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            :to="{ name: 'user-view' }"
            class="block hover:bg-red-950 hover:text-white hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="font-extrabold text-2xl rounded-lg px-4 py-2"
          >
            User
          </RouterLink>
        </li>
        <li class="mb-4">
        <RouterLink
            :to="{ name: 'login-view' }"
            class="flex items-center justify center text-center bg-gray-200 text-gray-600 font-extrabold text-2xl rounded-lg px-4 py-2  hover:bg-red-950 hover:text-white hover:rounded-lg hover:px-4 hover:py-2 transition-all"
            active-class="bg-red-950 text-white font-extrabold text-2xl rounded-lg px-4 py-2"
          >
          <svg class="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-10a2 2 0 11-4 0 2 2 0 014 0zm0 6c-1.66 0-3-1.34-3-3h6c0 1.66-1.34 3-3 3z" />
          </svg>
            Login
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
