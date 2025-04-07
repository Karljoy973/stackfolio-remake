import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/components/pages/HomePage.vue"),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import("@/components/pages/SkillsPage.vue"),
    },
  ],
})

export default router
