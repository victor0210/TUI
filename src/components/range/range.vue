<template>
  <div class="t-range">
    <div class="t-range__under-line">
      <div class="t-range__cover-line"></div>
    </div>
    <div class="t-range__trigger"></div>
  </div>
</template>

<script>
export default {
  name: 't-range',

  props: {
    width: String,
    fillColor: String,
    underColor: String,
    value: {}
  },

  methods: {
    setValue (val) {
      //  do set new value
    }
  }
}
</script>
