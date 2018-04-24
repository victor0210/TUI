<template>
  <li
    v-if="!subMenu"
    class="t-dropdown-item"
    :class="[
      isActive ? 'is-active' : '',
      disabled ? 'is-disabled' : '',
      divided ? 't-dropdown-item--divided' : ''
    ]"
    @click="clickHandler"
  >
    <slot/>
  </li>

  <t-dropdown
    v-else
    side
    sub
    :min-width="200"
    has-parent-menu
    hide-on-click
    :text-center="false"
  >
    <li
      class="t-dropdown-item"
      :class="[
      disabled ? 'is-disabled' : '',
      divided ? 't-dropdown-item--divided' : ''
    ]"
      @click="clickHandler"
    >
      <slot/>
      <i class="t-dropdown-item__icon fa fa-caret-right"></i>
    </li>

    <template slot="dropdown">
      <t-dropdown-item
        v-for="(m, idx) in subMenu"
        :key="idx"
        :command="m.command"
        :disabled="m.disabled"
        :divided="m.divided"
        :subMenu="m.subMenu"
      >
        {{ m.name }}
      </t-dropdown-item>
    </template>
  </t-dropdown>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-dropdown-item',

  mixins: [Emitter],

  props: {
    command: {},
    disabled: Boolean,
    divided: Boolean,
    subMenu: Array,
    isActive: Boolean
  },

  methods: {
    clickHandler () {
      !this.disabled && !this.subMenu && this.dispatch('t-dropdown-menu', 'item-click', this.command)
    }
  }
}
</script>

<style scoped>

</style>
