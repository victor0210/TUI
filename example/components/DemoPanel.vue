<template>
  <div class="docs-demo-wrapper">
    <div class="demo-container">
      <div class="docs-demo docs-demo--expand">
        <div class="highlight-wrapper" :style="{height: isExpand ? (this.$slots.highlight[0].elm.clientHeight + 40) + 'px' : '0'}">
          <slot name="highlight"></slot>
        </div>
      </div>
    </div>
    <span class="docs-trans docs-demo__triangle" @click="toggle"><i class="fa fa-caret-down" :class="[
      isExpand ? 'rotate' : ''
    ]"></i><span>{{isExpand ? '隐藏代码' : '显示代码'}}</span></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isExpand: false
    }
  },
  methods: {
    toggle () {
      this.isExpand = !this.isExpand
    }
  }
}
</script>
