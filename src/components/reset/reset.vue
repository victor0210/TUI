<template>
  <t-button :type="type" @click="resetForm" :outline="outline" :disabled="disabled">
    <slot></slot>
  </t-button>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-reset',

  mixins: [Emitter],

  props: {
    type: String,
    outline: Boolean,
    disabled: Boolean
  },

  methods: {
    resetForm () {
      this.dispatch('t-form', 'form-reset')
    }
  }
}
</script>

<style scoped>

</style>
