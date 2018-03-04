<template>
  <div>
    <h2>可选年月日</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp1" type="date"/>
        </t-col>
      </t-row>
    </div>

    <h2>可选年月</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp2" type="month"/>
        </t-col>
      </t-row>
    </div>

    <h2>可选年</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp3" type="year"/>
        </t-col>
      </t-row>
    </div>

    <h2>可选年</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-date-picker v-model="dp4" type="daterange"/>
        </t-col>
      </t-row>
      {{ dp4 }}
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dp1: '2018-01-02',
      dp2: '2018-01-02',
      dp3: '2018-01-02',
      dp4: ''
    }
  }
}
</script>

<style scoped>

</style>
