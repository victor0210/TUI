<template>
  <div class="t-table" :class="[
    stripe ? 't-table--stripe' : '',
    border ? 't-table--border' : '',
    highlightCurrentRow ? 'is-highlight' : ''
  ]" ref="container" v-t-loading="loading">
    <!--main columns-->
    <div class="t-table__hidden" v-show="false"><slot/></div>
    <div class="t-table__header-wrapper" ref="table_header" @scroll="tableScrollHandler('header')">
      <table cellspacing="0" cellpadding="0" border="0" class="t-table__header" :style="{
        width: !isBeyondWidth? `${width}px` : `${rowWidth}px`,
        overflowX: !isBeyondWidth ? 'hidden' : ''
      }">
        <tr class="t-table__header-row">
          <th v-for="(c, idx) in columns" :key="idx" :style="{
            width: c.width ? `${c.width}px` : `${averageWidth}px`
          }">
            <div class="t-table__cell" :style="{
              width: c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`
            }">
              <template v-if="c.type === 'selection'">
                <t-checkbox v-model="selectionAll" :indeterminate="isIndeterminate" @change="selectionAllChange"/>
              </template>
              <template v-else>
                {{ c.type === 'index' ? '#' : c.label }}
              </template>
              <span v-if="c.sortMethod" class="t-table__sort"><i class="fa fa-caret-up" @click="sortColumn(c.sortMethod)"></i><i class="fa fa-caret-down" @click="sortColumn(c.sortMethod, 'desc')"></i></span>
            </div>
          </th>
        </tr>
      </table>
    </div>

    <div class="t-table__body-wrapper" :style="{
      height: bodyHeight ? `${bodyHeight}px` : 'auto',
      maxHeight: bodyMaxHeight ? `${bodyMaxHeight}px` : '',
      minHeight: bodyMinHeight ? `${bodyMinHeight}px` : '',
      overflowX: !isBeyondWidth ? 'hidden' : ''
    }" ref="table_body" @scroll="tableScrollHandler('body')" @mouseleave="rowMouseLeave">
      <table cellspacing="0" cellpadding="0" border="0" class="t-table__body" :style="{
        width: !isBeyondWidth? `${width}px` : `${rowWidth}px`
      }">
        <template v-for="(d, idx) in data">
          <tr :key="idx" class="t-table__body-row" :class="[
            rowClasses[idx],
            hoverRowIdx === idx ? 'is-hover' : '',
            currentRow === idx ? 'is-select' : ''
          ]" @mouseenter="rowMouseEnter(idx)" @click="setCurrentRow(idx)">
            <td v-for="(c, idx2) in columns" :key="idx2" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`
            }">
              <template v-if="c.type === 'selection'">
                <div class="t-table__cell">
                  <t-checkbox v-model="selectionRows" :val="d" @change="selectionRowChange"/>
                </div>
              </template>
              <template v-else>
                <t-table-cell :row="d" :col="c" :idx="idx" :width="c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`"
                  :class="[expandIdx === idx ? 'is-expand' : '']"
                />
              </template>
            </td>
          </tr>
          <transition name="expand" :key="idx">
            <tr class="t-table__body-row" :key="-idx-1" v-if="expandColumn && expandIdx === idx">
              <td :style="{
                display: 'inline-table'
              }">
                <t-table-expand :row="d" :col="expandColumn" :width="(width - 20) + 'px'"/>
              </td>
            </tr>
          </transition>
        </template>
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
        maxHeight: bodyMaxHeight ? `${bodyMaxHeight}px` : '',
        minHeight: bodyMinHeight ? `${bodyMinHeight}px` : '',
        overflowX: 'hidden'
      }" ref="table_fixed_body" @scroll="tableScrollHandler('fixed-body')" @mouseleave="rowMouseLeave">
        <table cellspacing="0" cellpadding="0" border="0" class="t-table__body" :style="{
          width: `${leftFixedWidth}px`
        }">
          <template v-for="(d, idx) in data">
            <tr :key="idx" class="t-table__body-row" :class="[
            rowClasses[idx],
            hoverRowIdx === idx ? 'is-hover' : '',
            currentRow === idx ? 'is-select' : ''
          ]" @mouseenter="rowMouseEnter(idx)" @click="setCurrentRow(idx)">
              <td v-for="(c, idx2) in columns" :key="idx2" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`
            }" :class="[
              !c.fixed ? 'is-hidden' : ''
            ]">
                <template v-if="c.type === 'selection'">
                  <div class="t-table__cell">
                    <t-checkbox v-model="selectionRows" :val="d" @change="selectionRowChange"/>
                  </div>
                </template>
                <template v-else>
                  <t-table-cell :row="d" :col="c" :idx="idx" :width="c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`"
                                :class="[expandIdx === idx ? 'is-expand' : '']"
                  />
                </template>
              </td>
            </tr>
            <transition name="expand" :key="idx">
              <tr class="t-table__body-row" :key="-idx-1" v-if="expandColumn && expandIdx === idx">
                <td :style="{
                display: 'inline-table'
              }">
                  <t-table-expand :row="d" :col="expandColumn" :width="(width - 20) + 'px'"/>
                </td>
              </tr>
            </transition>
          </template>
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
        maxHeight: bodyMaxHeight ? `${bodyMaxHeight}px` : '',
        minHeight: bodyMinHeight ? `${bodyMinHeight}px` : '',
        overflowX: 'hidden'
      }" ref="table_fixed_right_body" @scroll="tableScrollHandler('fixed-right-body')" @mouseleave="rowMouseLeave">
        <table cellspacing="0" cellpadding="0" border="0" class="t-table__body" :style="{
          width: `${rightFixedWidth}px`,
          marginLeft: rightFit
        }">
          <template v-for="(d, idx) in data">
            <tr :key="idx" class="t-table__body-row" :class="[
            rowClasses[idx],
            hoverRowIdx === idx ? 'is-hover' : '',
            currentRow === idx ? 'is-select' : ''
          ]" @mouseenter="rowMouseEnter(idx)" @click="setCurrentRow(idx)">
              <td v-for="(c, idx2) in columns" :key="idx2" :style="{
              width: c.width ? `${c.width}px` : `${averageWidth}px`
            }" :class="[
              !c.fixedRight ? 'is-hidden' : ''
            ]">
                <template v-if="c.type === 'selection'">
                  <div class="t-table__cell">
                    <t-checkbox v-model="selectionRows" :val="d" @change="selectionRowChange"/>
                  </div>
                </template>
                <template v-else>
                  <t-table-cell :row="d" :col="c" :idx="idx" :width="c.width ? `${c.width - 20}px` : `${averageWidth - 20}px`"
                                :class="[expandIdx === idx ? 'is-expand' : '']"
                  />
                </template>
              </td>
            </tr>
            <transition name="expand" :key="idx">
              <tr class="t-table__body-row" :key="-idx-1" v-if="expandColumn && expandIdx === idx">
                <td :style="{
                display: 'inline-table'
              }">
                  <t-table-expand :row="d" :col="expandColumn" :width="(width - 20) + 'px'"/>
                </td>
              </tr>
            </transition>
          </template>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import TTableCell from './table-cell.vue'
import TTableExpand from './table-expand.vue'
import TCheckbox from '../checkbox/checkbox'
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'
let selectionMap

export default {
  components: {
    TCheckbox,
    TTableCell,
    TTableExpand
  },

  mixins: [ArrayHelper, Emitter],

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
      hoverRowIdx: null,
      cellMinWidth: 120,
      currentRow: null,
      selectionAll: false,
      selectionRows: [],
      selectionRowsIdx: [],
      isIndeterminate: false,
      expandColumn: null,
      expandIdx: null
    }
  },

  props: {
    data: {},
    stripe: Boolean,
    border: Boolean,
    fixHeader: Boolean,
    bodyHeight: Number,
    bodyMaxHeight: Number,
    bodyMinHeight: Number,
    rowClassName: Function,
    highlightCurrentRow: Boolean,
    currentChange: Function,
    selection: Boolean,
    selectionChange: Function,
    loading: Boolean
  },


  created () {
    this.$on('table-column-register', this.columnRegister)
    this.$on('table-toggle-expand', this.toggleExpand)
    this.setSelectionRowsIdx()
  },

  mounted () {
    this.initWidth()
    this.rowClassName && this.setRowClassName()
    window.addEventListener('resize', this.initWidth)
  },

  methods: {
    toggleExpand (idx) {
      this.expandIdx = this.expandIdx === idx ? null : idx
    },
    setSelectionRowsIdx () {
      selectionMap = ArrayHelper.clone(this.data)
    },
    columnRegister (column) {
      this.addColumn(column)
    },
    initWidth () {
      this.width = this.$refs.container.offsetWidth
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
      if (col.type === 'expand') {
        this.expandColumn = col
      }

      if (col.fixed) {
        this.leftFixedWidth += ~~col.width || this.cellMinWidth
        this.leftColumns.push(col)
      } else if (col.fixedRight) {
        this.rightFixedWidth += ~~col.width || this.cellMinWidth
        this.rightColumns.push(col)
      } else {
        this.mainColumns.push(col)
      }

      if (!col.width) {
        this.addRowWidth(this.cellMinWidth)
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
    },
    sortColumn (sortBy, key = 'asc') {
      this.data.sort(sortBy)
      if (key === 'desc') this.data.reverse()
    },
    setCurrentRow (idx) {
      if (this.highlightCurrentRow) {
        if (idx !== '') {
          this.currentRow = idx
        } else {
          this.currentRow = null
        }
      }
    },
    toggleRowSelection (row) {
      if (row === undefined) {
        this.selectionRows = []
        this.selectionRowChange()
        return
      }

      if (!Array.isArray(row)) {
        row = [row]
        console.warn('method toggleRowSelection Except "Array" But String Got')
      }
      row.forEach(el => {
        if (this.selectionRows.indexOf(el) === -1) {
          this.selectionRows = ArrayHelper.addToStore(this.selectionRows, el)
        } else {
          this.selectionRows = ArrayHelper.removeFromStore(this.selectionRows, el)
        }
      })
      this.selectionRowChange()
    },
    selectionRowChange () {
      const val = this.selectionRows
      let checkedCount = val.length
      this.selectionAll = checkedCount === selectionMap.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.data.length
    },
    selectionAllChange (val) {
      this.selectionRows = val ? ArrayHelper.clone(selectionMap) : []
      this.isIndeterminate = false
    }
  },
  watch: {
    width (val) {
      console.log(this.isBeyondWidth, this.averageWidth, this.rowWidth, this.settedWidth, this.noWidthColumn)
    },
    scrollLeft (val) {
      this.$refs.table_header.scrollLeft = val
      this.$refs.table_body.scrollLeft = val
    },
    scrollTop (val) {
      this.$refs.table_header.scrollTop = val
      this.$refs.table_body.scrollTop = val

      if (this.$refs.table_fixed_header) {
        this.$refs.table_fixed_header.scrollTop = val
        this.$refs.table_fixed_body.scrollTop = val
      }

      if (this.$refs.table_fixed_right_header) {
        this.$refs.table_fixed_right_header.scrollTop = val
        this.$refs.table_fixed_right_body.scrollTop = val
      }
    },
    data (val) {
      this.setSelectionRowsIdx()
      this.selection && this.toggleRowSelection()
    },
    selectionRows (val, old) {
      this.selectionChange(val, old)
    },
    currentRow (val, old) {
      this.currentChange(this.data[val] || null)
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
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.initWidth)
  }
}
</script>

<style scoped>

</style>
