<template>
  <div
    class="t-progress"
    :style="{
      width: type === 'circle' ? `${circleSize}px` : width,
      height: type === 'circle' ? `${circleSize}px` : 'auto'
    }"
    :class="[
      status ? `is-${status}` : '',
      type === 'circle' ? 'is-circle' : ''
    ]"
  >
    <template v-if="type === 'line'">
      <div
        class="t-progress__line-wrapper"
        :style="{
          width: width,
          height: `${strokeWidth}px`
        }"
      >
        <div
          class="t-progress__bar"
          :style="{
            width: `${percentage}%`,
            background: barFill
          }"
        >
          <span
            v-if="textInside && !hidePercentage"
            class="t-progress__inner-text"
            :style="{
              color: percentageColor
            }"
          >{{ `${percentage}%` }}</span>
        </div>
      </div>

      <div
        v-if="!textInside && !hidePercentage"
        class="t-progress__text"
        :style="{
          color: percentageColor
        }"
      >{{ `${percentage}%` }}</div>
    </template>

    <template v-if="type === 'circle'">
      <svg
        class="t-progress__circle-wrapper"
        :style="{
          width: `${circleSize}px`,
          height: `${circleSize}px`
        }"
      >
        <circle
          class="t-progress__circle-back"
          cx="50%"
          cy="50%"
          r="40%"
          :stroke-width="strokeWidth"
          stroke-dashoffset="0"
        ></circle>

        <circle
          class="t-progress__circle-bar"
          cx="50%"
          cy="50%"
          r="40%"
          :stroke-width="strokeWidth"
          :stroke-dashoffset="circlePercentage"
          :stroke-linecap="round ? 'round' : ''"
          :style="{
            stroke: barFill
          }"
        ></circle>
        <text
          class="t-progress__circle-text"
          x="50%"
          y="50%"
          text-anchor="middle"
          stroke-width="2px"
          dy=".3em"
          :style="{
            stroke: percentageColor
          }"
        >
          <template v-if="$scopedSlots.default">
            <slot :percentage="percentage"></slot>
          </template>
          <template v-else>
            {{ `${percentage}%` }}
          </template>
        </text>
      </svg>
    </template>
  </div>
</template>

<script>
export default {
  name: 't-progress',

  props: {
    type: {
      default: 'line'
    },
    percentage: {
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: '100%'
    },
    strokeWidth: {
      type: Number,
      default: 6
    },
    status: String,
    barFill: String,
    textInside: Boolean,
    circleSize: {
      type: Number,
      default: 200
    },
    percentageColor: String,
    round: {
      type: Boolean,
      default: true
    },
    hidePercentage: Boolean
  },

  computed: {
    circlePercentage () {
      return `${255 - 2.55 * this.percentage}%`
    }
  }
}
</script>

<style scoped>

</style>
