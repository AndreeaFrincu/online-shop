import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/Home'
import Products from '../pages/products/Products'
import Cart from "../pages/shopping-cart/Cart";

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
    },
    {
      path: '/cart',
      name: 'shopping-cart',
      component: Cart
    }
  ]
})
