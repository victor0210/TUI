<template>
  <!--<transition name="t-zoom-in-center">-->
    <div class="t-tag" :class="[
      type ? `t-tag--${type}` : ''
    ]">
      <slot></slot>
      <i class="fa fa-times t-tag__close" v-if="closable" @click="closeHandler"></i>
    </div>
  <!--</transition>-->
</template>

<script>
export default {
  name: 't-tag',

  props: {
    type: String,
    closable: Boolean
  },

  methods: {
    closeHandler (e) {
      this.$emit('close', e)
    }
  }
}
</script>
