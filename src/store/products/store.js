import _ from "lodash";
import {stat} from "copy-webpack-plugin/dist/utils/promisify";
import Database from "../../../database/Database";

const state = {
  productsList: [],
  genresList: [],
  selectedGenreList: [],
  sortBy: '',
  onPage: 5
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
    commit('pagination', )
  }
}
const getters = {
  getProducts: state => {
    /** Case: Products not filtered and not sorted by anything */
    if(state.selectedGenreList.length === 0 && state.sortBy === '' && state.onPage === ''){
      return state.productsList
    }
    /** Case: Products filtered and not sorted by anything */
    else if(state.selectedGenreList.length !== 0 && state.sortBy === ''){
      let filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      })
      return filteredProductsList
    }
    /** Case: Products filtered and sorted by price (ascending) */
    else if(state.selectedGenreList.length !== 0 && state.sortBy === '+price'){
      let filteredProductsList
        filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      })
      return filteredProductsList.sort( function(a , b){
        if(a.price > b.price) return 1;
        if(a.price < b.price) return -1;
        return 0;
      })
    }
    /** Case: Products filtered and sorted by price (descending) */
    else if(state.selectedGenreList.length !== 0 && state.sortBy === '-price'){
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      });
      return filteredProductsList.sort( function(a , b){
        if(a.price < b.price) return 1;
        if(a.price > b.price) return -1;
        return 0;
      })
    }
    /** Case: Products filtered and sorted alphabetical (ascending) */
    else if(state.selectedGenreList.length !== 0 && state.sortBy === '+alpha'){
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      });
      return filteredProductsList.sort( function(a , b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
      })
    }
    /** Case: Products filtered and sorted alphabetical (descending) */
    else if(state.selectedGenreList.length !== 0 && state.sortBy === '-alpha'){
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      });
      return filteredProductsList.sort( function(a , b){
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted by price (ascending) */
    else if(state.selectedGenreList.length === 0 && state.sortBy === '+price'){
      return state.productsList.sort( function(a , b){
        if(a.price > b.price) return 1;
        if(a.price < b.price) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted by price (descending) */
    else if(state.selectedGenreList.length === 0 && state.sortBy === '-price'){
      return state.productsList.sort( function(a , b){
        if(a.price < b.price) return 1;
        if(a.price > b.price) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted alphabetical (ascending) */
    else if(state.selectedGenreList.length === 0 && state.sortBy === '+alpha'){
      return state.productsList.sort( function(a , b){
        if(a.title > b.title) return 1;
        if(a.title < b.title) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted alphabetical (descending) */
    else if(state.selectedGenreList.length === 0 && state.sortBy === '-alpha'){
      return state.productsList.sort( function(a , b){
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        return 0;
      })
    }

    // function paginate(array, page_size, page_number) {
    //   return array.slice((page_number - 1) * page_size, page_number * page_size);
    // }
    // console.log(paginate(products, 1, 1));

    /** Case: Products not filtered, not sorted, but on the page x products */
    else if(state.selectedGenreList.length === 0 && state.sortBy === '' && state.onPage !== 0){
      return state.productsList.slice((1 - 1) * state.onPage, 1 * state.onPage)
    }
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
