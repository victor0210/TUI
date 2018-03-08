<template>
  <div class="t-form-item">
    <label class="t-form-item__label">{{ label }}</label>
    <div class="t-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-form-item',

  props: {
    label: {}
  }
}
</script>

<style scoped>

</style>
