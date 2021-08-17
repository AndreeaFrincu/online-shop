<template>
  <div class="filter-content">
    <md-checkbox @change="filterProduct" v-model="boolean" class="md-primary">
      {{ genres.genre }}
    </md-checkbox>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "GenresFilterList",
  props: {
    genres: {}
  },
  data: () => ({
    boolean: false
  }),
  methods: {
    filterProduct() {
      console.log("clicked")
      this.$emit("input", {genre: this.genres, value: this.boolean})
    }
  }
}
</script>

<style scoped>

.filter-content  {
  padding: 0;
}

</style>
