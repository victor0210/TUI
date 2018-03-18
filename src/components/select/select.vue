<template>
  <label class="t-select" :class="{
    'is-focus': isFocus,
    'is-multiple': multiple,
    'is-disabled': disabled,
    'is-clearable': clearable && (multiple ? value.length > 0 : value !== '')
  }">
    <div class="t-select__input" @click="checkout" ref="box">
      <template v-if="editable || searchable">
        <span v-if="placeholder && isNull && !editContent" class="t-select__placeholder" ref="placeholder">{{ placeholder }}</span>
      </template>
      <template v-else>
        <span v-if="placeholder && isNull" class="t-select__placeholder" ref="placeholder">{{ placeholder }}</span>
      </template>

      <template v-if="multiple">
        <template v-if="!collapseTags">
          <span class="t-select__tag" v-for="(v, idx) in labelStore" :key="idx" ref="tag">{{ v }} <i class="fa fa-times-circle" @click="removeFromStore(labelStore[idx], true)" ref="closeX"></i></span>
        </template>
        <template v-else>
          <span class="t-select__tag" ref="tag" v-if="value.length > 0">{{ labelStore[0] }} <i class="fa fa-times-circle" @click="removeFromStore(labelStore[0], true)" ref="closeX"></i></span>
          <span class="t-select__tag" ref="tag" v-if="value.length > 1">+ {{ labelStore.length - 1 }}</span>
        </template>
      </template>
      <template v-else>
        <span class="t-select__val" v-if="value" ref="val">{{ labelStore[0] }}</span>
      </template>
      <input type="text" class="t-select__editpanel" @keyup="editKeyupHandler" ref="editpanel" v-if="isFocus && (editable || searchable)" v-tfocus v-model="editContent">

      <i class="t-select__icon fa fa-chevron-down" :class="{
        't-select__icon--open': isFocus
      }" ref="dropdown_flag"></i>
      <i class="t-select__icon t-select__icon--clear fa fa-times-circle" v-if="clearable && (multiple ? value.length > 0 : value !== '')" @click="clearInput" ref="clear"></i>
    </div>
    <transition name="fade">
      <ul class="t-select__list" v-if="isFocus" ref="list">
          <t-option :label="getEditContent" :val="editContent" :editablePanel="true" v-if="editable || searchable" :disabled="searchable" v-show="editable || (searchable && optionChildren.length === 1)" :loading="loading"/>
          <slot></slot>
      </ul>
    </transition>
  </label>
</template>

<script>
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'
import Vue from 'vue'

//  TODO rebuild select component data-structure from array to index (build store-index)
//  done: 1. storeIndex save values index & emit input (index transfer to value) => ({label_1: 'value_1', label_2: 'value_2'} => ['value_1', 'value_2'])
//  2. optionIndex save all optionIndex => ({'label_1': 'value_1', ...})
//  done: 3. display / add / remove data just from storeIndex
//  4. search
//    4-1. search storeIndex key by Object.keys().forEach, el.indexOf(keyword)
//    4-2. search optimize with index split
//  TODO about position relative cascader change line bug
export default {
  name: 't-select',

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
      focusIndex: null,
      childrenLength: 0,
      labelStore: [],
      optionChildren: [],
      loading: false,
      editContent: '',
      storeIndexes: {}
    }
  },
  props: {
    placeholder: {
      default: '请选择'
    },
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    collapseTags: Boolean,
    editable: Boolean,
    searchable: Boolean,
    loadingText: {
      default: 'Loading...'
    },
    noDataText: {
      default: 'No Data'
    },
    value: {}
  },

  mounted () {
    this.initStoreIndex()
    this.$on('select', this.selectHandler)
    this.$on('hide', this.hideHandler)
    this.$on('init-focus-index', this.initFocusByChild)
    this.$on('option-register', this.optionRegister)
    this.$on('option-bumper', this.optionBumper)
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
  },
  methods: {
    reset () {
      this.multiple ? this.$emit('input', []) : this.$emit('input', '')
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
    },
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
    },
    checkout (e) {
      if (this.disabled || e.target === this.$refs.editpanel) return
      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (!this.isFocus) {
        this.focusIndex = null
        this.childrenLength = 0
        this.editContent = ''
        this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
        this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
      }
    },
    optionRegister (child) {
      this.optionChildren.push(child)
    },
    optionBumper () {
      this.optionChildren.pop()
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
      this.clickCancelEl = [this.$refs.box].concat(this.$refs.tag).concat(this.$refs.closeX).concat(this.$refs.clear).concat(this.$refs.dropdown_flag).concat(this.$refs.val).concat(this.$refs.placeholder)
      if (!e.target.className || (e.target.className.trim().indexOf('t-option') === -1 && this.clickCancelEl.indexOf(e.target) === -1)) {
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
        case 27:
          e.preventDefault()
          _this.checkout(e)
          break
        case 13:
          e.preventDefault()
          let t
          if (_this.searchable && _this.optionChildren.length === 1) {
            return false
          }
          if (_this.searchable && (_this.optionChildren.length > 1 && _this.editContent !== '')) {
            t = _this.optionChildren[_this.focusIndex + 1]
          } else {
            t = _this.optionChildren[_this.focusIndex]
          }

          _this.$emit('select', {e: e, val: t.val, label: t.label})
          !_this.multiple && _this.$emit('hide', e)
          _this.editContent = ''
          break
      }
    },
    hideHandler (e) {
      e.preventDefault()
      this.isFocus && this.checkout(e)
    },
    focusNext () {
      if (this.focusIndex !== null) {
        this.focusIndex = (this.focusIndex === this.optionChildren.length - 1) ? 0 : this.focusIndex + 1
      } else {
        this.focusIndex = 0
      }
      this.setFocusIndex(this.focusIndex, 'next')
    },
    focusPrevious () {
      if (this.focusIndex !== null) {
        this.focusIndex = (this.focusIndex === 0 ? this.optionChildren.length - 1 : this.focusIndex - 1)
      } else {
        this.focusIndex = this.optionChildren.length - 1
      }
      this.setFocusIndex(this.focusIndex, 'previous')
    },
    setFocusIndex (idx, direction, force = false) {
      //  fix scroll with editpanel potion error
      const n = ((this.editable || this.searchable) && this.editContent === '') ? 1 : 0
      const i = this.optionEmitScrollIndex
      const h = this.optionLineHeight
      switch (direction) {
        case 'next':
          if (idx === 0) {
            this.$refs.list.scrollTop = 0
          } else if (this.$refs.list.scrollTop < (idx - n - i) * h) {
            this.$refs.list.scrollTop = (idx - n - i) * h
          }
          break
        case 'previous':
          if (idx === this.optionChildren.length - 1) {
            this.$refs.list.scrollTop = (idx - n - i) * h
          } else if (this.$refs.list.scrollTop > (idx - n) * h) {
            this.$refs.list.scrollTop = (idx - n) * h
          }
          break
      }

      if (this.optionChildren[idx].disabled || ((this.editable || this.searchable) && !this.optionChildren[idx].val)) {
        if (!force) {
          direction === 'next' ? this.focusNext() : this.focusPrevious()
        }
      }
    },
    selectHandler ({e, val, label}) {
      this.setValue()
      if (this.multiple) {
        e.preventDefault()
        !this.storeIndexes[label] ? this.addToStore(val, label) : this.removeFromStore(label)
      } else {
        this.addToStore(val, label)
        this.$emit('hide', e)
      }
    },
    setValue () {
      let val
      if (this.multiple) {
        val = Object.values(this.storeIndexes)
      } else {
        val = Object.values(this.storeIndexes)[0]
      }
      this.$emit('input', val)
    },
    addToStore (val, label) {
      if (val !== '') {
        if (!this.multiple) this.storeIndexes = {}
        this.$set(this.storeIndexes, label, val)
        this.setValue()
      }
    },
    removeFromStore (key, isTag) {
      if (this.disabled) return
      if (isTag) {
        const e = window.event
        e.cancelBubble = true
      }
      Vue.delete(this.storeIndexes, key)
      this.setValue()
    },
    initFocusByChild (val) {
      let idx = null
      if (this.multiple && this.value[this.value.length - 1] === val) {
        idx = this.childrenLength
      } else if (!this.multiple && this.value === val) {
        idx = this.childrenLength
      }

      if (idx !== null && idx !== this.focusIndex) {
        this.focusIndex = idx
        this.setFocusIndex(idx, 'next', true)
      }
      this.childrenLength += 1
    },
    clearInput (e) {
      e.preventDefault()
      e.cancelBubble = true
      this.storeIndexes = {}
      this.setValue()
    },
    editKeyupHandler (e) {
      this.editContent = e.target.value
    },
    initStoreIndex () {
      const _this = this
      this.storeIndexes = {}
      if (this.multiple) {
        this.value.forEach(function (val) {
          _this.findLabel(val)
        })
      } else {
        this.findLabel(this.value)
      }
      this.labelStore = Object.keys(this.storeIndexes)
    },
    findLabel (val) {
      const _this = this
      !!this.$slots.default && this.$slots.default.forEach(function (el) {
        let target = el.componentOptions
        if (el.tag) {
          if (target.tag !== 't-option-group') {
            let t = target.propsData
            _this.csStoreIndex(val, t.val, t.label)
          } else {
            target.children.forEach(function (elm) {
              if (elm.tag) {
                let t = elm.componentOptions.propsData
                _this.csStoreIndex(val, t.val, t.label)
              }
            })
          }
        }
      })
      if (_this.editable && Object.values(_this.storeIndexes).indexOf(val) === -1) _this.$set(_this.storeIndexes, val, val)
    },
    // check && set
    csStoreIndex (val, elVal, elLabel) {
      val === elVal && this.$set(this.storeIndexes, elLabel, val)
    }
  },

  watch: {
    value (val) {
      this.initStoreIndex()
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', val)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', val)
    },
    focusIndex (val, pre) {
      val !== null && ArrayHelper.between(val, 0, this.optionChildren.length) && this.optionChildren[val].focusSelect()
      pre !== null && ArrayHelper.between(pre, 0, this.optionChildren.length) && this.optionChildren[pre].blurSelect()
    },
    editContent (val, pre) {
      this.focusIndex = 0

      if (val.length > pre.length) {
        const foo = this.optionChildren
        this.optionChildren = []
        foo.forEach(function (el) {
          el.$emit('blur')
          el.$emit('register')
        })
      } else {
        this.optionChildren = []
        this.broadcast('t-option', 'blur')
        this.broadcast('t-option', 'register')
      }
      this.searchable
        ? this.optionChildren.length > 1 && this.optionChildren[1].focusSelect()
        : this.optionChildren.length > 0 && this.optionChildren[0].focusSelect()
    },
    storeIndexes (val) {
      this.labelStore = Object.keys(val)
    }
  },

  computed: {
    isNull () {
      return this.multiple ? this.value.length === 0 : !this.value
    },
    getEditContent () {
      if (this.loading) {
        return this.loadingText
      }
      return this.searchable ? (this.optionChildren.length === 1 ? this.noDataText : this.editContent) : this.editContent
    }
  }
}

</script>

<style scoped>

</style>
