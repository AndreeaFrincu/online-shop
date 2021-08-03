import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    }
  ]
})
