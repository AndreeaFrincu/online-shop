<template>
  <div class="select-item-content">
    <span class="select-item">
      <slot></slot>
      <slot name="romania" :countryRegions="romaniaRegions"></slot>
      <slot name="italy" :countryRegions="italyRegions"></slot>
      <slot name="germany" :countryRegions="germanyRegions"></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "RegionItem",
  props: {
    category: {}
  },
  methods: {

  },
  data: () => ({
    romaniaRegions: ['Bucuresti', 'Prahova', 'Brasov', 'Arges', 'Buzau', 'Vrancea', 'Cluj', 'Calarasi'],
    italyRegions: ['Roma', 'Vatican City', 'Genoa', 'Verona', 'Pisa', 'Napoli', 'Siracusa'],
    germanyRegions: ['Bavaria', 'Berlin', 'Brandenburg', 'Bremen', 'Hamburg', 'Hessen', 'Sachsen'],
  })
}
</script>

<style scoped>

.select-item-content {
  width: 100%;
  display: flex;
}

.select-item {
  width: 100%;
  display: flex;
}

</style>
