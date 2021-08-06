<template>
  <div class="component-container">
    <md-list class="md-triple-line">
      <cart-item v-for="prod in getItems" :key="prod.id"
                 :product="prod"></cart-item>
    </md-list>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import CartItem from "./CartItem";

export default {
  name: "CartList",
  components: {CartItem},
  computed: {
    ...mapGetters({
        getItems: 'getItems'
      })
  }
}
</script>

<style scoped>

.md-list {
  height: 72%;
  width: 100%;
  overflow-y: auto;
  padding-right: 20px;
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

</style>
