<template>
  <div class="t-pagination__jump">
    <t-input @blur="blurHandler" type="number" :value="value">
      <p slot="prefix">前往</p>
      <p slot="suffix">页</p>
    </t-input>
  </div>
</template>

<script>
export default {
  name: 't-total',

  props: {
    value: {}
  },

  methods: {
    blurHandler (e) {
      this.$emit('check-current-change', e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
