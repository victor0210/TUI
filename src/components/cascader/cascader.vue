<template>
  <div class="t-cascader" :class="{
      'is-focus': isFocus,
      'is-disabled': disabled,
      'is-clearable': clearable && label.length > 0,
      'is-searchable': searchable
    }">
    <div class="t-cascader__input" @click.prevent="checkout">
      <input type="text" readonly class="t-cascader__inner" :value="label">
      <i class="t-cascader__input-icon t-cascader__drop-icon fa fa-chevron-down" :class="{
        't-cascader__input-icon--open': isFocus
      }" ref="drop_icon"></i>
      <i class="t-cascader__input-icon t-cascader__clear-icon fa fa-times-circle" v-if="clearable && label !== ''" ref="clear_icon" @click.prevent="clearInput"></i>
    </div>
    <t-cascader-drop-menu :options="formatOptions" :select="select" :isFocus="isFocus" :selectIndex="selectIndex" :isSearching="isSearching" :searchText="searchText" v-if="initialized">
      <template>
        <ul class="t-cascader__list-sub" v-for="(ul, idx) in formatOptions" :key="idx" v-if="(selectIndex !== '' && idx <= showList) || idx === 0">
          <t-cascader-option v-for="(o, oidx) in ul" v-if="selectIndex.indexOf(o.parentPIndex) === 0 || idx === 0" :key="oidx"
            :label="o.label"
            :disabled="o.disabled"
            :val="o.val"
            :children="o.children"
            :pIndex="o.pIndex"
            :vIndex="o.vIndex"
            :lIndex="o.lIndex"
          />
        </ul>
      </template>
      <template slot="search">
        <ul class="t-cascader__list-sub t-cascader__list-sub--search">
          <span class="t-select__drop-menu--none" v-if="searchOptionsProps.length === 0 && isSearching">暂无数据</span>
          <t-cascader-option v-for="(opt, key) in searchOptionsProps" :key="key" :pIndex="opt.pIndex" :lIndex="opt.lIndex" :vIndex="opt.vIndex" :label="opt.label" :val="opt.val" search/>
        </ul>
      </template>
    </t-cascader-drop-menu>
  </div>
</template>

<script>
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'
import TCascaderOption from './cascader-option'
import TCascaderDropMenu from './cascader-drop-menu'

//  TODO 1.position 2.cancelBlur 3.focusIndex change 4.keyboard(doing) 5.clearable
export default {
  name: 't-cascader',

  components: {
    TCascaderOption,
    TCascaderDropMenu
  },

  mixins: [ArrayHelper, Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  data () {
    return {
      label: '',
      indexSplit: '^&*%', // set unique valueIndex chars
      initialized: false,
      isFocus: false,
      select: this,
      formatOptions: [],
      selectIndex: '',
      valueIndex: '',
      searchCollections: [],
      isSearching: false,
      searchText: '',
      searchOptions: [],
      optionChildren: [],
      searchOptionsProps: [],
      searchFocusIndex: null,
      focusIndex: {
        x: null,
        y: null
      },
      searchFocusDirection: '',
      focusDirection: '',
      searchMenu: null,
      optionMenu: [],
      searchInput: null
    }
  },
  props: {
    disabled: Boolean,
    clearable: Boolean,
    options: {},
    value: Array,
    searchable: Boolean
  },

  created () {
    this.$on('select', this.selectHandler)
    this.$on('cascader-drop-component-register', this.dropMenuRegister)

    this.$on('option-register', this.optionRegister)
    this.$on('option-bumper', this.optionBumper)
    this.$on('search-option-register', this.searchOptionRegister)
    this.$on('search-option-bumper', this.searchOptionBumper)

    this.$on('edit-change', this.editChangeHandler)
  },

  mounted () {
    this.optionFormat(this.options)
  },

  methods: {
    optionRegister (child) {
      const pos = child.lIndex.split(this.indexSplit).length - 1

      this.optionChildren[pos].push(child)
      // const idx = this.optionChildren[pos].length - 5
      // if (this.value[pos] === child.val && idx > 0) this.$refs.list[pos].scrollTop = idx * 40
    },
    optionBumper (child) {
      const pos = child.lIndex.split(this.indexSplit).length - 1
      this.optionChildren[pos].shift()
    },
    searchOptionRegister (child) {
      this.searchOptions.push(child)
    },
    searchOptionBumper (option) {
      this.searchOptions = ArrayHelper.removeFromStore(this.searchOptions, option)
    },
    editChangeHandler (val) {
      //  doSearch
      this.searchText = val
      this.searchFocusIndex = null
      this.isSearching = val !== ''

      this.doSearch()
    },

    doSearch () {
      const _this = this
      this.searchOptionsProps = []

      this.searchCollections.forEach(function (el) {
        if (el.lIndex.indexOf(_this.searchText) !== -1 && !el.children) {
          el.label = el.lIndex.split(_this.indexSplit).join('/').replace(_this.searchText, `<keyword class="t-cascader__keyword">${_this.searchText}</keyword>`)
          _this.searchOptionsProps.push(el)
        }
      })
    },

    checkout () {
      this.isFocus = !this.isFocus
    },

    hide () {
      this.isFocus = false
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
        case 37:
          if (!_this.isSearching) {
            e.preventDefault()
            _this.focusLeft()
          }
          break
        case 39:
          if (!_this.isSearching) {
            e.preventDefault()
            _this.focusRight()
          }
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
        const {x, y} = this.focusIndex
        Component = this.optionChildren[x][y]
      }

      Component && this.$emit('select', Component)
    },

    focusLeft () {
      if (this.isSearching) return
      const {x} = this.focusIndex

      if (x > 0) {
        this.focusIndex = {
          x: x - 1,
          y: ~~this.selectIndex.split('-')[x - 1]
        }
        this.searchFocusDirection = ''
      }
    },

    focusRight () {
      if (this.isSearching) return
      const {x, y} = this.focusIndex

      if (!this.optionChildren[x][y].children) return

      if (x < this.formatOptions.length - 1) {
        this.focusIndex = {
          x: x + 1,
          y: 0
        }
        this.searchFocusDirection = ''
      }
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
          if (this.focusIndex.x === null || this.focusIndex.y === null) {
            this.focusIndex = {
              x: 0,
              y: 0
            }
          } else {
            let {x, y} = this.focusIndex
            if (y === this.optionChildren[x].length - 1) {
              this.focusIndex = {
                x: x,
                y: 0
              }
            } else {
              this.focusIndex = {
                x: x,
                y: y + 1
              }
            }
          }
          this.focusDirection = 'next'
        }
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
          if (this.focusIndex.x === null || this.focusIndex.y === null) {
            this.focusIndex = {
              x: 0,
              y: 0
            }
          } else {
            const {x, y} = this.focusIndex
            if (y === 0) {
              this.focusIndex = {
                x: x,
                y: this.optionChildren[x].length - 1
              }
            } else {
              this.focusIndex = {
                x: x,
                y: y - 1
              }
            }
          }
          this.focusDirection = 'previous'
        }
      }
    },

    fixScrollTop () {
      let list
      let index
      let direction

      if (this.isSearching) {
        list = this.searchMenu
        index = this.searchFocusIndex
        direction = this.searchFocusDirection
      } else {
        index = this.focusIndex.y
        list = this.optionMenu[this.focusIndex.x]
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
          if (offsetTop >= scrollEnd || offsetTop <= scrollStart) list.scrollTop = (index - 2) * 40
          break
      }
    },

    clickBlurSelect (e) {
      if (this.checkBlurClasses(e.target.className) && this.checkBlurEl(e.target)) {
        this.hide()
      }
    },

    checkBlurEl (el) {
      const ref = this.$refs
      let clickCancelEl = [
        ref.drop_icon
      ]

      if (ref.remove_icon) {
        clickCancelEl = [...clickCancelEl, ...ref.remove_icon]
      }

      return clickCancelEl.indexOf(el) === -1
    },

    checkBlurClasses (className) {
      let isNone = true
      let cancelBlurClasses = [
        't-cascader-option',
        't-cascader__inner',
        't-cascader__editor',
        't-cascader__editor-input',
        't-cascader__drop-menu--none'
      ]

      cancelBlurClasses.some(function (c) {
        if (className.indexOf(c) !== -1) {
          isNone = false
          return true
        }
      })

      return isNone
    },

    clearInput (e) {
      e.cancelBubble = true
      this.valueIndex = ''
      this.selectIndex = ''
      this.focusIndex = {
        x: null,
        y: null
      }
      this.label = ''

      this.$emit('input', [])
      this.hide()
    },

    //  format helper
    optionFormat (options, parentPositionIndex, parentValueIndex, parentLabelIndex, levelIndex = 0) {
      const _this = this

      if (!_this.formatOptions[levelIndex]) _this.formatOptions[levelIndex] = []

      options.forEach(function (el, idx) {
        _this.optionChildren[idx] = []

        el.pIndex = (parentPositionIndex === undefined ? idx : parentPositionIndex + '-' + idx).toString()
        el.vIndex = (parentValueIndex === undefined ? el.val : parentValueIndex + _this.indexSplit + el.val).toString()
        el.lIndex = (parentLabelIndex === undefined ? el.label : parentLabelIndex + _this.indexSplit + el.label).toString()
        el.parentPIndex = parentPositionIndex
        el.select = _this
        _this.searchCollections.push(el)
        _this.formatOptions[levelIndex].push(el)
        if (el.children !== undefined) {
          _this.optionFormat(el.children, el.pIndex, el.vIndex, el.lIndex, levelIndex + 1)
        } else if (el.vIndex === _this.value.join(_this.indexSplit)) {
          _this.label = el.lIndex.split(_this.indexSplit).join('/')
          _this.valueIndex = el.pIndex
          _this.selectIndex = el.pIndex
        }
      })
    },

    //  handlers
    selectHandler (optionComponent) {
      if (!optionComponent.children) {
        this.$emit('input', optionComponent.vIndex.split(this.indexSplit))
        this.label = optionComponent.lIndex.split(this.indexSplit).join('/')
        this.hide()
      }

      this.selectIndex = optionComponent.pIndex
      this.valueIndex = optionComponent.pIndex
    },

    dropMenuRegister (dropMenu) {
      this.dropMenu = dropMenu
      this.searchMenu = dropMenu.$el.children[3].children[0]
      this.optionMenu = dropMenu.$el.children[2].children
      this.searchInput = dropMenu.$el.children[0].children[0]
    }
  },
  computed: {
    showList () {
      let arr = this.selectIndex.split('-')
      let level = arr.length - 1
      let el = this.optionChildren[level][arr[level]]

      return (!!el && el.children) ? level + 1 : level
    }
  },
  watch: {
    isFocus (focus) {
      if (focus) {
        if (!this.initialized) this.initialized = true

        this.dropMenu && this.dropMenu.show()
        this.selectIndex = this.valueIndex

        this.focusIndex = {
          x: null,
          y: null
        }
        this.searchFocusDirection = ''

        setTimeout(() => {
          this.searchInput.focus()
        }, 100)

        this.addListener()
      } else {
        this.dropMenu.hide()

        this.removeListener()
      }
    },
    searchFocusIndex (val, old) {
      if (old !== null) this.action(this.searchOptions[old], 'blur')
      if (val !== null) {
        if (!this.searchOptions[val].disabled) {
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
    },

    focusIndex (val, old) {
      if (old.x !== null) {
        const {x, y} = old
        this.action(this.optionChildren[x][y], 'blur')
      }

      if (val.x !== null) {
        const {x, y} = val
        if (!this.optionChildren[x][y].disabled) {
          this.action(this.optionChildren[x][y], 'focus')
        } else {
          if (this.focusDirection === 'next') {
            this.focusNext()
          } else if (this.focusDirection === 'previous') {
            this.focusPrevious()
          }
        }

        this.selectIndex = this.optionChildren[x][y].pIndex
        this.fixScrollTop()
      }
    }
  }
}

</script>

<style scoped>

</style>
