<template>
  <md-toolbar class="prod-toolbar">
    <div class="toolbar-menu">
      <span class="md-subheading">Products</span>

      <div class="sorting-menus">
        <prod-sort-by @sorting="onSortBySelected"></prod-sort-by>
        <prod-per-page @productsOnPage="onPageSelected"></prod-per-page>
      </div>
    </div>

    <div class="filtered-by">
      <div class="genre-chip-menu">
        <p v-if="getSelectedGenres.length>0">Filtered by</p>
        <div class="genre-chip-wrapper">
          <md-chip class="md-primary genre-chip" md-deletable
                   v-for="genre in getSelectedGenres"
                   :key="genre.id"
                   @md-delete="onFilterDelete">{{ genre }}</md-chip>
        </div>
      </div>
      <div class="sort-by-chips">

      </div>
    </div>
  </md-toolbar>
</template>

<script>
import {mapGetters} from "vuex";
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
    },
    onFilterDelete() {
      console.log("deleted: ", this.$store.state.products.selectedGenreList)
    }
  },
  computed: {
    ...mapGetters({
      getSelectedGenres: 'products/getSelectedGenreList'
    })
  },
  data: () => ({

  })
}
</script>

<style scoped>

.prod-toolbar {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.toolbar-menu {
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.filtered-by {
  padding-bottom: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
}

.genre-chip-menu {
  display: flex;
  flex-direction: column;
}

.genre-chip-wrapper {
  display: flex;
  flex-direction: row;
}

p {
  color: gray;
}

.genre-chip {
  margin: 3px;
}

</style>
