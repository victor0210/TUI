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

  props: {
    value: {
      type: String
    }
  },

  mounted () {
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
  },

  methods: {
    reset () {
      this.broadcast('t-radio', 'reset')
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
    },
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
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
