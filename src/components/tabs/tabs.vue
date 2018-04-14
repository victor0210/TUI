<script>
import TTabPanel from '../tabPanel/tab-panel.vue'
import THeaderItem from './tab-header-item.vue'
import Emitter from '../../mixins/emitter'
export default {
  name: 't-tabs',

  mixins: [Emitter],

  data () {
    return {
      tabPanels: [],
      tabItemWidth: 0,
      tabItemOffsetX: 0,
      tabItemHeight: 0,
      tabItemOffsetY: 0,
      sourceTabPanels: [],
      focusIndex: 0,
      maxHeaderItemWidth: 0,
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
    type: String,
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
        let titleSlot = null
        el.componentOptions.children.forEach(function (c, idx) {
          if (c.data && c.data.slot === 'title') {
            titleSlot = c
          }
        })
        tabHeaderItems.push(
          h(THeaderItem, {
            key: idx,
            domProps: {
              draggable: _this.tabDraggable
            },
            props: {
              $idx: idx,
              isActive: _this.focusIndex === idx,
              itemLength: panels.length,
              position: _this.position
            }
          }, [titleSlot ? titleSlot : el.componentOptions.propsData.title])
        )
      })

      return tabHeaderItems
    }

    let contentPanels = () => {
      let panelContents = []
      panels.forEach(function (el, idx) {
        let children = []
        el.componentOptions.children.forEach(function (c, idx) {
          if (!(c.data && c.data.slot === 'title')) {
            children.push(c)
          }
        })
        panelContents.push(
          h(TTabPanel, {
            props: Object.assign({}, {
              $idx: idx
            }, el.componentOptions.propsData)
          }, [children])
        )
      })
      return h('div', {
        class: 't-tabs__content'
      }, panelContents)
    }

    let header = () => {
      return h('div', {
        key: _this.position,
        class: [
          't-tabs__header'
        ],
        style: {
          width: _this.isVertical && _this.maxHeaderItemWidth > 0 ? `${_this.maxHeaderItemWidth}px` : ''
        }
      }, [
        h('span', {
          class: [
            _this.isVertical ? 't-tabs__active-line-vertical' : 't-tabs__active-line-horizon'
          ],
          style: {
            width: !_this.isVertical ? `${_this.tabItemWidth}px` : '',
            height: _this.isVertical ? `${_this.tabItemHeight}px` : '',
            transform: !_this.isVertical ? `translate(${_this.tabItemOffsetX}px)` : `translateY(${_this.tabItemOffsetY}px)`
          }
        }),
        //  filter tab-panel
        tabHeaderItems()
      ])
    }

    return h('div', {
      class: [
        't-tabs',
        this.tabDraggable ? 'is-draggable' : '',
        _this.type ? `t-tabs--${_this.type}` : '',
        `is-${_this.position}`
      ]
    }, [
      //  render tabpanel content
      _this.position === 'bottom' && contentPanels(),

      header(),
      //  render tabpanel content
      _this.position !== 'bottom' && contentPanels()
    ])
  },

  created () {
    this.$on('init-active-line', this.renderActiveLine)
    this.$on('report-width', this.reportWidthHandler)
  },

  mounted () {
    this.broadcast('t-tab-header-item', 'get-width')
  },

  methods: {
    renderActiveLine ({idx, width, height, offsetX, offsetY}) {
      this.focusIndex = idx

      if (!this.type) {
        this.tabItemWidth = width
        this.tabItemHeight = height
        this.tabItemOffsetX = offsetX
        this.tabItemOffsetY = offsetY
      }
    },

    reportWidthHandler (w) {
      if (this.maxHeaderItemWidth < w) this.maxHeaderItemWidth = w
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

      this.tabPanels = arr
    }
  },
  computed: {
    dragOffset () {
      return this.tDrags.currentX - this.tDrags.startX
    },
    isVertical () {
      return this.position === 'left' || this.position === 'right'
    }
  }
}
</script>
