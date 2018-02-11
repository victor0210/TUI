<template>
    <div class="t-switch" :class="[
      state ? 'is-open' : '',
      size ? `${switchClassPrefix+size}` : '']"
         @click="toggle">
        <span class="t-switch__inner"
              :class="[type ? `${innerClassPrefix+type}` : '']">
        </span>
        <span class="t-switch__text" v-if="state">{{checkedChildren}}</span>
        <span class="t-switch__text" v-else>{{unCheckedChildren}}</span>
    </div>
</template>
<script>
export default {
  name: 't-switch',
  data () {
    return {
      state: false,
      switchClassPrefix: 't-switch--',
      innerClassPrefix: 't-switch__inner--'
    }
  },
  props: {
    value: Boolean,
    type: String,
    size: String,
    checkedChildren: String,
    unCheckedChildren: String
  },
  mounted () {
    this.state = this.value
  },
  methods: {
    toggle () {
      this.state = !this.state
      console.log(this.state)
    }
  },
  watch: {
    state (newval) {
      this.$emit('input', newval)
    }
  }
//  mounted () {
//    this.isChecked = this.checked
//    this.changeSize()
//  },
//  methods: {
//    changeSwitch () {
//      console.log(this.isChecked)
//      this.isChecked = true
//      console.log(this.isChecked)
//    },
//    changeSize () {
//      console.log(this.size)
//      console.log(this.$el)
//      let switchDom = this.$el
//      if (this.size === 'large') {
//        switchDom.style.width = 60 + 'px'
//        switchDom.style.height = 24 + 'px'
//      } else if (this.size === 'small') {
//        switchDom.style.width = 24 + 'px'
//        switchDom.style.height = 12 + 'px'
//      } else {
//
//      }
//    }
//  }
}
</script>
<style scoped></style>
