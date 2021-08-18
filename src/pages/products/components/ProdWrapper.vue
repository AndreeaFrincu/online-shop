<template>
  <div class="prod-wrapper">
    <md-toolbar class="prod-toolbar">
      <span class="md-subheading">Products</span>

      <div class="sorting-menus">
        <md-menu class="sort-prod" md-size="medium" md-align-trigger>
          <md-button class="sort-prod-btn" md-menu-trigger>
            Sort By
          </md-button>

          <md-menu-content>
            <md-menu-item @click="sortProduct(sortItem)"
                          v-for="sortItem in sortList">{{ sortItem.name }}</md-menu-item>
          </md-menu-content>
        </md-menu>

        <md-menu class="sort-prod" md-size="medium" md-align-trigger>
          <md-button class="sort-prod-btn" md-menu-trigger>
            On the page
          </md-button>

          <md-menu-content>
            <md-menu-item @click="pageProducts(pageNumber)"
                          v-for="pageNumber in pageList">{{ pageNumber.name }}</md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>

    </md-toolbar>
    <div class="prod-list">
      <product id="product" v-for="prod in getProducts" :key="prod.id"
               :product="prod"></product>
    </div>

  </div>
</template>

<script>
import Product from "./Product";
import {mapGetters} from "vuex";
export default {
  name: "ProdWrapper",
  components: {Product},
  computed: {
    ...mapGetters({
      getProducts: 'getProducts'
    })
  },
  data () {
    return {
      sortList:[
        {
          id: 1,
          name:'Price (Ascending)',
          value: '+price'
        },
        {
          id: 2,
          name:'Price (Descending)',
          value: '-price'
        },
        {
          id: 3,
          name:'Alphabetic (Ascending)',
          value: '+alpha'
        },
        {
          id: 4,
          name:'Alphabetic (Descending)',
          value: '-alpha'
        }
      ],
      pageList:[
        {
          id: 1,
          name:'30',
          value: 30
        },
        {
          id: 2,
          name:'60',
          value: 60
        },
        {
          id: 3,
          name:'90',
          value: 90
        }
      ],
      sortBy: '',
      onPage: '',
      closeOnSelect: true
    }
  },
  methods: {
    sortProduct(sortItem) {
      this.sortBy = sortItem.value
      this.$emit("sorting", this.sortBy)
    },
    pageProducts(pageNumber) {
      this.onPage = pageNumber.value
      this.$emit("paging", this.onPage)
    }
  }
}
</script>

<style scoped>

.prod-wrapper {
  padding: 20px;
  width: 80%;
}

.prod-toolbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.sort-prod-btn {
  text-transform: capitalize;
}

.prod-list {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: stretch;
}

#product {
  width: 200px;
  height: 200px;
  margin: 20px;
  align-items: center;
  display: flex;
}

.outer {
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.inner {
  width: 400px;
  display: flex;
}

</style>
