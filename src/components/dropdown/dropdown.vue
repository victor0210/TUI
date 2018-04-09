<template>
  <div class="t-dropdown" @mouseleave="onMouseLeave" @mouseenter="onMouseOver">
    <slot></slot>
    <t-dropmenu
      :parent="self"
      :isOpen="isOpen"
      :initial="initial"
      :width="width"
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
      closeTimer: null
    }
  },

  props: {
    width: Number
  },

  created () {
    this.$on('drop-focus', this.onMouseEnter)
    this.$on('drop-blur', this.onMouseLeave)
  },

  methods: {
    onMouseOver () {
      clearTimeout(this.closeTimer)
      !this.initial && (this.initial = true)
      this.isOpen = true
    },
    onMouseLeave () {
      this.closeTimer = setTimeout(() => {
        this.isOpen = false
      }, 100)
    },
    handleCommand (cmd) {
      this.$emit('command', cmd)
    }
  }
}
</script>
