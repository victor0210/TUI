<template>
  <li
    class="t-menu__item"
    :class="[
      isActive ? 'is-active' : ''
    ]"
    @click="checkout"
  >
    <t-dropdown
      v-if="data.subMenu"
      :text-center="false"
      :min-width="200"
      :side="vertical"
      hide-on-click
      @command="dropDownCheckout"
    >
      <t-menu-item-content :is-collsape="isCollsape" :data="data"/>
      <template slot="dropdown">
        <t-dropdown-item
          v-for="(sm, idx) in data.subMenu"
          :key="idx"
          :disabled="sm.disabled"
          :divided="sm.divided"
          :subMenu="sm.subMenu"
          :command="sm.command"
        >
        {{ sm.name }}
        </t-dropdown-item>
      </template>
    </t-dropdown>
    <template v-else>
      <t-menu-item-content v-if="!vertical" :data="data" :is-collsape="isCollsape"/>
      <t-tooltip
        v-else
        :content="data.name"
        position="right"
        theme="dark">
        <t-menu-item-content :data="data" :is-collsape="isCollsape"/>
      </t-tooltip>
    </template>
  </li>
</template>

<script>
import Emitter from '../../mixins/emitter'
import TMenuItemContent from './menu-item-content'
export default {
  name: 't-menu-item-drop',

  components: {
    TMenuItemContent
  },

  mixins: [Emitter],

  props: {
    data: {},
    activeIndex: '',
    $idx: '',
    isCollsape: Boolean,
    vertical: Boolean
  },

  methods: {
    checkout () {
      this.dispatch('t-menu', 'item-checkout', {idx: this.$idx, item: this.data})
    },
    dropDownCheckout (command) {
      this.dispatch('t-menu', 'item-checkout', {idx: command.$idx, item: command})
    }
  },

  computed: {
    isActive () {
      return this.activeIndex.toString().indexOf(this.$idx.toString()) === 0
    }
  }
}
</script>

<style scoped>

</style>
