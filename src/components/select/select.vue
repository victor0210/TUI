<template>
  <div class="t-select" @click="checkout" :class="[
    isFocus ? 'is-focus' : '',
    disabled ? 'is-disabled' : '',
    clearable && !isEmpty ? 'is-clearable' : ''
  ]">
    <div class="t-select__input" ref="input">
      <i class="t-select__input-icon t-select__drop-icon fa fa-chevron-down" :class="{
        't-select__input-icon--open': isFocus
      }" ref="drop_icon"></i>
      <i class="t-select__input-icon t-select__clear-icon fa fa-times-circle" @click.prevent="clearInput" ref="clear_icon"></i>

      <div v-if="multiple" class="t-select__inner" ref="multi_inner">
        <template v-if="!collapseTags">
          <span class="t-select__tag" v-for="(t, idx) in multipleInputLabel" :key="idx" ref="multi_tag">{{ t.label }}<i class="fa fa-times-circle" @click.prevent="removeTag(t.val)" ref="remove_icon"></i></span>
        </template>
        <template v-else>
          <span class="t-select__tag" v-if="multipleInputLabel[0]">{{ multipleInputLabel[0].label }}<i class="fa fa-times-circle" @click.prevent="removeTag(multipleInputLabel[0].val)"></i></span>
          <span class="t-select__tag" v-if="multipleInputLabel.length > 1">+ {{ multipleInputLabel.length - 1 }}</span>
        </template>
      </div>

      <input type="text" class="t-select__inner" v-model="inputLabel" readonly v-if="!multiple" ref="input_inner"/>
    </div>

    <t-select-drop-menu :initialized="initialized" :select="select" :is-focus="isFocus" :searchText="searchText" :input-height="inputHeight">
      <slot></slot>
      <template slot="search">
        <span class="t-select__drop-menu--none" v-if="searchOptionsProps.length === 0 && isSearching">暂无数据</span>
        <t-option v-for="(o, idx) in searchOptionsProps" :key="idx" :label="o.label" :val="o.val" :disabled="o.disabled" search/>
      </template>
    </t-select-drop-menu>
  </div>
</template>
<script>
import TSelectDropMenu from './select-drop-menu'
import Emitter from '../../mixins/emitter'
import ArrayHelper from '../../mixins/arrayHelper'

export default {
  components: {
    TSelectDropMenu
  },

  mixins: [Emitter, ArrayHelper],

  name: 't-select',

  data () {
    return {
      initialized: false,
      select: this,
      store: [],
      inputLabel: '',
      multipleInputLabel: [],
      isFocus: false,
      options: [],
      dropMenu: null,
      searchInput: null,
      optionMenu: null,
      searchMenu: null,
      searchOptions: [],
      searchOptionsProps: [],
      isSearching: false,
      searchText: '',
      focusIndex: null,
      searchFocusIndex: null,
      valueIndex: null,
      searchFocusDirection: '', //  direction belongs to ['next', 'previous', 'none']
      focusDirection: '',
      //  list positon datas
      inputHeight: 0
    }
  },

  props: {
    multiple: Boolean,
    collapseTags: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    editable: Boolean,
    searchable: Boolean,
    value: {}
  },

  created () {
    this.$on('init-input-label', this.setInputLabel)
    this.$on('init-multiple-input-label', this.initMultipleValue)

    this.$on('option-register', this.optionRegister)
    this.$on('option-bumper', this.optionBumper)
    this.$on('search-option-register', this.searchOptionRegister)
    this.$on('search-option-bumper', this.searchOptionBumper)
    this.$on('select-drop-component-register', this.dropMenuRegister)

    this.$on('select', this.selectHandler)
    this.$on('edit-change', this.editChangeHandler)
    this.$on('add-custom-tag', this.addTag)
  },

  mounted () {
    this.validatorInput()
    this.initSelectLabel()
    this.setStore(this.value)
  },

  updated () {
    if (this.inputHeight !== this.$refs.input.offsetHeight) this.setInputHeight(this.$refs.input.offsetHeight)
  },

  methods: {
    validatorInput () {
      if (this.multiple && !Array.isArray(this.value)) {
        throw new Error('init value must be type "Array" when use "multiple" attribute')
      }
    },
    dropMenuRegister (dropMenu) {
      this.dropMenu = dropMenu
      this.searchInput = dropMenu.$el.children[1].children[0]
      this.optionMenu = dropMenu.$el.children[2]
      this.searchMenu = dropMenu.$el.children[3]
    },
    setStore (val) {
      this.store = val
    },
    setInputLabel (label) {
      this.inputLabel = label
    },
    checkout () {
      if (this.disabled) return

      this.isFocus = !this.isFocus
    },
    hide () {
      this.isFocus = false
    },
    optionRegister (option) {
      this.options.push(option)

      if (this.value === option.val || this.value.indexOf(option.val) !== -1) {
        this.setValueIndex('', this.options.length - 1)
        this.focusDirection = 'none'
      }

      //  init label
      if (option.val === this.value) {
        this.setInputLabel(option.label)
      }
    },
    searchOptionRegister (option) {
      this.searchOptions.push(option)
    },
    optionBumper () {
      this.options.pop()
    },
    searchOptionBumper () {
      this.searchOptions.pop()
    },
    selectHandler ({val, label}) {
      if (this.multiple) {
        this.setMultipleValue({val, label})
      } else {
        this.setStore(val)
        this.setInputLabel(label)

        this.hide()
      }
      this.setValueIndex(val)
    },
    clearInput (e) {
      e.cancelBubble = true

      if (this.multiple) {
        this.multipleInputLabel = []
        this.store = []
      } else {
        this.inputLabel = ''
        this.store = ''
      }
    },

    //  multiple functions
    removeTag (val) {
      if (this.disabled) return

      window.event.cancelBubble = true
      this.removeMultipleStore(val)
    },

    //  just editable self function
    addTag () {
      let val = this.searchText
      let label = val
      if (this.multiple) {
        this.setMultipleValue({val, label})
      } else {
        this.setInputLabel(val)
        this.setStore(val)
        this.searchText = ''
      }

      this.$emit('edit-change', '')
    },
    initMultipleValue ({val, label}) {
      this.setStore(ArrayHelper.addToStore(this.store, val))
      this.setMultipleInputLabel(ArrayHelper.addToStore(this.multipleInputLabel, {val: val, label: label}))
    },
    setMultipleValue ({val, label}) {
      if (this.store.indexOf(val) === -1) {
        this.addMultipleStore(val, label)
      } else {
        this.removeMultipleStore(val)
      }
    },
    addMultipleStore (val, label) {
      this.setStore(ArrayHelper.addToStore(this.store, val))
      this.setMultipleInputLabel(ArrayHelper.addToStore(this.multipleInputLabel, {val: val, label: label}))
    },
    removeMultipleStore (val) {
      this.setStore(ArrayHelper.removeFromStore(this.store, val))
      this.setMultipleInputLabel(ArrayHelper.removeFromStoreByKey(this.multipleInputLabel, 'val', val))
    },
    setMultipleInputLabel (labels) {
      this.multipleInputLabel = labels
    },

    initMultipleLabel () {
      const _this = this

      this.setMultipleInputLabel([])
      this.$slots.default.forEach(function (el) {
        if (el.tag && (el.componentOptions.tag !== 't-option-group')) {
          const elm = el.componentOptions.propsData
          if (_this.value.indexOf(elm.val) !== -1) {
            _this.$emit('init-multiple-input-label', {val: elm.val, label: elm.label})
          }
        } else if (el.tag && (el.componentOptions.tag === 't-option-group')) {
          console.log(el.$children)
          el.$children.forEach(function (opt) {
            const elm = opt.componentOptions.propsData
            if (_this.value.indexOf(elm.val) !== -1) {
              _this.$emit('init-multiple-input-label', {val: elm.val, label: elm.label})
            }
          })
        }
      })
    },

    initSingleLabel () {
      const _this = this
      this.$slots.default.some(function (el) {
        if (el.tag && (el.componentOptions.tag !== 't-option-group')) {
          const elm = el.componentOptions.propsData
          if (elm.val === _this.value) {
            _this.$emit('init-input-label', elm.label)
            return true
          }
        } else if (el.tag && (el.componentOptions.tag === 't-option-group')) {
          console.log(el)
          el.componentOptions.children.some(function (opt) {
            if (opt.tag) {
              const elm = opt.componentOptions.propsData
              if (_this.value === elm.val) {
                _this.$emit('init-input-label', elm.label)
                return true
              }
            }
          })
        }
      })
    },

    initSelectLabel () {
      if (!this.$slots.default) return
      this.multiple ? this.initMultipleLabel() : this.initSingleLabel()
    },

    //  editor
    editChangeHandler (val) {
      //  doSearch
      this.searchOptionsProps = []
      this.searchText = val

      if (val !== '') {
        this.isSearching = true
        this.doSearch(val)
      } else {
        this.isSearching = false
      }
    },

    doSearch (val) {
      const _this = this
      this.options.forEach(function (el) {
        if (el.label.indexOf(val) !== -1) {
          _this.searchOptionsProps.push(el.$props)
        }
      })
    },

    //  list position
    setInputHeight (h) {
      //  emit list position change
      this.inputHeight = h
    },

    //  add close list event listener && list keyboard listener
    addListener () {
      document.addEventListener('keydown', this.keyDownHandler)
      document.addEventListener('click', this.clickBlurSelect, true)
    },
    removeListener () {
      document.removeEventListener('keydown', this.keyDownHandler)
      document.removeEventListener('click', this.clickBlurSelect, true)
    },

    clickBlurSelect (e) {
      if (this.checkBlurClasses(e.target.className) && this.checkBlurEl(e.target)) {
        this.hide()
      }
    },

    checkBlurEl (el) {
      const ref = this.$refs
      let clickCancelEl = [
        ref.input_inner,
        ref.multi_inner,
        ref.drop_icon,
        ref.clear_icon
      ]

      if (ref.multi_tag) {
        clickCancelEl = [...clickCancelEl, ...ref.multi_tag]
      }
      if (ref.remove_icon) {
        clickCancelEl = [...clickCancelEl, ...ref.remove_icon]
      }

      return clickCancelEl.indexOf(el) === -1
    },

    checkBlurClasses (className) {
      let isNone = true
      let cancelBlurClasses = [
        't-option',
        't-select__editor',
        't-select__editor-input',
        't-select__add-tag',
        't-select__drop-menu--none'
      ]

      cancelBlurClasses.some(function (c) {
        if (className.indexOf(c) !== -1) {
          isNone = false
          return true
        }
      })

      return isNone
    },

    initFocusIndex () {
      this.focusDirection = 'none'
      this.focusIndex = this.valueIndex
    },

    setValueIndex (val, index) {
      if (index === undefined) {
        const _this = this

        this.options.forEach(function (el, idx) {
          if (el.val === val) {
            _this.valueIndex = idx
          }
        })
      } else {
        this.valueIndex = index
      }
    },

    keyDownHandler (e) {
      const _this = this
      switch (e.keyCode) {
        case 40:
          e.preventDefault()
          _this.focusNext()
          break
        case 38:
          e.preventDefault()
          _this.focusPrevious()
          break
        case 27:
          e.preventDefault()
          _this.hide()
          break
        case 13:
          e.preventDefault()
          _this.commitEnter()
          break
      }
    },

    commitEnter () {
      let Component
      if (this.isSearching && this.searchOptions.length > 0 && this.searchFocusIndex !== null) {
        Component = this.searchOptions[this.searchFocusIndex]
      } else if (!this.isSearching && this.options.length > 0 && this.focusIndex !== null) {
        Component = this.options[this.focusIndex]
      }

      Component && this.$emit('select', {val: Component.val, label: Component.label})
    },

    focusNext () {
      if (this.isSearching) {
        if (this.searchOptions.length > 0) {
          if (this.searchFocusIndex === null) {
            this.searchFocusIndex = 0
          } else {
            if (this.searchFocusIndex === this.searchOptions.length - 1) {
              this.searchFocusIndex = 0
            } else {
              this.searchFocusIndex += 1
            }
          }
          this.searchFocusDirection = 'next'
        }
      } else {
        if (this.options.length > 0) {
          if (this.focusIndex === null) {
            this.focusIndex = 0
          } else {
            if (this.focusIndex === this.options.length - 1) {
              this.focusIndex = 0
            } else {
              this.focusIndex += 1
            }
          }
          this.focusDirection = 'next'
        }
      }
    },

    fixScrollTop () {
      let list
      let index
      let direction

      console.log(this.isSearching)
      if (this.isSearching) {
        console.log('s')
        list = this.searchMenu
        index = this.searchFocusIndex
        direction = this.searchFocusDirection
      } else {
        console.log('o')
        list = this.optionMenu
        index = this.focusIndex
        direction = this.focusDirection
      }

      let offsetTop = index * 40
      let scrollStart = list.scrollTop
      let scrollEnd = list.scrollTop + 200
      switch (direction) {
        case 'next':
          if (offsetTop >= scrollEnd || offsetTop <= scrollStart) list.scrollTop = (index - 4) * 40
          break
        case 'previous':
          if (offsetTop >= scrollEnd || offsetTop <= scrollStart) list.scrollTop = index * 40
          break
        default:
          break
      }
    },

    focusPrevious () {
      if (this.isSearching) {
        if (this.searchOptions.length > 0) {
          if (this.searchFocusIndex === null) {
            this.searchFocusIndex = 0
          } else {
            if (this.searchFocusIndex === 0) {
              this.searchFocusIndex = this.searchOptions.length - 1
            } else {
              this.searchFocusIndex -= 1
            }
          }
          this.searchFocusDirection = 'previous'
        }
      } else {
        if (this.options.length > 0) {
          if (this.focusIndex === null) {
            this.focusIndex = 0
          } else {
            if (this.focusIndex === 0) {
              this.focusIndex = this.options.length - 1
            } else {
              this.focusIndex -= 1
            }
          }
          this.focusDirection = 'previous'
        }
      }
    }
  },

  watch: {
    valueIndex (val) {
      this.focusIndex = val
    },
    store (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.store = val
      this.initSelectLabel()
      this.multiple ? this.setValueIndex(val[val.length - 1]) : this.setValueIndex(val)
    },
    isFocus (focus) {
      if (focus) {
        //  open first time
        this.dropMenu && this.dropMenu.show()

        !this.initialized && (this.initialized = true)

        this.initFocusIndex()
        this.addListener()

        setTimeout(() => {
          this.searchInput.focus()
        }, 100)
      } else {
        //  close
        this.dropMenu.hide()

        if (this.editable || this.searchable) {
          this.searchText = ''
          this.$emit('edit-change', '')
        }

        //  clear focus index
        this.focusIndex = null
        this.searchFocusIndex = null
        this.removeListener()
      }
    },
    focusIndex (val, old) {
      if (old !== null) this.action(this.options[old], 'blur')
      if (val !== null) {
        if (!this.options[val].disabled) {
          this.action(this.options[val], 'focus')
        } else {
          if (this.focusDirection === 'next') {
            this.focusNext()
          } else if (this.focusDirection === 'previous') {
            this.focusPrevious()
          }
        }
        this.fixScrollTop()
      }
    },
    searchFocusIndex (val, old) {
      console.log(val, old)
      if (old !== null) this.action(this.searchOptions[old], 'blur')
      if (val !== null) {
        if (!this.options[val].disabled) {
          this.action(this.searchOptions[val], 'focus')
        } else {
          if (this.searchFocusDirection === 'next') {
            this.focusNext()
          } else if (this.searchFocusDirection === 'previous') {
            this.focusPrevious()
          }
        }
        this.fixScrollTop()
      }
    }
  },

  computed: {
    isEmpty () {
      if (this.multiple) {
        return this.store.length === 0
      }
      return this.value === ''
    }
  },

  destroyed () {
    this.dropMenu && this.dropMenu.remove()
  }
}
</script>
