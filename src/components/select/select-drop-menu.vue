<script>
import Vue from 'vue'
import PositionHelper from '../../mixins/positionHelper'
import Emitter from '../../mixins/emitter'
let DropMenu
let OptionMenu

export default {
  name: 't-select-drop-menu',

  mixins: [PositionHelper, Emitter],

  data () {
    return {
      Instance: null,
      isInit: false,
      list: null,
      arrowRight: false,
      arrowTop: false
    }
  },

  props: {
    select: {},
    isFocus: Boolean,
    initialized: Boolean,
    searchText: String
  },

  render (h) {
    return h()
  },

  created () {
    this.$on('fresh-position', this.setListPosition)
  },

  updated () {
    if (DropMenu !== undefined) {
      DropMenu.$forceUpdate()
      this.$emit('fresh-position')
    }
  },

  methods: {
    createList () {
      if (this.isInit) {
        DropMenu.remove()
        this.isInit = false
      }
      const _this = this
      const parent = this.select

      DropMenu = new Vue({
        props: {
          isFocus: _this.isFocus
        },
        data: {
          parent: parent
        },
        render (h) {
          return h('div', {
            class: 't-select__list'
          }, [h('div', {
            class: [
              't-select__arrow-up',
              _this.arrowRight ? 't-select__arrow-up--right' : '',
              _this.arrowTop ? 't-select__arrow-up--top' : ''
            ]
          }), h('div', {
            class: 't-select__editor',
            style: {
              'display': parent.editable || parent.searchable ? 'block' : 'none'
            }
          }, [h('input', {
            class: 't-select__editor-input',
            domProps: {
              placeholder: '请编辑',
              value: _this.searchText
            },
            on: {
              keyup: e => {
                _this.action(parent, 'edit-change', e.target.value)
              }
            }
          }), h('i', {
            class: 'fa fa-plus-circle t-select__add-tag',
            style: {
              'display': (parent.editable && (parent.searchOptions.length === 0) && (_this.searchText !== '')) ? 'block' : 'none'
            },
            on: {
              click: e => {
                e.preventDefault()
                e.cancelBubble = true

                _this.action(parent, 'add-custom-tag')
              }
            }
          })]), h('ul', {
            class: 't-select__drop-menu',
            ref: 'list',
            style: {
              'display': parent.isSearching ? 'none' : 'block'
            }
          }, [_this.$slots.default]), h('ul', {
            class: 't-select__drop-menu',
            ref: 'list',
            style: {
              'display': parent.isSearching ? 'block' : 'none'
            }
          }, [_this.$slots.search]), h(OptionMenu)])
        },
        methods: {
          remove () {
            console.log('ddd')
            this.$destroy()
            document.body.removeChild(this.$el)

            //  remove position fixer
            window.removeEventListener('resize', _this.setListPosition)
            document.removeEventListener('scroll', _this.setListPosition, true)
          },
          //  very small a bug with position change: animation
          show () {
            this.$el.style.display = 'block'
            setTimeout(() => {
              this.$el.style.opacity = 1
              this.$el.style.marginTop = 0
            })
          },
          hide () {
            this.$el.style.opacity = 0
            console.log(_this.arrowTop, 'att')
            this.$el.style.marginTop = _this.arrowTop ? '-10px' : '10px'
            setTimeout(() => {
              this.$el.style.display = 'none'
            }, 300)
          }
        }
      })

      let dropComponent = DropMenu.$mount()
      let list = dropComponent.$el

      //  set created transition
      list.style.opacity = '0'
      list.style.marginTop = '10px'

      document.body.appendChild(list)

      setTimeout(function () {
        list.style.opacity = '1'
        list.style.marginTop = '0'
      })

      this.list = list

      this.setListPosition()

      //  add position fixer
      window.addEventListener('resize', this.setListPosition)
      document.addEventListener('scroll', this.setListPosition, true)

      this.isInit = true

      this.action(parent, 'select-drop-component-register', dropComponent)
    },

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
      }
    }
  },

  watch: {
    initialized (val) {
      if (val) {
        this.createList()
      }
    }
  }
}
</script>
