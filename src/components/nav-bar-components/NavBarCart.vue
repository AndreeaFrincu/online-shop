<template>
  <div class="nav-bar-cart">
    <router-link id="link-cart" to="/cart">
      <md-list-item id="list">
        <md-button id="cart-btn" class="nav-bar-btn" @click="showSidepanel = true">
          <md-icon class="fa fa-shopping-cart"></md-icon>
        </md-button>
        <md-badge id="badge" v-if="changeBadge>0" :md-content="changeBadge"></md-badge>
      </md-list-item>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavBarCart",
  computed: {
    changeBadge: function() {
      return this.$store.state.cart.itemsList.length
    }
  },
  methods: {
  },
  data: () => ({
    badgeNumber: 0
  })
}
</script>

<style scoped>

#list {
  display: flex;
  flex-direction: column;
  padding: 0;
}

#cart-btn {
  margin-left: 0;
  padding: 0;
}

#badge {
  margin-left: -25px;
  margin-top: -20px;
}

.md-list-item {
  margin: 0;
}

</style>
