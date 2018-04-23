<template>
  <ul
    class="t-menu"
    :class="[
      type ? `t-menu--${type}` : '',
      vertical ? 'is-vertical' : ''
  ]">
    <li
      v-if="collsape || (!collsape && !vertical)"
      v-for="(m, idx) in data"
      :key="idx"
      class="t-menu__item"
      :class="[
        idx === 0 ? 'is-active' : ''
    ]">
      <t-dropdown
          v-if="m.subMenu"
          :text-center="false"
          :min-width="200"
          :side="vertical"
        >
        <span
          class="t-menu__item-content"
        >
          <i
            v-if="m.icon"
            :class="[
              't-menu__icon',
              m.icon
          ]"
          ></i>{{ m.name }}
          <i v-if="m.subMenu" class="fa fa-caret-down"></i>
        </span>
          <template slot="dropdown">
            <t-dropdown-item
              v-for="(sm, idx) in m.subMenu"
              :key="idx"
              :command="sm.command"
              :disabled="sm.disabled"
              :divided="sm.divided"
              :subMenu="sm.subMenu"
            >{{ sm.name }}
            </t-dropdown-item>
          </template>
        </t-dropdown>
      <span
          v-else
          class="t-menu__item-content"
        >
        <i
          v-if="m.icon"
          :class="[
            't-menu__icon',
            m.icon
        ]"></i>{{ m.name }}
      </span>
    </li>

    <t-menu-item v-if="!collsape && vertical" v-for="(i, idx) in data" :key="idx" :data="i" :$idx="idx" :active-index="activeIndex"/>
  </ul>
</template>
<script>
import TMenuItem from './menu-item'

export default {
  components: {
    TMenuItem
  },

  name: 't-menu',

  data () {
    return {
      activeIndex: 1,
      menuItems: []
    }
  },

  props: {
    data: Array,
    type: String,
    vertical: Boolean,
    collsape: Boolean
  },

  created () {
    this.$on('item-checkout', this.checkoutHandler)
  },

  mounted () {
    setTimeout(() => {
      this.activeIndex = 0
    }, 1000)
  },

  methods: {
    checkoutHandler (idx) {
      this.activeIndex = idx
    }
  }
}
</script>
