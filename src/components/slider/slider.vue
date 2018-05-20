<template>
  <div class="t-slider"
    :class="[
      disabled ? 'is-disabled' : ''
    ]"
  >
    <input type="hidden" :name="name" :value="value">
    <div class="t-slider__under-line"
      @click="movingTrigger"
      :style="{
        backgroundColor: underColor
      }"
    >
      <div class="t-slider__cover-line"
        :style="{
          width: type === 'range' ? percentageRange :percentage,
          marginLeft: type === 'range' ? percentageSmall : '',
          backgroundColor: fillColor
        }"
      ></div>
      <template v-if="divideLine">
        <div class="t-slider__divide-block" v-for="i in unitCount - 1" :key="i"
          :style="{
            left: `${100 * i / unitCount}%`
          }"
        ></div>
      </template>
    </div>

    <template v-if="type !== 'range'">
      <t-tooltip :content="value.toFixed(degree)" theme="dark">
        <div class="t-slider__trigger"
         :style="{
          left: percentage
         }"
         :class="[
           isMoving ? 'is-moving' : ''
         ]"
         @mousedown="startMoving"
        ></div>
      </t-tooltip>
    </template>

    <template v-else-if="Array.isArray(value)">
      <t-tooltip :content="value[0].toFixed(degree)" theme="dark">
        <div class="t-slider__trigger"
          :style="{
            left: percentageSmall
          }"
          :class="[
            isMovingSmall ? 'is-moving' : ''
          ]"
          @mousedown="startMovingSmall"
        ></div>
      </t-tooltip>
      <t-tooltip :content="value[1].toFixed(degree)" theme="dark">
        <div class="t-slider__trigger"
          :style="{
            left: percentageBig
          }"
          :class="[
            isMovingBig ? 'is-moving' : ''
          ]"
          @mousedown="startMovingBig"
        ></div>
      </t-tooltip>
    </template>
  </div>
</template>

<script>
export default {
  name: 't-slider',

  data () {
    return {
      startX: null,
      endX: null,
      isMoving: false,
      isMovingBig: false,
      isMovingSmall: false
    }
  },

  props: {
    name: String,
    fillColor: String,
    underColor: String,
    divideLine: Boolean,
    disabled: Boolean,
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    unit: {
      type: Number,
      default: 1
    },
    type: String,
    value: {
      type: [Number, Array]
    }
  },

  created () {
    if (this.type === 'range' && !Array.isArray(this.value)) {
      this.setRangeValue([this.min, this.max])
    }
  },

  methods: {
    setValue (val) {
      if (this.disabled) return
      this.$emit('input', parseFloat(val.toFixed(this.degree)))
    },

    setRangeValue  (val) {
      if (this.disabled) return
      this.$emit('input', [parseFloat(val[0].toFixed(this.degree)), parseFloat(val[1].toFixed(this.degree))])
    },

    startMoving () {
      this.isMoving = true
      this.addMovingListener()
    },

    startMovingBig () {
      this.isMovingBig = true
      this.startMoving()
    },
    startMovingSmall () {
      this.isMovingSmall = true
      this.startMoving()
    },

    stopMoving () {
      this.isMovingBig = false
      this.isMovingSmall = false
      this.isMoving = false
      this.removeMovingListener()
    },

    movingTrigger (e) {
      this.endX = e.x
      let percentage = (this.endX - this.$el.getBoundingClientRect().left) / this.$el.offsetWidth
      let val = Math.floor((percentage + (this.min + this.unit / 2) / (this.max - this.min)) * (this.max - this.min) / this.unit) * this.unit
      if (val > this.max) {
        val = this.max
      } else if (val < this.min) {
        val = this.min
      }

      if (!this.isMovingBig && !this.isMovingSmall && this.type !== 'range') {
        this.setValue(val)
      } else if (this.isMovingBig || this.isMovingSmall) {
        let range = this.isMovingBig ? [this.value[0], val] : [val, this.value[1]]
        if (range[1] < range[0]) {
          range = this.isMovingBig ? [range[1], range[1]] : [range[0], range[0]]
        }

        this.setRangeValue(range)
      } else {
        let range = val > this.value[1] ? [this.value[0], val] : [val, this.value[1]]

        this.setRangeValue(range)
      }
    },

    addMovingListener () {
      window.addEventListener('mousemove', this.movingTrigger)
      window.addEventListener('mouseup', this.stopMoving)
    },
    removeMovingListener () {
      window.removeEventListener('mousemove', this.movingTrigger)
      window.removeEventListener('mouseup', this.stopMoving)
    }
  },

  computed: {
    percentage () {
      return `${((this.value - this.min) / (this.max - this.min)) * 100}%`
    },

    percentageSmall () {
      return `${((this.value[0] - this.min) / (this.max - this.min)) * 100}%`
    },

    percentageBig () {
      return `${((this.value[1] - this.min) / (this.max - this.min)) * 100}%`
    },

    percentageRange () {
      return `${((this.value[1] - this.value[0]) / (this.max - this.min)) * 100}%`
    },

    unitCount () {
      return (this.max - this.min) / this.unit
    },

    degree () {
      let degree = 0
      if (this.unit.toString().indexOf('.') !== -1) degree = this.unit.toString().split('.')[1].length
      return degree
    }
  }
}
</script>
