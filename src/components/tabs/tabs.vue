<!--<template>-->
  <!--<div class="t-tabs" :class="[-->
    <!--tabDraggable ? 'is-draggable' : ''-->
  <!--]">-->
    <!--<div class="t-tabs__header">-->
      <!--<span class="t-tabs__active-line" :style="{-->
        <!--width: `${tabItemWidth[val]}px`,-->
        <!--transform: `translate(${tabItemOffsetX[val]}px)`-->
      <!--}" v-if="!tabDraggable"></span>-->
      <!--<span-->
        <!--class="t-tabs__header-item"-->
        <!--:class="[-->
          <!--t.val === val ? 'is-active' : '',-->
          <!--tDrags.isDragging && idx === tDrags.targetIndex ? 'is-dragging' : ''-->
        <!--]"-->
        <!--v-for="(t, idx) in tabPanels"-->
        <!--:key="idx"-->
        <!--@click="changeTab(t.idx)"-->
        <!--:draggable="tabDraggable"-->
        <!--@dragstart="onDragStart"-->
        <!--@drag="onDrag"-->
        <!--@dragend="onDragEnd"-->
        <!--:tTabKey="idx"-->
        <!--ref="header_item"-->
      <!--&gt;{{ t.title }}</span>-->
    <!--</div>-->
    <!--<div class="t-tabs__content">-->
      <!--<slot/>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->
<script>
import TTabPanel from '../tabPanel/tab-panel.vue'
import THeaderItem from './tab-header-item.vue'
export default {
  name: 't-tabs',

  data () {
    return {
      tabPanels: [],
      tabItemWidth: 0,
      tabItemOffsetX: 0,
      sourceTabPanels: [],
      focusIndex: 0,
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
    value: {},
    tabDraggable: Boolean,
    position: {
      type: String,
      default: 'top'
    }
  },

  render (h) {
    const _this = this._self

    let panels = []
    _this.$slots.default.forEach(function (el) {
      if (el.tag && el.componentOptions.tag === 't-tab-panel') {
        panels.push(el)
      }
    })

    let tabHeaderItems = () => {
      let tabHeaderItems = []
      panels.forEach(function (el, idx) {
        tabHeaderItems.push(
          h(THeaderItem, {
            domProps: {
              draggable: _this.tabDraggable
            },
            props: {
              $idx: idx,
              isActive: _this.focusIndex === idx,
              itemLength: panels.length
            }
          }, [el.componentOptions.propsData.title])
        )
      })

      return tabHeaderItems
    }

    let contentPanels = () => {
      let panelContents = []
      panels.forEach(function (el, idx) {
        panelContents.push(
          h(TTabPanel, {
            props: Object.assign({}, {
              $idx: idx
            }, el.componentOptions.propsData)
          }, [el.componentOptions.children])
        )
      })
      return panelContents
    }

    return h('div', {
      class: [
        't-tabs',
        this.tabDraggable ? 'is-draggable' : '',
        `is-${_this.position}`
      ]
    }, [
      //  render tabpanel content
      _this.position === 'bottom' && contentPanels(),

      h('div', {
        class: [
          't-tabs__header'
        ]
      }, [
        h('span', {
          class: [
            't-tabs__active-line'
          ],
          style: {
            width: `${_this.tabItemWidth}px`,
            transform: `translate(${_this.tabItemOffsetX}px)`
          }
        }),
        //  filter tab-panel
        tabHeaderItems()
      ]),

      //  render tabpanel content
      _this.position === 'top' && contentPanels()
    ])
  },

  created () {
    // this.$on('tab-panel-register', this.registerHandler)
    this.$on('init-active-line', this.renderActiveLine)
  },


  methods: {
    renderActiveLine ({idx, width, offsetX}) {
      this.focusIndex = idx
      this.tabItemWidth = width
      this.tabItemOffsetX = offsetX
    },

    // registerHandler (panel) {
    //   if (this.tabPanels.length === 0 || this.value === panel.val) {
    //     this.val = panel.val //  init val
    //   }
    //
    //   this.tabPanels.indexOf(panel) === -1 && this.tabPanels.push(panel)
    //   this.sourceTabPanels = this.tabPanels
    // },

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
          arr[i] = arr[i - 1]
        }
        arr[targetIndex] = foo
      } else {
        let foo = arr[sourceIndex]
        for (let i = sourceIndex; i < targetIndex; i++) {
          arr[i] = arr[i + 1]
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
