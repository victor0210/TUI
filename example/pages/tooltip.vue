<template>
  <div>
    <guide title="Tooltip 文字提示" des="用于简单的文字提示场景，基于弹出层Popover开发，复杂场景请使用Popover"/>
    <div class="demo-block">
      <div class="title">不同主题</div>
      <div class="sub-title">根据不同业务场景选择不同主题的文字提示</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tooltip content="this is tooltip" theme="light">
              <t-button>light</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="dark">
              <t-button>dark</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="dark-gold">
              <t-button>dark-gold</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="info">
              <t-button>info</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="warning">
              <t-button>warning</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="danger">
              <t-button>danger</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="success">
              <t-button>success</t-button>
            </t-tooltip>
          </t-col>
        </t-row>
      </div>
      <tooltip-theme/>
    </div>
    <div class="demo-block">
      <div class="title">指令方式</div>
      <div class="sub-title">通过指令 <code>v-t-popover</code> 触发弹出层，一个弹出层对应一个触发元素，不能被多个触发元素复用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tooltip content="this is tooltip" theme="light" ref="t1"/>
            <t-button v-t-tooltip:t1>directive</t-button>
          </t-col>
        </t-row>
      </div>
      <tooltip-directive/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tooltipApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import TooltipDirective from '../documents/tooltip/tooltip-directive.md'
import TooltipTheme from '../documents/tooltip/tooltip-theme.md'

export default {
  components: {
    TooltipDirective,
    TooltipTheme
  },
  data () {
    return {
      tooltipApis: [
        {name: 'content', desc: '文字提示文案', type: 'String（必填）', choice: '—', default: '—'},
        {name: 'position', desc: '文字提示位置', type: 'String', choice: 'top / top-left / top-right / bottom / bottom-left / bottom-right / left / left-top / left-bottom / right / right-top / right-bottom', default: 'top'},
        {name: 'trigger', desc: '触发显示文字提示方式', type: 'String', choice: 'hover/click/focus', default: 'hover'},
        {name: 'theme', desc: '文字提示主题', type: 'String', choice: 'light / dark / dark-gold / success / info / warning / danger', default: '—'},
        {name: 'bg-color', desc: '文字提示背景色', type: 'String', choice: '—', default: '#fff'},
        {name: 'border-color', desc: '文字提示边框颜色', type: 'String', choice: '—', default: 'rgba(0,0,0,0.3)'},
        {name: 'text-color', desc: '文字提示内文本颜色', type: 'String', choice: '—', default: '—'},
        {name: 'width', desc: '文字提示宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '文字提示高度', type: 'Number', choice: '—', default: '—'},
        {name: 'tooltip-offset', desc: '文字提示到触发元素的距离', type: 'Number', choice: '—', default: '10'},
        {name: 'hide-on-click', desc: '点击文字提示外部关闭/ESC可关闭', type: 'Boolean', choice: '—', default: 'true'}
      ]
    }
  }
}
</script>

<style></style>
