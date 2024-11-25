import { createRouter, createWebHistory } from 'vue-router'
import SignupPage from '@/pages/SignupPage.vue'
import AuthPagesLayout from '@/layouts/AuthPagesLayout.vue'
import EmptyPagesLayout from '@/layouts/EmptyPagesLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmptyPagesLayout,
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthPagesLayout,
      children: [
        { path: 'signup', component: SignupPage}
      ]
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
      path:'/signup',
      name: 'singup',
      component: SignupPage,
    }
  ],
})

export default router
