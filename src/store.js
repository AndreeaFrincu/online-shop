import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    productsList: [ "produs1", "produs2", "produs3" ],
    //productsList: [],
    product: {name: 'product', quantity: 0},
    counter: 0
  },
  mutations: {
    increaseProd(state) {
      state.counter++;
  },
    decreaseProd(state) {
      state.counter--;
    }
  },
  actions: {
  },
  getters: {
  },
  modules: {
  }
});
