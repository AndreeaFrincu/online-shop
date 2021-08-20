<template>
  <div class="prod-wrapper">
    <md-toolbar class="prod-toolbar">
      <span class="md-subheading">Products</span>

      <div class="sorting-menus">
        <md-menu class="sort-prod" md-size="medium" md-align-trigger>
          <md-button class="sort-prod-btn" md-menu-trigger>
            Sort By
          </md-button>

          <md-menu-content>
            <md-menu-item @click="sortProduct(sortItem)"
                          v-for="sortItem in sortList">{{ sortItem.name }}</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu class="sort-prod" md-size="medium" md-align-trigger>
          <md-button class="sort-prod-btn" md-menu-trigger>
            On the page
          </md-button>

          <md-menu-content>
            <md-menu-item @click="pageProducts(pageNumber)"
                          v-for="pageNumber in onPageSortList">{{ pageNumber.name }}</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>

    </md-toolbar>
    <div class="prod-list">
      <product id="product" v-for="prod in getProducts" :key="prod.id"
               :product="prod"></product>
    </div>

    <div class="pagination-content">
      <paginate
        v-model="pagesList[0]"
        :initial-page="5"
        :pageCount="getTotalPages"
        :containerClass="'pagination'"
        :page-class="'page-item'"
        :clickHandler="changePage"
      ></paginate>
    </div>

  </div>
</template>

<script>
import Product from "./Product";
import Paginate from 'vuejs-paginate'
import {mapGetters} from "vuex";

export default {
  name: "ProdWrapper",
  components: {Product, Paginate},
  computed: {
    ...mapGetters({
      getProducts: 'getProducts',
      getTotalPages: 'getTotalPages',
      getTotalProducts: 'getTotalProducts'
    })
  },
  data: ()=> ({
    paginate: '',
    pageOfItems: [],
    sortList:[
      {
        id: 1,
        name:'Price (Ascending)',
        value: '+price'
      },
      {
        id: 2,
        name:'Price (Descending)',
        value: '-price'
      },
      {
        id: 3,
        name:'Alphabetic (Ascending)',
        value: '+alpha'
      },
      {
        id: 4,
        name:'Alphabetic (Descending)',
        value: '-alpha'
      }
    ],
    onPageSortList:[
      {
        id: 1,
        name:'1',
        value: 1
      },
      {
        id: 2,
        name:'2',
        value: 2
      },
      {
        id: 3,
        name:'3',
        value: 3
      }
    ],
    sortBy: '',
    onPage: 0,
    totalPages: 5,
    pagesList: [],
    currentPageIndex: 0,
    closeOnSelect: true
  }),
  methods: {
    sortProduct(sortItem) {
      this.sortBy = sortItem.value
      this.$emit("sorting", this.sortBy)
    },
    pageProducts(pageNumber) {
      this.onPage = pageNumber.value
      this.currentPageIndex = 0

      const productsPerPage = this.onPage
      const totalProducts = this.getTotalProducts
      let totalPages = this.totalPages

      if(totalProducts % productsPerPage !== 0) {
        totalPages = Math.floor(totalProducts / productsPerPage) + 1
        console.log('total pages', totalPages)
        console.log('number of products', totalProducts)
        console.log('number of products on page', productsPerPage)
      }
      else{
        totalPages = Math.floor(totalProducts / productsPerPage)
        console.log('total pages', totalPages)
        console.log('number of products', totalProducts)
        console.log('number of products on page', productsPerPage)
      }

      this.pagesList =  [...Array(totalPages).keys()]
      this.$emit('productsOnPage', this.onPage)
      this.$emit('totalPages', totalPages)
      this.$emit('pagesList', this.pagesList)
      this.$emit('resetPageIndex', this.currentPageIndex)
    },
    changePage(pageNum) {
      const pageIndex = pageNum - 1
      this.$emit('currentPageIndex', pageIndex)
      console.log(pageNum)
    }
  }
}


</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Material+Icons");

.prod-wrapper {
  padding: 20px;
  width: 80%;
}

.prod-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sort-prod-btn {
  text-transform: capitalize;
}

.prod-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: stretch;
}

#product {
  width: 200px;
  height: 200px;
  margin: 20px;
  align-items: center;
  display: flex;
}

.pagination-content {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.pagination > li:first-child > a {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination > li > a {
  position: relative;
  float: left;
  padding: 6px 12px;
  margin-left: -1px;
  line-height: 1.42857143;
  color: #337ab7;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid #ddd;
}

.pagination > .active > a {
  z-index: 2;
  color: #fff;
  cursor: default;
  background-color: #337ab7;
  border-color: #337ab7;
}

</style>
