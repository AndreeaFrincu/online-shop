<template>
  <div class="container-content">
    <md-card>
      <genres-filter></genres-filter>
      <prod-wrapper
      @sorting="onSortBySelected"
      @productsOnPage="onPageSelected"
      @totalPages="sendTotalPages"
      @pagesList="sendPagesList"
      @currentPageIndex="setCurrentPageIndex"
      @resetPageIndex="onResetPageIndex">
      </prod-wrapper>
    </md-card>
  </div>
</template>

<script>
import ProdWrapper from "./ProdWrapper";
import GenresFilter from "./GenreFilterList";
import _ from "lodash";
export default {
  name: "ProdFilterWrapper",
  components: {GenresFilter, ProdWrapper},
  methods: {
    onSortBySelected(sortBy) {
      this.$store.commit('setSortBy', sortBy)
    },
    onPageSelected(onPage) {
      this.$store.commit('setOnPage', onPage)
    },
    sendTotalPages(totalPages) {
      this.$store.commit('setTotalPages', totalPages)
    },
    sendPagesList(pagesList) {
      this.$store.commit('setPagesList', pagesList)
    },
    setCurrentPageIndex(pageIndex) {
      this.$store.commit('setCurrentPageIndex', pageIndex)
    },
    onResetPageIndex(defaultPageIndex) {
      this.$store.commit('setDefaultPageIndex', defaultPageIndex)
    }
  }
}
</script>


<style scoped>

.md-card {
  display: flex;
  flex-direction: row;
  margin: 30px 100px;
}

</style>
