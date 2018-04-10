<template>
  <ul class="t-menu" :class="[
    type ? `t-menu--${type}` : '',
    vertical ? 'is-vertical' : ''
  ]">
    <li v-for="(m, idx) in data" :key="idx" class="t-menu__item" :class="[
      idx === 0 ? 'is-active' : ''
    ]">
      <t-dropdown :text-center="false" :min-width="180" v-if="m.subMenu && !vertical">
        <span class="t-menu__item-content">
          <i v-if="m.icon" :class="[
            't-menu__icon',
            m.icon
          ]"></i>{{ m.name }}
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
          >
            {{ sm.name }}
          </t-dropdown-item>
        </template>
      </t-dropdown>
      <span class="t-menu__item-content" v-else>
        <i v-if="m.icon" :class="[
          't-menu__icon',
          m.icon
        ]"></i>{{ m.name }}
      </span>
    </li>
  </ul>
</template>
<script>
export default {
  name: 't-menu',

  props: {
    data: Array,
    type: String,
    vertical: Boolean
  }
}
</script>
