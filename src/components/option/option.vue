<template>
  <li class="t-option" @click="handleClick" :class="{
    'is-selected': isSelected,
    'is-focus' : isFocus || (isSelected && this.$parent.focusIndex === null),
    'is-disabled' : disabled
  }">{{ label }}</li>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-option',

  mixins: [Emitter],
  data () {
    return {
      isMultiple: false,
      isFocus: false
    }
  },
  props: {
    label: String,
    disabled: Boolean,
    val: String
  },

  mounted () {
    this.isMultiple = this.$parent.multiple
    this.dispatch('t-select', 'init-focus-index', this.val)
  },

  methods: {
    handleClick (e) {
      this.disabled ? e.preventDefault() : this.dispatch('t-select', 'select', {e: e, val: this.val})
    },
    focusSelect () {
      this.isFocus = true
    },
    blurSelect () {
      this.isFocus = false
    }
  },

  computed: {
    isSelected () {
      return this.isMultiple ? (this.$parent.value.indexOf(this.val) !== -1) : (this.val === this.$parent.value)
    }
  }
}

</script>

<style scoped>

</style>
