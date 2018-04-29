<template>
  <div class="t-datepicker" :class="[
      isFocus ? 'is-focus' : '',
      disabled ? 'is-disabled': '',
      clearable && value !== '' ? 'is-clearable': '',
      size ? `t-datepicker--${size}` : ''
    ]" :style="{
      width: width ? `${width}px` : (type === 'daterange' ? 'auto' : ''),
      height: height ? `${height}px` : ''
    }">
    <div class="t-datepicker__input" ref="box" @click.prevent="checkout" v-if="type !== 'daterange'" :style="{height: height ? `${height - 2}px` : ''}">
      <i class="t-datepicker__icon t-datepicker__icon--calender fa fa-calendar-alt"></i>
      <input type="text" readonly class="t-datepicker__inner" ref="inner" :placeholder="placeholder" :value="model" :style="{height: height ? `${height - 2}px` : ''}">
      <i class="t-datepicker__icon t-datepicker__icon--clear fa fa-times-circle" @click="clearInput"></i>
    </div>
    <div class="t-datepicker__input t-datepicker__input--range" ref="box" @click.prevent="checkout" v-else :style="{height: height ? `${height - 2}px` : ''}">
      <i class="t-datepicker__icon t-datepicker__icon--calender fa fa-calendar-alt"></i>
      <i class="t-datepicker__icon t-datepicker__icon--clear fa fa-times-circle" @click="clearInput"></i>
      <input type="text" readonly class="t-datepicker__inner" ref="inner" :placeholder="placeholderStart" :value="rangeLeftInput" :style="{height: height ? `${height - 2}px` : ''}">
      <span class="t-datepicker__addon" :style="{height: height ? `${height - 2}px` : '', lineHeight: height ? `${height - 2}px` : ''}"> 至 </span>
      <input type="text" readonly class="t-datepicker__inner" ref="inner" :placeholder="placeholderEnd" :value="rangeRightInput" :style="{height: height ? `${height - 2}px` : ''}">
    </div>
    <datepicker-drop-menu :select="self" :is-focus="isFocus" v-if="isFocus">
      <transition name="fade">
      <template>
        <div class="t-datepicker__select-panel" v-if="type !== 'daterange'">
          <section class="t-datepicker__date" v-if="typeIndex === 3">
            <div class="t-datepicker__header">
              <span class="t-datepicker__pointer" @click="changeType(typeIndexes.year)">{{ this.dateIndex.year + '年' }}</span> <span class="t-datepicker__pointer" @click="changeType(typeIndexes.month)">{{ this.dateIndex.month + 1 + '月' }}</span>
              <span class="t-datepicker__header--left">
            <i class="fa fa-angle-double-left t-datepicker__date-switcher" @click.prevent="previousYear"></i>
            <i class="fa fa-angle-left t-datepicker__date-switcher" @click="previousMonth"></i>
          </span>
              <span class="t-datepicker__header--right">
            <i class="fa fa-angle-right t-datepicker__date-switcher" @click="nextMonth"></i>
            <i class="fa fa-angle-double-right t-datepicker__date-switcher" @click="nextYear"></i>
          </span>
            </div>
            <table class="t-datepicker__table-list">
              <tr class="t-datepicker__title">
                <th v-for="t in dateTitles" :key="t">{{ t }}</th>
              </tr>
              <tr v-for="i in 6" :key="i">
                <td v-for="d in 7" :key="d" @click.prevent="setTrueValue(singleSelect.dates[(i - 1) * 7 + (d - 1)].val)" :class="[
              't-datepicker__list-item',
              singleSelect.dates[(i - 1) * 7 + (d - 1)].isCurrent ? 'is-current' : '',
              singleSelect.dates[(i - 1) * 7 + (d - 1)].isSelect ? 'is-select' : '',
              singleSelect.dates[(i - 1) * 7 + (d - 1)].disabled ? 'is-disabled' : '',
              singleSelect.dates[(i - 1) * 7 + (d - 1)].val.getTime() === focusDate ? 'is-focus' : '',
              ]"><span class="t-datepicker__item-inner">{{ singleSelect.dates[(i - 1) * 7 + (d - 1)].label }}</span></td>
              </tr>
            </table>
          </section>
          <section class="t-datepicker__month" v-if="typeIndex === 2">
            <div class="t-datepicker__header">
              <span class="t-datepicker__pointer" @click="changeType(typeIndexes.year)">{{ this.dateIndex.year + '年' }}</span>
              <span class="t-datepicker__header--left">
            <i class="fa fa-angle-double-left t-datepicker__date-switcher" @click.prevent="previousYear"></i>
          </span>
              <span class="t-datepicker__header--right">
            <i class="fa fa-angle-double-right t-datepicker__date-switcher" @click="nextYear"></i>
          </span>
            </div>
            <table class="t-datepicker__table-list">
              <tr v-for="i in 3" :key="i">
                <td v-for="d in 4" :key="d" @click="setTrueValue(months[(i - 1) * 4 + (d - 1)].val)" :class="[
              't-datepicker__list-item',
              months[(i - 1) * 4 + (d - 1)].isCurrent ? 'is-current' : '',
              months[(i - 1) * 4 + (d - 1)].isSelect ? 'is-select' : '',
              months[(i - 1) * 4 + (d - 1)].val.getTime() === focusDate ? 'is-focus' : ''
              ]"><span class="t-datepicker__item-inner">{{ months[(i - 1) * 4 + (d - 1)].label }}</span></td>
              </tr>
            </table>
          </section>
          <section class="t-datepicker__year" v-if="typeIndex === 1">
            <div class="t-datepicker__header">
              {{ `${this.years[0].label}年 - ${this.years[9].label}年` }}
              <span class="t-datepicker__header--left">
            <i class="fa fa-angle-double-left t-datepicker__date-switcher" @click.prevent="previousTenYear"></i>
          </span>
              <span class="t-datepicker__header--right">
            <i class="fa fa-angle-double-right t-datepicker__date-switcher" @click="nextTenYear"></i>
          </span>
            </div>
            <section class="t-datepicker__year-list">
              <div v-for="d in 10" :key="d" @click="setTrueValue(years[(d - 1)].val)" class="t-datepicker__list-item">
            <span :class="[
              't-datepicker__item-inner',
              years[(d - 1)].isCurrent ? 'is-current' : '',
              years[(d - 1)].isSelect ? 'is-select' : '',
              years[(d - 1)].val.getTime() === focusDate ? 'is-focus' : ''
              ]">{{ years[(d - 1)].label }}</span>
              </div>
            </section>
          </section>
        </div>
        <div class="t-datepicker__select-panel is-range" v-if="type === 'daterange'">
          <section class="t-datepicker__date">
            <div class="t-datepicker__header">
              {{ rangeLeftLabel }}
              <span class="t-datepicker__header--left">
            <i class="fa fa-angle-double-left t-datepicker__date-switcher" @click.prevent="previousYear"></i>
            <i class="fa fa-angle-left t-datepicker__date-switcher" @click="previousMonth"></i>
          </span>
            </div>
            <table class="t-datepicker__table-list">
              <tr class="t-datepicker__title">
                <th v-for="t in dateTitles" :key="t">{{ t }}</th>
              </tr>
              <tr v-for="i in 6" :key="i">
                <td v-for="d in 7" :key="d" @mouseenter="rangeHoverHandler(rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].val)" @click.prevent="setRangeValue(rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].val)" :class="[
              't-datepicker__list-item',
              rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].isCurrent ? 'is-current' : '',
              rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].isSelect ? 'is-select' : '',
              rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].disabled ? 'is-disabled' : '',
              rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].isRangeBetween ? 'is-range-between' : '',
              rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].isRangeStart ? 'is-range-start' : '',
              rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].isRangeEnd ? 'is-range-end' : ''
              ]"><span class="t-datepicker__item-inner">{{ rangeSelect[0].dates[(i - 1) * 7 + (d - 1)].label }}</span></td>
              </tr>
            </table>
          </section>
          <section class="t-datepicker__date">
            <div class="t-datepicker__header">
              <!--{{ this.dateIndex.year + '年' + (this.dateIndex.month + 2) + '月' }}-->
              {{ rangeRightLabel }}
              <span class="t-datepicker__header--right">
            <i class="fa fa-angle-right t-datepicker__date-switcher" @click="nextMonth"></i>
            <i class="fa fa-angle-double-right t-datepicker__date-switcher" @click="nextYear"></i>
          </span>
            </div>
            <table class="t-datepicker__table-list">
              <tr class="t-datepicker__title">
                <th v-for="t in dateTitles" :key="t">{{ t }}</th>
              </tr>
              <tr v-for="i in 6" :key="i">
                <td v-for="d in 7" :key="d" @mouseenter="rangeHoverHandler(rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].val)" @click.prevent="setRangeValue(rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].val)" :class="[
              't-datepicker__list-item',
              rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].isCurrent ? 'is-current' : '',
              rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].isSelect ? 'is-select' : '',
              rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].disabled ? 'is-disabled' : '',
              rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].isRangeBetween ? 'is-range-between' : '',
              rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].isRangeStart ? 'is-range-start' : '',
              rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].isRangeEnd ? 'is-range-end' : ''
              ]"><span class="t-datepicker__item-inner">{{ rangeSelect[1].dates[(i - 1) * 7 + (d - 1)].label }}</span></td>
              </tr>
            </table>
          </section>
        </div>
        </template>
      </transition>
    </datepicker-drop-menu>
  </div>
</template>

<script>
import DateHelper from '../../mixins/dateHelper.js'
import Emitter from '../../mixins/emitter'
import DatepickerDropMenu from './datepicker-drop-menu.vue'

//  TODO: add disabled rules
export default {
  components: {
    DatepickerDropMenu
  },

  name: 't-date-picker',

  mixins: [DateHelper, Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  data () {
    return {
      self: this,
      initialized: false,
      isFocus: false,
      store: null,
      typeIndexes: {
        date: 3,
        month: 2,
        year: 1
      },
      typeIndex: null,
      dateTitles: ['日', '一', '二', '三', '四', '五', '六'],
      monthTransChinese: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      showDaysLimit: 42,
      singleSelect: {
        year: null,
        month: null,
        dates: []
      },
      rangeSelect: [],
      rangeStore: [],
      months: [],
      years: [],
      dateIndex: {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth()
      },
      dateIndexMirror: {
        year: (new Date()).getFullYear(),
        month: (new Date()).getMonth()
      },
      rangeTimes: [],
      isRanging: false,
      trueValue: '',
      rangeTrueValue: [],
      formatDefaults: {
        date: 'yyyy 年 M 月 d 日',
        month: 'yyyy 年 M 月',
        daterange: 'yyyy 年 M 月',
        year: 'yyyy 年'
      },
      keyboardFocusIndex: {
        year: null,
        month: null,
        date: null
      }
    }
  },
  props: {
    type: {
      default: 'date'
    },
    placeholder: {
      default: '请选择'
    },
    placeholderStart: {
      default: '请选择'
    },
    placeholderEnd: {
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    value: {},
    valueFormat: String,
    format: String,
    width: Number,
    height: Number,
    size: String
  },

  created () {
    this.$on('select', this.selectHandler)
    this.$on('hide', this.hideHandler)
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
  },
  mounted () {
    if (new Date(this.value).toString() !== 'Invalid Date') {
      const d = new Date(this.value)
      this.store = new Date(this.value)
      this.setDateIndex(d.getFullYear(), d.getMonth())
      this.trueValue = d
    } else {
      this.setDateIndex()
    }

    this.typeIndex = this.typeIndexes[this.type]
  },
  methods: {
    reset () {
      this.clearInput(window.event)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
    },
    submit () {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', this.value)
    },
    setDateIndex (year = (new Date()).getFullYear(), month = (new Date()).getMonth()) {
      this.dateIndex = {
        year: year,
        month: month
      }
    },
    checkout (e) {
      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (this.isFocus) {
        if (!this.initialized) this.initialized = true
        this.dateIndex = this.dateIndexMirror
        this.typeIndex = this.typeIndexes[this.type]
      } else {
        this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
        this.clearFocusIndex()
      }
    },
    clearFocusIndex () {
      this.keyboardFocusIndex = {
        year: null,
        month: null,
        date: null
      }
    },
    addListener () {
      document.addEventListener('keydown', this.keyDownHandler)
      document.addEventListener('click', this.clickBlurSelect, true)
    },
    removeListener () {
      document.removeEventListener('keydown', this.keyDownHandler)
      document.removeEventListener('click', this.clickBlurSelect, true)
    },
    clickBlurSelect (e) {
      //  add blur listener to some element which couldn't auto fire checkout
      const className = e.target.className
      this.clickCancelEl = [this.$refs.box]
        .concat(this.$refs.clear)
        .concat(this.$refs.inner)
        .concat(this.$refs.switch_date)
      if (className.indexOf('t-datepicker__pointer') === -1 &&
        className.indexOf('t-datepicker__date-switcher') === -1 &&
        className.indexOf('t-datepicker__list-item') === -1 &&
        className.indexOf('t-datepicker__item-inner') === -1 &&
        this.clickCancelEl.indexOf(e.target) === -1) {
        this.$emit('hide', e)
      }
    },
    keyDownHandler (e) {
      if (this.type === 'daterange') return
      const _this = this
      switch (e.keyCode) {
        case 40:
          e.preventDefault()
          _this.changeFocus('down')
          break
        case 38:
          e.preventDefault()
          _this.changeFocus('up')
          break
        case 37:
          e.preventDefault()
          _this.changeFocus('left')
          break
        case 39:
          e.preventDefault()
          _this.changeFocus('right')
          break
        case 27:
          e.preventDefault()
          _this.$emit('hide', e)
          break
        case 13:
          e.preventDefault()
          if (this.keyboardFocusIndex.year) {
            const {year, month, date} = this.keyboardFocusIndex
            _this.setTrueValue(new Date(year, month, date))
          }
          break
      }
    },
    changeFocus (key) {
      const _this = this
      if (!this.keyboardFocusIndex.year) {
        if (this.trueValue) {
          this.keyboardFocusIndex = {
            year: (new Date(this.trueValue)).getFullYear(),
            month: (new Date(this.trueValue)).getMonth(),
            date: (new Date(this.trueValue)).getDate()
          }
        } else {
          this.keyboardFocusIndex = {
            year: this.dateIndex.year,
            month: this.dateIndex.month,
            date: (new Date()).getDate()
          }
        }
      }

      let day
      let {year, month, date} = _this.keyboardFocusIndex

      switch (key) {
        case 'up':
          if (this.typeIndex === this.typeIndexes.date) date -= 7
          if (this.typeIndex === this.typeIndexes.month) month -= 4
          if (this.typeIndex === this.typeIndexes.year) year -= 4
          break
        case 'down':
          if (this.typeIndex === this.typeIndexes.date) date += 7
          if (this.typeIndex === this.typeIndexes.month) month += 4
          if (this.typeIndex === this.typeIndexes.year) year += 4
          break
        case 'left':
          if (this.typeIndex === this.typeIndexes.date) date -= 1
          if (this.typeIndex === this.typeIndexes.month) month -= 1
          if (this.typeIndex === this.typeIndexes.year) year -= 1
          break
        case 'right':
          if (this.typeIndex === this.typeIndexes.date) date += 1
          if (this.typeIndex === this.typeIndexes.month) month += 1
          if (this.typeIndex === this.typeIndexes.year) year += 1
          break
      }
      day = new Date(year, month, date)

      this.keyboardFocusIndex = {
        year: day.getFullYear(),
        month: day.getMonth(),
        date: day.getDate()
      }

      this.dateIndex = {
        year: day.getFullYear(),
        month: day.getMonth()
      }
    },
    hideHandler (e) {
      e.preventDefault()
      this.isFocus && this.checkout(e)
    },
    clearInput (e) {
      e.preventDefault()
      e.cancelBubble = true
      this.type === 'daterange' ? this.setRangeValue('') : this.setTrueValue('')
    },
    getTenYears (year = new Date().getFullYear()) {
      const date = new Date()
      let years = []
      let times = ~~(year / 10)
      let yearStart = times * 10
      let yearLast = yearStart + 10

      while (yearStart < yearLast) {
        years.push({
          val: new Date(yearStart, 0, 1),
          label: yearStart,
          isCurrent: date.getFullYear() === yearStart,
          isSelect: this.trueValue && (this.trueValue.getFullYear() === yearStart)
        })

        yearStart++
      }

      return years
    },
    getMonths (year = new Date().getFullYear()) {
      const date = new Date()
      let months = []
      let monthStart = 1

      while (monthStart <= 12) {
        const m = monthStart - 1
        months.push({
          val: new Date(year, m),
          label: this.monthTransChinese[m] + '月',
          isCurrent: date.getFullYear() === year && date.getMonth() === m,
          isSelect: this.trueValue && (this.trueValue.getFullYear() === year && this.trueValue.getMonth() === m)
        })
        monthStart++
      }

      return months
    },
    getMonthDates (year = (new Date()).getFullYear(), month = (new Date()).getMonth()) {
      const date = new Date()
      const totalDays = (new Date(year, month + 1, 0)).getDate()
      const firstDay = (new Date(year, month, 1)).getDay()
      const today = new Date(date.getFullYear(), date.getMonth(), date.getDate())

      let currentMonthDates = []
      let previousMonthDates = []
      let nextMonthDates = []
      let cmCounter = 1
      let pmCounter = 0
      let nmCounter = totalDays + 1

      while (totalDays >= cmCounter) {
        currentMonthDates.push(cmCounter)
        cmCounter++
      }

      while (pmCounter < firstDay) {
        previousMonthDates = [-pmCounter, ...previousMonthDates]
        pmCounter++
      }

      while (this.showDaysLimit - pmCounter >= nmCounter) {
        nextMonthDates.push(nmCounter)
        nmCounter++
      }

      let list = [...previousMonthDates, ...currentMonthDates, ...nextMonthDates]
      list.map((el, idx) => {
        const day = new Date(year, month, el)
        let valueDate

        if (this.trueValue) {
          valueDate = new Date(this.trueValue.getFullYear(), this.trueValue.getMonth(), this.trueValue.getDate())
        }

        const isRanged = (this.rangeTimes[0] <= this.rangeTimes[1] || (this.rangeTimes[0] && !this.rangeTimes[1])) && this.type === 'daterange'
        list[idx] = {
          val: day,
          label: day.getDate(),
          disabled: el < 1 || el > totalDays,
          isCurrent: day.getTime() === today.getTime(),
          isSelect: this.trueValue && (day.getTime() === valueDate.getTime()),
          isRangeBetween: isRanged && day.getTime() > this.rangeTimes[0] && day.getTime() < this.rangeTimes[1],
          isRangeStart: isRanged && day.getTime() === this.rangeTimes[0],
          isRangeEnd: isRanged && day.getTime() === this.rangeTimes[1]
        }
      })

      return {
        year: year,
        month: month,
        dates: list,
        total: totalDays
      }
    },
    selectHandler (val) {
      this.$emit('input', val)
    },
    setTrueValue (val) {
      if (this.typeIndex === this.typeIndexes[this.type] || val === '') {
        this.trueValue = val
        this.$emit('hide', window.event)
      } else {
        this.typeIndex += 1
        this.setDateIndex(val.getFullYear(), val.getMonth())
      }
    },
    setRangeValue (val) {
      if (val !== '') {
        if (!this.isRanging) {
          this.isRanging = true
          this.rangeTimes = []
          this.rangeTimes.push(val.getTime())
        } else {
          if (this.rangeTimes[0] >= val.getTime()) {
            this.rangeTimes = []
            this.rangeTimes.push(val.getTime())
          } else {
            this.rangeTrueValue = [new Date(this.rangeTimes[0]), new Date(this.rangeTimes[1])]
            this.rangeStore = this.rangeTrueValue
            this.isRanging = false
            this.$emit('hide', window.event)
          }
        }
      } else {
        this.rangeTimes = []
        this.rangeTrueValue = []
        this.rangeStore = this.rangeTrueValue
        this.isRanging = false
        this.$emit('hide', window.event)
      }
    },
    previousMonth () {
      const d = new Date(this.dateIndex.year, this.dateIndex.month - 1)
      this.setDateIndex(d.getFullYear(), d.getMonth())
    },
    nextMonth () {
      const d = new Date(this.dateIndex.year, this.dateIndex.month + 1)
      this.setDateIndex(d.getFullYear(), d.getMonth())
    },
    previousYear () {
      const d = new Date(this.dateIndex.year - 1, this.dateIndex.month)
      this.setDateIndex(d.getFullYear(), d.getMonth())
    },
    nextYear () {
      const d = new Date(this.dateIndex.year + 1, this.dateIndex.month)
      this.setDateIndex(d.getFullYear(), d.getMonth())
    },
    previousTenYear () {
      const d = new Date(this.dateIndex.year - 10, this.dateIndex.month)
      this.setDateIndex(d.getFullYear(), d.getMonth())
    },
    nextTenYear () {
      const d = new Date(this.dateIndex.year + 10, this.dateIndex.month)
      this.setDateIndex(d.getFullYear(), d.getMonth())
    },
    changeType (type) {
      this.typeIndex = type
    },
    rangeHoverHandler (val) {
      if (this.isRanging) {
        if (this.rangeTimes.length === 1) {
          this.rangeTimes.push(val.getTime())
        } else if (this.rangeTimes.length === 2) {
          this.rangeTimes.pop()
          this.rangeTimes.push(val.getTime())
        }
      }
    }
  },
  watch: {
    value (val) {
      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', val)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', val)
    },
    trueValue (val) {
      if (val !== '') {
        const v = !this.valueFormat ? val : DateHelper.format(val, this.valueFormat)
        this.store = new Date(val)
        this.dateIndex = {
          year: val.getFullYear(),
          month: val.getMonth()
        }
        this.dateIndexMirror = this.dateIndex
        this.$emit('input', v)
      } else {
        this.store = ''
        this.$emit('input', '')
      }
    },
    rangeTrueValue (val) {
      if (val.length > 0) {
        const _this = this
        let bar = []
        val.forEach(function (value, idx) {
          bar[idx] = !_this.valueFormat ? value : DateHelper.format(value, _this.valueFormat)
        })
        this.dateIndex = {
          year: val[0].getFullYear(),
          month: val[0].getMonth()
        }
        this.dateIndexMirror = this.dateIndex
        if (bar.length === 2) this.$emit('input', bar)
      } else {
        this.$emit('input', [])
      }
    },
    rangeTimes: {
      handler: function (val) {
        this.rangeSelect = []
        this.rangeSelect.push(this.getMonthDates(this.dateIndex.year, this.dateIndex.month))
        this.rangeSelect.push(this.getMonthDates(this.dateIndex.year, this.dateIndex.month + 1))
      },
      deep: true
    },
    dateIndex: {
      handler: function ({year, month}) {
        if (this.type !== 'daterange') {
          this.singleSelect = this.getMonthDates(year, month)
          this.years = this.getTenYears(year)
          this.months = this.getMonths(year)
        } else {
          this.rangeSelect[0] = this.getMonthDates(year, month)
          this.rangeSelect[1] = this.getMonthDates(year, month + 1)
        }
      },
      deep: true
    }
  },
  computed: {
    model: {
      get () {
        if (!this.store) {
          return this.store
        } else {
          return DateHelper.format(this.store, this.format || this.formatDefaults[this.type])
        }
      }
    },
    rangeLeftLabel: {
      get () {
        const d = new Date(this.dateIndex.year, this.dateIndex.month)
        return DateHelper.format(d, this.format || this.formatDefaults[this.type])
      }
    },
    rangeRightLabel: {
      get () {
        const d = new Date(this.dateIndex.year, this.dateIndex.month + 1)
        return DateHelper.format(d, this.format || this.formatDefaults[this.type])
      }
    },
    rangeLeftInput: {
      get () {
        if (this.rangeStore[0]) return DateHelper.format(this.rangeStore[0], this.format || this.formatDefaults['date'])
      }
    },
    rangeRightInput: {
      get () {
        if (this.rangeStore[1]) return DateHelper.format(this.rangeStore[1], this.format || this.formatDefaults['date'])
      }
    },
    focusDate: {
      get () {
        const {month, date} = this.typeIndexes
        const day = this.keyboardFocusIndex
        if (this.typeIndex === date) {
          return (new Date(day.year, day.month, day.date)).getTime()
        } else if (this.typeIndex === month) {
          return (new Date(day.year, day.month)).getTime()
        } else {
          return (new Date(day.year, 0)).getTime()
        }
      }
    }
  }
}

</script>

<style scoped>

</style>
