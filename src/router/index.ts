import MainLayout from '@/core/layouts/MainLayout.vue'
import LoginPage from '@/pages/login/LoginPage.vue'
import RegisterPage from '@/pages/register/RegisterPage.vue'
import TestPage from '@/pages/test/TestPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: 'login', // /login
          component: LoginPage
        },
        {
          path: 'register', // /register
          component: RegisterPage
        },
        {
          path: 'test',
          component: TestPage
        }
      ]
    },
  ],
})

export default router
