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
      <input type="checkbox" v-model="isChecked" :disabled="disabled" @change="onChange">
    </label>
</template>

<script>
import Emitter from '../../mixins/emitter'
//  TODO add indeterminate for checkout all
export default {
  name: 't-checkbox',

  mixins: [Emitter],

  data () {
    return {
      isChecked: false,
      isGroup: false,
      CheckBoxGroup: null
    }
  },
  props: {
    label: String,
    labelLeft: Boolean,
    disabled: Boolean,
    outbox: Boolean,
    val: {
      default: '123'
    },
    checked: Boolean,
    value: {},
    trueValue: Boolean
  },
  beforeMount () {
    this.$on('reset', this.reset)
    this.$on('indeterminate', this.indeterminate)
  },
  mounted () {
    this._isGroup()
    this.checked && (this.isChecked = true)
  },
  methods: {
    reset () {
      this.isChecked = false
    },
    _isGroup () {
      if (this.$parent.$options.name === 't-checkbox-group') {
        this.isGroup = true
        this.CheckBoxGroup = this.$parent
      }
    },
    _checkSize (tag) {
      const CheckboxGroup = this.CheckBoxGroup
      if (tag) {
        if (CheckboxGroup.store.length < CheckboxGroup.max || !CheckboxGroup.max) {
          this.dispatch('t-checkbox-group', 'add', this.val)
          this.isChecked = true
        } else {
          this.isChecked = !tag
        }
      } else {
        if (CheckboxGroup.store.length > CheckboxGroup.min || !CheckboxGroup.min) {
          this.dispatch('t-checkbox-group', 'remove', this.val)
          this.isChecked = false
        } else {
          this.isChecked = !tag
        }
      }
    },
    // indeterminate (val) {
    //   !this.disabled && (this._checkSize(val))
    // },
    onChange () {
      this.isGroup ? this.dispatch('t-checkbox-group', 'change', this.$parent.store) : this.$emit('change', this.value)
    }
  },
  watch: {
    isChecked (val) {
      if (this.isGroup) {
        this._checkSize(val)
      } else {
        if (this.value !== undefined) {
          if (this.trueValue) {
            this.$emit('input', val ? this.val : '')
          } else {
            this.$emit('input', val)
          }
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
