<template>
  <div>
    <guide title="更新日志 ChangeLog" des="每次更新后的变化都会记录在日志中"/>
    <log-item v-for="(i, idx) in logs" :log="i" :key="idx"/>
  </div>
</template>

<script>
import ChangeLog from '../CHANGELOG.md'
import LogItem from '../components/LogItem'
export default {
  components: {
    ChangeLog,
    LogItem
  },

  data () {
    return {
      logs: [
        {
          version: 'v1.0.2',
          list: [
            {key: 'fix', content: 'icon图标样式被覆盖造成样式错误'}
          ]
        },
        {
          version: 'v1.0.1',
          list: [
            {key: 'fix', content: '修复日期选择器windows滚动条显示问题'},
            {key: 'fix', content: '修复时间选择器windows滚动条显示问题'},
            {key: 'fix', content: '修复级联搜索文本清楚后原有选择项显示问题'},
            {key: 'feat', content: '新增 Slider 滑条 组件'}
          ]
        }
      ]
    }
  }
}

</script>

<style scoped>
</style>
