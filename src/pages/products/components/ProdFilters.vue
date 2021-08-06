<template>
  <div class="component-container">
    <md-button>
      <md-list-item class="subgenre-button">{{ product.name }}</md-list-item>
    </md-button>
  </div>
</template>

<script>
export default {
  name: "ProdFilters",
  props: {
    product: {}
  }
}
</script>

<style scoped>

.md-list-item {
  width: fit-content;
  margin: 0;
  justify-content: unset;
}

.md-button {
  width: 100%;
  margin: 0;
}

</style>
