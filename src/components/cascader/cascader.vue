<template>
  <div>
    <label class="t-cascader" :class="{
      'is-focus': isFocus,
      'is-disabled': disabled,
      'is-clearable': clearable && value !== '',
    }">
      <div class="t-cascader__input" @click="checkout" ref="box">
        <span v-if="label && !value" class="t-cascader__placeholder">{{ label }}</span>
        <span class="t-cascader__val" v-if="value !== ''" ref="val">{{ value.join('/') }}</span>

        <i class="t-cascader__icon fa fa-chevron-down" :class="{
          't-cascader__icon--open': isFocus
        }"></i>
        <i class="t-cascader__icon t-cascader__icon--clear fa fa-times-circle" v-if="clearable && value !== ''" @click="clearInput" ref="clear"></i>
      </div>
    </label>

    <div class="t-cascader__list-container">
      <transition-group name="fade">
        <ul class="t-cascader__list" v-if="isFocus && (childIndex >= idx || idx === 0 || store === value)" ref="list" :key="idx" v-for="(list, idx) in formatOptions">
          <t-cascader-option v-for="opt in list" v-if="idx===0 || (selectIndex.indexOf(opt.pidx) !== -1)" :label="opt.label" :val="opt.val" :children="!!opt.children" :key="opt.idx" :pos="idx" :store="store" :disabled="opt.disabled" :pidx="opt.pidx" :idx="opt.idx"/>
        </ul>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'
import TCascaderOption from './cascader-option'

//  TODO search / edit/ clearable/ fix focusParent Index to old Index
export default {
  name: 't-cascader',

  components: {
    TCascaderOption
  },

  mixins: [ArrayHelper, Emitter],

  data () {
    return {
      optionLineHeight: 40,
      optionEmitScrollIndex: 4,
      isFocus: false,
      store: [],
      focusIndex: null,
      focusPosition: 0,
      childrenLength: 0,
      optionChildren: [],
      editContent: '',
      formatOptions: [],
      selectIndex: '',
      childIndex: 0,
      scrollPosition: []
    }
  },
  props: {
    label: {
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    // editable: Boolean,
    // searchable: Boolean,
    value: {},
    option: {}
  },

  beforeMount () {
    this.formatOption()
  },

  mounted () {
    this.$on('select', this.selectHandler)

    this.$on('hide', this.hideHandler)
    this.$on('init-focus-index', this.initFocusByChild)
    this.$on('option-register', this.optionRegister)
    this.$on('option-bumper', this.optionBumper)
  },
  methods: {
    formatOption (opts = this.option, idx = 0, pIndex = '') {
      const _this = this
      opts.map(function (el) {
        if (idx === 0) {
          el.idx = pIndex.concat(el.val)
        } else {
          el.idx = pIndex.concat('-' + el.val)
          el.pidx = pIndex
        }
        if (_this.formatOptions[idx] === undefined) _this.formatOptions[idx] = []
        _this.formatOptions[idx].push(el)
        if (el.children !== undefined) {
          _this.formatOption(el.children, idx + 1, el.idx)
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
      } else {
        this.store = ArrayHelper.mapValue(this.value)
        this.childIndex = this.store.length - 1
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
    addListener () {
      document.addEventListener('keydown', this.keyDownHandler)
      document.addEventListener('click', this.clickBlurSelect, true)
    },
    removeListener () {
      document.removeEventListener('keydown', this.keyDownHandler)
      document.removeEventListener('click', this.clickBlurSelect, true)
    },
    clickBlurSelect (e) {
      this.clickCancelEl = [this.$refs.box].concat(this.$refs.val).concat(this.$refs.clear)
      if (!e.target.className || (e.target.className.trim().indexOf('t-cascader-option') === -1 && this.clickCancelEl.indexOf(e.target) === -1)) {
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
          e.preventDefault()
          _this.focusParent()
          break
        case 39:
          e.preventDefault()
          _this.focusChild()
          break
        case 27:
          e.preventDefault()
          _this.checkout(e)
          break
        case 13:
          e.preventDefault()
          if (_this.searchable && _this.optionChildren.length === 1) {
            return false
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
      const idx = this.focusIndex
      const prePos = this.focusPosition
      if (this.focusPosition > 0 && this.focusIndex !== null) {
        this.focusPosition--
        this.switchFocusEl(0, this.focusPosition, idx, prePos)
        this.focusIndex = 0
        this.$refs.list[this.focusPosition].scrollTop = 0
      }
    },
    focusChild () {
      const idx = this.focusIndex
      const prePos = this.focusPosition
      if (this.focusIndex !== null && this.optionChildren[prePos][idx].children) {
        this.focusPosition++
        this.switchFocusEl(0, this.focusPosition, idx, prePos)
        this.focusIndex = 0
        this.$refs.list[this.focusPosition].scrollTop = 0
      }
    },
    focusNext () {
      const pre = this.focusIndex
      const pos = this.focusPosition
      if (this.focusIndex !== null) {
        this.focusIndex = (this.focusIndex === this.optionChildren[this.focusPosition].length - 1) ? 0 : this.focusIndex + 1
      } else {
        this.focusIndex = 0
      }
      this.switchFocusEl(this.focusIndex, pos, pre, pos)
      this.setFocusIndex('next')
    },
    focusPrevious () {
      const pre = this.focusIndex
      const pos = this.focusPosition
      if (this.focusIndex !== null) {
        this.focusIndex = (this.focusIndex === 0 ? this.optionChildren[this.focusPosition].length - 1 : this.focusIndex - 1)
      } else {
        this.focusIndex = this.optionChildren[this.focusPosition].length - 1
      }
      this.switchFocusEl(this.focusIndex, pos, pre, pos)
      this.setFocusIndex('previous')
    },
    setFocusIndex (direction, force = false) {
      const index = this.focusIndex
      const pos = this.focusPosition
      //  fix scroll with editpanel potion error
      const n = ((this.editable || this.searchable) && this.editContent === '') ? 1 : 0
      const i = this.optionEmitScrollIndex
      const h = this.optionLineHeight
      const list = this.$refs.list[pos]
      switch (direction) {
        case 'next':
          if (list.scrollTop < (index - n - i) * h) {
            list.scrollTop = (index - n - i) * h
          } else {
            list.scrollTop = 0
          }
          break
        case 'previous':
          if (index === this.optionChildren[pos].length - 1) {
            list.scrollTop = (index - n - i) * h
          } else if (list.scrollTop > (index - n) * h) {
            list.scrollTop = (index - n) * h
          }
          break
      }

      if (this.optionChildren[pos][index].disabled || ((this.editable || this.searchable) && !this.optionChildren[pos][index].val)) {
        if (!force) {
          direction === 'next' ? this.focusNext() : this.focusPrevious()
        }
      }
    },
    selectHandler ({val, pos, hasChildren, hover}) {
      if (this.store[pos] !== val) {
        this.store = ArrayHelper.addToStoreWithIndex(this.store, val, pos)
      }
      if (!hasChildren) {
        if (!hover) {
          this.$emit('input', this.store)
          this.checkout()
        }
        this.childIndex = pos
      } else {
        this.childIndex = pos + 1
      }
    },
    switchFocusEl (newIdx, newPos, preIdx, prePos) {
      if (newIdx === preIdx && newPos === prePos) return
      console.log('newIdx:' + newIdx, 'newPos:' + newPos, 'preIdx:' + preIdx, 'prePos' + prePos)
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
      e.stopPropagation()
      this.store = []
      this.$emit('input', '')
    }
  },
  watch: {
    value (val) {
      this.store = ArrayHelper.mapValue(val)
    },
    store (val) {
      this.selectIndex = val.join('-')
    }
  }
}

</script>

<style scoped>

</style>
