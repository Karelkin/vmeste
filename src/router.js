import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Card from './views/Card.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // {
    //   path: '/',
    //   name: 'card',
    //   component: Card
    // },
    {
      path: '/profile',
      name: 'profile',
      component: () => import(/* webpackChunkName: "about" */ './views/Profile.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import(/* webpackChunkName: "about" */ './views/SignIn.vue')
    },
    {
      path: '/signUp',
      name: 'signup',
      component: () => import(/* webpackChunkName: "about" */ './views/SignUp.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import(/* webpackChunkName: "about" */ './views/Account.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import(/* webpackChunkName: "about" */ './views/Card.vue')
    },
  ]
})
