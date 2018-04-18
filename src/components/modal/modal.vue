<script>
import TModalTemp from './model-temp.vue'
import Vue from 'vue'

export default {
  name: 't-modal',

  data () {
    return {
      initial: false,
      instance: null
    }
  },

  props: {
    show: Boolean,
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    noAnimation: Boolean,
    animation: {
      type: String,
      default: 't-top-to-center'
    },
    animationIn: String,
    animationOut: String,
    animationDuration: {
      type: Number,
      default: 300
    }
  },

  render (h) {
    if (!this.initial) {
      this.createInstance()
      this.initial = true
    } else {
      this.show ? this.instance.showModal() : this.instance.hideModal()
    }

    return h()
  },

  methods: {
    createInstance () {
      const _this = this._self
      let Modal = new Vue({
        render (h) {
          return h(TModalTemp, {
            props: {
              top: _this.top ? `${_this.top}px` : '',
              width: _this.width ? `${_this.width}px` : '',
              height: _this.height ? `${_this.height}px` : ''
            }
          }, [
            (function () {
              let contents = []
              _this.$slots.header && contents.push(
                h('div', {
                  class: 't-modal__header'
                }, [_this.$slots.header])
              )

              _this.$slots.body && contents.push(
                h('div', {
                  class: 't-modal__body'
                }, [_this.$slots.body])
              )

              _this.$slots.footer && contents.push(
                h('div', {
                  class: 't-modal__footer'
                }, [_this.$slots.footer])
              )

              return contents
            })()
          ])
        },

        data () {
          return {
            show: false
          }
        },

        methods: {
          showModal () {
            !this.show && document.body.appendChild(this.$el)
            this.show = true
            this.$forceUpdate()

            setTimeout(() => {
              this.$el.children[0].style.opacity = 1
              this.$el.children[1].style.opacity = 1
              !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.animationIn || _this.animation}-in ${_this.animationDuration}ms ease-in-out`)
            }, 100)
          },
          hideModal () {
            !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.animationOut || _this.animation}-out ${_this.animationDuration}ms ease-in-out`)
            this.$el.children[0].style.opacity = 0
            this.$el.children[1].style.opacity = 0

            setTimeout(() => {
              this.show && document.body.removeChild(this.$el)
              this.show = false
            }, 300)
          },
          remove () {
            this.$destroy()
            _this.initial && document.body.removeChild(this.$el)
          }
        }
      })

      this.instance = Modal.$mount()
    }
  },

  beforeDestroy () {
    this.instance && this.instance.remove()
  }
}
</script>
