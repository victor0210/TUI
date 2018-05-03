<template>
  <div>
    <guide title="TimePicker 时间选择" des="用于时间选择的表单组件"/>
    <div class="demo-block">
      <div class="title">普通用法</div>
      <div class="sub-title">时期选择控件的基本使用，目前控件支持功能较少，有需求和建议可在 <a href="https://github.com/Bennnis/TUI" target="_blank">github</a> 给我提 issue</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-time-picker v-model="dp1" placeholder="选择时间" clearable/>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的时间选择不可操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-time-picker v-model="dp2" placeholder="选择时间" disabled/>
          </t-col>
        </t-row>
      </div>
      <time-disabled-md/>
    </div>

    <div class="demo-block">
      <div class="title">可清除</div>
      <div class="sub-title">清除当前所选的时间值</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-time-picker v-model="dp3" placeholder="选择时间" clearable/>
          </t-col>
        </t-row>
      </div>
      <time-clearable-md/>
    </div>

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">格式化</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="6">-->
            <!--<t-time-picker v-model="dp2" placeholder="选择时间" format="hh 点 mm 分 ss 秒" min="10:00:00" max="23:30:00"/>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">TUI一共为您提供了四种按钮尺寸，分别是 <code>lg</code> 、<code>default</code> 、<code>sm</code> 、<code>mini</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><t-time-picker v-model="dp4" placeholder="选择时间" size="lg"/></t-col>
          <t-col :span="6"><t-time-picker v-model="dp4" placeholder="选择时间"/></t-col>
          <t-col :span="6"><t-time-picker v-model="dp4" placeholder="选择时间" size="sm"/></t-col>
          <t-col :span="6"><t-time-picker v-model="dp4" placeholder="选择时间" size="mini"/></t-col>
        </t-row>
      </div>
      <time-size-md/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="timeApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

  </div>
</template>

<script>
import timeMd from '../documents/time-picker/time.md'
import timeSizeMd from '../documents/time-picker/time-size.md'
import timeDisabledMd from '../documents/time-picker/time-disabled.md'
import timeClearableMd from '../documents/time-picker/time-clearable.md'

export default {
  components: {
    timeMd,
    timeSizeMd,
    timeDisabledMd,
    timeClearableMd
  },
  data () {
    return {
      dp1: '',
      dp2: '',
      dp3: '',
      dp4: '',
      dp5: '',
      timeApis: [
        {name: 'v-model', desc: '绑定值', type: 'String', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'placeholder', desc: '占位文本', type: 'String', choice: '—', default: '请选择'},
        {name: 'value-format', desc: '值格式化方式', type: 'String', choice: 'timestamp', default: 'timestamp'},
        {name: 'size', desc: '按钮尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'format', desc: '显示值格式化方式', type: 'Boolean', choice: '—', default: 'hh:mm:ss'},
        {name: 'clearable', desc: '是否能清除', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'width', desc: '宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '高度', type: 'Number', choice: '—', default: '—'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
