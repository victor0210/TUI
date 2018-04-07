<template>
  <div class="t-notify" :class="[
    `t-notify--${position}`,
    iconClass ? `is-withicon`: '',
  ]">
    <i class="t-notify__icon" :class="[
      type ? `t-notify__icon--${type}` : '',
      iconClass
    ]" v-if="iconClass" :style="{
      color: iconColor
    }"></i>
    <i class="t-notify__close fa fa-times" @click="$emit('close')" v-if="closable"></i>
    <div class="t-notify__content">
      <div class="t-notify__title" :style="{
        color: titleColor
      }">{{ title }}</div>
      <div class="t-notify__sub" v-if="sub" :style="{
        color: subColor
      }">{{ sub }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-notify',

  props: {
    position: String,
    duration: Number,
    closable: Boolean,
    title: String,
    sub: String,
    iconClass: String,
    iconColor: String,
    titleColor: String,
    subColor: String,
    type: String
  },

  mounted () {
    !!this.duration && setTimeout(() => {
      this.$emit('close')
    }, this.duration)
  }
}
</script>
