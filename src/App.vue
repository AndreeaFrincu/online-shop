<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vue from "vue";

Vue.use(VueMaterial)

export default {
  name: 'app'
}
</script>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
