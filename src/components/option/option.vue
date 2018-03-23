<template>
  <li class="t-option" @click="handleClick" :class="{
    'is-selected': isSelected,
    'is-focus' : isFocus,
    'is-disabled' : disabled
  }" ref="option">{{ label }}
    <i class="t-option__check fa fa-check" v-if="isSelected"></i>
    <!--<i class="t-option__check fa fa-circle-notch fa-spin"></i>-->
  </li>
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
      optionGroupIndex: null,
      parent: null
    }
  },
  props: {
    label: {},
    disabled: Boolean,
    val: {},
    editablePanel: Boolean,
    loading: Boolean,
    search: Boolean
  },

  beforeMount () {
    this.getParent()
  },

  mounted () {
    this.isMultiple = this.parent.multiple
    this.dispatchRegister()
    // this.dispatch('t-select-bak', 'init-focus-index', this.val)
    // this.action(this.parent, 'init-focus-index', this.val)
    this.$on('blur', this.blurSelect)
    this.$on('focus', this.focusSelect)
    // this.$on('register', this.dispatchRegister)
  },

  methods: {
    handleClick (e) {
      this.disabled ? e.preventDefault() : this.action(this.parent, 'select', {val: this.val, label: this.label})
    },
    focusSelect () {
      this.isFocus = true
    },
    blurSelect () {
      this.isFocus = false
    },
    dispatchRegister () {
      if (this.search) {
        this.action(this.parent, 'search-option-register', this)
      } else {
        this.action(this.parent, 'option-register', this)
      }
    },
    // checkShow () {
    //   const p = this.parent
    //   if (p.editable || p.searchable) {
    //     if (!this.editablePanel) {
    //       if (p.searchable) {
    //         return (this.label.indexOf(p.editContent) !== -1)
    //       } else {
    //         return ((this.label.indexOf(p.editContent) !== -1) && (this.label !== p.editContent))
    //       }
    //     } else {
    //       return true
    //     }
    //   } else {
    //     return true
    //   }
    // },
    getParent () {
      this.$parent.$options.name === 't-option-group' ? (this.parent = this.$parent.$parent.parent) : (this.parent = this.$parent.parent)
    }
  },

  computed: {
    isSelected () {
      return this.isMultiple ? (this.parent.value.indexOf(this.val) !== -1) : (this.val === this.parent.value)
    }
    // isShow () {
    //   return this.checkShow()
    // },
    // focusIndex () {
    //   return this.parent.focusIndex
    // }
  },

  beforeDestroy () {
    if (this.search) {
      this.action(this.parent, 'search-option-bumper', this)
    } else {
      this.action(this.parent, 'option-bumper', this)
    }
  }
}

</script>

<style scoped>

</style>
