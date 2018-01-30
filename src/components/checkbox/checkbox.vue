<template>
    <label class="t-checkbox"  :class="{
        'is-checked': model,
        'is-disabled': disabled,
        'is-outbox': outbox,
      }">
      <span class="t-checkbox__label" v-if="labelLeft && !!label">{{ label }}</span>
      <span class="t-checkbox__inner">
        <i class="fa fa-check"></i>
      </span>
      <span class="t-checkbox__label" v-if="!labelLeft && !!label">{{ label }}</span>
      <input type="checkbox" v-model="model" :disabled="disabled" @change="onChange">
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
    val: String,
    checked: Boolean,
    value: {}
  },
  beforeMount () {
    this.$on('indeterminate', this.indeterminate)
  },
  mounted () {
    this._isGroup()
    this.checked && this._checkSize('add')
  },
  methods: {
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
        }
      } else {
        if (CheckboxGroup.store.length > CheckboxGroup.min || !CheckboxGroup.min) {
          this.dispatch('t-checkbox-group', 'remove', this.val)
          this.isChecked = false
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
  computed: {
    model: {
      get () {
        return this.isGroup ? this.isChecked : this.value
      },
      set (val) {
        this.isGroup ? this._checkSize(val) : this.$emit('input', val)
      }
    }
  }
}
</script>

<style scoped>

</style>
