<template>
  <div class="filter-content">
    <md-checkbox @change="filterProduct"
                 v-model="boolean" class="md-primary">
      {{ genre.genre }}
    </md-checkbox>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  name: "GenreFilter",
  props: {
    genre: {},
    checked: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    checked: {
      handler(newValue) {
        this.boolean = newValue
      }
    }
  },
  data: () => ({
    boolean: false
  }),
  methods: {
    filterProduct() {
      // console.log("clicked")
      this.$emit("input", {genre: this.genre, value: this.boolean})
    }
  }
}
</script>

<style scoped>

.filter-content  {
  padding: 0;
}

</style>
