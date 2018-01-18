<template>
  <div :class="prefixClass">{{ msg }}</div>
</template>

<script>
export default {
  data () {
    return {
      prefixClass: `${require('../../utils/config').prefixClass}toast`,
      msg: 'default message!'
    }
  }
}
</script>

<style scoped>
  .tui-toast{
      position: absolute;
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
      width: 100px; /* Need a specific value to work */
   }
</style>
