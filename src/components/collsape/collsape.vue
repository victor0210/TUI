<template>
  <div class="t-collsape">
    <slot></slot>
  </div>
</template>
<script>
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'
export default {
  name: 't-collsape',

  mixins: [Emitter],

  props: {
    accordion: Boolean,
    value: {}
  },

  created () {
    this.validateType()
    this.$on('item-change', this.changeHandler)
  },

  methods: {
    validateType () {
      if (this.accordion && Array.isArray(this.value)) {
        throw new Error('collsape value must be type [String] when accordion! But got [Array]')
      } else if (!this.accordion && !Array.isArray(this.value)) {
        throw new Error('collsape value must be type [Array] when not accordion! But got [String]')
      }
    },
    changeHandler ({key, val}) {
      if (this.accordion) {
        this.broadcast('t-collsape-item', 'close-expand', this.value)
        if (val) {
          if (key === this.value) {
            this.$emit('input', '')
          } else {
            this.$emit('input', key)
          }
        } else {
          this.$emit('input', '')
        }
      } else {
        let arr = val ? ArrayHelper.addToStore(this.value, key) : ArrayHelper.removeFromStore(this.value, key)
        this.$emit('input', arr)
        this.broadcast('t-collsape-item', 'check-expand')
      }
    }
  }
}
</script>
