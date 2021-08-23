<template>
  <div class="pagination-content">
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
      console.log('total pages')
      let pageSize = (this.perPage > 0) ? this.perPage : this.totalItems
      let result = Math.floor(this.totalItems / pageSize)
      return (this.totalItems % pageSize !== 0) ? result + 1 : result
    }
  },
  methods: {
    changePage(currentPage) {
      this.$emit('input', currentPage)
    }
  }
}
</script>

<style>
.pagination {

}
</style>
