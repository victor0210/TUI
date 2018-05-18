<template>
  <div class="t-range">
    <div class="t-range__under-line">
      <div class="t-range__cover-line"
        :style="{
          width: percentage
        }"
      ></div>
    </div>
    <t-tooltip :content="value" theme="dark">
      <div class="t-range__trigger"
       :style="{
         left: percentage
       }"
       @mousedown="startMoving"
      ></div>
    </t-tooltip>
  </div>
</template>

<script>
export default {
  name: 't-range',

  data () {
    return {
      isMoving: false,
      startX: null,
      endX: null
    }
  },

  props: {
    width: String,
    fillColor: String,
    underColor: String,
    max: {
      type: Number,
      default: 2
    },
    min: {
      type: Number,
      default: 0
    },
    unit: {
      type: Number,
      default: 1
    },
    value: {
      type: Number,
      default: 0
    }
  },

  methods: {
    setValue (val) {
      //  do set new value
      this.$emit('input', parseFloat(val.toFixed(this.degree)), this.degree)
    },

    startMoving (e) {
      this.isMoving = true
      this.addMovingListener()
    },

    stopMoving () {
      this.isMoving = false
      this.removeMovingListener()
    },

    movingTrigger (e) {
      if (!this.isMoving) return
      this.endX = e.x
      let percentage = (this.endX - this.$el.getBoundingClientRect().left) / this.$el.offsetWidth
      let val = Math.floor((percentage + this.min / (this.max - this.min)) * (this.max - this.min) / this.unit) * this.unit
      console.log(this.max - this.min, this.unit, percentage, val, Math.floor((percentage + this.min / (this.max - this.min)) * (this.max - this.min) / this.unit) )
      if (val > this.max) {
        val = this.max
      } else if (val < this.min) {
        val = this.min
      }

      this.setValue(val)
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

    degree () {
      let degree = 0
      if (this.unit.toString().indexOf('.') !== -1) degree = this.unit.toString().split('.')[1].length
      return degree
    }
  }
}
</script>
