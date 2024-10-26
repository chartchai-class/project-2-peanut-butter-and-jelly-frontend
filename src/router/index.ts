import SportService from '@/services/SportService'
import { useSportStore } from '@/stores/sport'
import MedalTallyView from '@/views/MedalTallyView.vue'
import CommentView from '@/views/sportLists/CommentView.vue'
import SportListLayoutView from '@/views/sportLists/LayoutView.vue'
import SportListTableView from '@/views/sportLists/TableView.vue'
import CountryInformationView from '@/views/countryInformation/CountryInformationView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import nProgress from 'nprogress'
import CountryLayoutView from '@/views/countryInformation/LayoutView.vue'
import CountrySportListView from '@/views/countryInformation/SportListView.vue'
import CountryCommentView from '@/views/countryInformation/CommentView.vue'
import { useCountryStore } from '@/stores/country'
import AboutView from '@/views/Aboutview.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { auth } from '@/firebase';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'medal-tally-view',
      component: MedalTallyView,
      props:(route) =>({ page: parseInt(route.query.page?.toString()  || '1')})
    },
    {
      path: '/about',
      name: 'about-view',
      component: AboutView
    },
    {
    path: '/login',
    name: 'login-view',
    component: LoginView
    },
    {
      path: '/register',
      name: 'register-view',
      component: RegisterView
    },
    {
      path: '/country/:id',
      name: 'country-layout-view',
      component: CountryLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const countryStore = useCountryStore()
        return SportService.getCountry(id)
        .then((response) => {
          countryStore.setCountry(response.data)
          console.log(response.data)
        })
      },
      children: [
        {
          path: '',
          name: 'country-information-view',
          component: CountryInformationView
        },
        {
          path: 'sport-list',
          name: 'country-sport-list-view',
          component: CountrySportListView
        },
        {
          path: 'comment',
          name: 'country-comment-view',
          component: CountryCommentView
        }
      ]
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
          path: ':id',
          name: 'comment-view',
          component: CommentView,
          props: true,
          beforeEnter: (to) => {
            const id = parseInt(to.params.id as string)
            const sportStore = useSportStore()
            return SportService.getSport(id).then((res) => {
              console.log(res.data)
              sportStore.setSport(res.data)
            })
          }
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  nProgress.start()

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const user = auth.currentUser;

  if (requiresAuth && !user){
    next('/login')
  }else{
    next()
  }
});
router.afterEach(() => {
  nProgress.done()
})
export default router
