<template>
    <label class="t-checkbox"  :class="{
        'is-checked': isChecked,
        'is-disabled': disabled,
        'is-outbox': outbox,
      }">
      <span class="t-checkbox__label" v-if="labelLeft && !!label">{{ label }}</span>
      <span class="t-checkbox__inner">
        <i class="fa fa-check"></i>
      </span>
      <span class="t-checkbox__label" v-if="!labelLeft && !!label">{{ label }}</span>
      <input type="checkbox" v-model="isChecked" :disabled="disabled">
    </label>
</template>

<script>
export default {
  name: 't-checkbox',
  data () {
    return {
      isChecked: false,
      isGroup: false
    }
  },
  props: {
    label: String,
    labelLeft: Boolean,
    disabled: Boolean,
    outbox: Boolean,
    val: String,
    checked: Boolean
  },
  mounted () {
    this._isGroup()
    this.isChecked = this.checked
  },
  methods: {
    _isGroup () {
      if (this.$parent.$options.name === 't-checkbox-group') {
        this.isGroup = true
        if (this.val === undefined) {
          throw new Error('Please giving checkbox [' + this.label + ']  a value like :val="value"')
        }
      }
    },
    doCheck (b) {
      this.isChecked = !!b
    }
  },
  watch: {
    isChecked (val, pre) {
      if (this.isGroup) {
        if (val && !pre) {
          if (!this.$parent.addToStore(this.val)) {
            this.isChecked = false
          }
        } else {
          if (!this.$parent.removeFromStore(this.val)) {
            this.isChecked = true
          }
        }
      } else {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
