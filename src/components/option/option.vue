<template>
  <li class="t-option" @click="handleClick" :class="{
    'is-selected': isSelected,
    'is-focus' : isFocus || (isSelected && this.$parent.focusIndex === null),
    'is-disabled' : disabled
  }" v-if="isShow">{{ label }}<i class="t-option__check fa fa-check" v-if="isSelected && isMultiple"></i></li>
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
    val: String,
    editablePanel: Boolean
  },

  mounted () {
    this.isMultiple = this.$parent.multiple
    this.dispatch('t-select', 'init-focus-index', this.val)
    this.$on('blur', this.blurSelect)
    this.$on('register', this.dispatchRegister)
    this.dispatchRegister()
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
    },
    dispatchRegister () {
      if (this.$parent.editable) {
        if (!this.editablePanel) {
          if ((this.val.indexOf(this.$parent.editContent) !== -1) && (this.val !== this.$parent.editContent)) {
            this.dispatch('t-select', 'option-register', this)
          }
        } else {
          this.dispatch('t-select', 'option-register', this)
        }
      } else {
        this.dispatch('t-select', 'option-register', this)
      }
    },
    checkShow () {
      if (this.$parent.editable) {
        if (!this.editablePanel) {
          return ((this.val.indexOf(this.$parent.editContent) !== -1) && (this.val !== this.$parent.editContent))
        } else {
          return true
        }
      } else {
        return true
      }
    }
  },

  computed: {
    isSelected () {
      return this.isMultiple ? (this.$parent.value.indexOf(this.val) !== -1) : (this.val === this.$parent.value)
    },
    isShow () {
      return this.checkShow()
    }
  },

  beforeDestroy () {
    this.dispatch('t-select', 'option-bumper')
  }
}

</script>

<style scoped>

</style>
