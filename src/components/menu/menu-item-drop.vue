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
      <span class="t-menu__item-content">
        <i v-if="data.icon" :class="['t-menu__icon',data.icon]"></i>
        <template v-if="!isCollsape">
          {{ data.name }}
          <i v-if="data.subMenu" class="fa fa-caret-down"></i>
        </template>
      </span>
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
      <span
        class="t-menu__item-content"
        v-if="!vertical"
      >
        <i
          v-if="data.icon"
          :class="[
            't-menu__icon',
            data.icon
        ]"></i>
        {{ data.name }}
      </span>
      <t-tooltip
        v-else
        :content="data.name"
        position="right"
        theme="dark">
        <span class="t-menu__item-content">
          <i
            v-if="data.icon"
            :class="[
              't-menu__icon',
              data.icon
          ]"></i>
        <template v-if="!isCollsape">
          {{ data.name }}
        </template>
        </span>
      </t-tooltip>
    </template>
  </li>
</template>

<script>
import Emitter from '../../mixins/emitter'
export default {
  name: 't-menu-item-drop',

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
      this.dispatch('t-menu', 'item-checkout', this.$idx)
    },
    dropDownCheckout (idx) {
      this.dispatch('t-menu', 'item-checkout', idx)
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
