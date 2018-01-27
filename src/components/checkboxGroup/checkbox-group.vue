<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 't-checkbox-group',
  data () {
    return {
      values: []
    }
  },
  watch: {
    values (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style scoped>

</style>
