import MedalTallyView from '@/views/MedalTallyView.vue'
import CommentView from '@/views/sportLists/CommentView.vue'
import SportListLayoutView from '@/views/sportLists/LayoutView.vue'
import SportListTableView from '@/views/sportLists/TableView.vue'
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
      component: SportListLayoutView,
      children: [
        {
          path: '',
          name: 'sport-list-table-view',
          component: SportListTableView
        },
        {
          path: 'comment',
          name: 'comment-view',
          component: CommentView
        }
      ]
    }
  ]
})

export default router
