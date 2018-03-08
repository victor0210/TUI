<template>
  <form :action="action" :method="method" class="t-form">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 't-form',

  props: {
    action: String,
    method: {
      type: String,
      default: 'post'
    }
  }
}
</script>

<style scoped>

</style>
