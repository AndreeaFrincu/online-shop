<template>
  <md-toolbar class="prod-toolbar">
    <span class="md-subheading">Products</span>

    <div class="sorting-menus">
      <prod-sort-by @sorting="onSortBySelected"></prod-sort-by>
      <prod-per-page @productsOnPage="onPageSelected"></prod-per-page>
    </div>

  </md-toolbar>
</template>

<script>
import ProdSortBy from "./ProdSortBy";
import ProdPerPage from "./ProdPerPage";
export default {
  name: "ProdToolbar",
  components: {ProdPerPage, ProdSortBy},
  methods: {
    onSortBySelected(sortBy) {
      this.$store.commit('products/setSortBy', sortBy)
    },
    onPageSelected(perPage) {
      this.$store.commit('products/setPerPage', perPage)
    }
  }
}
</script>

<style scoped>

.prod-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

</style>
