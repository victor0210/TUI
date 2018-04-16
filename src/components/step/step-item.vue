<template>
  <div
    class="t-step-item"
    :class="[
      textCenter ? 't-step-item--center' : ''
    ]"
    :style="{
      flexBasis: textCenter ? `${100 / total}%` : (!isLast ? `${100 / (total - 1)}%` : 'auto'),
      maxWidth: isLast ? `${100 / total}%` : '',
      flexShrink: isLast ? 0 : ''
    }">
    <div class="t-step-item__progress">
      <div
        class="t-step-item__line"
        :class="[
          nextIsActive ? 'is-active' : ''
        ]"
        v-if="!isLast"
      ></div>
      <div
        class="t-step-item__logo t-step-item__logo--icon"
        :class="[
          isActive ? 'is-active' : ''
        ]"
        v-if="icon"
      >
        <i
          :class="icon"
        ></i>
      </div>
      <div
        class="t-step-item__logo t-step-item__logo--text"
        :class="[
          isActive ? 'is-active' : ''
        ]"
        v-if="!icon"
      >
        <span>{{ idx + 1 }}</span>
      </div>
    </div>
    <div class="t-step-item__content"
      :class="[
        isActive ? 'is-active' : ''
      ]"
    >
      <div class="t-step-item__title">{{ title }}</div>
      <div class="t-step-item__desc" :style="{
        paddingRight: isLast ? '0' : ''
      }">{{ desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-step-item',

  props: {
    idx: Number,
    total: Number,
    active: Number,
    title: String,
    desc: String,
    icon: String,
    textCenter: Boolean
  },

  computed: {
    isLast () {
      return this.idx === this.total - 1
    },
    isActive () {
      return this.idx <= this.active - 1
    },
    nextIsActive () {
      return this.idx < this.active - 1
    }
  }
}
</script>

<style scoped>

</style>
