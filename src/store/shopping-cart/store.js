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
        name: 'product1',
        quantity: 2222,
        price: 10
      },
      {
        id: 2,
        name: 'product2',
        quantity: 5,
        price: 11
      },
      {
        id: 3,
        name: 'product3',
        quantity: 2,
        price: 12
      },
      {
        id: 4,
        name: 'product4',
        quantity: 2,
        price: 13
      },
      {
        id: 5,
        name: 'product5',
        quantity: 2,
        price: 14
      },
      {
        id: 6,
        name: 'product6',
        quantity: 2,
        price: 15
      },
      {
        id: 7,
        name: 'product7',
        quantity: 2,
        price: 16
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
