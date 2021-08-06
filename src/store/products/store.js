import _ from "lodash";

const state = {
  productsList: []
}
const mutations = {
  setProducts(state, value) {
    state.productsList = value
  }
}
const actions = {
  setProducts({commit}) {
    //retrieve data
    let data = [
      {
        id: 1,
        name: 'genre1aaaaaa'
      },
      {
        id: 2,
        name: 'genre2'
      },
      {
        id: 3,
        name: 'genre3'
      },
      {
        id: 4,
        name: 'genre4'
      },
      {
        id: 5,
        name: 'genre5'
      },
      {
        id: 6,
        name: 'genre6'
      },
      {
        id: 7,
        name: 'genre7'
      }
    ]
    //transform data if necessary
    //set data
    commit('setProducts', data)
  }
}
const getters = {
    getProducts: state => {
      return state.productsList
    }
}

export default {
  state,
  mutations,
  actions,
  getters
}
