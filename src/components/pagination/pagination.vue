<script>
import TPager from './pager.vue'

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

  render (h) {
    const _this = this
    return h('div', {
      class: 't-pagination'
    }, [h(TPager, {
      on: {
        'next-page': _this.nextPage,
        'prev-page': _this.prevPage,
        'jump-page': _this.jumpPage
      },
      props: {
        pageNumCollections: _this.pageNumCollections,
        current: _this.current
      }
    })])
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
