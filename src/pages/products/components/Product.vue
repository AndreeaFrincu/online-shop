<template>
  <div class="prod">
    <md-content class="md-primary">{{ product.title }}</md-content>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: {}
  },
  methods: {

  }
}
</script>

<style scoped>

.prod {
  flex-grow: 4;
  justify-content: center;
}

.md-content {
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
}

</style>
