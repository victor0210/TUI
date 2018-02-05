<template>
  <label class="t-select" :class="{
    'is-focus': isFocus,
    'is-multiple': multiple
  }">
    <div class="t-select__wrapper" @click="checkout" v-if="!multiple">
      <t-input :readonly="true" :placeholder="label" v-model="value" ref="box"/>
    </div>
    <div class="t-select__input" @click="checkout" v-else ref="box">
      <span class="t-select__tag" v-for="(v, idx) in value" :key="idx" ref="tag">{{ v }} <i class="fa fa-times-circle" @click="removeFromStore(v, true)" ref="closeX"></i></span>
    </div>
    <i class="t-select__icon fa fa-chevron-down" @click="checkout" :class="{
        't-select__icon--open': isFocus
      }"></i>
    <transition name="fade">
      <ul class="t-select__list" v-if="isFocus" ref="list">
        <slot></slot>
      </ul>
    </transition>
  </label>
</template>

<script>
import ArrayHelper from '../../mixins/arrayHelper'

export default {
  name: 't-select',

  mixins: [ArrayHelper],

  data () {
    return {
      isFocus: false,
      store: [],
      focusIndex: null,
      childrenLength: 0,
      optionChildren: []
    }
  },
  props: {
    label: String,
    multiple: Boolean,
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
    checkout () {
      !this.isFocus ? this.addListener() : this.removeListener()
      this.isFocus = !this.isFocus
      if (!this.isFocus) {
        this.focusIndex = null
        this.childrenLength = 0
      }
    },
    optionRegister (child) {
      this.optionChildren.push(child)
    },
    optionBumper () {
      this.optionChildren.pop()
    },
    //  TODO  add click listener outbox to close option-list
    //  option list handler
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
          break
      }
    },
    hideHandler (e) {
      e.preventDefault()
      this.isFocus && this.checkout()
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
      console.log((idx - 4) * 40)
      switch (direction) {
        case 'next':
          if (idx === 0) {
            this.$refs.list.scrollTop = 0
          } else if (this.$refs.list.scrollTop < (idx - 4) * 40) {
            this.$refs.list.scrollTop = (idx - 4) * 40
          }
          break
        case 'previous':
          if (idx === this.optionChildren.length - 1) {
            this.$refs.list.scrollTop = (idx - 4) * 40
          } else if (this.$refs.list.scrollTop > idx * 40) {
            this.$refs.list.scrollTop = idx * 40
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
      this.$emit('input', ArrayHelper.addToStore(this.store, val))
    },
    removeFromStore (val, isTag) {
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
      this.$refs.list.scrollTop = (this.focusIndex - 4) * 40
      this.childrenLength += 1
    }
  },

  watch: {
    focusIndex (val, pre) {
      val !== null && this.optionChildren[val].focusSelect()
      pre !== null && this.optionChildren[pre].blurSelect()
    }
  }
}

</script>

<style scoped>

</style>
