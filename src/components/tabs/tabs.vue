<template>
  <div class="t-tabs">
    <div class="t-tabs__header">
      <span
        class="t-tabs__header-item"
        :class="[
          t.val === val ? 'is-active' : '',
          tDrags.isDragging && idx === tDrags.targetIndex ? 'is-dragging' : ''
        ]"
        v-for="(t, idx) in tabPanels"
        :key="idx"
        @click="changeTab(t.val)"
        draggable="true"
        @dragstart="onDragStart"
        @drag="onDrag"
        @dragend="onDragEnd"
        :tTabKey="idx"
      >{{ t.title }}</span>
      <div class="t-tab__header-clear"></div>
    </div>
    <div class="t-tabs__content">
      <slot/>
    </div>
  </div>
</template>
<script>
export default {
  name: 't-tabs',

  data () {
    return {
      tabPanels: [],
      sourceTabPanels: [],
      val: '',
      tDrags: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        index: -1,
        targetIndex: 0,
        elWidth: 0,
        isDragging: false
      }
    }
  },

  props: {
    value: {}
  },

  created () {
    this.$on('tab-panel-register', this.registerHandler)
  },

  methods: {
    registerHandler (panel) {
      if (this.tabPanels.length === 0 || this.value === panel.val) {
        this.val = panel.val //  init val
      }

      this.tabPanels.indexOf(panel) === -1 && this.tabPanels.push(panel)
      this.sourceTabPanels = this.tabPanels
    },
    changeTab (val) {
      this.val = val
    },

    onDragStart (e) {
      this.tDrags.index = ~~e.target.attributes.tTabKey.value
      this.tDrags.startX = e.x
      this.tDrags.startY = e.y
      this.tDrags.elWidth = e.target.offsetWidth
      this.tDrags.isDragging = true
    },
    onDrag (e) {
      this.tDrags.currentX = e.x
      this.tDrags.currentY = e.y
      if (!!e.x && !!e.y) this.switchTabItem()
    },
    onDragEnd (e) {
      this.tDrags.isDragging = false
      this.sourceTabPanels = this.tabPanels
      // this.val = this.tabPanels[this.tDrags.targetIndex].val //  auto focus target on drag end
    },
    switchTabItem () {
      const offsetPatch = this.tDrags.currentX > this.tDrags.startX ? this.tDrags.elWidth / 2 : -this.tDrags.elWidth / 2
      const targetIndex = this.tDrags.targetIndex
      this.tDrags.targetIndex = this.tDrags.index + ~~((this.dragOffset + offsetPatch) / this.tDrags.elWidth)
      if (targetIndex !== this.tDrags.targetIndex && !!this.sourceTabPanels[this.tDrags.targetIndex]) this.formatDraggedTabs(this.tDrags.index, this.tDrags.targetIndex)
    },
    formatDraggedTabs (sourceIndex, targetIndex) {
      const arr = this.sourceTabPanels.concat([])
      if (sourceIndex > targetIndex) {
        let foo = arr[sourceIndex]
        for (let i = sourceIndex; i > targetIndex; i--) {
          arr[i] = arr[i-1]
        }
        arr[targetIndex] = foo
      } else {
        let foo = arr[sourceIndex]
        for (let i = sourceIndex; i < targetIndex; i++) {
          arr[i] = arr[i+1]
        }
        arr[targetIndex] = foo
      }

      // console.log(arr)
      this.tabPanels = arr
    }
  },
  computed: {
    dragOffset () {
      return this.tDrags.currentX - this.tDrags.startX
    }
  }
}
</script>
