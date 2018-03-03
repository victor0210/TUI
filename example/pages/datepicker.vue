<template>
  <div>
    <h2>普通复选框</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-datepicker v-model="dp1" type="date"></t-datepicker>
        </t-col>
        {{ dp1 }}
      </t-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dp1: '2018-01-02'
    }
  }
}
</script>

<style scoped>

</style>
