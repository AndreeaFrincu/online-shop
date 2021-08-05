import Vue from 'vue'
import Vuex from 'vuex'
import _ from "lodash";

Vue.use(Vuex)
const moduleProdItem = {
  state: {
    productsList: []
  },
  mutations: {
    setItems(state, value) {
      //set on store with value
      state.productsList = value
    },
    setItem(state, value) {
      _.forEach(state.productsList, (element) => {
        if (element.name === value.name) {
          element.quantity = value.quantity
        }
      })
    },
    removeItem(state, value) {
      let cloneList = _.cloneDeep(state.productsList)
      _.remove(cloneList, function(element) {
        return element.name === value.name;
      });
      state.productsList = cloneList
    }
  },
  actions: {
    setItems({commit}) {
      //retrieve data
      let data = [
        {
          name: 'produs1',
          quantity: 2222
        },
        {
          name: 'produs2',
          quantity: 5
        },
        {
          name: 'produs3',
          quantity: 2
        }
      ]
      //transform data if necessary
      //set data
      commit('setItems', data)
    }
  },
  getters: {
    getItems: state => {
      return state.productsList
    }
  }
}

const moduleProdList = {
  state: {
    productsList: []
  },
  mutations: {},
  actions: {},
  getters: {
    getItems: state => {
      return state.productsList
    }
  }
}

export default new Vuex.Store({
  modules: {
    prodItem: moduleProdItem,
    prodList: moduleProdList
  }
});
