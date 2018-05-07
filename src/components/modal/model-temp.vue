<template>
  <div class="t-modal" :class="[
    !top ? 't-modal--center' : '',
    size ? `t-modal--${size}` : '',
    side ? `t-modal--side` : '',
  ]">
    <div class="t-modal__mask"></div>
    <div class="t-modal__wrapper">
      <div class="t-modal__container" :style="{
        width: width,
        height: height,
        top: top,
        left: left,
        right: right,
        bottom: bottom,
        borderRadius: borderRadius
      }">
        <i class="fa fa-times t-modal__close" @click="$emit('close')" v-if="showClose"></i>
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    width: {},
    height: {},
    top: {},
    bottom: {},
    left: {},
    right: {},
    borderRadius: {},
    showClose: Boolean,
    size: String,
    side: Boolean
  }
}
</script>
