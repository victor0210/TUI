<template>
  <div>
    <guide title="Range 滑条" des="用于可拖动值变化的输入组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">不同状态的提示信息</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-range v-model="v"/>
            {{ v }}
          </t-col>
        </t-row>
      </div>
      <alert-normal/>
    </div>
  </div>
</template>
<script>
import AlertNormal from '../documents/alert/alert-normal.md'
import AlertMore from '../documents/alert/alert-more.md'
import AlertIcon from '../documents/alert/alert-icon.md'
import AlertCenter from '../documents/alert/alert-center.md'
import AlertSub from '../documents/alert/alert-sub.md'

export default {
  components: {
    AlertNormal,
    AlertCenter,
    AlertIcon,
    AlertMore,
    AlertSub
  },
  methods: {
    closeHandler () {
      console.log('警告框被关闭')
    }
  },
  data () {
    return {
      v: 0,
      alertApis: [
        {name: 'content', desc: '提示主文本', type: 'String', choice: '—', default: '—'},
        {name: 'sub', desc: '辅助文本', type: 'String', choice: '—', default: '—'},
        {name: 'type', desc: '提示框类型', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'closeText', desc: '关闭文本', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '自定义图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '是否可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'showIcon', desc: '是否显示Icon', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'textCenter', desc: '文本居中', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>
