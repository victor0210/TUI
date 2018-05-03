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
    showClose: {
      type: Boolean,
      default: true
    },
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
    animationTimingFunction: {
      type: String,
      default: 'ease-in-out'
    },
    animationIn: String,
    animationOut: String,
    animationDuration: {
      type: Number,
      default: 300
    },
    size: String,
    hideOnClick: {
      type: Boolean,
      default: false
    }
  },

  render (h) {
    if (!this.initial) {
      this.createInstance()
      this.initial = true
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
              height: _this.height ? `${_this.height}px` : '',
              showClose: _this.showClose,
              size: _this.size
            },
            on: {
              close: () => {
                //  emit close from in to out && change props outbox
                _this.$emit('update:show', false)
              }
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
              !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.animationIn || _this.animation}-in ${_this.animationDuration}ms ${_this.animationTimingFunction}`)
            }, 100)

            _this.hideOnClick && document.addEventListener('click', this.handleExtraClick, false)
            _this.$emit('modal-open')
            _this.$emit('update:show', true)
          },
          hideModal () {
            !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.animationOut || _this.animation}-out ${_this.animationDuration}ms ${_this.animationTimingFunction}`)
            this.$el.children[0].style.opacity = 0
            this.$el.children[1].style.opacity = 0

            _this.hideOnClick && document.removeEventListener('click', this.handleExtraClick, false)
            setTimeout(() => {
              this.show && document.body.removeChild(this.$el)
              this.show = false
            }, 300)

            _this.$emit('modal-close')
            _this.$emit('update:show', false)
          },
          remove () {
            this.show && document.body.removeChild(this.$el)
            this.$destroy()
          },
          handleExtraClick (e) {
            let isInbox = false
            let parent = e.target.offsetParent

            while (parent !== null) {
              if (parent.className.indexOf('t-modal__container') !== -1) {
                isInbox = true
                break
              }

              parent = parent.offsetParent
            }

            if (!isInbox) {
              this.hideModal()
            }
          }
        }
      })

      this.instance = Modal.$mount()
    }
  },

  watch: {
    show (val, pre) {
      val ? this.instance.showModal() : this.instance.hideModal()
    }
  },

  beforeDestroy () {
    this.instance && this.instance.remove()
  }
}
</script>
