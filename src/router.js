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
      path: '/ourpizzas',
      name: 'ourpizzas',
      component: () => import('./components/SectionPizzaTypes.vue')
    },
    {
      path: '/custompizzas',
      name: 'custompizzas',
      component: () => import('./components/SectionPizzaCustom.vue')
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
    {
      path: '/ingredients',
      name: 'ingredients',
      component: () => import('./components/SectionIngredients.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('./components/SectionHistory.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./components/SectionTeam.vue')
    },
  ]
})
