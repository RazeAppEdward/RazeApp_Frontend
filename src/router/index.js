import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/authentication/login'
import register from '../views/authentication/register'

import main from '../views/main'
import home from '../views/authenticated/home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    redirect: login
  },
  {
    path: '/register',
    name: 'Register',
    component: register
  },
  {
    path: '/:userId',
    name: 'main',
    component: main,
    children: [
      {
        path: '/:userId/home',
        name: 'home',
        component: home
      },
      {
        path: '/:userId',
        redirect: home
      }
    ],
    meta:{protectedRoute: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
