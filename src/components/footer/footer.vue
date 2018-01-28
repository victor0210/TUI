<template>
    <div class="t-footer" :style="{ height }">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 't-footer',

  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>

<style scoped>

</style>
