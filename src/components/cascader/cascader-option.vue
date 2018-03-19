<template>
  <li>
    <div class="t-cascader-option" @hover="handleHover" @click="handleClick" :class="{
      'is-selected': isSelect,
      'is-focus' : isFocus,
      'is-choosing': isChoosing,
      'is-disabled' : disabled
    }"><span v-html="label" class="t-cascader-option__keyword"></span><i class="t-cascader-option__check fa fa-chevron-right" v-if="!!children"></i>
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
    idx: String,
    search: Boolean
  },

  beforeMount () {
    this.getParent()
  },

  mounted () {
    this.dispatchRegister()
  },

  methods: {
    dispatchRegister () {
      this.search ? this.dispatch('t-cascader', 'search-option-register', this) : this.dispatch('t-cascader', 'option-register', this)
    },
    handleClick (e) {
      if (!this.disabled) {
        this.search ? this.dispatch('t-cascader', 'select-bak-search', {e, val: this.idx.split('-')}) : this.dispatch('t-cascader', 'select', {e, val: this.val, pos: this.pos, hasChildren: !!this.children})
      }
    },
    handleHover (e) {
      !this.disabled && this.dispatch('t-cascader', 'select', {e, val: this.val, pos: this.pos, hasChildren: !!this.children, hover: true})
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
      return this.parent.valueIndex.indexOf(this.idx) === 0 && !this.search
    },
    isChoosing () {
      return this.parent.selectIndex.indexOf(this.idx) === 0 && !this.search
    }
  },

  beforeDestroy () {
    this.search ? this.dispatch('t-cascader', 'search-option-bumper') : this.dispatch('t-cascader', 'option-bumper', this)
  }
}

</script>

<style scoped>

</style>
