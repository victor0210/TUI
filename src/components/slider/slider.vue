<template>
  <div class="t-slider">
    <input type="hidden" :name="name" :value="value">
    <div class="t-slider__under-line"
      @click="movingTrigger"
    >
      <div class="t-slider__cover-line"
        :style="{
          width: type === 'range' ? percentageRange :percentage,
          marginLeft: type === 'range' ? percentageSmall : ''
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
          @mousedown="startMovingSmall"
        ></div>
      </t-tooltip>
      <t-tooltip :content="value[1].toFixed(degree)" theme="dark">
        <div class="t-slider__trigger"
          :style="{
            left: percentageBig
          }"
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
      endX: null
    }
  },

  props: {
    name: String,
    width: String,
    fillColor: String,
    underColor: String,
    divideLine: Boolean,
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
      this.$emit('input', parseFloat(val.toFixed(this.degree)))
    },

    setRangeValue  (val) {
      this.$emit('input', [parseFloat(val[0].toFixed(this.degree)), parseFloat(val[1].toFixed(this.degree))])
    },

    startMoving () {
      this.addMovingListener()
    },

    startMovingBig () {
      this.isBig = true
      this.startMoving()
    },
    startMovingSmall () {
      this.isSmall = true
      this.startMoving()
    },

    stopMoving () {
      this.isBig = false
      this.isSmall = false
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

      if (!this.isBig && !this.isSmall && this.type !== 'range') {
        this.setValue(val)
      } else if (this.isBig || this.isSmall) {
        let range = this.isBig ? [this.value[0], val] : [val, this.value[1]]
        if (range[1] < range[0]) {
          range = this.isBig ? [range[1], range[1]] : [range[0], range[0]]
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
