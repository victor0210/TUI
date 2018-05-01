<template>
  <button
    class="t-btn"
    :icon="icon"
    :disabled="disabled"
    :class="[
      type ? `${classPrefix+type}` : '',
      size ? `${classPrefix+size}` : '',
      disabled ? 'is-disabled' : '',
      round ? 'is-round' : '',
      outline ? 'is-outline' : '',
      circle ? 'is-circle' : '',
      !$slots.default ? 't-btn--without-slot' : ''
    ]"
    @click="handleClick"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
    @mouseover="mouseOverHandler"
    @mouseout="mouseOutHandler"
  >
    <i class="t-btn__icon t-btn__icon--left fa fa-circle-notch fa-spin" v-if="loading"></i>
    <i :class="['t-btn__icon', 't-btn__icon--left', icon]" v-if="icon && !loading && !iconRight"></i>
    <span v-if="$slots.default" class="t-btn__content"><slot></slot></span>
    <i :class="['t-btn__icon', 't-btn__icon--right', icon]" v-if="icon && !loading && iconRight"></i>
  </button>
</template>

<script>
export default {
  name: 't-button',
  data () {
    return {
      classPrefix: 't-btn--'
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: String,
    loading: Boolean,
    disabled: Boolean,
    outline: Boolean,
    round: Boolean,
    iconRight: Boolean,
    circle: Boolean
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    },
    mouseEnterHandler (e) {
      this.$emit('mouseenter', e)
    },
    mouseLeaveHandler (e) {
      this.$emit('mouseleave', e)
    },
    mouseOverHandler (e) {
      this.$emit('mouseover', e)
    },
    mouseOutHandler (e) {
      this.$emit('mouseout', e)
    }
  }
}
</script>

<style scoped>

</style>
