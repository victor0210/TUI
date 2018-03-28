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
      <t-checkbox :indeterminate="indeterminate" v-model="isChecked" v-if="showCheckbox"/>
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
    initChecked: Boolean
  },

  created () {
    this.$on('tree-item-unchecked', this.unChecked)
    this.$on('tree-item-checked', this.checked)
    this.$on('tree-item-add', this.addChild)
    this.$on('tree-item-remove', this.removeChild)
  },

  mounted () {
    this.isChecked = this.initChecked
  },

  methods: {
    checkout () {
      this.expand = !this.expand
    },
    unChecked () {
      this.isChecked = false
      this.broadcast('t-tree-item', 'tree-item-unchecked')
    },
    checked () {
      this.isChecked = true
      this.broadcast('t-tree-item', 'tree-item-checked')
    },
    addChild () {
      this.childrenCheckCount++
    },
    removeChild () {
      this.childrenCheckCount--
    }
  },

  watch: {
    childrenCheckCount (count) {
      //  length - 1 because item component has an another checkbox component , so ignore 1 length
      if (this.childrenCheckCount < this.$children.length - 1 && this.childrenCheckCount > 0) {
        this.indeterminate = true
        this.isChecked = false
      } else {
        this.indeterminate = false
        this.isChecked = this.childrenCheckCount === this.$children.length - 1
      }
    },
    isChecked (val) {
      if (val) {
        this.TTreeItem && this.dispatch('t-tree-item', 'tree-item-add')
        this.broadcast('t-tree-item', 'tree-item-checked')
      } else {
        this.TTreeItem && this.dispatch('t-tree-item', 'tree-item-remove')
        !this.indeterminate && this.broadcast('t-tree-item', 'tree-item-unchecked')
      }
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
