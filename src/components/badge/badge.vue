<template>
  <div class="t-badge" :class="[
    !!$slots.default ? 't-badge--alone' : ''
  ]">
    <slot></slot>
    <template v-if="!hidden">
      <span class="t-badge__content" v-if="value !== undefined && !dot">{{ badgeContent }}</span>
      <span class="t-badge__content t-badge__content--dot" v-else></span>
    </template>
  </div>
</template>

<script>
export default {
  name: 't-badge',

  props: {
    max: Number,
    dot: Boolean,
    hidden: Boolean,
    value: [Number, String]
  },

  computed: {
    badgeContent () {
      if (typeof this.value === 'number' && this.value > this.max) {
        return `${this.max}+`
      }
      return this.value
    }
  }
}
</script>
