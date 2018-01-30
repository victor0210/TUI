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
      type: String
    }
  }
}
</script>

<style scoped>

</style>
