import _ from "lodash";
import {stat} from "copy-webpack-plugin/dist/utils/promisify";
import Database from "../../../database/Database";

const state = {
  productsList: [],
  genresList: [],
  selectedGenreList: [],
  sortBy: '',
  onPage: ''
}
const mutations = {
  setProducts(state, value) {
    state.productsList = value
  },
  setProductsByAscPrice(state, value) {
    state.productsList = value
  },
  setGenres(state, value) {
    state.genresList = value
  },
  setSelectedGenreList(state, value) {
    state.selectedGenreList = value
  },
  setSortBy(state, value) {
    state.sortBy = value
  },
  setOnPage(state, value) {
    state.onPage = value
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
    if(state.selectedGenreList.length === 0 && state.sortBy === '' && state.onPage === ''){
      return state.productsList
    }
    else if(state.sortBy === '+price'){
      return state.productsList.sort( function( a , b){
          if(a.price > b.price) return 1;
          if(a.price < b.price) return -1;
          return 0;
        })
    }
    else if(state.sortBy === '-price'){
      return state.productsList.sort( function( a , b){
        if(a.price < b.price) return 1;
        if(a.price > b.price) return -1;
        return 0;
      })
    }
    else if(state.sortBy === '+alpha'){
      return state.productsList.sort( function( a , b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
      })
    }
    else if(state.sortBy === '-alpha'){
      return state.productsList.sort( function( a , b){
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;
      })
    }
    // else if(state.selectedGenreList.length !== 0 && state.sortBy === '+price' || state.onPage === ''){
    //   return state.productsList.filter((product) => {
    //     return product.genres.some((genre) => {
    //       return state.selectedGenreList.some((currentSelectedGenre) => {
    //         return currentSelectedGenre.id === genre.id
    //       })
    //     })
    //   })
    //}
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
