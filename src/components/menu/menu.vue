<template>
  <ul class="t-menu">
    <li v-for="(m, idx) in data" :key="idx" class="t-menu__item">
      {{ m.name }}
    </li>
  </ul>
</template>
<script>
export default {
  name: 't-menu',

  props: {
    data: Array
  }
}
</script>
