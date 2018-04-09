<template>
  <ul class="t-menu" :class="[
    type ? `t-menu--${type}` : '',
    vertical ? 'is-vertical' : ''
  ]">
    <li v-for="(m, idx) in data" :key="idx" class="t-menu__item" :class="[
      idx === 0 ? 'is-active' : ''
    ]">
      <i v-if="m.icon" :class="[
        't-menu__icon',
        m.icon
      ]"></i>{{ m.name }}
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
