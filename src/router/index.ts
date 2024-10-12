import { createRouter, createWebHistory } from 'vue-router'
import MainPage from "@/views/MainPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainPage
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: () => import('../views/FeedbackPage.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
