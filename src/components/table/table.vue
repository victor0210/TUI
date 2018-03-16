<template>
  <div class="t-table" :class="[
    stripe ? 't-table--stripe' : '',
    border ? 't-table--border' : ''
  ]" ref="container">
    <!--main columns-->
    <div class="t-table__hidden" v-show="false"><slot/></div>
    <div class="t-table__header-wrapper" ref="table_header" @scroll="tableScrollHandler('header')">
      <table cellspacing="0" cellpadding="0" border="0" class="t-table__header" :style="{
        width: width > rowWidth ? `${width}px` : `${rowWidth}px`,
        overflowX: !isBeyondWidth ? 'hidden' : ''
      }">
        <tr class="t-table__header-row">
          <th v-for="(c, idx) in columns" :key="idx" :style="{
            width: c.width ? `${c.width}px` : `${averageWidth}px`
          }">
            <div class="t-table__cell" :style="{
              width: c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`
            }">
              {{ c.label }}
            </div>
          </th>
        </tr>
      </table>
    </div>

    <div class="t-table__body-wrapper" :style="{
      height: bodyHeight ? `${bodyHeight}px` : 'auto',
      overflowX: !isBeyondWidth ? 'hidden' : ''
    }" ref="table_body" @scroll="tableScrollHandler('body')" @mouseleave="rowMouseLeave">
      <table cellspacing="0" cellpadding="0" border="0" class="t-table__body" :style="{
        width: width > rowWidth ? `${width}px` : `${rowWidth}px`
      }">
        <tr v-for="(d, idx) in data" :key="idx" class="t-table__body-row" :class="[
          rowClasses[idx],
          hoverRowIdx === idx ? 'is-hover' : ''
        ]" @mouseenter="rowMouseEnter(idx)">
          <td v-for="(c, idx2) in columns" :key="idx2" :style="{
            width: c.width ? `${c.width}px` : `${averageWidth}px`
          }">
            <t-table-cell :row="d" :col="c" :width="c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`"/>
          </td>
        </tr>
      </table>
    </div>

    <!--right fixed columns-->
    <div class="t-table__fixed" :style="{
      width: `${leftFixedWidth}px`
    }" :class="[
      scrollLeft === 0 ? '' : 'is-shadow'
    ]" v-if="tableWidth > width">
      <div class="t-table__fixed-header" ref="table_fixed_header" :style="{
        overflowX: 'hidden'
      }">
        <table cellspacing="0" cellpadding="0" border="0" class="t-table__header" :style="{
          width: `${leftFixedWidth}px`
        }">
          <tr class="t-table__header-row">
            <th v-for="(c, idx) in columns" :key="idx" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`,
            }" :class="[
              !c.fixed ? 'is-hidden' : ''
            ]">
              <div class="t-table__cell" :style="{
                width: c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`
              }">
                {{ c.label }}
              </div>
            </th>
          </tr>
        </table>
      </div>

      <div class="t-table__fixed-body" :style="{
        height: bodyHeight ? `${bodyHeight}px` : 'auto',
        overflowX: 'hidden'
      }" ref="table_fixed_body" @scroll="tableScrollHandler('fixed-body')" @mouseleave="rowMouseLeave">
        <table cellspacing="0" cellpadding="0" border="0" class="t-table__body" :style="{
          width: `${leftFixedWidth}px`
        }">
          <tr v-for="(d, idx) in data" :key="idx" class="t-table__body-row" :class="[
          rowClasses[idx],
          hoverRowIdx === idx ? 'is-hover' : ''
        ]" @mouseenter="rowMouseEnter(idx)">
            <td v-for="(c, idx2) in columns" :key="idx2" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`,
            }" :class="[
              !c.fixed ? 'is-hidden' : ''
            ]">
              <t-table-cell :row="d" :col="c" :width="c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`"/>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <!--right fixed columns-->
    <div class="t-table__fixed-right" :style="{
      width: `${rightFixedWidth}px`
    }" :class="[
      scrollLeft >= tableWidth - width - 1 ? '' : 'is-shadow'
    ]" v-if="tableWidth > width">
      <div class="t-table__fixed-header" ref="table_fixed_right_header" :style="{
        overflowX: 'hidden',
        marginLeft: rightFit
      }">
        <table cellspacing="0" cellpadding="0" border="0" class="t-table__header" :style="{
          width: `${rightFixedWidth}px`
        }">
          <tr class="t-table__header-row">
            <th v-for="(c, idx) in columns" :key="idx" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`,
            }" :class="[
              !c.fixedRight ? 'is-hidden' : ''
            ]">
              <div class="t-table__cell" :style="{
                width: c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`
              }">
                {{ c.label }}
              </div>
            </th>
          </tr>
        </table>
      </div>

      <div class="t-table__fixed-body" :style="{
        height: bodyHeight ? `${bodyHeight}px` : 'auto',
        overflowX: 'hidden'
      }" ref="table_fixed_right_body" @scroll="tableScrollHandler('fixed-right-body')" @mouseleave="rowMouseLeave">
        <table cellspacing="0" cellpadding="0" border="0" class="t-table__body" :style="{
          width: `${rightFixedWidth}px`,
          marginLeft: rightFit
        }">
          <tr v-for="(d, idx) in data" :key="idx" class="t-table__body-row" :class="[
          rowClasses[idx],
          hoverRowIdx === idx ? 'is-hover' : ''
        ]" @mouseenter="rowMouseEnter(idx)">
            <td v-for="(c, idx2) in columns" :key="idx2" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`,
            }" :class="[
              !c.fixedRight ? 'is-hidden' : ''
            ]">
              <t-table-cell :row="d" :col="c" :width="c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`"/>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 't-table',

  data () {
    return {
      dataProps: [],
      width: 0,
      height: 0,
      mainColumns: [],
      leftColumns: [],
      rightColumns: [],
      leftFixedWidth: 0,
      rightFixedWidth: 0,
      availableHeight: 0,
      settedWidth: 0,
      noWidthColumn: 0,
      rowWidth: 0,
      scrollLeft: 0,
      scrollTop: 0,
      rowClasses: {},
      hoverRowIdx: null
    }
  },

  props: {
    data: {},
    stripe: Boolean,
    border: Boolean,
    fixHeader: Boolean,
    bodyHeight: {},
    rowClassName: Function
  },

  created () {
    this.$on('table-column-register', this.columnRegister)
  },

  mounted () {
    this.initWidth(this.$refs.container.offsetWidth)
    this.rowClassName && this.setRowClassName()
  },

  methods: {
    columnRegister (column) {
      this.addColumn(column)
    },
    initWidth (w) {
      this.width = w
    },

    setSettedWidth (w) {
      this.settedWidth += ~~w
    },

    addNoWidthColumn () {
      this.noWidthColumn++
    },

    addRowWidth (w) {
      this.rowWidth += ~~w
    },

    addColumn (col) {
      if (col.fixed) {
        this.leftFixedWidth += ~~col.width || 120
        this.leftColumns.push(col)
      } else if (col.fixedRight) {
        this.rightFixedWidth += ~~col.width || 120
        this.rightColumns.push(col)
      } else {
        this.mainColumns.push(col)
      }

      if (!col.width) {
        this.addRowWidth(120)
        this.addNoWidthColumn()
      } else {
        this.addRowWidth(col.width)
        this.setSettedWidth(col.width)
      }
    },
    tableScrollHandler (type) {
      const e = window.event
      const _this = this
      switch (type) {
        case 'header':
          _this.scrollLeft = e.target.scrollLeft
          break
        case 'body':
          _this.scrollTop = e.target.scrollTop
          _this.scrollLeft = e.target.scrollLeft
          break
        case 'fixed-body':
          _this.scrollTop = e.target.scrollTop
          break
        case 'fixed-right-body':
          _this.scrollTop = e.target.scrollTop
          break
      }
    },
    setRowClassName () {
      const _this = this
      this.data.forEach(function (el, idx) {
        _this.rowClasses[idx] = _this.rowClassName(el, idx)
      })
    },
    rowMouseEnter (idx) {
      this.hoverRowIdx = idx
    },
    rowMouseLeave () {
      this.hoverRowIdx = null
    }
  },
  watch: {
    scrollLeft (val) {
      this.$refs.table_header.scrollLeft = val
      this.$refs.table_body.scrollLeft = val
    },
    scrollTop (val) {
      this.$refs.table_header.scrollTop = val
      this.$refs.table_body.scrollTop = val
      this.$refs.table_fixed_header.scrollTop = val
      this.$refs.table_fixed_right_header.scrollTop = val
      this.$refs.table_fixed_body.scrollTop = val
      this.$refs.table_fixed_right_body.scrollTop = val
    }
  },
  computed: {
    isBeyondWidth () {
      return this.width < this.rowWidth
    },
    averageWidth () {
      if (!this.isBeyondWidth) {
        return `${(this.width - this.settedWidth) / this.noWidthColumn}`
      }
      return `${(this.rowWidth - this.settedWidth) / this.noWidthColumn}`
    },
    tableWidth () {
      if (!this.isBeyondWidth) {
        return this.width
      }
      return this.rowWidth
    },
    columns () {
      return [...this.leftColumns, ...this.mainColumns, ...this.rightColumns]
    },
    rightFit () {
      return `-${this.tableWidth - this.rightFixedWidth}px`
    }
  }
}
</script>

<style scoped>

</style>
