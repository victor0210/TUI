<script>
import Vue from 'vue'
let BackTop
export default {
  name: 't-back-top',

  render (h) {
    this.createInstance()
    console.log('render')

    return h()
  },

  props: {
    position: String,
    icon: {
      type: String,
      default: 'fa fa-chevron-up'
    }
  },

  methods: {
    createInstance () {
      if (BackTop) return BackTop
      const _this = this

      let backTopComponent = new Vue({
        render (h) {
          return h('div', {
            class: 't-back-top'
          }, [h('i', {
            class: _this.icon
          })])
        },

        methods: {
          show () {
            this.$el.style.opacity = 1
            this.$el.style.animation = 't-top-to-center-in .2s linear'
          },
          hide () {
            this.$el.style.animation = 't-top-to-center-out .2s linear'
            this.$el.style.opacity = 0
          },
          remove () {
            this.$destroy()
            BackTop = null
            document.body.removeChild(this.$el)
          }
        }
      }).$mount()

      BackTop = backTopComponent

      document.body.appendChild(BackTop.$el)

      document.addEventListener('scroll', this.switchVisible)

      return backTopComponent
    },
    switchVisible (e) {
      console.log(document.body.scrollHeight)
    }
  },

  beforeDestroy () {
    BackTop.remove()
  }
}
</script>
