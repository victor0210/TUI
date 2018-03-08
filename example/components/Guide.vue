<template>
  <div class="guide">
    <div class="title">{{ title }}</div>
    <div class="des">{{ des }}</div>
  </div>
</template>

<script>
export default {
  name: 'guide',

  props: {
    title: String,
    des: String
  }
}
</script>

<style scoped>

</style>
