<template>
  <div class="t-tree-item">
    <div
      @click="checkout"
      class="t-tree-item__label"
      :style="{paddingLeft: indent}">
      <i
        class="fa fa-caret-right t-tree-item__drop-icon"
        :style="{visibility: (hasChildren || (!hasChildren && lazy && !loaded)) ? 'visible' : 'hidden'}"
        :class="[expand ? 't-tree-item__drop-icon--open' : '']">
      </i>
      <t-checkbox :indeterminate="indeterminate" v-model="isChecked" v-if="showCheckbox" :disabled="checkDisabled" @change="checkChangeHandler"/>
      <i v-if="loading"
         class="fa fa-circle-notch fa-spin t-tree-item__loading-icon">
      </i>
      {{ label }}
    </div>
    <transition name="t-fly-in-center">
      <div
        class="t-tree-item__children"
        v-show="expand">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-tree-item',

  mixins: [Emitter],

  provide: {
    TTreeItem: this
  },

  inject: {
    TTreeItem: {
      default: ''
    }
  },

  data () {
    return {
      expand: false,
      currentIndex: '',
      isChecked: false,
      childrenCheckCount: 0,
      indeterminateChildren: 0,
      indeterminate: false,
      loaded: false,
      loading: false
    }
  },

  props: {
    label: String,
    indent: String,
    hasChildren: Boolean,
    showCheckbox: Boolean,
    lazy: Boolean,
    nodeIndex: String,
    initChecked: Boolean,
    initExpand: Boolean,
    checkDisabled: Boolean,
    checkMax: Number,
    checkMin: Number
  },

  created () {
    this.$on('check-change', this.checkChangeHandler)
    this.$on('node-item-echo', this.echoHandler)
    this.$on('node-item-reecho', this.reechoHandler)
  },

  mounted () {
    this.isChecked = this.initChecked
    this.initExpand && (this.expand = true)
  },

  methods: {
    echoHandler () {},
    reechoHandler () {},
    checkChangeHandler (val) {
      !this.checkDisabled && (this.isChecked = val)
      this.broadcast('t-tree-item', 'check-change', val)
    },
    checkout () {
      this.expand = !this.expand
    }
  },

  watch: {
    isChecked (val) {
      this.dispatch('t-tree', 'check-change', {
        label: this.label,
        checked: val,
        indeterminate: this.indeterminate
      })
    },
    expand (val) {
      this.dispatch('t-tree', 'node-click', {
        label: this.label
      })
      if (this.lazy && !this.loaded && !this.loading) {
        this.loading = true
        this.dispatch('t-tree', 'lazy-load', this)
      }
    }
  }
}
</script>

<style scoped>

</style>
