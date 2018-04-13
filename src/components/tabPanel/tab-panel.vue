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
    $idx: 0
  },

  mounted () {
    console.log(this.$parent)
  },

  computed: {
    isActive () {
      return this.$parent.focusIndex === this.$idx
    }
  }
}
</script>
