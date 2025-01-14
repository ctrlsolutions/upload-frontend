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
      name: '',
      component: EmptyPagesLayout,
    },

    {
      path: '/landing',
      name: 'landing',
      component: LandingPage,
    },

    {
      path: '/auth',
      name: 'auth',
      component: AuthPagesLayout,
      children: [{ path: 'signup', component: SignUpPage }],
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpPage,
    },

    {
      path: '/login',
      name: 'login',
      component: LogInPage,
    },
  ],
})

export default router
