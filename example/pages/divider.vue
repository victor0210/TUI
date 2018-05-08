<template>
  <div>
    <guide title="Divider 分割线" des="用于分割内容"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">按钮的基本样式和基本用法</div>
      <div class="source">
        <div class="panel">
          <t-divider line-style="dashed"/>
        </div>
        <div class="panel">
          <t-divider content="这是带有文字的分割线" line-style="dotted"/>
        </div>
        <div class="panel">
          <t-divider content="文字在左边" content-align="left" line-style="inset"/>
        </div>
        <div class="panel">
          <t-divider content="文字在右边" content-align="right" line-style="double"/>
        </div>
      </div>
      <divider-normal/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="dividerApis">
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
import DividerNormal from '../documents/divider/divider-normal.md'

export default {
  components: {
    DividerNormal
  },
  data () {
    return {
      dividerApis: [
        {name: 'content', desc: '分割线文本', type: 'String', choice: '—', default: '—'},
        {name: 'content-align', desc: '分割线文本定位', type: 'left/center/right', choice: '—', default: 'center'},
        {name: 'list-style', desc: '分割线样式', type: 'String', choice: 'solod/dashed/dotted', default: 'solid'}
      ]
    }
  }
}
</script>

<style></style>
