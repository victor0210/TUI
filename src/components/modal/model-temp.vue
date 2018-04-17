<template>
  <transition name="fade">
    <div
      class="t-modal"
    >
      <div
        class="t-modal__header"
      >
        <slot name="header"/>
      </div>
      <div
        class="t-modal__body"
      >
        <slot name="body"/>
      </div>
      <div
        class="t-modal__footer"
      >
        <slot name="footer"/>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
}
</script>
