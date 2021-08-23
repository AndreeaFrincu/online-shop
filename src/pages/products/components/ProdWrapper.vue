<template>
  <div class="prod-wrapper">
    <prod-toolbar></prod-toolbar>
    <prod-list></prod-list>
    <app-paginator
      v-model="currentPage"
      :per-page="perPage"
      :total-items="totalItems"
    ></app-paginator>
  </div>
</template>

<script>
import AppPaginator from "../../../components/AppPaginator";
import ProdToolbar from "./ProdToolbar";
import ProdList from "./ProdList";

export default {
  name: "ProdWrapper",
  components: {ProdToolbar, AppPaginator, ProdList},
  computed: {
    currentPage: {
      get() {
        console.log('currentPage')
        return this.$store.state.products.currentPage
      },
      set(value) {
        this.$store.commit('products/setCurrentPage', value)
      }
    } ,
    perPage: {
      get() {
        console.log('perPage')
        return this.$store.state.products.perPage
      },
      set(value) {
        this.$store.commit('products/setPerPage', value)
      }
    },
    totalItems() {
      return this.$store.getters['products/getProducts'].length
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
