<script>
import TModalTemp from './model-temp.vue'
import Vue from 'vue'

export default {
  name: 't-modal',

  data () {
    return {
      initial: false,
      instance: null,
      sideAnimation: {
        sideIn: '',
        sideOut: ''
      },
      modalProps: {}
    }
  },

  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true
    },
    width: String,
    height: String,
    top: {
      type: String,
      default: '100px'
    },
    bottom: {
      type: String,
      default: 'auto'
    },
    left: {
      type: String,
      default: 'auto'
    },
    right: {
      type: String,
      default: 'auto'
    },
    noAnimation: Boolean,
    // animationTimingFunction: {
    //   type: String,
    //   default: 'ease-in-out'
    // },
    animationIn: {
      type: String,
      default: 't-go-down-in'
    },
    animationOut: {
      type: String,
      default: 't-go-down-out'
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    size: String,
    hideOnClick: {
      type: Boolean,
      default: true
    },
    side: String
  },

  render (h) {
    let width
    let height
    let top
    let bottom
    let left
    let right

    if (this.side === 'top' || this.side === 'bottom') {
      width = '100%'
      left = '0px'
      right = '0px'
      if (this.side === 'top') {
        top = '0px'
        bottom = 'auto'
        this.sideAnimation.sideIn = 't-side-top-in'
        this.sideAnimation.sideOut = 't-side-top-out'
      }
      if (this.side === 'bottom') {
        top = 'auto'
        bottom = '0px'
        this.sideAnimation.sideIn = 't-side-bottom-in'
        this.sideAnimation.sideOut = 't-side-bottom-out'
      }
    } else if (this.side === 'left' || this.side === 'right') {
      height = '100%'
      top = '0px'
      bottom = '0px'
      if (this.side === 'left') {
        left = '0px'
        right = 'auto'
        this.sideAnimation.sideIn = 't-side-left-in'
        this.sideAnimation.sideOut = 't-side-left-out'
      }
      if (this.side === 'right') {
        left = 'auto'
        right = '0px'
        this.sideAnimation.sideIn = 't-side-right-in'
        this.sideAnimation.sideOut = 't-side-right-out'
      }
    } else {
      this.sideAnimation.sideIn = this.animationIn
      this.sideAnimation.sideOut = this.animationOut
    }

    this.modalProps = {
      top: top || (!this.side && this.top),
      left: left || (!this.side && this.left),
      right: right || (!this.side && this.right),
      bottom: bottom || (!this.side && this.bottom),
      width: width || this.width,
      height: height || this.height,
      borderRadius: this.side ? 0 : '',
      showClose: this.showClose,
      size: this.size,
      side: !!this.side
    }

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
            props: _this.modalProps,
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
              // !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.animationIn} ${_this.animationDuration}ms ${_this.animationTimingFunction}`)
              !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.sideAnimation.sideIn} ${_this.animationDuration}ms`)
            }, 100)

            document.addEventListener('click', this.handleExtraClick, false)
            document.addEventListener('keydown', this.keyDownHandler)
            _this.$emit('modal-open')
            _this.$emit('update:show', true)
          },
          hideModal () {
            // !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.animationOut} ${_this.animationDuration}ms ${_this.animationTimingFunction}`)
            !_this.noAnimation && (this.$el.children[1].style.animation = `${_this.sideAnimation.sideOut} ${_this.animationDuration}ms`)
            this.$el.children[0].style.opacity = 0
            this.$el.children[1].style.opacity = 0

            document.removeEventListener('click', this.handleExtraClick, false)
            document.removeEventListener('keydown', this.keyDownHandler)

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
          keyDownHandler (e) {
            if (e.keyCode === 27 && _this.hideOnClick) {
              _this.$emit('modal-close')
              _this.$emit('update:show', false)
            }
          },
          handleExtraClick (e) {
            if (!_this.hideOnClick) return false
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
