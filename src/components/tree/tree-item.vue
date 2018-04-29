<template>
  <div class="t-tree-item" v-show="isMatchKey">
    <div
      class="t-tree-item__label"
      :style="{paddingLeft: indent}">
      <div class="t-tree-item__main">
        <i
          class="fa fa-caret-right t-tree-item__drop-icon"
          :style="{visibility: (hasChildren || (!hasChildren && lazy && !loaded)) ? 'visible' : 'hidden'}"
          :class="[expand ? 't-tree-item__drop-icon--open' : '']"
          @click="checkout"
        >
        </i>
        <t-checkbox :indeterminate="indeterminate" v-model="isChecked" v-if="showCheckbox" :disabled="checkDisabled" @change="checkChangeHandler"/>
        <i v-if="loading"
           class="fa fa-circle-notch fa-spin t-tree-item__loading-icon">
        </i>
        {{ label }}
      </div>
      <slot name="user"></slot>
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
      reechoCount: 0,
      indeterminate: false,
      loaded: false,
      loading: false,
      //  for filter
      isMatchKey: true,
      childrenNode: []
    }
  },

  props: {
    label: String,
    indent: String,
    showCheckbox: Boolean,
    lazy: Boolean,
    nodeIndex: String,
    initChecked: Boolean,
    initExpand: Boolean,
    checkDisabled: Boolean,
    nodeKeyValue: {}
  },

  created () {
    this.$on('check-change', this.checkChangeHandler)
    this.$on('node-item-echo', this.echoHandler)
    this.$on('node-item-reecho', this.reechoHandler)
    this.$on('get-checked-item', this.sendCheckedItem)
    this.$on('set-checked-nodes', this.setChecked)
    this.$on('reset-checked-nodes', this.resetCheck)
    this.$on('filter-node', this.filterHandler)
    this.$on('child-match-node', this.childMatchHandler)
    this.$on('child-node-register', this.registerHandler)
    this.$on('child-node-bumper', this.bumperHandler)
    this.$on('find-node-by-index', this.findHandler)
  },

  mounted () {
    this.TTreeItem && this.dispatch('t-tree-item', 'child-node-register', this)
    this.initChecked && this.checkChangeHandler(this.initChecked, true)
    this.initExpand && (this.expand = true)
  },

  methods: {
    registerHandler (node) {
      this.childrenNode.push(node)
    },
    bumperHandler () {
      this.childrenNode.pop()
    },
    echoHandler (val) {
      if (this.hasChildren) {
        this.broadcast('t-tree-item', 'node-item-echo', val)
      } else {
        !this.checkDisabled && (this.isChecked = val)
        this.TTreeItem && this.dispatch('t-tree-item', 'node-item-reecho', val)
      }
    },
    reechoHandler () {
      this.isChecked = this.childCheckAll()[0]
      this.indeterminate = this.childCheckAll()[1]
      this.TTreeItem && this.dispatch('t-tree-item', 'node-item-reecho', this.isChecked)
    },
    checkChangeHandler (val, init = false) {
      if (!init && this.checkDisabled) return

      console.log(this.label, 'change', val)
      if (this.hasChildren) {
        this.broadcast('t-tree-item', 'node-item-echo', !this.childCheckableCheckAll())
      } else {
        this.isChecked = val
        this.TTreeItem && this.dispatch('t-tree-item', 'node-item-reecho', val)
      }

      this.dispatch('t-tree', 'check-change', {
        label: this.label,
        checked: val,
        indeterminate: this.indeterminate
      })
    },
    checkout () {
      this.expand = !this.expand
    },
    childCheckAll () {
      let checkCount = 0
      let checkableUnCheckCount = 0
      let hasIndeterminate = false
      this.childrenNode.forEach(function (el) {
        el.indeterminate && (hasIndeterminate = true)
        el.isChecked && checkCount++
        !el.checkDisabled && !el.isChecked && checkableUnCheckCount++
      })

      if (checkCount === this.childLen) {
        return [true, hasIndeterminate]
      } else if (checkCount > 0 && checkCount < this.childLen) {
        if (checkableUnCheckCount > 0) {
          return [false, true]
        } else {
          return [true, true]
        }
      } else {
        return [false, false]
      }
    },
    childCheckableCheckAll (parent) {
      let checked = true

      const _this = this
      const arr = parent ? parent.childrenNode : this.childrenNode
      arr.some(function (el) {
        if (el.hasChildren) {
          checked = _this.childCheckableCheckAll(el)
        } else {
          if (!el.checkDisabled && !el.isChecked) {
            checked = false
          }
        }

        if (checked === false) return true
      })

      return checked
    },

    sendCheckedItem () {
      this.broadcast('t-tree-item', 'get-checked-item')
      this.isChecked && this.dispatch('t-tree', 'catch-checked-node', this)
    },

    setChecked (keys) {
      if (keys.indexOf(this.nodeKeyValue) !== -1 && !this.isChecked) {
        this.$emit('check-change')
      } else {
        this.broadcast('t-tree-item', 'set-checked-nodes', keys)
      }
    },

    resetCheck () {
      if (this.isChecked) {
        this.$emit('check-change')
      } else {
        this.broadcast('t-tree-item', 'reset-checked-nodes')
      }
    },
    filterHandler (key) {
      if (key === '') {
        this.isMatchKey = true
      } else {
        this.isMatchKey = this.label.indexOf(key) !== -1
        this.isMatchKey && this.TTreeItem && this.dispatch('t-tree-item', 'child-match-node')
      }
      this.broadcast('t-tree-item', 'filter-node', key)
    },

    childMatchHandler () {
      this.isMatchKey = true
      this.expand = true
      this.TTreeItem && this.dispatch('t-tree-item', 'child-match-node')
    },

    findHandler (nodeIndex) {
      if (this.nodeIndex === nodeIndex) {
        this.dispatch('t-tree', 'catch-node-by-index', this)
      } else {
        this.hasChildren && this.broadcast('t-tree-item', 'find-node-by-index', nodeIndex)
      }
    }
  },

  watch: {
    expand (val) {
      this.dispatch('t-tree', 'node-click', {
        label: this.label
      })
      if (this.lazy && !this.loaded && !this.loading) {
        this.loading = true
        this.dispatch('t-tree', 'lazy-load', this)
      }
    }
  },
  computed: {
    childLen () {
      return this.childrenNode.length
    },
    hasChildren () {
      return this.childrenNode.length > 0
    }
  },

  beforeDestroy () {
    this.TTreeItem && this.dispatch('t-tree-item', 'child-node-bumper')
  }
}
</script>

<style scoped>

</style>
