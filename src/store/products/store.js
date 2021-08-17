import _ from "lodash";
import {stat} from "copy-webpack-plugin/dist/utils/promisify";
import Database from "../../../database/Database";

const state = {
  productsList: [],
  genresList: [],
  selectedGenreList: []
}
const mutations = {
  setProducts(state, value) {
    state.productsList = value
  },
  setGenres(state, value) {
    state.genresList = value
  },
  setSelectedGenreList(state, value) {
    state.selectedGenreList = value
  }
}
const actions = {
  setProducts({commit}) {
    //retrieve data
    let products = Database.products
    let genres = Database.genres

    //set data
    commit('setProducts', products)
    commit('setGenres', genres)
  }
}
const getters = {
  getProducts: state => {
    if(state.selectedGenreList.length===0){
      return state.productsList
    }
    console.log("debug", state.productsList, state.selectedGenreList)
    return state.productsList.filter((product) => {
      return product.genres.some((genre) => {
        return state.selectedGenreList.some((currentSelectedGenre) => {
          return currentSelectedGenre.id === genre.id
        })
      })
    })
  },
  getGenres: state => {
    return state.genresList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
