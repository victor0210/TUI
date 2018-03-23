<script>
import Vue from 'vue'
import PositionHelper from '../../mixins/positionHelper'
import Emitter from '../../mixins/emitter'

let DropMenu

export default {
  name: 't-cascader-drop-menu',

  mixins: [PositionHelper, Emitter],

  props: {
    select: {},
    options: {},
    selectIndex: String,
    isSearching: Boolean,
    searchText: String
  },

  data () {
    return {
      isTransitioning: false
    }
  },

  updated () {
    DropMenu.$forceUpdate()
  },

  watch: {
    selectIndex () {
      DropMenu.$forceUpdate()
    }
  },

  render (h) {
    return h()
  },

  mounted () {
    const _this = this
    const parent = this.select

    DropMenu = new Vue({
      data: {
        parent: parent
      },
      render (h) {
        return h('div', {
          class: [
            't-cascader__list'
          ]
        }, [
          h('div', {
            class: 't-cascader__editor',
            style: {
              'display': parent.searchable ? 'block' : 'none'
            }
          }, [h('input', {
            class: 't-cascader__editor-input',
            domProps: {
              placeholder: '请搜索',
              value: _this.searchText
            },
            on: {
              input: e => {
                _this.action(parent, 'edit-change', e.target.value)
              }
            }
          })]),

          h('div', {
            class: [
              't-cascader__arrow-up',
              _this.arrowRight ? 't-cascader__arrow-up--right' : '',
              _this.arrowTop ? 't-cascader__arrow-up--top' : ''
            ]
          }),

          h('div', {
            class: 't-cascader__list-sub-container',
            style: {
              'display': _this.isSearching ? 'none' : 'inline-flex'
            }
          }, [_this.$slots.default]),

          h('div', {
            class: [
              't-cascader__list-sub-container'
            ],
            style: {
              'display': _this.isSearching ? 'inline-block' : 'none'
            },
            ref: 'search_list'
          }, _this.$slots.search)])
      },
      methods: {
        remove () {
          this.$destroy()
          document.body.removeChild(this.$el)

          //  remove position fixer
          window.removeEventListener('resize', _this.setListPosition)
          document.removeEventListener('scroll', _this.setListPosition, true)
        },
        //  very small a bug with position change: animation
        show () {
          this.$el.style.transformOrigin = _this.arrowTop ? 'bottom' : 'top'
          this.$el.style.transform = 'rotateX(0)'
          this.$el.style.opacity = 1
          _this.setListPosition()
        },
        hide () {
          this.$el.style.transformOrigin = _this.arrowTop ? 'bottom' : 'top'
          this.$el.style.opacity = 0
          this.$el.style.transform = 'rotateX(90deg)'
          _this.setListPosition()
        }
      }
    })

    let dropComponent = DropMenu.$mount()
    let list = dropComponent.$el

    this.list = list

    //  set created transition

    document.body.appendChild(list)
    dropComponent.hide()

    window.addEventListener('resize', this.setListPosition)
    document.addEventListener('scroll', this.setListPosition, true)

    setTimeout(() => {
      dropComponent.show()
    })

    this.action(parent, 'cascader-drop-component-register', dropComponent)
  },
  methods: {
    setListPosition () {
      const parent = this.select

      if (parent.isFocus) {
        let parentViewLeft = this.getElementViewLeft(parent.$el)
        let parentViewTop = this.getElementViewTop(parent.$el)

        let parentOffsetHeight = parent.$el.offsetHeight
        let parentOffsetWidth = parent.$el.offsetWidth
        let windowViewHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight

        let listLeft = parentViewLeft
        let listTop = null

        let listWidth = this.list.offsetWidth
        let listHeight = this.list.offsetHeight

        if (listWidth + parentViewLeft >= document.body.offsetWidth) {
          listLeft -= listWidth - parentOffsetWidth
          this.arrowRight = true
        } else {
          this.arrowRight = false
        }

        if (parentViewTop + listHeight + parentOffsetHeight + 5 > windowViewHeight) {
          this.arrowTop = true
          listTop = parentViewTop - listHeight - 5
        } else {
          this.arrowTop = false
          listTop = parentViewTop + parentOffsetHeight + 5
        }

        this.list.style.left = `${listLeft}px`
        this.list.style.top = `${listTop}px`

        DropMenu.$forceUpdate()
      }
    }
  }
}
</script>

<style scoped>

</style>
