<template>
  <div class='t-form-item' :class="[
    layout ? `is-${layout}` : (formLayout ? `is-${formLayout}` : ''),
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
    label: String,
    name: String,
    trigger: {
      type: String,
      default: 'blur'
    },
    layout: String  // 'inline-right' 'oneline' 'vertical'
  },

  data () {
    return {
      showValidateError: null,
      validatePass: null,
      errorMessage: '',
      rule: {},
      required: false,
      formLayout: ''
    }
  },

  mounted () {
    this.$on('set-form-item-rule', this.setRule)
    this.$on('set-form-item-layout', this.setLayout)
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
        this.broadcastAllInput('validated', false)
      } else {
        this.showValidateError = false
        this.validatePass = true
        this.broadcastAllInput('validated', true)
      }
    },
    setRule (rules) {
      if (this.name && rules[this.name] !== undefined) {
        this.rule[this.name] = rules[this.name]
        this.required = rules[this.name].required
      }
    },
    setLayout (layout) {
      this.formLayout = layout
    },
    broadcastAllInput (type, p) {
      this.broadcast('t-input', type, p)
      this.broadcast('t-select', type, p)
      this.broadcast('t-cascader', type, p)
      this.broadcast('t-checkbox', type, p)
      this.broadcast('t-checkbox-group', type, p)
      this.broadcast('t-radio', type, p)
      this.broadcast('t-radio-group', type, p)
      this.broadcast('t-date-picker', type, p)
      this.broadcast('t-time-picker', type, p)
    }
  }
}
</script>

<style scoped>

</style>
