<template>
  <div class="t-pagination__pager">
    <div class="t-pagination__prev" @click="$emit('prev-page')">
      <i class="fa fa-angle-left"></i>
    </div>
    <div class="t-pagination__pager">
      <div class="t-pagination__pager-item" v-for="p in pageNumCollections" :key="p" :class="[
          current === p ? 'is-current' : '',
          (p === 'next' || p === 'prev') ? 't-pagination__pager-ellipsis' : ''
        ]">
        <span v-if="!isNaN(p)" @click="$emit('jump-page', p)">{{ p }}</span>
        <span v-else-if="p === 'prev'" @click="$emit('jump-page', current - 5)"><i class="fa fa-ellipsis-h"></i><i class="fa fa-angle-double-left"></i></span>
        <span v-else-if="p === 'next'" @click="$emit('jump-page', current + 5)" class="t-pagination__pager-ellipsis"><i class="fa fa-ellipsis-h"></i><i class="fa fa-angle-double-right"></i></span>
      </div>
    </div>
    <div class="t-pagination__next" @click="$emit('next-page')">
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-pager',

  props: {
    pageNumCollections: Array,
    current: {}
  }
}
</script>

<style scoped>

</style>
