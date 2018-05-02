<template>
  <div class="t-radio-group">
    <slot></slot>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 't-radio-group',

  mixins: [Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  props: {
    value: {}
  },

  mounted () {
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
    this.$on('input', this.inputHandler)
  },

  methods: {
    reset () {
      this.broadcast('t-radio', 'reset')
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
    },
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
    },

    inputHandler (val) {
      this.$emit('change', val)
    }
  },
  watch: {
    value (val) {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', val)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', val)
    }
  }
}
</script>
