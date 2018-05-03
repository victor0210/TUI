<template>
  <div class="t-timepicker" :class="[
      isFocus ? 'is-focus' : '',
      disabled ? 'is-disabled' : '',
      clearable && value !== '' ? 'is-clearable': '',
      size ? `t-timepicker--${size}` : ''
    ]" :style="{
      width: width ? `${width}px` : '',
      height: height ? `${height}px` : '',
    }">
      <div class="t-timepicker__input" ref="box" @click.prevent="checkout" v-if="type !== 'timerange'" :style="{height: height ? `${height - 2}px` : '',}">
        <i class="t-timepicker__icon t-timepicker__icon--calender fa fa-clock" ref="clock_icon"></i>
        <input type="text" readonly class="t-timepicker__inner" ref="inner" :placeholder="placeholder" :value="label">
        <i class="t-timepicker__icon t-timepicker__icon--clear fa fa-times-circle" @click="clearInput"></i>
      </div>
    <input type="hidden" :value="value" :name="name">
    <transition name="fade">
      <time-picker-drop-menu :is-focus="isFocus" :select="self" v-if="isFocus">
        <div class="t-timepicker__select-panel" v-show="isFocus && type !== 'timerange'">
          <div class="t-timepicker__wrapper">
            <div class="t-timepicker__cover-top"></div>
            <div class="t-timepicker__cover"></div>
            <div class="t-timepicker__cover-bottom"></div>
            <div class="t-timepicker__hour t-timepicker__select-column">
              <ul ref="hour_list" @mouseleave="mouseLeaveHandler('h')">
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li v-for="(h, idx) in hours" :key="h" :class="[
                't-timepicker__list-item',
                scrollTops.h <= (idx + 1) * 30 - 15 && scrollTops.h > idx * 30 - 15 ? 'is-focus' : ''
              ]" @click="setTimeValue('h', h)">{{ h }}</li>
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
              </ul>
            </div>
            <div class="t-timepicker__minute t-timepicker__select-column">
              <ul ref="minute_list" @mouseleave="mouseLeaveHandler('m')">
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li v-for="(m, idx) in minutes" :key="m" :class="[
                't-timepicker__list-item',
                scrollTops.m <= (idx + 1) * 30 - 15 && scrollTops.m > idx * 30 - 15 ? 'is-focus' : ''
              ]" @click="setTimeValue('m', m)">{{ m }}</li>
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
              </ul>
            </div>
            <div class="t-timepicker__second t-timepicker__select-column">
              <ul ref="second_list" @mouseleave="mouseLeaveHandler('s')">
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li v-for="(s, idx) in seconds" :key="s" :class="[
                't-timepicker__list-item',
                scrollTops.s <= (idx + 1) * 30 - 15 && scrollTops.s > idx * 30 - 15 ? 'is-focus' : ''
              ]" @click="setTimeValue('s', s)">{{ s }}</li>
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
                <li class="t-timepicker__list-fill"></li>   <!--填充高度-->
              </ul>
            </div>
          </div>
          <div class="t-timepicker__bottom">
            <t-button type="text" size="sm" @click="submitValue">确认</t-button>
          </div>
        </div>
        <div class="t-timepicker__select-panel is-range" v-if="isFocus && type === 'timerange'">
        </div>
      </time-picker-drop-menu>
    </transition>
  </div>
</template>

<script>
import DateHelper from '../../mixins/dateHelper.js'
import Emitter from '../../mixins/emitter'
import TimePickerDropMenu from './timepicker-drop-menu'

//  TODO add range/ disabled rules
export default {
  components: {
    TimePickerDropMenu
  },

  name: 't-time-picker',

  mixins: [DateHelper, Emitter],

  inject: {
    TFormItem: {
      default: ''
    }
  },

  data () {
    return {
      self: this,
      isFocus: false,
      store: {
        h: null,
        m: null,
        s: null
      },
      itemHeight: 30,
      hours: [],
      minutes: [],
      seconds: [],
      scrollTops: {
        h: null,
        m: null,
        s: null
      },
      minTime: null,
      maxTime: null,
      trueValue: ''
    }
  },
  props: {
    type: {
      default: 'date'
    },
    name: String,
    placeholder: {
      default: '请选择'
    },
    disabled: Boolean,
    clearable: Boolean,
    value: {},
    valueFormat: {
      type: String,
      default: 'hh:mm:ss'
    },
    format: {
      type: String,
      default: 'hh:mm:ss'
    },
    min: {
      default: ''
    },
    max: {
      default: ''
    },
    size: String,
    width: Number,
    height: Number
  },

  mounted () {
    this.setMin()
    this.setMax()
    this.initTimes()
    this.$on('select', this.selectHandler)
    this.$on('hide', this.hideHandler)
    this.$on('reset', this.reset)
    this.$on('submit', this.submit)
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
    initTimes () {
      for (let i = 0; i <= 60; i++) {
        if (i < 10) i = `0${i}`
        if (i < 24) this.hours.push(i)
        if (i < 60) this.minutes.push(i)
        if (i < 60) this.seconds.push(i)
      }
    },
    setMin () {
      if (this.min !== '') {
        let min = this.min.split(':')
        let minTime = new Date()
        minTime.setHours(min[0])
        minTime.setMinutes(min[1])
        minTime.setSeconds(min[2])
        this.minTime = minTime.getTime()
      }
    },
    setMax () {
      if (this.max !== '') {
        let max = this.min.split(':')
        let maxTime = new Date()
        maxTime.setHours(max[0])
        maxTime.setMinutes(max[1])
        maxTime.setSeconds(max[2])
        this.maxTime = maxTime.getTime()
      }
    },
    checkout (e) {
      if (this.disabled) return

      this.isFocus = !this.isFocus
      this.isFocus ? this.addListener() : this.removeListener()
      if (this.isFocus) {
        this.initListScroll()
      } else {
        this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', this.value)
      }
    },
    initListScroll () {
      setTimeout(() => {
        this.$refs.hour_list.scrollTop = this.scrollTops.h
        this.$refs.minute_list.scrollTop = this.scrollTops.m
        this.$refs.second_list.scrollTop = this.scrollTops.s
      })
    },
    setScrollTop (column, scrollTop = 0) {
      this.scrollTops[column] = scrollTop
    },
    mouseLeaveHandler (t) {
      const e = window.event
      this.fixScrollTop(t, e.target.scrollTop)
    },
    fixScrollTop (column, scrollTop = 0) {
      const _this = this
      const idx = Math.floor(scrollTop / 30)
      const offset = scrollTop % 30
      let idxPending = offset > 15 ? 1 : 0
      let st = (idx + idxPending) * this.itemHeight
      switch (column) {
        case 'h':
          _this.$refs.hour_list.scrollTop = st
          break
        case 'm':
          _this.$refs.minute_list.scrollTop = st
          break
        case 's':
          _this.$refs.second_list.scrollTop = st
          break
      }
      this.scrollTops[column] = st
    },
    scrollFilter (e) {
      const _this = this
      const st = e.target.scrollTop
      let type
      switch (e.target) {
        case _this.$refs.hour_list:
          type = 'h'
          break
        case _this.$refs.minute_list:
          type = 'm'
          break
        case _this.$refs.second_list:
          type = 's'
          break
      }

      this.setScrollTop(type, st)
    },
    setTimeValue (type, v) {
      const st = v * 30
      this.fixScrollTop(type, st)
    },

    submitValue () {
      const {h, m, s} = this.scrollTops
      this.store = {
        h: (h / 30),
        m: (m / 30),
        s: (s / 30)
      }
    },

    // date functions
    addListener () {
      document.addEventListener(
        'scroll',
        this.scrollFilter,
        true // Capture event
      )
      document.addEventListener('keydown', this.keyDownHandler)
      document.addEventListener('click', this.clickBlurSelect)
    },
    removeListener () {
      document.removeEventListener(
        'scroll',
        this.scrollFilter
      )
      document.removeEventListener('keydown', this.keyDownHandler)
      document.removeEventListener('click', this.clickBlurSelect)
    },
    clickBlurSelect (e) {
      //  add blur listener to some element which couldn't auto fire checkout
      const className = e.target.className
      this.clickCancelEl = [this.$refs.box]
        .concat(this.$refs.clear)
        .concat(this.$refs.inner)
        .concat(this.$refs.switch_date)
        .concat(this.$refs.clock_icon)
      if (className.indexOf('t-timepicker__list-item') === -1 &&
        className.indexOf('t-timepicker__list-fill') === -1 &&
        this.clickCancelEl.indexOf(e.target) === -1) {
        this.$emit('hide', e)
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
    }
  },
  watch: {
    value (val) {
      this.trueValue = val

      this.TFormItem && this.dispatch('t-form-item', 'form-item-blur', val)
      this.TFormItem && this.dispatch('t-form-item', 'form-item-change', val)
    },
    store ({h, m, s}) {
      let d = new Date()
      d.setHours(h)
      d.setMinutes(m)
      d.setSeconds(s)

      // if (this.valueFormat !== 'timestamp') {
      //   let v = DateHelper.format(d, this.valueFormat)
      //   this.$emit('input', v)
      //   this.trueValue = v
      // } else {
      let v = d.getTime()
      this.$emit('input', v)
      this.trueValue = v
      // }
    }
  },
  computed: {
    label () {
      if (!this.trueValue) return ''
      let d = new Date(this.trueValue)
      // d.setHours(this.store.m)
      // d.setMinutes(this.store.m)
      // d.setSeconds(this.store.s)
      if (this.format !== 'timestamp') {
        return DateHelper.format(d, this.format)
      } else {
        return d.getTime()
      }
    }
  }
}

</script>

<style scoped>

</style>
