<template>
  <span class='t-tabs__header-item' :class="[
    isActive ? 'is-active' : ''
  ]" @click="changeActive">
    <slot></slot>
  </span>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-tab-header-item',

  mixins: [Emitter],

  props: {
    $idx: Number,
    isActive: Boolean,
    itemLength: Number
  },

  mounted () {
    this.isActive && this.changeActive()
  },

  methods: {
    changeActive () {
      this.dispatch('t-tabs', 'init-active-line', {
        idx: this.$idx,
        width: this.lineWidth,
        offsetX: this.lineOffsetX
      })
    }
  },

  computed: {
    lineWidth () {
      let widthPatch = 40
      if (this.$idx === 0 || this.$idx === this.itemLength - 1) widthPatch = 20
      return this.$el.offsetWidth - widthPatch
    },

    lineOffsetX () {
      let offsetPatch = 0
      if (this.$idx !== 0) offsetPatch = 20
      return this.$el.offsetLeft + offsetPatch
    }
  }
}
</script>

<style scoped>

</style>
