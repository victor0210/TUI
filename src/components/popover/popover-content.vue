<template>
  <div
    class="t-popover"
    @mouseenter="$emit('popover-mouseenter')"
    @mouseleave="$emit('popover-mouseleave')"
    :style="{
      backgroundColor: bgColor,
      borderColor: borderColor
    }">
    <div
      class="t-popover__arrow"
      :class="[
        `t-popover__arrow--${position}`
      ]" :style="{
        backgroundColor: bgColor,
        borderColor: borderColor
      }"></div>
    <div class="t-popover__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-popover-content',

  props: {
    position: String,
    bgColor: String,
    borderColor: String,
  }
}
</script>

<style scoped>

</style>
