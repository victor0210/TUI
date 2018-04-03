<template>
  <div class="t-pagination">
    <div class="t-pagination__prev">
      <i class="fa fa-angle-left"></i>
    </div>
    <div class="t-pagination__pager">
      <span class="t-pagination__pager-item">1</span>
      <span class="t-pagination__pager-item">1</span>
      <span class="t-pagination__pager-item">1</span>
      <span class="t-pagination__pager-item">1</span>
    </div>
    <div class="t-pagination__next">
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 't-pagination',

  props: {
    perPage: {
      default: 10
    }
  }
}
</script>

<style scoped>

</style>
