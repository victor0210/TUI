<template>
  <div class="t-input-number is-prefix is-suffix" :class="[
    `t-input-number--${type}`,
    `${disabled ? 'is-disabled' : ''}`,
    `${focused ? 'is-focused' : ''}`,
    `${sideFocused ? 'is-side-focused' : ''}`,
    `${size ? 't-input-number--' + size : ''}`
  ]" :style="{
    width: width || ''
  }">
    <div class="t-input-number__prefix" v-if="!sideControl">
      <t-button :type="type" @click="decrement" :disabled="disabled || min >= val" @mouseover="moFocus" @mouseout="moBlur" icon="fa fa-minus"/>
    </div>

    <div class="t-input-number__wrapper">
      <input class="t-input-number__inner" type="text" :name="name" :min="min" :max="max" :autocomplete="autocomplete" v-model="val" @focus="focusHandler" @blur="blurHandler" @change="changeHandler" :disabled="disabled" :placeholder="placeholder" :readonly="readonly" :autofocus="autofocus"/>
      <t-validate-icon :validate-success="validateSuccess" v-if="validated"/>
    </div>

    <div class="t-input-number__suffix" v-if="!sideControl">
      <t-button :type="type" @click="increment" :disabled="disabled || max <= val" @mouseover="moFocus" @mouseout="moBlur" icon="fa fa-plus"/>
    </div>

    <div class="t-input-number__side-control" @mouseout="resetPosition" v-else>
      <div class="t-input-number__side-wrapper">
        <t-button :type="type" @click="increment" :disabled="disabled || max <= val" @mouseover="changePosition(true)" ref="side_top">
          <i class="fa fa-angle-up"></i>
        </t-button>
        <t-button :type="type" @click="decrement" :disabled="disabled || min >= val" @mouseover="changePosition(false)" ref="side_bottom">
          <i class="fa fa-angle-down"></i>
        </t-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-input-number',
  data () {
    return {
      val: '',
      focused: false,
      sideFocused: false,
      validateSuccess: false,
      validated: false
    }
  },
  props: {
    placeholder: String,
    autocomplete: Boolean,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    name: String,
    min: Number,
    max: Number,
    range: {
      type: Number,
      default: 1,
      validator: function (v) {
        return v > 0
      }
    },
    type: {
      type: String,
      default: 'default'
    },
    sideControl: Boolean,
    value: {},
    size: String,
    width: String
  },

  created () {
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
    this.$on('validated', this.validateHandler)
  },

  mounted () {
    this.val = parseFloat(this.value) || ''
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
    changePosition (isTop) {
      let sideTop = this.$refs.side_top.$el
      let sideBottom = this.$refs.side_bottom.$el
      if (isTop) {
        sideTop.style.top = '-16px'
        sideTop.style.fontSize = '1.3em'
        sideBottom.style.top = '24px'
      } else {
        sideTop.style.top = '-25px'
        sideBottom.style.top = '15px'
        sideBottom.style.fontSize = '1.3em'
      }
      this.moFocus()
    },
    resetPosition () {
      let sideTop = this.$refs.side_top.$el
      let sideBottom = this.$refs.side_bottom.$el
      sideTop.style.top = '-20px'
      sideBottom.style.top = '20px'
      sideTop.style.fontSize = '1em'
      sideBottom.style.fontSize = '1em'

      this.moBlur()
    },
    moFocus () {
      this.type === 'default' && (this.sideFocused = true)
    },
    moBlur () {
      this.type === 'default' && (this.sideFocused = false)
    },
    focusHandler (e) {
      document.addEventListener('keydown', this.keyDownHandler)
      this.focused = true
      this.$emit('focus', e)
    },
    blurHandler (e) {
      document.removeEventListener('keydown', this.keyDownHandler)
      this.focused = false
      this.val !== '' && (this.val = isNaN(parseFloat(this.val)) ? '' : parseFloat(this.val))
      this.$emit('blur', e)
    },
    changeHandler (e) {
      this.$emit('change', e.target.value)
    },
    keyDownHandler (e) {
      const code = e.keyCode
      const keyBoardFilter = [8, 190, 37, 39]
      if ((code > 57 || e.keyCode < 48) && keyBoardFilter.indexOf(code) === -1) {
        const _this = this
        switch (code) {
          case 189:
            this.val.toString().indexOf('-') !== -1 && e.preventDefault()
            break
          case 40:
            _this.decrement()
            break
          case 38:
            _this.increment()
            break
          default:
            e.preventDefault()
        }
      }
    },
    decrement () {
      this.val === '' && (this.val = 0)
      this.val = this.transPrecision((parseFloat(this.val) - this.range))
    },
    increment () {
      this.val === '' && (this.val = 0)
      this.val = this.transPrecision((parseFloat(this.val) + this.range))
    },
    transPrecision (num, precision = 12) {
      return parseFloat(num.toPrecision(precision))
    }
  },
  watch: {
    value (val) {
      this.val = val
    },
    val (val, pre) {
      if (!isNaN(val)) {
        if (val !== '') {
          this.val = val
          this.max !== undefined && this.val > this.max && (this.val = this.max)
          this.min !== undefined && this.val < this.min && (this.val = this.min)
          this.$emit('input', this.val)
        } else {
          this.$emit('input', '')
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
