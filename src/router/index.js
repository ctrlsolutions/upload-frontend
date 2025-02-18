import { createRouter, createWebHistory } from 'vue-router'
import SignUpPage from '@/pages/SignUpPage.vue'
import LogInPage from '@/pages/LogInPage.vue'
import AuthPagesLayout from '@/layouts/AuthPagesLayout.vue'
import EmptyPagesLayout from '@/layouts/EmptyPagesLayout.vue'
import LandingPage from '@/pages/LandingPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingPage, // TODO: add separate routing for sub components: [about, section]
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthPagesLayout,
      redirect: '/landing',
      children: [
        { path: 'signup', component: SignUpPage },
        { path: 'login', component: LogInPage },
      ],
    },
  ],
})

export default router
