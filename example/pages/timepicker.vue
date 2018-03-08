<template>
  <div>
    <h2>可选年月日</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-time-picker v-model="dp1" placeholder="选择时间"/>
        </t-col>
      </t-row>
    </div>

    <h2>格式化</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-time-picker v-model="dp2" placeholder="选择时间" format="hh 点 mm 分 ss 秒" min="10:00:00" max="23:30:00"/>
        </t-col>
      </t-row>
    </div>
  </div>
</template>

<script>
export default {
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
