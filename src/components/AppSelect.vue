<template>
  <div class="app-select">

    <div class="above-select-text">
      <template v-if="isSlotSelectedUsed">
        <slot
          :name="slotSelected"
          :data="value">
        </slot>
      </template>
      <div v-else>
        {{ value }}
      </div>
    </div>

    <select class="select-box"
            type="text"
            :value="transformedValue"
            @input="selectedValue">
      <option class="select-option"
              v-for="(option, index) in options"
              :value="getOptionName(option)"
              :key="index">
        <template v-if="isSlotOptionUsed">
          <slot
            :name="slotOption"
            :data="option">
          </slot>
        </template>
        <div v-else>
          {{ option.name }}
        </div>
      </option>
    </select>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "AppSelect",
  props: {
    value: {},
    options: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    slotOption: 'option',
    slotSelected: 'selected'
  }),
  methods: {
    selectedValue(event) {
      const selectedOption = this.options[event.target.selectedIndex]
      console.log({selectedOption})
      this.$emit('input', selectedOption)
    },
    getOptionName(option) {
      return _.get(option, 'name')
    }
  },
  computed: {
    transformedValue() {
      return _.get(this.value, 'name')
    },
    isSlotOptionUsed() {
      return this.slotOption in this.$scopedSlots
    },
    isSlotSelectedUsed() {
      return this.slotSelected in this.$scopedSlots
    }
  }
}
</script>

<style scoped>

.select-box {
  width: 200px;
  border: none;
  outline: none;
  scroll-behavior: smooth;
}

</style>
