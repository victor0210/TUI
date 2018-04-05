<template>
  <div
    class="t-switch"
    :class="[
      status ? 'is-open' : ''
    ]"
    :style="{
      lineHeight: `${height}px`
    }"
  >
    <span
      v-if="inactiveText"
      class="t-switch__text t-switch__text--inactive"
    >
      {{ inactiveText }}
    </span>
    <div
      class="t-switch__wrapper"
      @click="checkout"
      :style="{
        backgroundColor: status ? activeColor : inactiveColor,
        width: width ? `${width}px` : '',
        height: height ? `${height}px` : ''
      }"
    >
      <span
        class="t-switch__inner"
        :style="{
          transform: status ? `translate(${width - height}px)` : '',
          height: height ? `${height - 2}px` : '',
          width: height ? `${height - 2}px` : ''
        }">
      </span>
    </div>
    <span class="t-switch__text t-switch__text--active"  v-if="activeText">{{ activeText }}</span>
  </div>
</template>

<script>
export default {
  name: 't-switch',

  data () {
    return {
      status: null
    }
  },

  props: {
    activeText: String,
    inactiveText: String,
    activeColor: String,
    inactiveColor: String,
    activeValue: {},
    inactiveValue: {},
    width: {
      type: Number,
      default: 40
    },
    height: {
      type: Number,
      default: 20
    },
    value: {}
  },

  mounted () {
    this.initStatus()
  },

  methods: {
    checkout () {
      this.status = !this.status
    },
    initStatus () {
      if (this.activeValue !== undefined) {
        if (this.value === this.activeValue) {
          this.status = true
        } else {
          this.status = false
        }
      } else {
        this.status = !!this.value
      }
    }
  },

  watch: {
    status (val, old) {
      if (old !== null) {
        if (val) {
          this.$emit('input', this.activeValue !== undefined ? this.activeValue : true)
        } else {
          this.$emit('input', this.inactiveValue !== undefined ? this.inactiveValue : false)
        }
      }
    }
  }
}
</script>

<style></style>
