import './assets/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'nprogress/nprogress.css'
import '@/services/AxiosInterceptorSetup.ts'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import { inject } from '@vercel/analytics'
inject()

app.use(createPinia())
app.use(router)

app.mount('#app')
