<template>
  <div class="t-collsape-item"  :style="{
    }" :class="[
      isExpand ? 'is-active' : ''
    ]">
    <div class="t-collsape-item__title" @click="checkout" ref="title">
      <slot/>
      <i class="t-collsape-item__drop-icon fa fa-chevron-right"></i>
    </div>
    <div class="t-collsape-item__panel" ref="panel">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 't-collsape-item',

  mixins: [Emitter],

  data () {
    return {
      isExpand: false
    }
  },

  props: {
    name: {
      required: true
    }
  },

  created () {
    this.$on('close-expand', this.closeExpand)
  },

  updated () {
    this.isExpand && setTimeout(() => {
      this.$el.style.height = 'auto'
    }, 300)
  },

  mounted () {
    if (this.$parent.accordion) {
      this.isExpand = this.$parent.value === this.name
    } else {
      if (Array.isArray(this.$parent.value)) this.isExpand = this.$parent.value.indexOf(this.name) !== -1
    }
  },

  methods: {
    checkout () {
      this.isExpand = !this.isExpand
      this.dispatch('t-collsape', 'item-change', {
        key: this.name,
        val: this.isExpand
      })
    },
    closeExpand (key) {
      if (this.name === key) this.isExpand = false
    },
    getPanelHeight () {
      return `${this.$refs.panel.offsetHeight + this.$refs.title.offsetHeight}px`
    }
  },

  watch: {
    isExpand (val) {
      if (!val) {
        this.$el.style.height = this.getPanelHeight()
      }
      setTimeout(() => {
        this.$el.style.height = val ? this.getPanelHeight() : '50px'
      })
    }
  }
}
</script>
