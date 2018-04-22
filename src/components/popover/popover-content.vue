<template>
  <div
    class="t-popover"
    @mouseenter="$emit('popover-mouseenter')"
    @mouseleave="$emit('popover-mouseleave')"
    :style="{
      backgroundColor: !theme && bgColor,
      borderColor: !theme && borderColor,
      textColor: !theme && textColor,
      width: width ? `${width}px` : '',
      height: width ? `${height}px` : ''
    }"
    :popoveridx="$idx"

    :class="[
      theme ? `t-popover--${theme}` : ''
    ]"
  >
    <div
      class="t-popover__arrow"
      :class="[
        `t-popover__arrow--${position}`
      ]" :style="{
        backgroundColor: !theme && bgColor,
        borderColor: !theme && borderColor
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
    textColor: String,
    width: Number,
    height: Number,
    theme: String,
    $idx: Number
  }
}
</script>

<style scoped>

</style>
