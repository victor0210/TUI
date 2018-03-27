<template>
  <div class="t-tree-item">
    <div
      @click="checkout"
      class="t-tree-item__label"
      :style="{paddingLeft: indent}">
      <i
        class="fa fa-caret-right t-tree-item__drop-icon"
        :style="{visibility: hasChildren ? 'visible' : 'hidden'}"
        :class="[showChildren ? 't-tree-item__drop-icon--open' : '']">
      </i>
      <t-checkbox :indeterminate="indeterminate" v-model="isChecked" v-if="showCheckbox"/>
      {{ label }}
    </div>
    <transition name="t-fly-in-center">
      <div
        class="t-tree-item__children"
        v-show="showChildren">
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
      showChildren: false,
      currentIndex: '',
      isChecked: false,
      childrenCheckCount: 0,
      indeterminate: false
    }
  },

  props: {
    label: String,
    indent: String,
    hasChildren: Boolean,
    showCheckbox: Boolean
  },

  created () {
    this.$on('tree-item-unchecked', this.unChecked)
    this.$on('tree-item-checked', this.checked)
    this.$on('tree-item-add', this.addChild)
    this.$on('tree-item-remove', this.removeChild)
  },

  methods: {
    checkout () {
      this.showChildren = !this.showChildren
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
    showChildren () {
      this.dispatch('t-tree', 'node-click', {
        label: this.label
      })
    }
  }
}
</script>

<style scoped>

</style>
