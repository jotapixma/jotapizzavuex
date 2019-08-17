import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./components/Home.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact/Contact.vue')
    },
    {
      path: '/pizzas',
      name: 'pizzas',
      component: () => import('@/views/pizzas/PizzasAll.vue')
    },
    {
      path: '/pizzas/:id',
      name: 'pizzas::id',
      component: () => import('@/components/PizzaSingle.vue'),
      props: true
    },
  ]
})
