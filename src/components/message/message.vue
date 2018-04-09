<template>
  <div class="t-message" :class="[
    type ? `t-message--${type}` : ''
  ]">
    <div class="t-message__title" :class="[
      textCenter ? 't-message__title--center' : ''
    ]">
      <i v-if="showIcon" class="t-message__title-icon" :class="iconClasses[type]"></i>
      {{ title }}
    </div>
    <div class="t-message__sub" v-if="sub" :class="[
      textCenter ? 't-message__sub--center' : ''
    ]">
      {{ sub }}
    </div>
    <template v-if="closable">
      <span class="t-message__close t-message__close-text" v-if="closeText" @click="$emit('message-close')">{{ closeText }}</span>
      <i class="t-message__close t-message__close--icon fa fa-times" v-if="!closeText" @click="$emit('message-close')"></i>
    </template>
  </div>
</template>

<script>
export default {
  name: 't-message',

  data () {
    return {
      hide: false,
      iconClasses: {
        'success': 'fa fa-check-circle',
        'info': 'fa fa-info-circle',
        'danger': 'fa fa-times-circle',
        'warning': 'fa fa-exclamation-circle'
      }
    }
  },

  props: {
    title: {
      type: [String, Number],
      default: 'Edit Message Here !!'
    },
    sub: String,
    type: {
      type: String,
      default: 'success'
    },
    closable: {
      type: Boolean,
      default: false
    },
    closeText: String,
    showIcon: Boolean,
    textCenter: Boolean,
    duration: {
      type: Number,
      default: 3000
    }
  },

  created () {
    this.$on('message-close', this.closeHandler)
  },

  mounted () {
    this.duration && setTimeout(() => {
      this.$emit('message-close')
    }, this.duration)
  },

  methods: {
    closeHandler () {
      const el = this.$el
      el.style.opacity = '0'
      el.style.marginTop = '-50px'
      this.hide = true
      this.$emit('close')
    }
  }
}
</script>
