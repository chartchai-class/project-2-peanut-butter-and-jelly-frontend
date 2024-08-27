import MedalTallyView from '@/views/MedalTallyView.vue'
import SportListView from '@/views/SportListView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'medal-tally-view',
      component: MedalTallyView
    },
    {
      path: '/sportlist',
      name: 'sport-list-view',
      component: SportListView
    },
  ]
})

export default router
