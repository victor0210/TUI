<template>
  <div class="t-dropdown" @click="onClick" @mouseleave="onMouseLeave" @mouseenter="onMouseOver">
    <slot></slot>
    <t-dropmenu
      :parent="self"
      :isOpen="isOpen"
      :initial="initial"
      :width="width"
      :minWidth="minWidth"
      :textCenter="textCenter"
      :side="side"
      @mouseleave="onMouseLeave"
      @mouseenter="onMouseOver"
      @command="handleCommand"
    >
      <slot name="dropdown"/>
    </t-dropmenu>
  </div>
</template>
<script>
import TDropmenu from './dropmenu.vue'

export default {
  components: {
    TDropmenu
  },

  name: 't-dropdown',

  data () {
    return {
      self: this,
      initial: false,
      isOpen: false,
      closeTimer: null,
      forceCheck: false
    }
  },

  props: {
    width: Number,
    minWidth: Number,
    maxHeight: Number,
    hideOnClick: Boolean,
    textCenter: {
      type: Boolean,
      default: true
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    value: {},
    side: Boolean
  },

  created () {
    this.$on('drop-focus', this.onMouseEnter)
    this.$on('drop-blur', this.onMouseLeave)
  },

  methods: {
    onMouseOver () {
      if (!this.forceCheck && this.trigger === 'hover') {
        this.open()
      }
    },
    onMouseLeave () {
      if (!this.forceCheck && this.trigger === 'hover') {
        this.close()
      }
    },
    onClick () {
      if (!this.forceCheck && this.trigger === 'click') {
        this.checkout()
      }
    },
    open () {
      clearTimeout(this.closeTimer)
      !this.initial && (this.initial = true)
      this.isOpen = true
    },
    close () {
      this.closeTimer = setTimeout(() => {
        this.isOpen = false
      }, 100)
    },
    checkout () {
      this.isOpen ? this.close() : this.open()
    },
    handleCommand (cmd) {
      this.$emit('command', cmd)
      if (this.hideOnClick) {
        this.forceCheck = true
        this.isOpen = false
        setTimeout(() => {
          this.forceCheck = false
        })
      }
    }
  }
}
</script>
