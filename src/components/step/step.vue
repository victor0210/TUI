<template>
  <div class="t-step" :class="[
    vertical ? 'is-vertical' : 'is-horizon'
  ]">
    <t-step-item
      v-for="(s, idx) in steps"
      :idx="idx"
      :active="active"
      :total="steps.length"
      :title="s.title"
      :desc="s.desc"
      :icon="s.icon"
      :key="idx"
      :textCenter="textCenter"
    />
  </div>
</template>

<script>
import TStepItem from './step-item.vue'
export default  {
  components: {
    TStepItem
  },

  name: 't-step',

  props: {
    steps: Array,
    vertical: Boolean,
    active: Number,
    textCenter: Boolean
  }
}
</script>
