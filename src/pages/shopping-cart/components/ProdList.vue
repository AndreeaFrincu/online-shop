<template>
  <div class="component-container">
    <md-list class="md-triple-line">
      <prod-item v-for="(prod, index) in getItems" :key="prod.name"
                 :product="prod"></prod-item>
    </md-list>
  </div>
</template>

<script>
import ProdItem from "./ProdItem";
import {mapGetters} from "vuex";

export default {
  name: "ProdList",
  components: {ProdItem},
  computed: {
    ...mapGetters({
        getItems: 'getItems'
      })
  },
}
</script>

<style scoped>

</style>
