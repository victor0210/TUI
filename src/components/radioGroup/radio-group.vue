<template>
  <div class="t-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-radio-group',
  props: {
    value: {
      type: String
    }
  }
}
</script>
