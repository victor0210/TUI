<template>
  <span
    class='t-tabs__header-item'
    :class="[
      isActive ? 'is-active' : ''
    ]"
    @click="changeActive">
    <slot></slot>
    <i class="t-tabs__item-close fa fa-times" v-if="editable" @click="onTabRemove"></i>
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
    itemLength: Number,
    position: String,
    editable: Boolean
  },

  created () {
    this.$on('get-width', this.reportWidth)
    this.$on('get-idx-width', this.reportIdxWidth)
    this.$on('get-item-length', this.reportItemLength)
  },

  mounted () {
    this.isActive && this.changeActive()
  },

  methods: {
    reportItemLength () {
      this.dispatch('t-tabs', 'report-item')
    },
    changeActive () {
      this.dispatch('t-tabs', 'init-active-line', {
        idx: this.$idx,
        width: this.lineWidth,
        lineWidth: this.lineWidth,
        height: this.$el.offsetHeight,
        offsetX: this.lineOffsetX,
        offsetY: this.$el.offsetTop
      })
    },

    reportWidth () {
      this.dispatch('t-tabs', 'report-width', this.$el.offsetWidth)
    },

    reportIdxWidth (idx) {
      if (idx === this.$idx) {
        this.changeActive()
      }
    },

    onTabRemove (e) {
      e.preventDefault()
      e.cancelBubble = true
      this.$emit('tab-remove', this.$idx)
      this.dispatch('t-tabs', 'switch-active', {
        idx: this.$idx,
        isActive: this.isActive
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
