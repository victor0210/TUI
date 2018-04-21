<template>
  <div
    class="t-popover"
    @mouseenter="$emit('popover-mouseenter')"
    @mouseleave="$emit('popover-mouseleave')"
    :style="{
      backgroundColor: bgColor,
      borderColor: borderColor,
      width: width ? `${width}px` : '',
      height: width ? `${height}px` : ''
    }"
    :popoveridx="$idx"
  >
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
    width: Number,
    height: Number,
    $idx: Number
  }
}
</script>

<style scoped>

</style>
