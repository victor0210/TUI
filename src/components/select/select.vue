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

    <transition name="fade">
      <t-select-drop-menu :initialized="initialized" :select="select" :is-focus="isFocus" :searchText="searchText" :input-height="inputHeight">
        <slot></slot>
        <template slot="search">
          <span class="t-select__drop-menu--none" v-if="searchOptions.length === 0 && isSearching">暂无数据</span>
          <t-option v-for="(o, idx) in searchOptions" :key="idx" :label="o.label" :val="o.val" :disabled="o.disabled"/>
        </template>
      </t-select-drop-menu>
    </transition>
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
      searchOptions: [],
      isSearching: false,
      searchText: '',
      optionChainTable: {},
      chainTableEndPointer: 0,
      searchChainTable: {},
      focusIndex: '',
      searchFocusIndex: '',
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
    this.$on('select', this.selectHandler)
    this.$on('select-drop-component-register', this.dropMenuRegister)
    this.$on('edit-change', this.editChangeHandler)
    this.$on('add-custom-tag', this.addTag)
  },

  mounted () {
    this.validatorInput()
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

      if (this.isFocus) {
        //  open first time
        !this.initialized && (this.initialized = true)

        this.addListener()
      } else {
        //  close
        this.searchText = ''
        this.removeListener()
      }
    },
    hide () {
      this.isFocus = false
    },
    optionRegister (option) {
      this.options.push(option)

      //  init label
      if (option.val === this.value) this.setInputLabel(option.label)
    },
    selectHandler ({val, label}) {
      if (this.multiple) {
        this.setMultipleValue({val, label})
      } else {
        this.setStore(val)
        this.setInputLabel(label)

        this.hide()
      }
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

    //  editor
    editChangeHandler (val) {
      //  doSearch
      this.searchOptions = []
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
        if (el.label.indexOf(val) !== -1) _this.searchOptions.push(el)
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
    }
  },

  watch: {
    store (val) {
      this.$emit('input', val)
    },
    isFocus (val) {
      if (!val) {
        if (this.editable || this.searchable) {
          this.$emit('edit-change', '')
        }
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
  }
}
</script>
