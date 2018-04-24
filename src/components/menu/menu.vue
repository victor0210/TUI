<template>
  <ul
    class="t-menu"
    :class="[
      type ? `t-menu--${type}` : '',
      vertical ? 'is-vertical' : '',
      isCollsape ? 'is-collsape' : ''
  ]">
    <!--drop down menu item-->
    <t-menu-item-drop
      v-if="isCollsape || !vertical"
      v-for="(i, idx) in data"
      :key="idx"
      :data="i"
      :$idx="idx"
      :is-collsape="isCollsape"
      :vertical="vertical"
      :active-index="activeIndex"/>

    <!--vertical collsape menu item-->
    <t-menu-item
      v-if="!collsape && vertical"
      v-for="(i, idx) in data"
      :key="idx"
      :data="i"
      :$idx="i.command"
      :active-index="activeIndex"/>
  </ul>
</template>
<script>
import TMenuItemDrop from './menu-item-drop'
import TMenuItem from './menu-item.vue'

export default {
  components: {
    TMenuItemDrop,
    TMenuItem
  },

  name: 't-menu',

  data () {
    return {
      activeIndex: '0-2',
      menuItems: []
    }
  },

  props: {
    data: Array,
    type: String,
    vertical: Boolean,
    collsape: Boolean,
    defaultItemMode: {
      default: 'normal',
      type: String
    }
  },

  created () {
    this.formatData()
    this.$on('item-checkout', this.checkoutHandler)
  },

  methods: {
    formatData (parent) {
      const arr = parent ? parent.subMenu : this.data
      const _this = this
      arr.forEach(function (el, idx) {
        el.command = parent ? `${parent.command}-${idx}` : idx
        if (el.subMenu) _this.formatData(el)
      })
    },
    checkoutHandler (idx) {
      this.activeIndex = idx
    }
  },

  computed: {
    // vertical menu horizon collsape
    isCollsape () {
      return this.vertical && this.collsape
    }
  }
}
</script>
