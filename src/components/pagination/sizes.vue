<template>
  <t-select :width="100" :height="28" v-model="size" :placeholder="perPage+'条 / 页'" class="t-pagination__sizes">
    <t-option v-for="s in sizes" :val="s" :label="s+'条 / 页'" :key="s"/>
  </t-select>
</template>

<script>
export default {
  name: 't-sizes',

  data () {
    return {
      size: ''
    }
  },

  props: {
    sizes: Array,
    perPage: {},
    value: {}
  },

  mounted () {
    this.size = this.value
  },

  watch: {
    size (val) {
      if (val !== '' && val !== this.value) this.$emit('size-change', val)
    }
  }
}
</script>

<style scoped>

</style>
