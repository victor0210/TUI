<template>
  <t-button :type="type" @click="clickHandler" :outline="outline" :disabled="disabled">
    <slot></slot>
  </t-button>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-submit',

  mixins: [Emitter],

  inject: {
    TForm: {
      default: ''
    }
  },

  props: {
    type: String,
    outline: Boolean,
    disabled: Boolean
  },

  methods: {
    clickHandler (e) {
      this.$emit('click', this.validator(), e)
    },
    validator () {
      return this.getParent('t-form').validator()
    }
  }
}
</script>

<style scoped>

</style>
