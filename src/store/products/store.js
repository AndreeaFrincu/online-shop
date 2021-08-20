import _ from "lodash";
import {stat} from "copy-webpack-plugin/dist/utils/promisify";
import Database from "../../../database/Database";

const state = {
  productsList: [],
  genresList: [],
  selectedGenreList: [],
  sortBy: '',
  onPage: 0,
  totalPages: 0,
  pagesList: [],
  currentPageIndex: 0
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
  },
  setTotalPages(state, value) {
    state.totalPages = value
  },
  setPagesList(state, value) {
    state.pagesList = value
  },
  setCurrentPageIndex(state, value) {
    state.currentPageIndex = value
  },
  setDefaultPageIndex(state, value) {
    state.currentPageIndex = value
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
    /** Case: Products not filtered and not sorted by anything */
    if (state.selectedGenreList.length === 0 && state.sortBy === '' && state.onPage === 0) {
      console.log("i'm not here'")
      return state.productsList
    }
    /** Case: Products filtered and not sorted by anything */
    else if (state.selectedGenreList.length !== 0 && state.sortBy === '' && state.onPage === 0) {
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
    else if (state.selectedGenreList.length !== 0 && state.sortBy === '+price' && state.onPage === 0) {
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      })
      return filteredProductsList.sort(function (a, b) {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      })
    }
    /** Case: Products filtered and sorted by price (descending) */
    else if (state.selectedGenreList.length !== 0 && state.sortBy === '-price' && state.onPage === 0) {
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      });
      return filteredProductsList.sort(function (a, b) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      })
    }
    /** Case: Products filtered and sorted alphabetical (ascending) */
    else if (state.selectedGenreList.length !== 0 && state.sortBy === '+alpha' && state.onPage === 0) {
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      });
      return filteredProductsList.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      })
    }
    /** Case: Products filtered and sorted alphabetical (descending) */
    else if (state.selectedGenreList.length !== 0 && state.sortBy === '-alpha' && state.onPage === 0) {
      let filteredProductsList
      filteredProductsList = state.productsList.filter((product) => {
        return product.genres.some((genre) => {
          return state.selectedGenreList.some((currentSelectedGenre) => {
            return currentSelectedGenre.id === genre.id
          })
        })
      });
      return filteredProductsList.sort(function (a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted by price (ascending) */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '+price' && state.onPage === 0) {
      return state.productsList.sort(function (a, b) {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted by price (descending) */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '-price' && state.onPage === 0) {
      return state.productsList.sort(function (a, b) {
        if (a.price < b.price) return 1;
        if (a.price > b.price) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted alphabetical (ascending) */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '+alpha' && state.onPage === 0) {
      return state.productsList.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      })
    }
    /** Case: Products not filtered and sorted alphabetical (descending) */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '-alpha' && state.onPage === 0) {
      return state.productsList.sort(function (a, b) {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
      })
    }

    /** If the number of pages starts from 0 */
    // function paginate(array, page_size, page_number) {
    //   return array.slice((page_number - 1) * page_size, page_number * page_size);
    //}

    /** If the number of pages starts from 0 */
    //   return array.slice(page_number * page_size, (page_number + 1) * page_size);
    // }
    // console.log(paginate(products, 1, 1));

    /** Case: Products not filtered, not sorted, and view on each page x products */
    else if(state.selectedGenreList.length === 0 && state.sortBy === '' && state.onPage !== 0){
      return state.productsList.slice(state.currentPageIndex * state.onPage,
        (state.currentPageIndex + 1) * state.onPage)
    }
    /** Case: Products not filtered, sorted by price (ascending)
     * and view on each page x products */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '+price' && state.onPage !== 0) {
      return state.productsList.slice(state.currentPageIndex * state.onPage,
        (state.currentPageIndex + 1) * state.onPage)
    }
    /** Case: Products not filtered, sorted by price (descending)
     * and view on each page x products */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '-price' && state.onPage !== 0) {
      return state.productsList.slice(state.currentPageIndex * state.onPage,
        (state.currentPageIndex + 1) * state.onPage)
    }
    /** Case: Products not filtered, sorted alphabetically (ascending)
     * and view on each page x products */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '+alpha' && state.onPage !== 0) {
      return state.productsList.slice(state.currentPageIndex * state.onPage,
        (state.currentPageIndex + 1) * state.onPage)
    }
    /** Case: Products not filtered, sorted alphabetically (descending)
     * and view on each page x products */
    else if (state.selectedGenreList.length === 0 && state.sortBy === '-alpha' && state.onPage !== 0) {
      return state.productsList.slice(state.currentPageIndex * state.onPage,
        (state.currentPageIndex + 1) * state.onPage)
    }
  },
  getGenres: state => {
    return state.genresList
  },
  getTotalPages: state => {
    return state.totalPages
  },
  getTotalProducts: state => {
    return state.productsList.length
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
