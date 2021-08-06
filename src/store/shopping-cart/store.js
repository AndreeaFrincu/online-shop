import Vue from 'vue'
import Vuex from 'vuex'
import _ from "lodash";

const state = {
  itemsList: []
}
const mutations = {
  setItems(state, value) {
    //set on store with value
    state.itemsList = value
  },
  setItem(state, value) {
    _.forEach(state.itemsList, (element) => {
      if (element.id === value.id) {
        element.quantity = value.quantity
      }
    })
  },
  removeItem(state, value) {
    let cloneList = _.cloneDeep(state.itemsList)
    _.remove(cloneList, function (element) {
      return element.id === value.id;
    });
    state.itemsList = cloneList
  }
}
const actions = {
  setItems({commit}) {
    //retrieve data
    let data = [
      {
        id: 1,
        name: 'produs1',
        quantity: 2222
      },
      {
        id: 2,
        name: 'produs2',
        quantity: 5
      },
      {
        id: 3,
        name: 'produs3',
        quantity: 2
      },
      {
        id: 4,
        name: 'produs4',
        quantity: 2
      },
      {
        id: 5,
        name: 'produs5',
        quantity: 2
      },
      {
        id: 6,
        name: 'produs6',
        quantity: 2
      },
      {
        id: 7,
        name: 'produs7',
        quantity: 2
      }
    ]
    //transform data if necessary
    //set data
    commit('setItems', data)
  }
}
const getters = {
    getItems: state => {
      return state.itemsList
    }
}

export default {
  state,
  mutations,
  actions,
  getters
}
