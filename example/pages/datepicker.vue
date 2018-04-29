<template>
  <div>
    <guide title="DatePicker" des="用于日期选择的表单组件"/>
    <div class="demo-block">
      <div class="subtitle">可选年月日</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp1" type="date" placeholder="选择日期" clearable/>
          </t-col>
        </t-row>
      </div>
      <date-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">初始值</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp2" type="date" placeholder="选择日期"/>
          </t-col>
        </t-row>
      </div>
      <date-default-value-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可选年月</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp3" type="month" placeholder="选择年月"/>
          </t-col>
        </t-row>
      </div>
      <month-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可选年</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp4" type="year" placeholder="选择年份"/>
          </t-col>
        </t-row>
      </div>
      <year-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可选区间</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp5" type="daterange" placeholder-start="起始日期" placeholder-end="截止日期" :height="30"/>
          </t-col>
        </t-row>
      </div>
      <date-range-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可选年月日</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp1" type="date" placeholder="选择日期" clearable size="lg"/>
          </t-col>
          <t-col :span="6">
            <t-date-picker v-model="dp1" type="date" placeholder="选择日期" clearable/>
          </t-col>
          <t-col :span="6">
            <t-date-picker v-model="dp1" type="date" placeholder="选择日期" clearable size="sm" :width="150"/>
          </t-col>
          <t-col :span="6">
            <t-date-picker v-model="dp1" type="date" placeholder="选择日期" clearable size="mini" :width="120"/>
          </t-col>
        </t-row>
      </div>
      <date-md/>
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
