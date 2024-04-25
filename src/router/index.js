import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sample-form',
      name: 'sample-form',
      component: () => import('../views/UserRegistration.vue')
    }

  ]
})

export default router
