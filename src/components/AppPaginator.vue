<template>
  <div class="pagination-content">
    <div class="page-out-of">
      {{ firstItem }} - {{ lastItem }} out of {{ totalItems }}
    </div>
    <md-divider class="page-divider"></md-divider>
    <paginate
      v-model="value"
      :pageCount="totalPages"
      :containerClass="'pagination'"
      :page-class="'page-item'"
      :clickHandler="changePage"
    ></paginate>

  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
export default {
  name: "GenreFilter",
  components: {Paginate},
  props: {
    value: {},
    perPage: {},
    totalItems: {}
  },
  data: () => ({
  }),
  computed: {
    totalPages() {
      let pageSize = (this.perPage > 0) ? this.perPage : this.totalItems
      let result = Math.floor(this.totalItems / pageSize)
      return (this.totalItems % pageSize !== 0) ? result + 1 : result
    },
    firstItem() {
      return this.perPage * this.$store.state.products.currentPage - (this.perPage - 1)
    },
    lastItem() {
      return this.perPage * this.$store.state.products.currentPage
    }
  },
  methods: {
    changePage(currentPage) {
      this.$emit('input', currentPage)
    }
  },
  // watch: {
  //   perPage: {
  //     immediate: true,
  //     handler() {
  //       console.log("total items", this.$store.getters["products/getProducts"].length)
  //     }
  //   }
  // }
}
</script>

<style>

.pagination-content {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.page-out-of {
  display: flex;
  align-self: center;
  color: #0058e7;
  margin: 0;
  padding: 0;
}

.page-divider {
  flex-grow: 1;
  align-self: center;
  margin: 0 10px 0 10px;
  padding: 2px;
  border-radius: 2px;
}

.pagination {
}

.pagination > li:first-child > a {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.pagination > li > a {
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
