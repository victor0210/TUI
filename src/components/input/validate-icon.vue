<template>
  <i class="t-validate-icon t-validate-icon--success fa fa-check-circle" v-if="validateSuccess"></i>
  <i class="t-validate-icon t-validate-icon--error fa fa-times-circle" v-else></i>
</template>

<script>
export default {
  name: 't-validate-icon',

  props: {
    validateSuccess: Boolean
  }
}
</script>

<style scoped>

</style>
