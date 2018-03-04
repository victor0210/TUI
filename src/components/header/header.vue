<template>
  <div class="t-header" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-header',

  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
}
</script>
