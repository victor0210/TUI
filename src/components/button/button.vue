<template>
  <button
    class="t-btn"
    @click="handleClick"
    :icon="icon"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? `${classPrefix+type}` : '',
      size ? `${classPrefix+size}` : '',
    ]"
  >
    <i class="t-icon fa fa-spinner" v-if="loading"></i>
    <i :class="['t-icon',icon]" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
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
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style scoped>

</style>
