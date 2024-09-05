import type { SportState, Sport } from '@/types'
import { defineStore } from 'pinia'
export const useSportStore = defineStore('sport', {
  state: (): SportState => ({
    sport: null
  }),
  actions: {
    setSport(sport: Sport): void {
      this.sport = sport
    }
  }
})
