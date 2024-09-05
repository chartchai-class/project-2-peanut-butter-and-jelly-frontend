import type { CountryState, Country } from '@/types'
import { defineStore } from 'pinia'
export const useCountryStore = defineStore('country', {
  state: (): CountryState => ({
    country: null
  }),
  actions: {
    setCountry(country: Country): void {
      this.country = country
    }
  }
})
