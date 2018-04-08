<template>
  <ul class="t-menu" :class="[
    type ? `t-menu--${type}` : ''
  ]">
    <li v-for="(m, idx) in data" :key="idx" class="t-menu__item" :class="[
      idx === 0 ? 'is-active' : ''
    ]">
      {{ m.name }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 't-menu',

  props: {
    data: Array,
    type: String
  }
}
</script>
