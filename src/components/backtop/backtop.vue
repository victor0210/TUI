<script>
import Vue from 'vue'
let BackTop
export default {
  name: 't-back-top',

  render (h) {
    this.createInstance()

    return h()
  },

  data () {
    return {
      show: false
    }
  },

  props: {
    left: Number,
    top: Number,
    right: Number,
    bottom: Number,
    icon: {
      type: String,
      default: 'fa fa-chevron-up'
    },
    size: {
      type: Number,
      default: 50
    }
  },

  mounted () {
    setTimeout(() => {
      this.checkScrollTop(document.body.scrollTop || document.documentElement.scrollTop, true)
    }, 500)
  },

  methods: {
    createInstance () {
      if (BackTop) return BackTop
      const _this = this

      let backTopComponent = new Vue({
        render (h) {
          return h('div', {
            class: 't-back-top',
            style: {
              width: _this.size ? `${_this.size}px` : '',
              height: _this.size ? `${_this.size}px` : '',
              left: _this.left ? `${_this.left}px` : '',
              right: _this.right ? `${_this.right}px` : '',
              top: _this.top ? `${_this.top}px` : '',
              bottom: _this.bottom ? `${_this.bottom}px` : ''
            },
            on: {
              click: () => {
                document.documentElement.scrollTop = document.body.scrollTop = -100
              }
            }
          }, [h('i', {
            class: _this.icon
          })])
        },

        methods: {
          show () {
            this.$el.style.transform = 'scale(1)'
            this.$el.style.opacity = 1
          },
          hide () {
            this.$el.style.transform = 'scale(0)'
            this.$el.style.opacity = 0
          },
          remove () {
            this.$destroy()
            document.body.removeChild(this.$el)
          }
        }
      }).$mount()

      BackTop = backTopComponent

      document.body.appendChild(BackTop.$el)

      window.addEventListener('scroll', this.switchVisible)

      return backTopComponent
    },
    switchVisible (e) {
      let scrollTop = e.target.scrollingElement.scrollTop
      this.checkScrollTop(scrollTop)
    },

    checkScrollTop (scrollTop, init) {
      if (scrollTop > 50 && (!this.show || init)) {
        BackTop.show()
        this.show = true
      } else if (scrollTop < 50 && (this.show || init)) {
        BackTop.hide()
        this.show = false
      }
    }
  },

  beforeDestroy () {
    BackTop && BackTop.remove()
  }
}
</script>
