<template>
  <div class="t-input" :class="[
    $slots.prefix ? 'is-prefix' : '',
    $slots.suffix ? 'is-suffix' : '',
    prefixIcon ? 'is-input-prefix' : '',
    prependIcon ? 'is-input-suffix' : '',
    size ? `t-input--${size}` : '',
    disabled ? 'is-disabled' : '',
    isFocus ? 'is-focus' : ''
  ]
">
    <template v-if="type !== 'textarea'">
      <div class="t-input__prefix" v-if="$slots.prefix">
        <slot name="prefix"/>
      </div>
      <div class="t-input__wrapper">
        <input class="t-input__inner" :type="type" :placeholder="placeholder" :min="min" :max="max" v-model="val" :readonly="readonly" @focus="focusHandler" @blur="blurHandler" @change="changeHandler" ref="input" :disabled="disabled" :name="name" :autofocus="autofocus" :autocomplete="autocomplete"/>
        <span v-if="prefixIcon" class="t-input__prefix-inner">
          <i :class="prefixIcon"></i>
        </span>
        <span v-if="prependIcon" class="t-input__prepend-inner">
          <i :class="prependIcon"></i>
        </span>
        <t-validate-icon :validate-success="validateSuccess" v-if="validated"/>
      </div>
      <div class="t-input__suffix" v-if="$slots.suffix">
        <slot name="suffix"/>
      </div>
    </template>
    <textarea class="t-input__inner" v-else :rows="rows" v-model="val" :placeholder="placeholder" :readonly="readonly" @focus="focusHandler" @blur="blurHandler" @change="changeHandler" :disabled="disabled" :name="name" :autocomplete="autocomplete" :autofocus="autofocus" :style="{resize: resize}"></textarea>
  </div>
</template>

<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-input',

  mixins: [Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  data () {
    return {
      val: '',
      isFocus: false,
      validated: false,
      validateSuccess: false
    }
  },

  props: {
    value: {},
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    min: Number,
    max: Number,
    rows: {
      type: Number,
      default: 3
    },
    resize: {
      type: String,
      default: 'vertical'
    },
    width: String,
    prefixIcon: String,
    prependIcon: String,
    readonly: Boolean,
    size: String,
    disabled: Boolean,
    name: String,
    autocomplete: Boolean,
    autofocus: Boolean
  },

  mounted () {
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
    this.$on('validated', this.validateHandler)
    this.val = this.value
    if (this.checkInputType() === 'textarea') {
      this.textareaResize()
    } else {
      this.inputResize()
    }
  },

  methods: {
    reset () {
      this.$emit('input', '')
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', '')
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', '')
    },
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
    },
    validateHandler (val) {
      this.validated = true
      this.validateSuccess = val
    },
    checkInputType () {
      const type = this.type
      if (type !== 'text' && type !== 'password' && type !== 'textarea' && type !== 'number') {
        throw new Error('t-input type must be one of ["text","password","textarea","number"]')
      } else {
        return type
      }
    },
    textareaResize () {
      let textareaDom = this.$el.children[0]
      textareaDom.style.resize = this.resize
    },
    inputResize () {
      let textareaDom = this.$el
      textareaDom.style.width = this.width
    },
    blurHandler (e) {
      this.isFocus = false
      this.$emit('blur', e)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
    },
    focusHandler (e) {
      this.isFocus = true
      this.$emit('focus', e)
    },
    changeHandler (e) {
      this.$emit('change', e.target.value)
    }
  },

  watch: {
    val (val) {
      this.$emit('input', val)
    },
    value (val) {
      this.val = val
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', val)
    }
  }
}
</script>
