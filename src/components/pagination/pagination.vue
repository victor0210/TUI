<script>
import TPager from './pager.vue'
import TTotal from './total.vue'
import TSizes from './sizes.vue'
import TJump from './jump.vue'

export default {
  name: 't-pagination',

  data () {
    return {
      current: null,
      size: 10
    }
  },
  props: {
    perPage: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      default: 1
    },
    sizes: Array,
    sizeChange: Function,
    currentChange: Function,
    layout: {
      type: String,
      default: 'pager'
    }
  },

  render (h) {
    const _this = this
    const layout = this.layout.split(',')

    const Pager = h(TPager, {
      on: {
        'next-page': _this.nextPage,
        'prev-page': _this.prevPage,
        'jump-page': _this.jumpPage
      },
      props: {
        pageNumCollections: _this.pageNumCollections,
        current: _this.current
      }
    })

    const Total = h(TTotal, {
      props: {
        total: ~~_this.total
      }
    })

    const Size = h(TSizes, {
      on: {
        'size-change': _this.sizeChangeHandler
      },
      props: {
        sizes: _this.sizes,
        value: _this.size,
        perPage: _this.size
      }
    })

    const Jump = h(TJump, {
      on: {
        'check-current-change': _this.checkCurrentChange
      },
      props: {
        value: _this.current
      }
    })

    const Layout = {
      'pager': Pager,
      'total': Total,
      'size': Size,
      'jump': Jump
    }

    let renderLayouts = []

    layout.forEach(function (el) {
      renderLayouts.push(Layout[el.trim()])
    })

    return h('div', {
      class: 't-pagination'
    }, renderLayouts)
  },

  mounted () {
    this.current = this.currentPage
    this.size = this.perPage
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
    },
    sizeChangeHandler (s) {
      this.size = s
      !!this.sizeChange && this.sizeChange(s)
    },
    checkCurrentChange (c) {
      (this.current !== ~~c) && (this.current = ~~c)
    }
  },

  watch: {
    current (c, old) {
      old && !!this.currentChange && this.currentChange(c)
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
      return Math.ceil(this.total / this.size)
    }
  }
}
</script>

<style scoped>

</style>
