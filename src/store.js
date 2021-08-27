import Vue from 'vue'
import Vuex from 'vuex'
import products from './store/products/store'
import cart from './store/shopping-cart/store'
import checkout from './store/checkout/store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products: products,
    cart: cart,
    checkout: checkout
  }
})
