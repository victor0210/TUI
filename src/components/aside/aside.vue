<template>
    <div class="t-aside" :style="{ width }">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 't-aside',

  props: {
    width: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style scoped>

</style>
