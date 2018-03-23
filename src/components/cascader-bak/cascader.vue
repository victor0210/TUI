<template>
  <div>
    <label class="t-cascader" :class="{
      'is-focus': isFocus,
      'is-disabled': disabled,
      'is-clearable': clearable && value !== '',
    }">
      <div class="t-cascader__input" ref="box" @click.prevent="checkout">
        <input type="text" :readonly="!searchable" class="t-cascader__search" v-model="editContent" ref="search_panel" :placeholder="(onlyLast ? shownLabel.split('/').pop() : shownLabel) || placeholder">
        <i class="t-cascader__icon fa fa-chevron-down" :class="{
          't-cascader__icon--open': isFocus
        }" ref="dropdown_flag"></i>
        <i class="t-cascader__icon t-cascader__icon--clear fa fa-times-circle" v-if="clearable && value !== ''" @click="clearInput" ref="clear"></i>
      </div>
    </label>

    <div class="t-cascader__list-container" ref="drop_menu">
      <transition-group name="fade">
        <ul class="t-cascader__list" v-if="editContent === '' && isFocus && (childIndex >= idx || idx === 0)" ref="list" :key="idx" v-for="(list, idx) in formatOptions">
          <t-cascader-option v-for="opt in list" v-if="idx===0 || (selectIndex.indexOf(opt.pidx) !== -1)" :label="opt.label" :val="opt.val" :children="!!opt.children" :key="opt.idx" :pos="idx" :store="store" :disabled="opt.disabled" :pidx="opt.pidx" :idx="opt.idx"/>
        </ul>
      </transition-group>
      <transition name="fade">
        <ul class="t-cascader__search-list" v-if="isFocus && searchResults.length > 0 && editContent !== ''" ref="search_list">
          <t-cascader-option v-for="(opt, key) in searchResults" :key="key" :idx="opt.idx" :label="opt.label" :val="opt.val" search/>
        </ul>
        <ul class="t-cascader__search-none" v-if="isFocus && searchResults.length === 0 && editContent !== ''">
          <t-cascader-option :label="noneText" :val="noneText" disabled/>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'
import TCascaderOption from './cascader-option'

//  TODO code rebuild --tag t1
export default {
  name: 't-cascader',

  components: {
    TCascaderOption
  },

  mixins: [ArrayHelper, Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  data () {
    return {
      optionLineHeight: 40,
      optionEmitScrollIndex: 4,
      isFocus: false,
      store: [],
      focusIndex: null,
      searchFocusIndex: null,
      focusPosition: 0,
      childrenLength: 0,
      optionChildren: [],
      searchOptionChildren: [],
      editContent: '',
      formatOptions: [],
      selectIndex: '',
      valueIndex: '',
      childIndex: 0,
      scrollPosition: [],
      searchResults: [],
      shownLabel: '',
      posStore: []
    }
  },
  props: {
    placeholder: {
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    onlyLast: Boolean,
    searchable: Boolean,
    value: {},
    option: {},
    noneText: {
      type: String,
      default: 'None'
    }
  },

  beforeMount () {
    this.formatOption()
    this.setLabel()
    this.setValueIndex()
  },

  mounted () {
    this.$on('select', this.selectHandler)
    this.$on('select-bak-search', this.selectSearchHandler)

    this.$on('hide', this.hideHandler)
    this.$on('init-focus-index', this.initFocusByChild)
    this.$on('option-register', this.optionRegister)
    this.$on('option-bumper', this.optionBumper)
    this.$on('search-option-register', this.searchOptionRegister)
    this.$on('search-option-bumper', this.searchOptionBumper)

    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
  },
  updated () {
    if (this.isFocus) {
      let w = 0
      this.$refs.list.forEach(function (el) {
        w += el.offsetWidth
      })
      this.$refs.drop_menu.style.width = w + 'px'
    }
    console.log(this.$refs.drop_menu.offsetLeft)
  },
  methods: {
    reset () {
      this.clearInput(window.event)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
    },
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
    },
    formatOption (opts = this.option, idx = 0, pIndex = '', pLabelIndex = '') {
      const _this = this
      opts.map(function (el) {
        el.hasChild = !!el.children
        if (idx === 0) {
          el.idx = pIndex.concat(el.val)
          el.labelIdx = pLabelIndex.concat(el.label)
        } else {
          el.idx = pIndex.concat('-' + el.val)
          el.labelIdx = pLabelIndex.concat('-' + el.label)
          el.pidx = pIndex
        }
        if (_this.formatOptions[idx] === undefined) _this.formatOptions[idx] = []
        _this.formatOptions[idx].push(el)
        if (el.children !== undefined) {
          _this.formatOption(el.children, idx + 1, el.idx, el.labelIdx)
        }
      })
    },
    checkout (e) {
      if (this.disabled) return
      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (!this.isFocus) {
        this.focusIndex = null
        this.focusPosition = 0
        this.childrenLength = 0
        this.editContent = ''
        this.searchable && this.$refs.search_panel.blur()
        this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
        this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      } else {
        this.store = ArrayHelper.mapValue(this.value)
        this.childIndex = this.store.length - 1
        this.searchable && this.$refs.search_panel.focus()
      }
    },
    optionRegister (child) {
      if (this.optionChildren[child.pos] === undefined) this.optionChildren[child.pos] = []
      this.optionChildren[child.pos].push(child)
      const idx = this.optionChildren[child.pos].length - 5
      if (this.value[child.pos] === child.val && idx > 0) this.$refs.list[child.pos].scrollTop = idx * 40
    },
    optionBumper (child) {
      this.optionChildren[child.pos].shift()
    },
    searchOptionRegister (child) {
      this.searchOptionChildren.push(child)
    },
    searchOptionBumper () {
      this.searchOptionChildren.shift()
    },
    addListener () {
      document.addEventListener('keydown', this.keyDownHandler)
      document.addEventListener('click', this.clickBlurSelect, true)
    },
    removeListener () {
      document.removeEventListener('keydown', this.keyDownHandler)
      document.removeEventListener('click', this.clickBlurSelect, true)
    },
    clickBlurSelect (e) {
      //  add blur listener to some element which couldn't auto fire checkout
      const className = e.target.className
      this.clickCancelEl = [this.$refs.box].concat(this.$refs.clear).concat(this.$refs.search_panel).concat(this.$refs.dropdown_flag)

      if (className !== 't-cascader-option__keyword' && className.indexOf('t-cascader-option') === -1 && this.clickCancelEl.indexOf(e.target) === -1) {
        this.$emit('hide', e)
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
        case 37:
          if (_this.editContent === '') {
            e.preventDefault()
            _this.focusParent()
          }
          break
        case 39:
          if (_this.editContent === '') {
            e.preventDefault()
            _this.focusChild()
          }
          break
        case 27:
          e.preventDefault()
          _this.checkout(e)
          break
        case 13:
          e.preventDefault()
          if (_this.editContent !== '') {
            _this.searchFocusIndex !== null && _this.searchOptionChildren[_this.searchFocusIndex].handleClick(e)
            return
          }
          if (!_this.optionChildren[_this.focusPosition][_this.focusIndex].children) {
            this.$emit('input', this.store)
            _this.$emit('hide', e)
            _this.editContent = ''
          }
          break
      }
    },
    hideHandler (e) {
      e.preventDefault()
      this.isFocus && this.checkout(e)
    },
    focusParent () {
      if (this.editContent === '') {
        const idx = this.focusIndex
        const prePos = this.focusPosition
        if (this.focusPosition > 0 && this.focusIndex !== null) {
          this.focusPosition--
          this.focusIndex = this.posStore[this.posStore.length - 1]
          this.switchFocusEl(this.focusIndex, this.focusPosition, idx, prePos)
          this.posStore.pop()
          this.store.pop()
          this.$refs.list[this.focusPosition].scrollTop = (this.focusIndex - 4) * 40
        }
      }
    },
    focusChild () {
      if (this.editContent === '') {
        const idx = this.focusIndex
        const prePos = this.focusPosition
        if (this.focusIndex !== null && this.optionChildren[prePos][idx].children) {
          this.focusPosition++
          this.posStore.push(idx)
          console.log(this.posStore)
          this.switchFocusEl(0, this.focusPosition, idx, prePos)
          this.focusIndex = 0
          this.$refs.list[this.focusPosition].scrollTop = 0
        }
      }
    },
    focusNext () {
      if (this.editContent === '') {
        const pre = this.focusIndex
        const pos = this.focusPosition
        if (this.focusIndex !== null) {
          this.focusIndex = (this.focusIndex === this.optionChildren[this.focusPosition].length - 1) ? 0 : this.focusIndex + 1
        } else {
          this.valueIndex = ''
          this.store = []
          this.focusIndex = 0
        }
        this.switchFocusEl(this.focusIndex, pos, pre, pos)
        this.setListScroll('next')
      } else {
        if (this.searchFocusIndex !== null) {
          this.searchFocusIndex = (this.searchFocusIndex === this.searchOptionChildren.length - 1 ? 0 : this.searchFocusIndex + 1)
        } else {
          this.valueIndex = ''
          this.store = []
          this.searchFocusIndex = 0
        }
        this.setListScroll('next')
      }
    },
    focusPrevious () {
      if (this.editContent === '') {
        const pre = this.focusIndex
        const pos = this.focusPosition
        if (this.focusIndex !== null) {
          this.focusIndex = (this.focusIndex === 0 ? this.optionChildren[this.focusPosition].length - 1 : this.focusIndex - 1)
        } else {
          this.focusIndex = this.optionChildren[this.focusPosition].length - 1
        }
        this.switchFocusEl(this.focusIndex, pos, pre, pos)
        this.setListScroll('previous')
      } else {
        if (this.searchFocusIndex !== null) {
          this.searchFocusIndex = (this.searchFocusIndex === 0 ? this.searchOptionChildren.length - 1 : this.searchFocusIndex - 1)
        } else {
          this.searchFocusIndex = this.searchOptionChildren.length - 1
        }
        this.setListScroll('previous')
      }
    },
    setListScroll (direction, force = false) {
      const index = this.editContent === '' ? this.focusIndex : this.searchFocusIndex
      const pos = this.focusPosition
      const len = this.editContent === '' ? this.optionChildren[pos].length : this.searchOptionChildren.length
      //  fix scroll with editpanel potion error
      //  if there is a editpanel over list ,n = 1
      const n = 0
      const i = this.optionEmitScrollIndex
      const h = this.optionLineHeight
      const list = this.editContent === '' ? this.$refs.list[pos] : this.$refs.search_list
      switch (direction) {
        case 'next':
          if (list.scrollTop < (index - n - i) * h) {
            list.scrollTop = (index - n - i) * h
          } else {
            list.scrollTop = 0
          }
          break
        case 'previous':
          if (index === len - 1) {
            list.scrollTop = (index - n - i) * h
          } else if (list.scrollTop > (index - n) * h) {
            list.scrollTop = (index - n) * h
          }
          break
      }

      if (this.editContent === '') {
        if (this.optionChildren[pos][index].disabled || (this.searchable && !this.optionChildren[pos][index].val)) {
          if (!force) {
            direction === 'next' ? this.focusNext() : this.focusPrevious()
          }
        }
      }
    },
    selectHandler ({e, val, pos, hasChildren, hover}) {
      if (this.store[pos] !== val) {
        this.store = ArrayHelper.addToStoreWithIndex(this.store, val, pos)
      }
      if (!hasChildren) {
        if (!hover) {
          this.$emit('input', this.store)
          this.$emit('hide', e)
        }
        this.childIndex = pos
      } else {
        this.childIndex = pos + 1
      }
    },
    selectSearchHandler ({e, val}) {
      this.store = val
      this.$emit('input', this.store)
      this.$emit('hide', e)
    },
    switchFocusEl (newIdx, newPos, preIdx, prePos) {
      if (newIdx === preIdx && newPos === prePos) return
      const newEl = this.optionChildren[newPos][newIdx]
      if (newIdx !== null && ArrayHelper.between(newIdx, 0, this.optionChildren[newPos].length)) {
        newEl.focusSelect()
        if (newEl.children) {
          newEl.handleClick()
        } else {
          newEl.handleHover()
        }
      }
      preIdx !== null && ArrayHelper.between(preIdx, 0, this.optionChildren[prePos].length) && this.optionChildren[prePos][preIdx].blurSelect()
    },
    clearInput (e) {
      e.preventDefault()
      e.cancelBubble = true
      this.childIndex = 0
      this.$emit('input', '')
    },
    search (el, target) {
      if (el.labelIdx.indexOf(target) !== -1 && el.hasChild === false) {
        this.searchResults.push(this.transIndex(el.idx, el.labelIdx, target))
      }
    },
    transIndex (idx, labelIdx, keyword) {
      const arr = labelIdx.split('-')
      return {
        label: arr.join('/').replace(keyword, `<keyword class="t-cascader__keyword">${keyword}</keyword>`),
        val: arr[arr.length - 1],
        idx: idx
      }
    },
    inputChangeHandler (e) {
      this.editContent = e.target.value
    },
    setLabel () {
      const _this = this
      let val = this.value || []
      this.shownLabel = ''
      this.formatOptions.forEach(function (posArr, pos) {
        posArr.forEach(function (element) {
          element.idx === val.join('-') && (_this.shownLabel = element.labelIdx.replace(/-/g, '/'))
        })
      })
    },
    setValueIndex () {
      // this.value && (this.valueIndex = this.value.join('-'))
      if (this.value) {
        this.valueIndex = this.value.join('-')
      } else {
        this.valueIndex = ''
      }
    }
  },
  watch: {
    value (val) {
      this.store = ArrayHelper.mapValue(val)
      console.log(val)
      this.setValueIndex()
      this.setLabel()
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', val)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', val)
    },
    store (val) {
      console.log(val, 'storechange')
      this.selectIndex = val.join('-')
      console.log(this.selectIndex)
    },
    editContent (val) {
      const _this = this
      this.searchResults = []
      this.formatOptions.forEach(function (posArr, pos) {
        posArr.forEach(function (element) {
          _this.search(element, val)
        })
      })
      this.searchFocusIndex = null
    },
    searchFocusIndex (val, pre) {
      val !== null && this.searchOptionChildren[val].focusSelect()
      pre !== null && this.searchOptionChildren[pre].blurSelect()
    }
  }
}

</script>

<style scoped>

</style>
