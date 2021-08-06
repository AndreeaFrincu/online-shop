<template>
  <div>
    <md-toolbar :md-elevation="1">
      <span>genres</span>
    </md-toolbar>
    <md-list>
      <prod-filters v-for="prod in getProducts" :key="prod.id"
      :product="prod"></prod-filters>
    </md-list>
  </div>
</template>

<script>
import ProdFilters from "./ProdFilters";
import {mapGetters} from "vuex";
export default {
  name: "ProdPropertyList",
  components: {ProdFilters},
  computed: {
    ...mapGetters({
      getProducts: 'getProducts'
    })
  }
}
</script>

<style scoped>

.md-list {
  height: 100px;
  width: 100%;
  overflow-y: auto;
}

.md-list::-webkit-scrollbar {
  width: 1em;
}

.md-list::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

.md-list::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.prod-filters {
  width: fit-content;
}

</style>
