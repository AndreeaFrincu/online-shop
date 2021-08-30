const state = {
  currentCountry: null
}
const mutations = {
  setCountry(state, value) {
    state.currentCountry = value
  }
}
const actions = {
  setCheckout({commit}) {
    //retrieve data
    let country = 'default'

    //set data
    commit('setCountry', country)
  }
}
const getters = {
  getCurrentCountry: state => {
    return state.currentCountry
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
