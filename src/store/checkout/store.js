import _ from "lodash";
import Database from "../../../database/Database";

const state = {
  countriesList: []
}
const mutations = {
  setCountries(state, value) {
    state.countriesList = value
  }
}
const actions = {
  setSelectItems({commit}) {
    //retrieve data
    let countries = Database.countries

    //set data
    commit('setCountries', countries)
  }
}
const getters = {
  getCountries: state => {
    return state.countriesList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
