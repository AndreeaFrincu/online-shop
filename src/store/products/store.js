import _ from "lodash";
import Database from "../../../database/Database";

const state = {
  productsList: [],
  genresList: [],
  selectedGenreList: [],
  sortBy: null,
  perPage: 0,
  currentPage: 1
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
  setPerPage(state, value) {
    state.perPage = value
  },
  setCurrentPage(state, value) {
    state.currentPage = value
  },
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
    let result = _.cloneDeep(state.productsList)

    // filters
    if (state.selectedGenreList.length > 0) {
      result = result.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      })
    }

    // sorting
    if(state.sortBy) {
      let sortDirection = state.sortBy[0] === '+' ? 1 : -1
      let sortKey = state.sortBy.slice(1)
      result = result.sort(function (a, b) {
        let valueA = _.get(a, sortKey)
        let valueB = _.get(b, sortKey)
        if (valueA > valueB) return 1 * sortDirection;
        if (valueA < valueB) return -1 * sortDirection;
        return 0;
      })
    }

    return result
  },
  getProductsPaginated: (state, getters) => {
    let result = getters['getProducts']
    // paginate
    if(state.perPage) {
      result = result.slice((state.currentPage - 1) * state.perPage,
        state.currentPage * state.perPage)
    }
    return result
  },
  getGenres: state => {
    return state.genresList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
