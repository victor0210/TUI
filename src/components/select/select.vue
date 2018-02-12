<template>
  <label class="t-select" :class="{
    'is-focus': isFocus,
    'is-multiple': multiple,
    'is-disabled': disabled,
    'is-clearable': clearable && (multiple ? value.length > 0 : value !== '')
  }">
    <div class="t-select__input" @click="checkout" ref="box">
      <template v-if="editable || searchable">
        <span v-if="label && isNull && !editContent" class="t-select__placeholder">{{ label }}</span>
      </template>
      <template v-else>
        <span v-if="label && isNull" class="t-select__placeholder">{{ label }}</span>
      </template>

      <template v-if="multiple">
        <template v-if="!collapseTags">
          <span class="t-select__tag" v-for="(v, idx) in value" :key="idx" ref="tag">{{ v }} <i class="fa fa-times-circle" @click="removeFromStore(v, true)" ref="closeX"></i></span>
        </template>
        <template v-else>
          <span class="t-select__tag" ref="tag" v-if="value.length > 0">{{ value[0] }} <i class="fa fa-times-circle" @click="removeFromStore(value[0], true)" ref="closeX"></i></span>
          <span class="t-select__tag" ref="tag" v-if="value.length > 1">+ {{ value.length - 1 }}</span>
        </template>
      </template>
      <template v-else>
        <span class="t-select__val" v-if="value">{{ value }}</span>
      </template>
      <input type="text" class="t-select__editpanel" @keyup="editKeyupHandler" ref="editpanel" v-if="isFocus && (editable || searchable)" v-tfocus v-model="editContent">

      <i class="t-select__icon fa fa-chevron-down" :class="{
        't-select__icon--open': isFocus
      }"></i>
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

export default {
  name: 't-select',

  mixins: [ArrayHelper, Emitter],

  data () {
    return {
      optionLineHeight: 40,
      optionEmitScrollIndex: 4,
      isFocus: false,
      store: [],
      focusIndex: null,
      childrenLength: 0,
      optionChildren: [],
      loading: false,
      editContent: ''
    }
  },
  props: {
    label: {
      default: 'select'
    },
    multiple: Boolean,
    disabled: Boolean,
    clearable: Boolean,
    collapseTags: Boolean,
    editable: Boolean,
    searchable: Boolean,
    remote: Boolean,
    remoteMethod: Function,
    loadingText: {
      default: 'Loading...'
    },
    noDataText: {
      default: 'No Data'
    },
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
      this.clickCancelEl = [this.$refs.box].concat(this.$refs.tag).concat(this.$refs.closeX).concat(this.$refs.clear)
      console.log(this.clickCancelEl)
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
          if (_this.searchable && _this.optionChildren.length === 1) {
            return false
          }
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
    selectHandler ({e, val}) {
      if (this.multiple) {
        e.preventDefault()
        this.value.indexOf(val) === -1 ? this.addToStore(val) : this.removeFromStore(val)
      } else {
        this.$emit('input', val)
        this.$emit('hide', e)
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
      this.$emit('input', this.multiple ? [] : '')
      this.multiple && (this.store = [])
    },
    editKeyupHandler (e) {
      this.editContent = e.target.value
    },
    doRemote () {
      this.loading = true
      this.remoteMethod()
      this.loading = false
    }
  },

  watch: {
    focusIndex (val, pre) {
      val !== null && ArrayHelper.between(val, 0, this.optionChildren.length) && this.optionChildren[val].focusSelect()
      pre !== null && ArrayHelper.between(pre, 0, this.optionChildren.length) && this.optionChildren[pre].blurSelect()
    },
    editContent (val, pre) {
      this.focusIndex = 0

      if (this.remote) {
        this.doRemote()
      }

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
