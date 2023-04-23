import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import UserStore from '@/stores/user.js'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'sign-in',
          name: 'signIn',
          component: SignInView,
        },
        {
          path: 'sign-up',
          name: 'signUp',
          component: SignUpView,
        },
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUsView,
    },
  ]
})


router.beforeEach((to) => {
  const useUserStore = UserStore()
  const isLoginIn = useUserStore.user !== null;

  if(!isLoginIn && to.name !== 'signIn' && to.name !== 'signUp' && to.name !== 'contact') {
    return {name: 'signIn'}
  }
})

export default router
