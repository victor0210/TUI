<script>
import Vue from 'vue'
import PositionHelper from '../../mixins/positionHelper'
import PopoverContent from './popover-content.vue'

export default {
  name: 't-popover',

  mixins: [PositionHelper],

  data () {
    return {
      instance: null,
      initial: false,
      hideClear: null,
      hideDomClear: null,
      positionParent: null,
      show: false
    }
  },

  props: {
    position: {
      type: String,
      default: 'top'
    },
    popoverOffset: {
      type: Number,
      default: 10
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    borderColor: {
      type: String,
      default: 'rgba(0,0,0,0.3)'
    },
    width: Number,
    height: Number,
    trigger: {
      type: String,
      default: 'hover'
    }
  },

  render (h) {
    const _this = this

    setTimeout(() => {
      if (this.instance) {
        this.instance.$forceUpdate()
        this.setPosition()
      }
    })

    return h('span', {
      on: {
        mouseenter: () => {
          _this.trigger === 'hover' && _this.showPopover()
        },
        mouseleave: () => {
          _this.trigger === 'hover' && _this.hidePopover()
        },
        click: () => {
          if (_this.trigger === 'click') {
            if (_this.show) {
              _this.hidePopover()
            } else {
              _this.showPopover()
            }
          }
        },
        mousedown: () => {
          _this.trigger === 'focus' && _this.showPopover()
        },
        mouseup: () => {
          _this.trigger === 'focus' && _this.hidePopover()
        }
      }
    }, [this.$slots.default])
  },

  methods: {
    showPopover () {
      !this.instance && this.createInstance()
      clearTimeout(this.hideClear)
      this.instance.showPopover()
      this.show = true
    },
    hidePopover () {
      this.hideClear = setTimeout(() => {
        this.instance.hidePopover()
      }, 200)
      this.show = false
    },
    createInstance () {
      const _this = this
      let Popover = new Vue({
        render (h) {
          return h(PopoverContent, {
            props: {
              position: _this.position,
              bgColor: _this.bgColor,
              borderColor: _this.borderColor,
              width: _this.width,
              height: _this.height
            },
            on: {
              'popover-mouseenter': () => {
                clearTimeout(_this.hideClear)
                this.showPopover()
                _this.show = true
              },
              'popover-mouseleave': () => {
                if (_this.trigger === 'hover') {
                  _this.hideClear = setTimeout(() => {
                    this.hidePopover()
                  }, 200)
                  _this.show = false
                }
              }
            }
          }, [_this.$slots.popover || ''])
        },

        methods: {
          showPopover () {
            clearTimeout(_this.hideDomClear)
            setTimeout(() => {
              this.$el.style.display = 'block'
              _this.setPosition()
              this.$el.style.opacity = 1
            }, 100)
          },
          hidePopover () {
            this.$el.style.opacity = 0
            _this.hideDomClear = setTimeout(() => {
              this.$el.style.display = 'none'
            }, 200)
          },
          remove () {
            window.removeEventListener('resize', this.setPosition)
            document.removeEventListener('scroll', this.setPosition, true)

            this.$el.style.opacity = 0
            document.body.removeChild(this.$el)
          }
        }
      })

      this.instance = Popover.$mount()

      document.body.appendChild(this.instance.$el)

      setTimeout(() => {
        window.addEventListener('resize', this.setPosition)
        document.addEventListener('scroll', this.setPosition, true)
      })
    },

    setPosition () {
      const parent = this.$el.children[0]
      const target = this.instance.$el

      let parentViewLeft = this.getElementViewLeft(parent)
      let parentViewTop = this.getElementViewTop(parent)

      let parentOffsetHeight = parent.offsetHeight
      let parentOffsetWidth = parent.offsetWidth

      let targetTop
      let targetLeft

      let targetWidth = target.offsetWidth
      let targetHeight = target.offsetHeight

      switch (this.position) {
        case 'top':
          targetTop = parentViewTop - targetHeight - this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth - targetWidth) / 2
          break;
        case 'top-left':
          targetTop = parentViewTop - targetHeight - this.popoverOffset
          targetLeft = parentViewLeft - (parentOffsetWidth > targetWidth ? 0 : targetWidth - parentOffsetWidth)
          break;
        case 'top-right':
          targetTop = parentViewTop - targetHeight - this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth > targetWidth ? parentOffsetWidth - targetWidth : 0)
          break;
        case 'bottom':
          targetTop = parentViewTop + parentOffsetHeight + this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth - targetWidth) / 2
          break;
        case 'bottom-left':
          targetTop = parentViewTop + parentOffsetHeight + this.popoverOffset
          targetLeft = parentViewLeft - (parentOffsetWidth > targetWidth ? 0 : targetWidth - parentOffsetWidth)
          break;
        case 'bottom-right':
          targetTop = parentViewTop + parentOffsetHeight + this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth > targetWidth ? parentOffsetWidth - targetWidth : 0)
          break;
        case 'left':
          targetTop = parentViewTop + (parentOffsetHeight - targetHeight) / 2
          targetLeft = parentViewLeft - targetWidth - this.popoverOffset
          break;
        case 'left-top':
          targetTop = parentViewTop - (parentOffsetHeight > targetHeight ? 0 : (targetHeight - parentOffsetHeight))
          targetLeft = parentViewLeft - targetWidth - this.popoverOffset
          break;
        case 'left-bottom':
          targetTop = parentViewTop + (parentOffsetHeight > targetHeight ? (parentOffsetHeight - targetHeight) : 0)
          targetLeft = parentViewLeft - targetWidth - this.popoverOffset
          break;
        case 'right':
          targetTop = parentViewTop + (parentOffsetHeight - targetHeight) / 2
          targetLeft = parentViewLeft + parentOffsetWidth + this.popoverOffset
          break;
        case 'right-top':
          targetTop = parentViewTop - (parentOffsetHeight > targetHeight ? 0 : (targetHeight - parentOffsetHeight))
          targetLeft = parentViewLeft + parentOffsetWidth + this.popoverOffset
          break;
        case 'right-bottom':
          targetTop = parentViewTop + (parentOffsetHeight > targetHeight ? (parentOffsetHeight - targetHeight) : 0)
          targetLeft = parentViewLeft + parentOffsetWidth + this.popoverOffset
          break;
      }

      target.style.left = `${targetLeft}px`
      target.style.top = `${targetTop}px`
    }
  },

  watch: {
    show(val) {
      (val && this.instance) ? this.instance.showPopover() : this.instance.hidePopover()
    }
  },

  beforeDestroy () {
    this.instance && this.instance.remove()
    this.$destroy()
  }
}
</script>
