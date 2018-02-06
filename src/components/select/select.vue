<template>
  <label class="t-select" :class="{
    'is-focus': isFocus,
    'is-multiple': multiple,
    'is-disabled': disabled,
    'is-clearable': clearable
  }">
    <div class="t-select__wrapper" @click="checkout" v-if="!multiple">
      <t-input :readonly="true" :placeholder="label" v-model="value" ref="box"/>
    </div>
    <div class="t-select__input" @click="checkout" v-else ref="box">
      <span v-if="label && value.length===0" class="t-select__placeholder">{{ label }}</span>
      <template v-if="!collapseTags">
        <span class="t-select__tag" v-for="(v, idx) in value" :key="idx" ref="tag">{{ v }} <i class="fa fa-times-circle" @click="removeFromStore(v, true)" ref="closeX"></i></span>
        <input type="text" class="t-select__editpanel" @keyup="editKeyupHandler" ref="editpanel" v-if="isFocus && editable" v-tfocus v-model="editContent">
      </template>
      <template v-else>
        <span class="t-select__tag" ref="tag" v-if="value.length > 0">{{ value[0] }} <i class="fa fa-times-circle" @click="removeFromStore(value[0], true)" ref="closeX"></i></span>
        <span class="t-select__tag" ref="tag" v-if="value.length > 1">+ {{ value.length - 1 }}</span>
      </template>
    </div>
    <i class="t-select__icon fa fa-chevron-down" :class="{
        't-select__icon--open': isFocus
      }"></i>
    <i class="t-select__icon t-select__icon--clear fa fa-times-circle" v-if="clearable" @click.prevent="clearInput"></i>
    <transition name="fade">
      <ul class="t-select__list" v-if="isFocus" ref="list">
          <t-option :label="editContent" :val="editContent" :editablePanel="true" v-if="editable"/>
          <slot></slot>
      </ul>
    </transition>
  </label>
</template>

<script>
//  TODO addable/ local searchable/ remote searchable/ list divide area
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'

export default {
  name: 't-select',

  mixins: [ArrayHelper, Emitter],

  data () {
    return {
      optionLineHeight: 40,
      optionMaxDisplay: 4,
      isFocus: false,
      store: [],
      focusIndex: null,
      childrenLength: 0,
      optionChildren: [],
      optionValues: [],
      editContent: ''
    }
  },
  props: {
    label: String,
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    collapseTags: Boolean,
    editable: Boolean,
    value: {}
  },

  mounted () {
    this.store = this.value
    this.$on('select', this.selectHandler)
    this.$on('hide', this.hideHandler)
    this.$on('init-focus-index', this.initFocusByChild)
    this.$on('option-register', this.optionRegister)
    this.$on('option-bumper', this.optionBumper)
  },
  methods: {
    checkout (e) {
      if (this.disabled || e.target === this.$refs.editpanel) return
      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (!this.isFocus) {
        this.focusIndex = null
        this.childrenLength = 0
        this.editContent = ''
      }
    },
    optionRegister (child) {
      this.optionChildren.push(child)
      this.optionValues.push(child.val)
    },
    optionBumper () {
      this.optionChildren.pop()
      this.optionValues.pop()
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
      this.clickCancelEl = this.multiple ? [this.$refs.box].concat(this.$refs.tag).concat(this.$refs.closeX) : this.$refs.box.$refs.input
      if (!e.target.className ||
        (e.target.className.trim().indexOf('t-option') === -1 &&
          (this.multiple ? this.clickCancelEl.indexOf(e.target) === -1 : this.clickCancelEl !== e.target))) {
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
        case 13:
          e.preventDefault()
          _this.$emit('select', {e: e, val: _this.optionChildren[_this.focusIndex].val})
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
    setFocusIndex (idx, direction) {
      const n = this.optionMaxDisplay
      const h = this.optionLineHeight
      switch (direction) {
        case 'next':
          if (idx === 0) {
            this.$refs.list.scrollTop = 0
          } else if (this.$refs.list.scrollTop < (idx - n) * h) {
            this.$refs.list.scrollTop = (idx - n) * h
          }
          break
        case 'previous':
          if (idx === this.optionChildren.length - 1) {
            this.$refs.list.scrollTop = (idx - n) * h
          } else if (this.$refs.list.scrollTop > idx * h) {
            this.$refs.list.scrollTop = idx * h
          }
          break
      }

      if (this.optionChildren[idx].disabled) {
        direction === 'next' ? this.focusNext() : this.focusPrevious()
      }
    },
    selectHandler ({e, val}) {
      if (this.multiple) {
        e.preventDefault()
        this.value.indexOf(val) === -1 ? this.addToStore(val) : this.removeFromStore(val)
      } else {
        this.$emit('input', val)
      }
    },
    addToStore (val) {
      (val !== '') && this.$emit('input', ArrayHelper.addToStore(this.store, val))
    },
    removeFromStore (val, isTag) {
      if (this.disabled) return
      if (isTag) {
        const e = window.event
        e.cancelBubble = true
      }
      this.$emit('input', ArrayHelper.removeFromStore(this.store, val))
    },
    initFocusByChild (val) {
      if (this.multiple && this.value[this.value.length - 1] === val) {
        this.focusIndex = this.childrenLength
      } else if (!this.multiple && this.value === val) {
        this.focusIndex = this.childrenLength
      }
      this.$refs.list.scrollTop = (this.focusIndex - this.optionMaxDisplay) * this.optionMaxDisplay
      this.childrenLength += 1
    },
    clearInput (e) {
      this.$emit('input', this.multiple ? [] : '')
      this.multiple && (this.store = [])
    },
    editKeyupHandler (e) {
      this.editContent = e.target.value
    }
  },

  watch: {
    focusIndex (val, pre) {
      val !== null && ArrayHelper.between(val, 0, this.optionChildren.length) && this.optionChildren[val].focusSelect()
      this.optionChildren.length > 0 && (val !== null && val < this.optionChildren.length) && this.optionChildren[val].focusSelect()
      this.optionChildren.length > 0 && (pre !== null && pre < this.optionChildren.length) && this.optionChildren[pre].blurSelect()
    },
    editContent () {
      this.focusIndex = 0
      this.optionChildren = []
      this.broadcast('t-option', 'blur')
      this.broadcast('t-option', 'register')
      this.optionChildren.length > 0 && this.optionChildren[0].focusSelect()
    }
  }
}

</script>

<style scoped>

</style>
