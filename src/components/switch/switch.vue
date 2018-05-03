<template>
  <div
    class="t-switch"
    :class="[
      status ? 'is-open' : ''
    ]"
    :style="{
      lineHeight: height
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
        width: width,
        height: height
      }"
      ref="wrapper"
    >
      <span
        class="t-switch__inner"
        :style="{
          transform: status ? `translate(${innerTranslate})` : '',
          height: innerHeight,
          width: innerWidth
        }">
      </span>
    </div>
    <span class="t-switch__text t-switch__text--active"  v-if="activeText">{{ activeText }}</span>
    <input type="hidden" :value="value" :name="name">
  </div>
</template>

<script>
//  TODO: disabled
export default {
  name: 't-switch',

  data () {
    return {
      status: null,
      innerWidth: 0,
      innerHeight: 0,
      innerTranslate: 0
    }
  },

  props: {
    activeText: String,
    inactiveText: String,
    activeColor: String,
    inactiveColor: String,
    activeValue: {},
    inactiveValue: {},
    name: String,
    width: {
      type: String,
      default: '48px'
    },
    height: {
      type: String,
      default: '24px'
    },
    value: {}
  },

  mounted () {
    this.initStatus()
    this.setInnerSize()
  },

  methods: {
    checkout () {
      this.status = !this.status
    },
    setInnerSize () {
      this.innerWidth = this.innerHeight = `${this.$refs.wrapper.offsetHeight - 2}px`
      this.innerTranslate = `${this.$refs.wrapper.offsetWidth - this.$refs.wrapper.offsetHeight}px`
    },
    initStatus () {
      if (this.activeValue !== undefined) {
        this.status = this.value === this.activeValue
      } else {
        this.status = !!this.value
      }
    }
  },

  watch: {
    status (val, old) {
      let currentVal
      if (old !== null) {
        if (val) {
          currentVal = this.activeValue || true
          this.$emit('input', currentVal)
        } else {
          currentVal = this.inactiveValue || false
          this.$emit('input', currentVal)
        }
        this.$emit('change', currentVal)
      }
    }
  }
}
</script>

<style></style>
