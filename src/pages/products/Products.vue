<template>
  <div class="products">
    <nav-bar></nav-bar>
    <md-card>
      <md-card-content id="products-filters">
        <prod-property-list></prod-property-list>
      </md-card-content>
      <md-card-content id="products-items">products</md-card-content>
    </md-card>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
import ProdPropertyList from "./components/ProdPropertyList";
export default {
  name: "Products",
  components: {ProdPropertyList, NavBar},
  mounted() {
    this.$store.dispatch('setProducts')
  }
}
</script>

<style scoped>

.products {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.md-card {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin: 30px 100px;
}

#products-filters {
  width: 20%;
}

#products-items {
  width: 80%;
}


</style>
