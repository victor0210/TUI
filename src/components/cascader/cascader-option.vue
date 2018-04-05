<template>
  <li>
    <div class="t-cascader-option" :class="{
      'is-selected': isSelect,
      'is-focus' : isFocus,
      // 'is-choosing': isChoosing,
      'is-disabled' : disabled
    }" @click="handleClick"><span v-html="label" class="t-cascader-option__keyword"></span><i class="t-cascader-option__check fa fa-chevron-right" v-if="!!children"></i>
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
    pIndex: String, //  position index
    vIndex: String, //  value index
    lIndex: String, //  label index
    search: Boolean
  },

  beforeMount () {
    this.getParent()
  },

  created () {
    this.$on('blur', this.blurSelect)
    this.$on('focus', this.focusSelect)
  },

  mounted () {
    this.dispatchRegister()
  },

  methods: {
    dispatchRegister () {
      this.search ? this.action(this.parent, 'search-option-register', this) : this.action(this.parent, 'option-register', this)
    },
    handleClick (e) {
      if (!this.disabled) {
        // this.search ? this.dispatch('t-cascader', 'select-bak-search', {e, val: this.idx.split('-')}) : this.dispatch('t-cascader', 'select', {e, val: this.val, pos: this.pos, hasChildren: !!this.children})
        this.action(this.parent, 'select', this)
      }
    },
    // handleHover (e) {
    //   !this.disabled && this.dispatch('t-cascader', 'select', {e, val: this.val, pos: this.pos, hasChildren: !!this.children, hover: true})
    // },
    focusSelect () {
      this.isFocus = true
    },
    blurSelect () {
      this.isFocus = false
    },
    getParent () {
      this.parent = this.$parent.parent
    }
  },

  computed: {
    isSelect () {
      return this.parent.selectIndex.indexOf(this.pIndex) === 0
    }
  },

  beforeDestroy () {
    this.search ? this.action(this.parent, 'search-option-bumper', this) : this.action(this.parent, 'option-bumper', this)
  }
}

</script>

<style scoped>

</style>
