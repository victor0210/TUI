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
      <t-checkbox :indeterminate="indeterminate || indeterminateChildren > 0" v-model="isChecked" v-if="showCheckbox" :disabled="checkDisabled" @change="checkChangeHandler"/>
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
    this.$on('tree-item-add', this.addChild)
    this.$on('tree-item-remove', this.removeChild)
    this.$on('tree-item-add-indeterminate', this.addIndeterminate)
    this.$on('tree-item-remove-indeterminate', this.removeIndeterminate)
  },

  mounted () {
    this.isChecked = this.initChecked
    this.initExpand && (this.expand = true)
  },

  methods: {
    checkChangeHandler (val) {
      !this.checkDisabled && (this.isChecked = val)
      this.broadcast('t-tree-item', 'check-change', val)
    },
    checkout () {
      this.expand = !this.expand
    },
    addChild () {
      this.childrenCheckCount++
    },
    removeChild () {
      this.childrenCheckCount--
    },
    addIndeterminate () {
      this.indeterminateChildren++
    },
    removeIndeterminate () {
      this.indeterminateChildren--
    }
  },

  watch: {
    childrenCheckCount (count) {
      //  length - 1 because item component has an another checkbox component , so ignore 1 length
      if (this.childrenCheckCount < this.checkMax && this.childrenCheckCount > 0) {
        this.indeterminate = true
        this.isChecked = false
      } else {
        this.isChecked = this.childrenCheckCount === this.checkMax
        this.indeterminate = false
      }
    },
    indeterminate (val) {
      if (val) {
        this.TTreeItem && this.dispatch('t-tree-item', 'tree-item-add-indeterminate')
      } else {
        this.TTreeItem && this.dispatch('t-tree-item', 'tree-item-remove-indeterminate')
      }
    },
    isChecked (val) {
      if (val) {
        this.TTreeItem && this.dispatch('t-tree-item', 'tree-item-add')
      } else {
        this.TTreeItem && this.dispatch('t-tree-item', 'tree-item-remove')
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
    // getChildrenLength (parent) {
    //   let len = 0
    //   const _this = this
    //   const children = parent ? parent.$children : this.$children
    //   children.forEach(function (el, idx) {
    //     if (el.$children && idx > 0) {
    //       len += _this.getChildrenLength(el)
    //     } else {
    //       len += 1
    //     }
    //   })
    //   return len
    // }
  }
}
</script>

<style scoped>

</style>
