<template>
  <transition name="fade">
    <div :class="dialogClass">
      <div :class="dialogMaskClass"></div>
      <div :class="dialogWrapperClass">
        <div :class="dialogContainerClass">
          <div :class="[dialogHeaderClass,dialogHeaderTypeClass]">
            {{ title }}
            <span v-on:click="$emit('close')" v-if="closable"><i class="icon fa fa-times"></i></span>
          </div>
          <div :class="[dialogContentClass,dialogContentIcon,dialogContentFooter]">
            <p><i :class="['icon', iconColor, icon]" v-if="icon"></i>{{ content }}</p>
          </div>
          <div :class="dialogFooterClass" v-if="showFooter">
            <t-button type="default" @click="$emit('ok')">{{ okText }}</t-button>
            <t-button class="is-outline" type="default" @click="$emit('close')" v-if="closable">{{ cancelText }}</t-button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Button from '../button/button'

const dialogClass = `${require('../../utils/config').prefixClass}dialog`
export default {
  mounted () {
    document.addEventListener('keydown', this.keyDown)
  },
  beforeDestroy () {
    document.removeEventListener('keydown', this.keyDown)
  },
  props: {
    icon: String,
    showFooter: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    title: String,
    content: String,
    okText: String,
    cancelText: String,
    iconColor: String,
    type: String
  },
  data () {
    return {
      dialogClass: dialogClass,
      dialogMaskClass: `${dialogClass}__mask`,
      dialogWrapperClass: `${dialogClass}__wrapper`,
      dialogContainerClass: `${dialogClass}__container`,
      dialogHeaderClass: `${dialogClass}__header`,
      dialogFooterClass: `${dialogClass}__footer`,
      dialogContentClass: `${dialogClass}__content`
    }
  },
  methods: {
    keyDown (e) {
      if (e.keyCode === 27 && this.closable) {
        this.$emit('close')
      }
    }
  },
  computed: {
    dialogContentFooter () {
      return this.showFooter ? '' : `${this.dialogContentClass}--footer`
    },
    dialogContentIcon () {
      return this.icon || this.type ? `${this.dialogContentClass}--icon` : ''
    },
    dialogHeaderTypeClass () {
      return `${this.dialogHeaderClass}--${this.type}`
    }
  },
  components: {
    't-button': Button
  }
}
</script>
