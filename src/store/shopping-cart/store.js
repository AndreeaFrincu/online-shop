import _ from "lodash";
import Database from "../../../database/Database";

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
        element.price = value.price
      }
    })
  },
  removeItem(state, value) {
    let cloneList = _.cloneDeep(state.itemsList)
    _.remove(cloneList, function (element) {
      return element.id === value.id;
    });
    state.itemsList = cloneList
  },
  setBadge(state, value) {

  }
}
const actions = {
  setItems({commit}) {
    //retrieve data
    // let products = Database.products

    //transform data if necessary
    //set data
    // commit('setItems', products)
  }
}
const getters = {
  getItems: state => {
    let result = _.cloneDeep(state.itemsList)
    return result
  },
  getTotalPrice: state => {
    let totalPrice = 0
    _.forEach(state.itemsList, (element) => {
      totalPrice += element.price
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
