<script>
import PositionHelper from '../../mixins/positionHelper'
import Emitter from '../../mixins/emitter'
import Vue from 'vue'

export default {
  name: 't-dropmenu',

  mixins: [PositionHelper, Emitter],

  data () {
    return {
      arrowRight: false,
      arrowTop: false,
      dropComponent: {},
      DropMenu: undefined
    }
  },

  props: {
    parent: {},
    isOpen: Boolean,
    initial: Boolean,
    width: Number,
    minWidth: Number,
    maxHeight: Number,
    textCenter: Boolean,
    side: Boolean
  },

  created () {
    this.$on('fresh-position', this.setListPosition)
    this.$on('sub-close-track', this.subCloseTrack)
  },

  updated () {
    if (this.DropMenu !== undefined) {
      this.DropMenu.$forceUpdate()
      this.$emit('fresh-position')
    }
  },

  render (h) {
    return h()
  },

  methods: {
    handleSubClose () {
      this.$emit('subclose')
    },
    handleSubOpen () {
      this.$emit('subopen')
    },
    onMouseEnter () {
      this.$emit('mouseenter')
    },
    onMouseLeave () {
      this.$emit('mouseleave')
    },
    onItemClick (cmd) {
      this.$emit('command', cmd)
    },
    onSubClose (cmd) {
      this.$emit('subcommand', cmd)
    },
    createList () {
      const _this = this
      const dropmenu = new Vue({
        created () {
          this.$on('item-click', _this.onItemClick)
          this.$on('sub-close', _this.onSubClose)
          this.$on('on-sub-open', _this.handleSubOpen)
          this.$on('on-sub-close', _this.handleSubClose)
        },

        render (h) {
          return h('ul', {
            class: 't-dropdown__menu',
            style: {
              width: _this.width ? `${_this.width}px` : (_this.width === 0 ? `${_this.parent.$el.offsetWidth}px` : ''),
              minWidth: _this.minWidth ? `${_this.minWidth}px` : '',
              textAlign: _this.textCenter ? 'center' : '',
              // position: _this.side ? 'absolute' : 'fixed'
              position: 'fixed'
            },
            on: {
              'mouseleave': _this.onMouseLeave,
              'mouseenter': _this.onMouseEnter
            }
          }, [_this.$slots.default])
        },
        methods: {
          remove () {
            this.$destroy()
            document.body.removeChild(this.$el)

            //  remove position fixer
            window.removeEventListener('resize', _this.setListPosition)
            document.removeEventListener('scroll', _this.setListPosition, true)
          },
          show () {
            this.$el.style.transformOrigin = _this.arrowTop ? 'bottom' : 'top'
            this.$el.style.transform = 'rotateX(0)'
            this.$el.style.opacity = 1
          },
          hide () {
            this.$el.style.transformOrigin = _this.arrowTop ? 'bottom' : 'top'
            this.$el.style.opacity = 0
            this.$el.style.transform = 'rotateX(90deg)'
          }
        }
      })

      const component = dropmenu.$mount()
      component.$options.name = 't-dropdown-menu'
      this.DropMenu = component
      this.list = component.$el
      component.hide()
      document.body.appendChild(component.$el)

      setTimeout(function () {
        component.show()
      })

      this.setListPosition()

      //  add position fixer
      window.addEventListener('resize', this.setListPosition)
      document.addEventListener('scroll', this.setListPosition, true)
    },
    setListPosition () {
      const parent = this.parent

      if (parent.isOpen) {
        let parentViewLeft = this.getElementViewLeft(parent.$el)
        let parentViewTop = this.getElementViewTop(parent.$el)

        let parentOffsetHeight = parent.$el.offsetHeight
        let parentOffsetWidth = parent.$el.offsetWidth
        let windowViewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        let listLeft = parentViewLeft
        let listTop = null

        let listWidth = this.list.offsetWidth
        let listHeight = this.list.offsetHeight

        if (!this.side) {
          if (listWidth + parentViewLeft >= document.body.offsetWidth) {
            listLeft -= listWidth - parentOffsetWidth
          }

          if (parentViewTop + listHeight + parentOffsetHeight + 5 > windowViewHeight) {
            listTop = parentViewTop - listHeight - 5
          } else {
            listTop = parentViewTop + parentOffsetHeight + 5
          }
        } else {
          listTop = parentViewTop

          if (listWidth + parentOffsetWidth + parentViewLeft + 5 >= document.body.offsetWidth) {
            listLeft -= listWidth + 5
          } else {
            listLeft += parentOffsetWidth + 5
          }
        }

        this.list.style.left = `${listLeft}px`
        this.list.style.top = `${listTop}px`
      }
    }
  },

  watch: {
    initial () {
      this.createList()
    },
    isOpen (val) {
      this.DropMenu && (val ? this.DropMenu.show() : this.DropMenu.hide())
    }
  },

  destroyed () {
    this.DropMenu && this.DropMenu.remove()
  }
}
</script>

<style scoped>

</style>
