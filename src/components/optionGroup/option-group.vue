<template>
  <ul class="t-option-group">
    <t-option class="t-option-group__label" :label="label" disabled/>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: 't-option-group',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}

</script>

<style scoped>

</style>
