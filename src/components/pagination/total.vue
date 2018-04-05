<template>
  <span class="t-pagination__total">共 {{total}} 条</span>
</template>

<script>
export default {
  name: 't-total',

  props: {
    total: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
