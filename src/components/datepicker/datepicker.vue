<template>
  <div>
    <label class="t-datepicker" :class="{
      'is-focus': isFocus,
      'is-disabled': disabled,
      'is-clearable': clearable && value !== '',
    }">
      <div class="t-datepicker__input" ref="box" @click.prevent="checkout">
        <i class="t-datepicker__icon t-datepicker__icon--calender fa fa-calendar-alt"></i>
        <input type="text" readonly class="t-datepicker__inner" ref="inner" :placeholder="placeholder" :value="model">
      </div>
    </label>
    <transition name="fade">
      <div class="t-datepicker__select-panel" v-if="isFocus">
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
                singleSelect.dates[(i - 1) * 7 + (d - 1)].disabled ? 'is-disabled' : ''
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
                ]">{{ years[(d - 1)].label }}</span>
            </div>
          </section>
        </section>
      </div>
    </transition>
  </div>
</template>

<script>
import DateHelper from '../../mixins/dateHelper.js'
import Emitter from '../../mixins/emitter'

//  TODO code rebuild --tag t1
export default {
  name: 't-datepicker',

  mixins: [DateHelper, Emitter],

  data () {
    return {
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
      trueValue: ''
    }
  },
  props: {
    type: {
      default: 'date'
    },
    placeholder: {
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    value: {},
    valueFormat: String,
    format: {
      type: String,
      default: 'yyyy 年 M 月 d 日'
    }
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

    this.$on('select', this.selectHandler)
    this.$on('hide', this.hideHandler)
  },
  methods: {
    setDateIndex (year = (new Date()).getFullYear(), month = (new Date()).getMonth()) {
      this.dateIndex = {
        year: year,
        month: month
      }
    },
    checkout (e) {
      if (this.disabled) return
      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (this.isFocus) {
        this.dateIndex = this.dateIndexMirror
        this.typeIndex = this.typeIndexes[this.type]
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
      this.clickCancelEl = [this.$refs.box].concat(this.$refs.clear).concat(this.$refs.inner).concat(this.$refs.switch_date)
      if (className.indexOf('t-datepicker__pointer') === -1 &&
        className.indexOf('t-datepicker__date-switcher') === -1 &&
        className.indexOf('t-datepicker__list-item') === -1 &&
        className.indexOf('t-datepicker__item-inner') === -1 &&
        this.clickCancelEl.indexOf(e.target) === -1) {
        this.$emit('hide', e)
      }
    },
    keyDownHandler (e) {
      switch (e.keyCode) {
        case 40:
          e.preventDefault()
          break
        case 38:
          e.preventDefault()
          break
        case 37:
          e.preventDefault()
          break
        case 39:
          e.preventDefault()
          break
        case 27:
          e.preventDefault()
          break
        case 13:
          e.preventDefault()
          break
      }
    },
    hideHandler (e) {
      e.preventDefault()
      this.isFocus && this.checkout(e)
    },
    clearInput (e) {
      e.preventDefault()
      e.cancelBubble = true
      this.$emit('input', '')
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

        list[idx] = {
          val: day,
          label: day.getDate(),
          disabled: el < 1 || el > totalDays,
          isCurrent: day.getTime() === today.getTime(),
          isSelect: this.trueValue && (day.getTime() === valueDate.getTime())
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
      if (this.typeIndex === this.typeIndexes[this.type]) {
        this.trueValue = val
        this.$emit('hide', window.event)
      } else {
        this.typeIndex += 1
        this.setDateIndex(val.getFullYear(), val.getMonth())
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
    }
  },
  watch: {
    trueValue (val) {
      const v = !this.valueFormat ? val : DateHelper.format(val, this.valueFormat)
      this.store = new Date(val)
      this.dateIndex = {
        year: val.getFullYear(),
        month: val.getMonth()
      }
      this.dateIndexMirror = this.dateIndex
      this.$emit('input', v)
    },
    dateIndex: {
      handler: function ({year, month}, {oldYear, oldMonth}) {
        this.singleSelect = this.getMonthDates(year, month)
        this.years = this.getTenYears(year)
        this.months = this.getMonths(year)
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
          return DateHelper.format(this.store, this.format)
        }
      }
    }
  }
}

</script>

<style scoped>

</style>
