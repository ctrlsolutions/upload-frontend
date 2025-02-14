import { createRouter, createWebHistory } from 'vue-router'
import SignUpPage from '@/pages/SignUpPage.vue'
import LogInPage from '@/pages/LogInPage.vue'
import AuthPagesLayout from '@/layouts/AuthPagesLayout.vue'
import LandingPage from '@/pages/LandingPage.vue'
import AuthenticatedPagesLayout from '@/layouts/AuthenticatedPagesLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/landing',
      name: 'landing',
      component: LandingPage,
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
      redirect: '/auth/signup',
    },
    {
      path: '/login',
      name: 'login',
      redirect: '/auth/login',
    },
    {
      path: '/authenticated',
      name: 'authenticated',
      component: AuthenticatedPagesLayout,
      // children will be tabs as components.
    },
  ],
})

export default router
