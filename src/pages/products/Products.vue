<template>
  <div class="container-content">
    <nav-bar></nav-bar>
    <prod-filter-wrapper></prod-filter-wrapper>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
import {mapGetters} from "vuex";
import GenresFilter from "./components/GenreFilterList";
import ProdFilterWrapper from "./components/ProdFilterWrapper";
export default {
  name: "Products",
  components: {ProdFilterWrapper, NavBar},
  mounted() {
    this.$store.dispatch('setProducts')
  },
  computed: {
    ...mapGetters({
    })
  }
}
</script>

<style scoped>

.container-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

</style>
