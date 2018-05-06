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
      :$idx="i.$idx"
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
      activeIndex: ''
    }
  },

  props: {
    data: Array,
    type: String,
    vertical: Boolean,
    collsape: Boolean,
    defaultActiveIndex: {
      type: String,
      default: ''
    }
  },

  created () {
    this.formatData()
    this.$on('item-checkout', this.checkoutHandler)
  },

  mounted () {
    this.activeIndex = this.defaultActiveIndex
  },

  methods: {
    formatData (parent) {
      const arr = parent ? parent.subMenu : this.data
      const _this = this
      arr.forEach(function (el, idx) {
        el.$idx = parent ? `${parent.$idx}-${idx}` : idx.toString()
        el.command = Object.assign({}, el)
        delete el.command['command']
        if (el.subMenu) _this.formatData(el)
      })
    },
    checkoutHandler ({idx, item}) {
      this.activeIndex = idx

      let i = Object.assign({}, item)
      delete i['command']
      i['hasSub'] = !!i['subMenu']
      delete i['subMenu']

      if (i.path) this.$router.push(i.path)
      this.$emit('click', i)
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
