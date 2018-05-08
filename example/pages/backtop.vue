<template>
  <div>
    <guide title="BackTop 返回顶部" des="用于页面从当前位置快速返回到页面顶部"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">同本站右下方的返回顶部组件</div>
      <backtop-normal/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="backtopApis">
          <t-table-column label="属性" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="类型" prop="type"/>
          <t-table-column label="可选值" prop="choice"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import backtopNormal from '../documents/back-top/normal.md'

export default {
  components: {
    backtopNormal
  },

  data () {
    return {
      backtopApis: [
        {name: 'left', desc: '元素left样式属性', type: 'Number', choice: '—', default: '60'},
        {name: 'bottom', desc: '元素bottom样式属性', type: 'Number', choice: '—', default: '60'},
        {name: 'top', desc: '元素top样式属性', type: 'Number', choice: '—', default: '—'},
        {name: 'right', desc: '元素right样式属性', type: 'Number', choice: '—', default: '—'},
        {name: 'size', desc: '组件的宽高', type: 'Number', choice: '—', default: '50'},
        {name: 'icon', desc: '组件上图标类名', type: 'String', choice: '—', default: 'fa fa-chevron-up'}
      ]
    }
  }
}
</script>

<style></style>
