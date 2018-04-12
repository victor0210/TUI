<template>
  <div
    class="t-tab-panel"
    v-show="isActive">
    <slot/>
  </div>
</template>
<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 't-tab-panel',

  mixins: [Emitter],

  props: {
    title: {
      type: [String, Number],
      default: 'title'
    },
    val: {
      type: [String, Number],
      default: () => {
        return ~~(Math.random() * 1000000000)
      }
    }
  },

  mounted () {
    this.dispatch('t-tabs', 'tab-panel-register', {
      title: this.title,
      val: this.val,
      el: this.$el
    })
  },

  computed: {
    isActive () {
      return this.$parent.val === this.val
    }
  }
}
</script>
