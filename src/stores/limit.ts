import { defineStore } from 'pinia';

export const useLimitStore = defineStore('limit', {
  state: () => ({
    limit: 2, // Default limit value
  }),
  actions: {
    setLimit(newLimit: number) {
      this.limit = newLimit;
    },
  },
});
