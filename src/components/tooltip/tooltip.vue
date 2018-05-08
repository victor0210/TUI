<template>
  <t-popover
    :position="position"
    :popoverOffset="tooltipOffset"
    :bgColor="bgColor"
    :borderColor="borderColor"
    :textColor="textColor"
    :width="width"
    :height="height"
    :trigger="trigger"
    :hideOnClick="hideOnClick"
    :theme="theme"
  >
    <slot></slot>
    <template slot="popover">
      {{ content }}
    </template>
  </t-popover>
</template>
<script>
export default {
  name: 't-tooltip',

  props: {
    //  tooltip props
    content: {
      type: [String, Number],
      required: true
    },
    theme: String,

    //  popover props
    position: {
      type: String,
      default: 'top'
    },
    tooltipOffset: {
      type: Number,
      default: 10
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    borderColor: {
      type: String,
      default: 'rgba(0,0,0,0.3)'
    },
    textColor: String,
    width: Number,
    height: Number,
    trigger: {
      type: String,
      default: 'hover'
    },
    hideOnClick: Boolean
  }
}
</script>
