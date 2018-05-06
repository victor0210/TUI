<template>
  <div>
    <guide title="Tag 标签" des="用于展示标志性数据"/>
    <div class="demo-block">
      <div class="title">普通标签</div>
      <div class="sub-title">标签的基本使用</div>
      <div class="source">
        <t-tag v-for="(t, idx) in tags1" :key="idx" :type="t.type">{{ t.label }}</t-tag>
      </div>
      <tag-normal/>
    </div>

    <div class="demo-block">
      <div class="title">可关闭标签</div>
      <div class="sub-title">关闭后的标签将会消失</div>
      <div class="source">
        <t-tag v-for="(t, idx) in tags1" closable :key="idx" :type="t.type">{{ t.label }}</t-tag>
      </div>
      <tag-closable/>
    </div>

    <div class="demo-block">
      <div class="title">动态增删标签</div>
      <div class="sub-title">以下是关于标签操作的详细demo</div>
      <div class="source">
        <t-tag v-for="(t, idx) in tags" closable :key="idx" @close="closeHandler(t)">{{ t.label }}</t-tag>
        <t-button size="sm" @click="addTag">+ 标签</t-button>
      </div>
      <tag-dynamic/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tagApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="200"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="tagMethods">
          <t-table-column label="事件" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="参数" prop="params"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tagApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="200"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import TagNormal from '../documents/tag/tag-normal.md'
import TagClosable from '../documents/tag/tag-closable.md'
import TagDynamic from '../documents/tag/tag-dynamic.md'
export default {
  components: {
    TagNormal,
    TagClosable,
    TagDynamic
  },
  data () {
    return {
      tags1: [
        {label: '主要'},
        {label: '成功', type: 'success'},
        {label: '信息', type: 'info'},
        {label: '警告', type: 'warning'},
        {label: '危险', type: 'danger'}
      ],
      tags: [
        {label: '标签1'},
        {label: '标签2'},
        {label: '标签3'}
      ],
      counter: 4,
      tagApis: [
        {name: 'type', desc: '标签样式', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'closable', desc: '显示关闭按钮', type: 'Boolean', choice: '—', default: 'false'}
      ],
      tagMethods: [
        {name: 'close', desc: '标签关闭时触发', params: 'tag（触发关闭的tag值）'}
      ]
    }
  },
  methods: {
    addTag () {
      this.tags.push({label: `标签${this.counter++}`})
    },
    closeHandler (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  }
}
</script>

<style scoped>
  .t-tag {
    margin-right: 10px;
  }
</style>
