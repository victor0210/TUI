<template>
  <div class="t-pagination">
    <div class="t-pagination__prev">
      <i class="fa fa-angle-left" @click="prevPage"></i>
    </div>
    <div class="t-pagination__pager">
      <div class="t-pagination__pager-item" v-for="p in pageNumCollections" :key="p" :class="[
        current === p ? 'is-current' : '',
        (p === 'next' || p === 'prev') ? 't-pagination__pager-ellipsis' : ''
      ]">
        <span v-if="!isNaN(p)" @click="jumpPage(p)">{{ p }}</span>
        <span v-else-if="p === 'prev'" @click="jumpPage(current - 5)"><i class="fa fa-ellipsis-h"></i><i class="fa fa-angle-double-left"></i></span>
        <span v-else-if="p === 'next'" @click="jumpPage(current + 5)" class="t-pagination__pager-ellipsis"><i class="fa fa-ellipsis-h"></i><i class="fa fa-angle-double-right"></i></span>
      </div>
    </div>
    <div class="t-pagination__next" @click="nextPage">
      <i class="fa fa-angle-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: 't-pagination',

  data () {
    return {
      current: null,
      pagePointer: 1
    }
  },
  props: {
    perPage: {
      default: 10
    },
    total: {
      default: 1
    },
    currentPage: {
      default: 1
    }
  },

  mounted () {
    this.current = this.currentPage
  },

  methods: {
    prevPage () {
      this.current > 1 && this.current--
    },

    nextPage () {
      this.current < this.lastPageNum && this.current++
    },

    jumpPage (p) {
      if (p > this.lastPageNum) {
        this.current = this.lastPageNum
        return true
      } else if (p < 1) {
        this.current = 1
      } else {
        this.current = p
      }
    }
  },

  computed: {
    pageNumCollections: function () {
      let arr = []
      if (this.lastPageNum <= 7) {
        for (let i = 1; i <= this.lastPageNum; i++) {
          arr.push(i)
        }
      } else {
        if (this.current < 5) {
          arr = [1, 2, 3, 4, 5, 6, 'next', this.lastPageNum]
        } else if (this.lastPageNum <= this.current + 3) {
          arr = [
            1,
            'prev',
            this.lastPageNum - 5,
            this.lastPageNum - 4,
            this.lastPageNum - 3,
            this.lastPageNum - 2,
            this.lastPageNum - 1,
            this.lastPageNum
          ]
        } else {
          arr = [
            1,
            'prev',
            this.current - 2,
            this.current - 1,
            this.current,
            this.current + 1,
            this.current + 2,
            'next',
            this.lastPageNum
          ]
        }
      }
      return arr
    },

    lastPageNum: function () {
      return Math.ceil(this.total / this.perPage)
    }
  }
}
</script>

<style scoped>

</style>
