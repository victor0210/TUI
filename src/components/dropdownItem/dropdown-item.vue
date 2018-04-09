<template>
  <li class="t-dropdown-item" @click="clickHandler"><slot></slot></li>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-dropdown-item',

  mixins: [Emitter],

  props: {
    command: {}
  },

  methods: {
    clickHandler () {
      this.dispatch('t-dropdown-menu', 'item-click', this.command)
    }
  }
}
</script>

<style scoped>

</style>
