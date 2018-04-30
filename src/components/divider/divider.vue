<template>
  <div class="t-divider" :class="[
    content ? 'is-text' : '',
    contentAlign ? `is-${contentAlign}` : '',
    lineStyle ? `t-divider--${lineStyle}` : ''
  ]">
    <span v-if="content" class="t-divider__text">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 't-divider',

  props: {
    content: String,
    contentAlign: String,
    lineStyle: String
  }
}
</script>
