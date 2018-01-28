<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import arrayHelper from '../../mixins/arrayHelper'

export default {
  name: 't-checkbox-group',
  mixins: [arrayHelper],
  data () {
    return {
      store: [],
      isSatisfied: false
    }
  },
  props: {
    max: Number,
    min: Number,
    indeterminate: Boolean, // won't change child which disabled
    indeterminateForce: Boolean // will change child which disabled
  },
  mounted () {
    !!this.min && this.checkSize() //  limit children's if min or max is not null
  },
  methods: {
    checkSize () {
      let children = this.$children
      let checkedArr = []
      let uncheckedArr = []
      let childrenLen = children.length
      let len = 0

      children.forEach(function (el) {
        if (el.checked) {
          checkedArr.push(el)
          len++
        } else {
          uncheckedArr.push(el)
        }
      })

      for (let k = 0; k < childrenLen; k++) {
        for (let j = k + 1; j < childrenLen; j++) {
          if (children[k].val === children[j].val) {
            throw new Error("checkbox's val mustn't be same:[" + children[k].label + '] && [' + children[j].label + ']')
          }
        }
      }

      if (len < this.min) {
        for (let i = 0; i < this.min - len; i++) {
          uncheckedArr[i].doCheck(true)
        }
      }
    },
    addToStore (val) {
      if (this.store.length < this.max || !this.max) {
        arrayHelper.addToStore(this.store, val)
        return true
      } else {
        return false
      }
    },
    removeFromStore (val) {
      if (this.store.length > this.min || !this.min) {
        arrayHelper.removeFromStore(this.store, val)
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    store (val) {
      this.$emit('input', val)
    },
    indeterminate (val) {
      this.$children.forEach(function (el) {
        !el.disabled && el.doCheck(val)
      })
    },
    indeterminateForce (val) {
      this.$children.reverse().forEach(function (el) {
        el.doCheck(val)
      })
    }
  }
}
</script>

<style scoped>

</style>
