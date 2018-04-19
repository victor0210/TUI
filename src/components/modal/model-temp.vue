<template>
  <div class="t-modal" :class="[
    !top ? 't-modal--center' : ''
  ]">
    <div class="t-modal__mask"></div>
    <div class="t-modal__wrapper">
      <div class="t-modal__container" :style="{
        width: width,
        height: height,
        top: top
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
    showClose: Boolean
  }
}
</script>
