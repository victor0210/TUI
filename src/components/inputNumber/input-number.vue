<template>
  <div class="t-input-number is-prefix is-suffix" :class="[
    `t-input-number--${type}`,
    `${disabled ? 'is-disabled' : ''}`,
    `${focused ? 'is-focused' : ''}`,
    `${sideFocused ? 'is-side-focused' : ''}`,
  ]">
    <div class="t-input-number__prefix" v-if="!sideControl">
     <t-button :type="type" @click="decrement" :disabled="disabled || min >= val" @mouseover="moFocus" @mouseout="moBlur">
       <i class="fa fa-minus"></i>
     </t-button>
    </div>
    <div class="t-input-number__wrapper">
      <input class="t-input-number__inner" type="text" :name="name" :min="min" :max="max" autocomplete="off" v-model="val" @focus="focusHandler" @blur="blurHandler" :disabled="disabled"/>
    </div>

    <div class="t-input-number__suffix" v-if="!sideControl">
      <t-button :type="type" @click="increment" :disabled="disabled || max <= val" @mouseover="moFocus" @mouseout="moBlur">
        <i class="fa fa-plus"></i>
      </t-button>
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
      sideFocused: false
    }
  },
  props: {
    disabled: Boolean,
    prefixIcon: {},
    prependIcon: {},
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
    value: {}
  },
  mounted () {
    this.val = parseFloat(this.value)
  },
  methods: {
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
    focusHandler () {
      document.addEventListener('keydown', this.keyDownHandler)
      this.focused = true
    },
    blurHandler () {
      document.removeEventListener('keydown', this.keyDownHandler)
      this.focused = false
      this.val !== '' && (this.val = isNaN(parseFloat(this.val)) ? '' : parseFloat(this.val))
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
      console.log(val)
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
