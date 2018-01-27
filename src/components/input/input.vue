<template>
  <div class="t-input" :class="{
    'is-prefix' : $slots.prefix,
    'is-suffix' : $slots.suffix,
    'is-input-prefix' : prefixIcon,
    'is-input-suffix' : prependIcon
  }
">
    <template v-if="type !== 'textarea'">
      <div class="t-input__prefix" v-if="$slots.prefix">
          <slot name="prefix"/>
      </div>
      <div class="t-input__wrapper">
        <input class="t-input__inner" :type="type" :placeholder="placeholder" :min="min" :max="max" autocomplete="off"/>
        <span v-if="prefixIcon" class="t-input__prefix-inner">
          <i :class="prefixIcon"></i>
        </span>
        <span v-if="prependIcon" class="t-input__prepend-inner">
          <i :class="prependIcon"></i>
        </span>
      </div>
      <div class="t-input__suffix" v-if="$slots.suffix">
        <slot name="suffix"/>
      </div>
    </template>
    <textarea class="t-input__inner" v-else :rows="rows" :resize="resize"></textarea>
  </div>
</template>

<script>
export default {
  name: 't-input',
  mounted () {
    if (this.checkInputType() === 'textarea') {
      this.textareaResize()
    } else {
      this.inputResize()
    }
  },
  methods: {
    checkInputType () {
      const type = this.type
      if (type !== 'text' && type !== 'password' && type !== 'textarea') {
        throw new Error('t-input type must be one of ["text","password","textarea"]')
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
      textareaDom.style.width = this.width + 'px'
    }
  },
  props: {
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
    width: Number,
    prefixIcon: String,
    prependIcon: String
  }
}
</script>
