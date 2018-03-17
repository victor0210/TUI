<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'
import ArrayHelper from '../../mixins/arrayHelper'

//  TODO  add indeterminate for checkout all
export default {
  name: 't-checkbox-group',

  mixins: [ArrayHelper, Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  data () {
    return {
      store: [],
      isSatisfied: false
    }
  },
  props: {
    max: Number,
    min: Number,
    value: Array
  },
  beforeMount () {
    this.$on('add', this.add)
    this.$on('remove', this.remove)
    this.$on('submit', this.submit)
  },
  mounted () {
    (!!this.value || !!this.min) && this.autoComplete()
  },
  methods: {
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.store)
    },
    autoComplete () {
      let children = this.$children
      let uncheckedArr = []
      let len = 0
      let _value = this.value
      let _min = this.min

      children.forEach(function (el) {
        if (!!_value && !el.checked && _value.indexOf(el.val) !== -1 && el._checkSize(true)) {
          len++
        } else if (!!_min && el.checked && el._checkSize(true)) {
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
    add (val) {
      this.store = ArrayHelper.addToStore(this.store, val)
      this.emitValidator()
    },
    remove (val) {
      this.store = ArrayHelper.removeFromStore(this.store, val)
      this.emitValidator()
    },
    emitValidator () {
      if (this.TFormItem) {
        this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.store)
        this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.store)
      }
    }
  },
  watch: {
    value (val) {
      this.broadcast('t-checkbox', 'group-change', val)
      this.store = val
      this.$emit('change', val)
    },
    store (val) {
      this.value !== undefined && this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>
