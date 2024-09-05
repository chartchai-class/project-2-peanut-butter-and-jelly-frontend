<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { type Country } from '@/types';
import { useCountryStore } from '@/stores/country';

const countryStore = useCountryStore()
const country = computed(() => countryStore.country)

</script>
<template>
    <h1>{{ country?.country }}</h1>
</template>
