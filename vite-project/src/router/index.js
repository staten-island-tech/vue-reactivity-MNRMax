import { createRouter, createWebHistory } from 'vue-router'
import BuildView from '../views/BuildView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BuildView
    },
    {
      path: '/race',
      name: 'race',
      component: () => import('../views/RaceView.vue')
    }
  ]
})

export default router
