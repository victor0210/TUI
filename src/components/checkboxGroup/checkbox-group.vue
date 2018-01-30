<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'

//  TODO  add indeterminate for checkout all
export default {
  name: 't-checkbox-group',
  mixins: [ArrayHelper, Emitter],
  data () {
    return {
      store: [],
      isSatisfied: false
    }
  },
  props: {
    max: Number,
    min: Number,
    // indeterminate: Boolean, // won't change child which disabled
    value: {}
  },
  beforeMount () {
    this.$on('add', this.addToStore)
    this.$on('remove', this.removeFromStore)
  },
  mounted () {
    (!!this.value || !!this.min) && this.autoComplete()
  },
  methods: {
    autoComplete () {
      let children = this.$children
      let uncheckedArr = []
      let len = 0
      let _value = this.value
      let _min = this.min
      children.forEach(function (el) {
        if (!!_value && !el.checked && _value.indexOf(el.val) !== -1) {
          el._checkSize(true)
          len++
        } else if (!!_min && el.checked) {
          len++
        } else {
          uncheckedArr.push(el)
        }
      })

      if (!!_min && len < _min) {
        for (let i = 0; i < _min - len; i++) {
          uncheckedArr[i]._checkSize(true)
        }
      }
    },
    addToStore (val) {
      this.$emit('input', ArrayHelper.addToStore(this.store, val))
    },
    removeFromStore (val) {
      this.$emit('input', ArrayHelper.removeFromStore(this.store, val))
    }
  }
  // watch: {
  // indeterminate (val) {
  //   this.broadcast('t-checkbox', 'indeterminate', val)
  // }
  // }
}
</script>

<style scoped>

</style>
