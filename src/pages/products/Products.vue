<template>
  <div class="products">
    <nav-bar></nav-bar>
    <md-card>
      <md-card-content id="products-filters">
        <md-toolbar :md-elevation="1">
          <span>Genres</span>
        </md-toolbar>
        <div class="genres-filter">
        </div>

      </md-card-content>
      <md-card-content id="products-items">products</md-card-content>
    </md-card>
  </div>
</template>

<script>
import NavBar from "../../components/NavBar";
import {mapGetters} from "vuex";
import CheckboxList from "./components/CheckboxList";
export default {
  name: "Products",
  components: {CheckboxList, NavBar},
  mounted() {
  },
  computed: {
    ...mapGetters({
    })
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#products-items {
  width: 80%;
}

.genres-filter {
  padding-left: 15px;
  height: 100px;
  width: 100%;
  overflow-y: auto;
}

.genres-filter::-webkit-scrollbar {
  width: 1em;
}

.genres-filter::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

.genres-filter::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

</style>
