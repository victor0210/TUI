<template>
    <label class="t-checkbox"  :class="{
        'is-checked': isChecked || indeterminate,
        'is-disabled': disabled,
        'is-outbox': outbox,
      }">
      <span class="t-checkbox__label" v-if="labelLeft && !!label">{{ label }}</span>
      <span class="t-checkbox__inner">
        <i class="fa fa-check" v-show="!indeterminate"></i>
        <i class="fa fa-minus" v-show="indeterminate"></i>
      </span>
      <span class="t-checkbox__label" v-if="!labelLeft && !!label">{{ label }}</span>
      <input type="checkbox" v-model="isChecked" :disabled="disabled" @change="onChange" :value="val">
    </label>
</template>

<script>
import Emitter from '../../mixins/emitter'
import ArrayHelper from '../../mixins/arrayHelper'
//  TODO add indeterminate for checkout all
export default {
  name: 't-checkbox',

  mixins: [Emitter, ArrayHelper],

  data () {
    return {
      isChecked: false,
      isGroup: false,
      CheckBoxGroup: null,
      isArray: false
    }
  },
  props: {
    label: String,
    labelLeft: Boolean,
    disabled: Boolean,
    outbox: Boolean,
    val: {
      default: ''
    },
    checked: Boolean,
    value: {},
    trueValue: Boolean,
    indeterminate: Boolean
  },
  beforeMount () {
    this.$on('reset', this.reset)
    this.$on('indeterminate', this.indeterminate)
    this.$on('group-change', this.groupChange)
  },
  mounted () {
    this._isGroup()
    this.initValue()
  },
  methods: {
    groupChange (val) {
      this.isChecked = val.indexOf(this.val) !== -1
    },
    initValue () {
      this.checked && (this.isChecked = true)

      if (!this.isGroup) {
        if (Array.isArray(this.value)) {
          this.value.indexOf(this.val) !== -1 && (this.isChecked = true)
        } else {
          if (this.trueValue) {
            this.value === this.val && (this.isChecked = true)
          } else {
            this.value === true && (this.isChecked = true)
          }
        }
      }
    },
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
      if (CheckboxGroup.value === undefined) return
      if (tag) {
        if (CheckboxGroup.store.length < CheckboxGroup.max || !CheckboxGroup.max) {
          this.isChecked = true
          this.dispatch('t-checkbox-group', 'add', this.val)
          return true
        } else {
          this.isChecked = !tag
        }
      } else {
        if (CheckboxGroup.store.length > CheckboxGroup.min || !CheckboxGroup.min) {
          this.isChecked = false
          this.dispatch('t-checkbox-group', 'remove', this.val)
          return true
        } else {
          this.isChecked = !tag
        }
      }
      return false
    },
    onChange (e) {
      const val = e.target.checked
      if (this.isGroup) {
        this._checkSize(val)
      } else {
        if (this.value !== undefined) {
          if (Array.isArray(this.value)) {
            if (val) {
              this.$emit('input', ArrayHelper.addToStore(this.value, this.val))
              // add
            } else {
              this.$emit('input', ArrayHelper.removeFromStore(this.value, this.val))
              // remove
            }
          } else {
            if (this.trueValue) {
              this.$emit('input', val ? this.val : '')
            } else {
              this.$emit('input', val)
            }
          }
        }
      }
      this.$emit('change', val)
    }
  },
  watch: {
    value (val) {
      if (Array.isArray(val)) {
        this.isChecked = val.indexOf(this.val) !== -1
      } else if (this.trueValue) {
        this.isChecked = val === this.val
      } else {
        this.isChecked = val
      }
    }
  }
}
</script>

<style scoped>

</style>
