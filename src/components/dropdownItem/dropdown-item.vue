<template>
  <li
    class="t-dropdown-item"
    :class="[
      disabled ? 'is-disabled' : '',
      divided ? 't-dropdown-item--divided' : ''
    ]"
    @click="clickHandler"
  >
    <slot/>
  </li>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-dropdown-item',

  mixins: [Emitter],

  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean
  },

  methods: {
    clickHandler () {
      !this.disabled && this.dispatch('t-dropdown-menu', 'item-click', this.command)
    }
  }
}
</script>

<style scoped>

</style>
