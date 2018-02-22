<template>
  <li>
    <div class="t-cascader-option" @hover="handleHover" @click="handleClick" :class="{
      'is-selected': isSelect,
      'is-focus' : isFocus,
      'is-disabled' : disabled
    }">{{ label }}<i class="t-cascader-option__check fa fa-chevron-right" v-if="!!children"></i>
    </div>
  </li>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-cascader-option',

  mixins: [Emitter],
  data () {
    return {
      isFocus: false,
      parent: null
    }
  },
  props: {
    label: {},
    disabled: Boolean,
    val: {},
    children: {},
    pos: Number,
    pidx: {
      type: String,
      default: ''
    },
    idx: String
  },

  beforeMount () {
    this.getParent()
  },

  mounted () {
    this.dispatchRegister()
  },

  methods: {
    dispatchRegister () {
      if (this.parent.editable || this.parent.searchable) {
        if (!this.editablePanel) {
          if (this.parent.searchable) {
            if (this.val.indexOf(this.parent.editContent) !== -1) {
              this.dispatch('t-cascader', 'option-register', this)
            }
          } else {
            if ((this.val.indexOf(this.parent.editContent) !== -1) && (this.val !== this.parent.editContent)) {
              this.dispatch('t-cascader', 'option-register', this)
            }
          }
        } else {
          this.dispatch('t-cascader', 'option-register', this)
        }
      } else {
        this.dispatch('t-cascader', 'option-register', this)
      }
    },
    handleClick (e) {
      !this.disabled && this.dispatch('t-cascader', 'select', {val: this.val, pos: this.pos, hasChildren: !!this.children})
    },
    handleHover (e) {
      !this.disabled && this.dispatch('t-cascader', 'select', {val: this.val, pos: this.pos, hasChildren: !!this.children, hover: true})
    },
    focusSelect () {
      this.isFocus = true
    },
    blurSelect () {
      this.isFocus = false
    },
    getParent (c = this) {
      c.$parent.$options.name === 't-cascader' ? (this.parent = c.$parent) : this.getParent(c.$parent)
    }
  },

  computed: {
    isSelect () {
      return this.parent.selectIndex.indexOf(this.idx) === 0
    }
  },

  beforeDestroy () {
    this.dispatch('t-cascader', 'option-bumper', this)
  }
}

</script>

<style scoped>

</style>
