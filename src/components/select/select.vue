<template>
  <label class="t-select" :class="{
    'is-focus': isFocus
  }">
    <div class="t-select__wrapper" @click="checkout" v-if="!multiple">
      <!--<t-input :readonly="true" :placeholder="label" v-model="value" @focus="focusHandler" @blur="blurHandler"/>-->
      <t-input :readonly="true" :placeholder="label" v-model="value"/>
    </div>
    <div class="t-select__input" @click="checkout" v-else>
      <span class="t-select__tag" v-for="(v, idx) in value" :key="idx">{{ v }}</span>
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
      childrenLength: 0
    }
  },
  props: {
    label: String,
    multiple: Boolean,
    value: {}
  },

  mounted () {
    console.log(this)
    this.store = this.value
    this.$on('select', this.selectHandler)
    this.$on('hide', this.hideHandler)
    this.$on('init-focus-index', this.initFocusByChild)
  },
  methods: {
    checkout () {
      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (!this.isFocus) {
        this.focusIndex = null
        this.childrenLength = 0
      }
    },
    //  TODO  add click listener outbox to close option-list
    //  option list handler
    addListener () {
      document.addEventListener('keydown', this.keyDownHandler)
    },
    removeListener () {
      document.removeEventListener('keydown', this.keyDownHandler)
    },
    //  select input handler
    // focusHandler () {
    //   document.addEventListener('keydown', this.inputKeyDownHandler)
    // },
    // blurHandler () {
    //   document.removeEventListener('keydown', this.inputKeyDownHandler)
    // },
    // inputKeyDownHandler (e) {
    //   const _this = this
    //   if (!this.isFocus) {
    //     switch (e.keyCode) {
    //       case 13:
    //         e.preventDefault()
    //         _this.checkout()
    //         break
    //       default:
    //         return false
    //     }
    //   }
    // },
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
          _this.$emit('select', {e: e, val: _this.$children[_this.focusIndex + 1].val})
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
        this.focusIndex = (this.focusIndex === this.$children.length - 2) ? 0 : this.focusIndex + 1
      } else {
        this.focusIndex = 0
      }
      this.setFocusIndex(this.focusIndex, 'next')
    },
    focusPrevious () {
      if (this.focusIndex !== null) {
        this.focusIndex = (this.focusIndex === 0 ? this.$children.length - 2 : this.focusIndex - 1)
      } else {
        this.focusIndex = this.$children.length - 2
      }
      this.setFocusIndex(this.focusIndex, 'previous')
    },
    setFocusIndex (idx, direction) {
      this.focusIndex = idx

      switch (direction) {
        case 'next':
          if (idx === 0) {
            this.$refs.list.scrollTop = 0
          } else if (this.$refs.list.scrollTop < (idx - 4) * 40) {
            this.$refs.list.scrollTop = (idx - 4) * 40
          }
          break
        case 'previous':
          if (idx === this.childrenLength - 1) {
            this.$refs.list.scrollTop = (idx - 4) * 40
          } else if (this.$refs.list.scrollTop > idx * 40) {
            this.$refs.list.scrollTop = idx * 40
          }
          break
      }

      if (this.$children[idx + 1].disabled) {
        direction === 'next' ? this.focusNext() : this.focusPrevious()
      }
    },
    selectHandler ({e, val}) {
      if (this.multiple) {
        e.preventDefault()
        this.addToStore(val)
      } else {
        this.$emit('input', val)
      }
    },
    addToStore (val) {
      this.$emit('input', ArrayHelper.addToStore(this.store, val))
    },
    removeFromStore (val) {
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
      console.log(this.focusIndex)
    }
  },

  watch: {
    focusIndex (val, pre) {
      val !== null && this.$children[val + 1].focusSelect()
      pre !== null && this.$children[pre + 1].blurSelect()
    }
  }
}

</script>

<style scoped>

</style>
