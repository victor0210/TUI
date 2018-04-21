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
      show: false,
      popoverIndex: ~~(Math.random() * 10000000),
      triggerEl: null,
      popoverEl: null
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
    },
    hideOnClick: Boolean,
    value: {}
  },

  render (h) {
    setTimeout(() => {
      if (this.instance) {
        this.instance.$forceUpdate()
        this.setPosition()
      }
    })

    return h('span', {
      // style: {
      //   display: this.$slots.popover ? '' : 'none'
      // },
      // class: this.$slots.popover ? `t-popover-${_this.popoverIndex}` : '',
      // on: {
      //   mouseenter: () => {
      //     _this.trigger === 'hover' && _this.showPopover()
      //   },
      //   mouseleave: () => {
      //     (_this.trigger === 'hover' || _this.trigger === 'focus') && _this.hidePopover()
      //   },
      //   click: () => {
      //     if (_this.trigger === 'click') {
      //       if (_this.show) {
      //         _this.hidePopover()
      //         _this.hideOnClick && document.body.removeEventListener('click', _this.outboxClickHandler, true)
      //       } else {
      //         _this.showPopover()
      //         _this.hideOnClick && document.body.addEventListener('click', _this.outboxClickHandler, true)
      //       }
      //     }
      //   },
      //   mousedown: () => {
      //     _this.trigger === 'focus' && _this.showPopover()
      //   },
      //   mouseup: () => {
      //     _this.trigger === 'focus' && _this.hidePopover()
      //   }
      // }
    }, [this.$slots.popover ? this.$slots.default : ''])
  },

  mounted () {
    this.$slots.popover && this.setTriggerTarget(this.$el.children[0], true)
    //  init popover visible
    this.value && this.showPopover()
    this.trigger === 'click' && this.hideOnClick && this.value && document.body.addEventListener('click', this.outboxClickHandler, true)
  },

  methods: {
    setTriggerTarget (el, inbox) {
      this.triggerEl = el

      el.className += ` t-popover-${this.popoverIndex}`

      el.onmouseenter = () => {
        this.trigger === 'hover' && this.showPopover()
      }

      el.onmouseleave = () => {
        (this.trigger === 'hover' || this.trigger === 'focus') && this.hidePopover()
      }

      el.onclick = () => {
        console.log(this.trigger, this.show)
        if (this.trigger === 'click') {
          if (this.show) {
            this.hidePopover()
            this.hideOnClick && document.body.removeEventListener('click', this.outboxClickHandler)
          } else {
            this.showPopover()
            this.hideOnClick && document.body.addEventListener('click', this.outboxClickHandler, true)
          }
        }
      }

      el.onmousedown = () => {
        this.trigger === 'focus' && this.showPopover()
      }

      el.onmouseup = () => {
        this.trigger === 'focus' && this.hidePopover()
      }
    },
    outboxClickHandler (e) {
      let parent = e.target.parentElement

      let inPopover = false
      while (parent !== null) {
        if (parent.attributes['popoveridx']) {
          if (~~parent.attributes['popoveridx'].value === this.popoverIndex) inPopover = true
        } else if (parent.className.indexOf(`t-popover-${this.popoverIndex}`) !== -1) {
          inPopover = true
        }
        parent = parent.parentElement
      }

      if (!inPopover) {
        this.hidePopover()
        document.body.removeEventListener('click', this.outboxClickHandler, true)
      }
    },
    showPopover () {
      !this.instance && this.createInstance()
      clearTimeout(this.hideClear)
      this.instance.showPopover()
      this.show = true
      this.$emit('input', true)
    },
    hidePopover () {
      if (this.show) {
        this.hideClear = setTimeout(() => {
          this.instance.hidePopover()
          this.show = false
          this.$emit('input', false)
        }, 100)
      }
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
              height: _this.height,
              $idx: _this.popoverIndex
            },
            on: {
              'popover-mouseenter': () => {
                if (_this.trigger === 'hover') {
                  clearTimeout(_this.hideClear)
                  this.showPopover()
                  _this.show = true
                }
              },
              'popover-mouseleave': () => {
                if (_this.trigger === 'hover') {
                  _this.hideClear = setTimeout(() => {
                    this.hidePopover()
                    _this.show = false
                  }, 100)
                }
              }
            }
          }, [_this.$slots.popover || _this.$slots.default])
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
            }, 100)
          },
          remove () {
            window.removeEventListener('resize', this.setPosition)
            document.removeEventListener('scroll', this.setPosition, true)

            this.$el.style.opacity = 0
            _this.show && document.body.removeChild(this.$el)
            this.$destroy()
          }
        }
      })

      this.instance = Popover.$mount()
      this.popoverEl = this.instance.$el

      // _this.$slots.popover && document.body.appendChild(this.instance.$el)
      document.body.appendChild(this.popoverEl)

      setTimeout(() => {
        window.addEventListener('resize', this.setPosition)
        document.addEventListener('scroll', this.setPosition, true)
      })
    },

    setPosition () {
      const parent = this.triggerEl
      const target = this.popoverEl

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
          break
        case 'top-left':
          targetTop = parentViewTop - targetHeight - this.popoverOffset
          targetLeft = parentViewLeft - (parentOffsetWidth > targetWidth ? 0 : targetWidth - parentOffsetWidth)
          break
        case 'top-right':
          targetTop = parentViewTop - targetHeight - this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth > targetWidth ? parentOffsetWidth - targetWidth : 0)
          break
        case 'bottom':
          targetTop = parentViewTop + parentOffsetHeight + this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth - targetWidth) / 2
          break
        case 'bottom-left':
          targetTop = parentViewTop + parentOffsetHeight + this.popoverOffset
          targetLeft = parentViewLeft - (parentOffsetWidth > targetWidth ? 0 : targetWidth - parentOffsetWidth)
          break
        case 'bottom-right':
          targetTop = parentViewTop + parentOffsetHeight + this.popoverOffset
          targetLeft = parentViewLeft + (parentOffsetWidth > targetWidth ? parentOffsetWidth - targetWidth : 0)
          break
        case 'left':
          targetTop = parentViewTop + (parentOffsetHeight - targetHeight) / 2
          targetLeft = parentViewLeft - targetWidth - this.popoverOffset
          break
        case 'left-top':
          targetTop = parentViewTop - (parentOffsetHeight > targetHeight ? 0 : (targetHeight - parentOffsetHeight))
          targetLeft = parentViewLeft - targetWidth - this.popoverOffset
          break
        case 'left-bottom':
          targetTop = parentViewTop + (parentOffsetHeight > targetHeight ? (parentOffsetHeight - targetHeight) : 0)
          targetLeft = parentViewLeft - targetWidth - this.popoverOffset
          break
        case 'right':
          targetTop = parentViewTop + (parentOffsetHeight - targetHeight) / 2
          targetLeft = parentViewLeft + parentOffsetWidth + this.popoverOffset
          break
        case 'right-top':
          targetTop = parentViewTop - (parentOffsetHeight > targetHeight ? 0 : (targetHeight - parentOffsetHeight))
          targetLeft = parentViewLeft + parentOffsetWidth + this.popoverOffset
          break
        case 'right-bottom':
          targetTop = parentViewTop + (parentOffsetHeight > targetHeight ? (parentOffsetHeight - targetHeight) : 0)
          targetLeft = parentViewLeft + parentOffsetWidth + this.popoverOffset
          break
      }

      target.style.left = `${targetLeft}px`
      target.style.top = `${targetTop}px`
    }
  },

  watch: {
    value (val) {
      if (val && !this.show) this.showPopover()
      if (!val && this.show) this.hidePopover()
    }
  },

  beforeDestroy () {
    this.instance && this.instance.remove()
  }
}
</script>
