<template>
  <div>
    <h2>可选年月日</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp1" type="date" placeholder="选择日期"/>
        </t-col>
      </t-row>
      <date-md/>
    </div>

    <h2>初始值</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp2" type="date" placeholder="选择日期"/>
        </t-col>
      </t-row>
      <date-default-value-md/>
    </div>

    <h2>可选年月</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp3" type="month" placeholder="选择年月"/>
        </t-col>
      </t-row>
      <month-md/>
    </div>

    <h2>可选年</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp4" type="year" placeholder="选择年份"/>
        </t-col>
      </t-row>
      <year-md/>
    </div>

    <h2>可选区间</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp5" type="daterange" placeholder-start="起始日期" placeholder-end="截止日期"/>
        </t-col>
      </t-row>
      <date-range-md/>
    </div>
  </div>
</template>

<script>
import dateMd from '../documents/date-picker/date.md'
import dateDefaultValueMd from '../documents/date-picker/date-default-value.md'
import monthMd from '../documents/date-picker/month.md'
import yearMd from '../documents/date-picker/year.md'
import dateRangeMd from '../documents/date-picker/date-range.md'

export default {
  components: {
    dateMd,
    dateDefaultValueMd,
    monthMd,
    yearMd,
    dateRangeMd
  },
  data () {
    return {
      dp1: '',
      dp2: '2018-1-1',
      dp3: '',
      dp4: '',
      dp5: ''
    }
  }
}
</script>

<style scoped>

</style>
