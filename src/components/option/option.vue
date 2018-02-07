<template>
  <li class="t-option" @click="handleClick" :class="{
    'is-selected': isSelected,
    'is-focus' : isFocus || (isSelected && focusIndex === null),
    'is-disabled' : disabled
  }" v-if="isShow">{{ label }}<i class="t-option__check fa fa-check" v-if="isSelected"></i></li>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-option',

  mixins: [Emitter],
  data () {
    return {
      isMultiple: false,
      isFocus: false,
      optionGroupIndex: null
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
    this.dispatchRegister()
    this.dispatch('t-select', 'init-focus-index', this.val)
    this.$on('blur', this.blurSelect)
    this.$on('register', this.dispatchRegister)
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
      if (this.selectParent().editable) {
        if (!this.editablePanel) {
          if ((this.val.indexOf(this.selectParent().editContent) !== -1) && (this.val !== this.selectParent().editContent)) {
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
      if (this.selectParent().editable) {
        if (!this.editablePanel) {
          return ((this.val.indexOf(this.$parent.editContent) !== -1) && (this.val !== this.selectParent().editContent))
        } else {
          return true
        }
      } else {
        return true
      }
    },
    selectParent () {
      return (this.$parent.$options.name === 't-option-group') ? this.$parent.$parent : this.$parent
    }
  },

  computed: {
    isSelected () {
      return this.isMultiple ? (this.selectParent().value.indexOf(this.val) !== -1) : (this.val === this.selectParent().value)
    },
    isShow () {
      return this.checkShow()
    },
    focusIndex () {
      return this.selectParent().focusIndex
    }
  },

  beforeDestroy () {
    this.dispatch('t-select', 'option-bumper')
  }
}

</script>

<style scoped>

</style>
