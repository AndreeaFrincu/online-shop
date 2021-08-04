import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
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
