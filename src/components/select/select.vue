<template>
  <div class="t-select" @click="checkout" :class="[
    isFocus ? 'is-focus' : '',
    disabled ? 'is-disabled' : '',
    clearable && !isEmpty ? 'is-clearable' : ''
  ]">
    <div class="t-select__input" ref="input">
      <i class="t-select__input-icon t-select__drop-icon fa fa-chevron-down" :class="{
        't-select__input-icon--open': isFocus
      }"></i>
      <i class="t-select__input-icon t-select__clear-icon fa fa-times-circle" @click.prevent="clearInput"></i>

      <div v-if="multiple" class="t-select__inner">
        <template v-if="!collapseTags">
          <span class="t-select__tag" v-for="(t, idx) in multipleInputLabel" :key="idx">{{ t.label }}<i class="fa fa-times-circle" @click.prevent="removeTag(t.val)"></i></span>
        </template>
        <template v-else>
          <span class="t-select__tag" v-if="multipleInputLabel[0]">{{ multipleInputLabel[0].label }}<i class="fa fa-times-circle" @click.prevent="removeTag(multipleInputLabel[0].val)"></i></span>
          <span class="t-select__tag" v-if="multipleInputLabel.length > 1">+ {{ multipleInputLabel.length - 1 }}</span>
        </template>
      </div>

      <input type="text" class="t-select__inner" v-model="inputLabel" readonly v-if="!multiple"/>
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

      // if (this.editable && !this.multiple) {
      //   throw new Error('multiple must be required when use "editable" attribute')
      // }
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
      } else {
        //  close
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
    }
  },

  watch: {
    store (val) {
      this.$emit('input', val)
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
