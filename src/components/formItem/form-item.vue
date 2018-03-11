<template>
  <div class='t-form-item' :class="[
    vertical ? 'is-vertical' : '',
    oneline ? 'is-oneline' : '',
    inline ? 'is-inline' : '',
    labelRight ? 'is-right' : '',
    required ? 'is-required' : '',
    showValidateError ? 'is-error' : '',
    validatePass ? 'is-validated' : ''
  ]">
    <label class="t-form-item__label">{{ label }}</label>
    <div class="t-form-item__content">
      <slot></slot>
      <transition name="fly">
        <div class="t-form-item__error" v-if="showValidateError">
          {{ errorMessage }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ValidateHelper from '../../mixins/validateHelper'
import Emitter from '../../mixins/emitter'

export default {
  name: 't-form-item',

  mixins: [ValidateHelper, Emitter],

  provide: {
    TFormItem: this
  },

  props: {
    label: {},
    name: String,
    trigger: {
      type: String,
      default: 'blur'
    },
    vertical: Boolean,
    oneline: Boolean,
    inline: Boolean,
    labelRight: Boolean,
    errorIcon: String
  },

  data () {
    return {
      showValidateError: false,
      validatePass: false,
      errorMessage: '',
      rule: {},
      required: false
    }
  },

  mounted () {
    this.$on('set-form-item-rule', this.setRule)
    this.$on('form-item-change', this.validateChange)
    this.$on('form-item-blur', this.validateBlur)
  },
  methods: {
    validateBlur (val) {
      !!this.rule[this.name] && this.validateProp('blur', val)
    },
    validateChange (val) {
      !!this.rule[this.name] && this.validateProp('change', val)
    },
    validateProp (trigger, val) {
      this.dispatch('t-form', 'form-set-model', {props: this.prop, value: val})
      if (this.trigger === trigger) {
        let model = {}
        model[this.name] = val
        this.model = model
        if (this.rule[this.name].required) {
          this.validateFiled(model, this.rule, this.validateCallBack)
        }
      }
    },
    validateCallBack (errors, fields) {
      if (errors) {
        this.showValidateError = true
        this.validatePass = false
        this.errorMessage = errors[0].message
      } else {
        this.showValidateError = false
        this.validatePass = true
      }
    },
    setRule (rules) {
      if (this.name && rules[this.name] !== undefined) {
        this.rule[this.name] = rules[this.name]
        this.required = rules[this.name].required
      }
    }
  }
}
</script>

<style scoped>

</style>
