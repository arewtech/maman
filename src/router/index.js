import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Homepage.vue'
// import { AOS } from 'aos'
// import 'aos/dist/aos.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   AOS.init() // Initialize AOS
//   next()
// })

export default router
