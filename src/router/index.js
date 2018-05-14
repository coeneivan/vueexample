import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'

export default new Router({
    // Scroll to top on route change
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'hash',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  }]
})
