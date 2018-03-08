<template>
  <div>
    <guide title="TimePicker" des="用于时间选择的表单组件"/>
    <div class="demo-block">
      <div class="subtitle">可选年月日</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-time-picker v-model="dp1" placeholder="选择时间"/>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">格式化</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-time-picker v-model="dp2" placeholder="选择时间" format="hh 点 mm 分 ss 秒" min="10:00:00" max="23:30:00"/>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>
  </div>
</template>

<script>
import timeMd from '../documents/time-picker/time.md'

export default {
  components: {
    timeMd
  },
  data () {
    return {
      dp1: '',
      dp2: '',
      dp3: '',
      dp4: '',
      dp5: ''
    }
  }
}
</script>

<style scoped>

</style>
