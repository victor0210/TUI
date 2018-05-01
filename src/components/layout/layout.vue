<template>
  <div class="t-layout" :style="{ flexDirection }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-layout',

  props: {
    flexDirection: String
  }
}
</script>

<style scoped>

</style>
