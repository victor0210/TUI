<script>
import Vue from 'vue'
import PositionHelper from '../../mixins/positionHelper'
import Emitter from '../../mixins/emitter'
let DropMenu

export default {
  name: 't-select-drop-menu',

  mixins: [PositionHelper, Emitter],

  data () {
    return {
      Instance: null,
      isInit: false,
      list: null,
      arrowRight: false
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

  mounted () {
    this.initSelectLabel()
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
        data: {
          parent: parent
        },
        render (h) {
          return h('div', {
            class: 't-select__list',
            style: {
              'display': _this.isFocus ? 'block' : 'none'
            }
          }, [h('div', {
            class: ['t-select__arrow-up', _this.arrowRight ? 't-select__arrow-up--right' : '']
          }), h('div', {
            class: 't-select__editor',
            style: {
              'display': parent.editable || parent.searchable ? 'block' : 'none'
            }
          }, [h('input', {
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
          })
          ]), h('ul', {
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
          }, [_this.$slots.search])
          ])
        },
        methods: {
          remove () {
            console.log('remove')
            this.$destroy()
            document.body.removeChild(this.$el)
          }
        }
      })

      let dropComponent = DropMenu.$mount()
      let list = dropComponent.$el
      document.body.appendChild(list)

      this.list = list

      this.setListPosition()

      window.onresize = () => {
        this.setListPosition()
      }

      window.onscroll = () => {
        this.setListPosition()
      }

      this.isInit = true

      this.action(parent, 'select-drop-component-register', list)
    },

    setListPosition () {
      const parent = this.select
      let offsetLeft = this.getElementLeft(parent.$el)
      let listWidth = this.list.offsetWidth

      if (listWidth + offsetLeft >= document.body.offsetWidth) {
        offsetLeft -= listWidth - parent.$el.offsetWidth
        this.arrowRight = true
      } else {
        this.arrowRight = false
      }

      let offsetTop = this.getElementTop(parent.$el)
      let offsetHeight = parent.$el.offsetHeight

      this.list.style.left = `${offsetLeft}px`
      this.list.style.top = `${offsetTop + offsetHeight + 5}px`
    },

    initSelectLabel () {
      if (this.$slots.default) {
        const _this = this
        if (_this.select.multiple) {
          this.$slots.default.forEach(function (el) {
            if (el.tag) {
              const elm = el.componentOptions.propsData
              if (_this.select.value.indexOf(elm.val) !== -1) {
                _this.action(_this.select, 'init-multiple-input-label', {val: elm.val, label: elm.label})
              }
            }
          })
        } else {
          this.$slots.default.some(function (el) {
            if (el.tag) {
              const elm = el.componentOptions.propsData
              if (elm.val === _this.select.value) {
                _this.action(_this.select, 'init-input-label', elm.label)
                return true
              }
            }
          })
        }
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
