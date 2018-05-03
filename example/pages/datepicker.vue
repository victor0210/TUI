<template>
  <div>
    <guide title="DatePicker 日期选择" des="用于日期选择的表单组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">组件支持键盘事件，打开下拉列表试试 <code>↑</code> 、 <code>↓</code> 、<code>←</code> 、<code>→</code> 、<code>enter</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp1"/>
          </t-col>
        </t-row>
      </div>
      <date-md/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的日期选择不可操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker disabled/>
          </t-col>
        </t-row>
      </div>
      <date-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">初始值</div>
      <div class="sub-title">传入 Date 对象可接受的 format 值即可</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><t-date-picker v-model="dp2"/></t-col>
          <t-col :span="6"><t-date-picker v-model="dp21"/></t-col>
          <t-col :span="6"><t-date-picker v-model="dp22"/></t-col>
          <t-col :span="6"><t-date-picker v-model="dp23"/></t-col>
        </t-row>
      </div>
      <date-default-value-md/>
    </div>

    <div class="demo-block">
      <div class="title">不同选择类型</div>
      <div class="sub-title">TUI提供了三种日期选择方式</div>
      <div class="source">
        <div class="third">
          <t-divider content="选择年月日" content-align="left"/>
          <t-date-picker v-model="dp31" placeholder="选择日期"/>
        </div>
        <div class="third">
          <t-divider content="选择年月" content-align="left"/>
          <t-date-picker v-model="dp32" type="month" placeholder="选择日期"/>
        </div>
        <div class="third">
          <t-divider content="选择年" content-align="left"/>
          <t-date-picker v-model="dp33" type="year" placeholder="选择日期"/>
        </div>
      </div>
      <date-typeh-md/>
    </div>

    <div class="demo-block">
      <div class="title">可选区间</div>
      <div class="sub-title">选择时期的区间，值类型为数组，分别是开始日期与结束日期</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp5" type="daterange" placeholder-start="起始日期" placeholder-end="截止日期"/>
          </t-col>
        </t-row>
      </div>
      <date-range-md/>
    </div>

    <div class="demo-block">
      <div class="title">格式化</div>
      <div class="sub-title">自定义展示和值的格式化方式</div>
      <div class="source">
        <div class="half">
          <t-divider content="timestamp" content-align="left"/>
          <t-date-picker v-model="dp71" placeholder="选择日期" format="yyyy-MM-dd" value-format="timestamp"/>
          <br>
          <span>当前值: {{ dp71 }}</span>
        </div>
        <div class="half">
          <t-divider content="自定义格式" content-align="left"/>
          <t-date-picker v-model="dp72" placeholder="选择日期" format="yyyy/MM/dd" value-format="yyyy/MM/dd"/>
          <br>
          <span>当前值: {{ dp72 }}</span>
        </div>
      </div>
      <date-range-md/>
    </div>

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">TUI一共为您提供了四种按钮尺寸，分别是 <code>lg</code> 、<code>default</code> 、<code>sm</code> 、<code>mini</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-date-picker v-model="dp6" placeholder="选择日期" clearable size="lg"/>
          </t-col>
          <t-col :span="6">
            <t-date-picker v-model="dp6" placeholder="选择日期" clearable/>
          </t-col>
          <t-col :span="6">
            <t-date-picker v-model="dp6" placeholder="选择日期" clearable size="sm"/>
          </t-col>
          <t-col :span="6">
            <t-date-picker v-model="dp6" placeholder="选择日期" clearable size="mini"/>
          </t-col>
        </t-row>
      </div>
      <date-size-md/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="dateApis">
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
import dateMd from '../documents/date-picker/date.md'
import dateDisabled from '../documents/date-picker/date-disabled.md'
import dateDefaultValueMd from '../documents/date-picker/date-default-value.md'
import dateTypehMd from '../documents/date-picker/date-type.md'
import dateRangeMd from '../documents/date-picker/date-range.md'
import dateSizeMd from '../documents/date-picker/date-size.md'

export default {
  components: {
    dateMd,
    dateDefaultValueMd,
    dateTypehMd,
    dateRangeMd,
    dateSizeMd,
    dateDisabled
  },
  data () {
    return {
      dp1: '',
      dp2: '2018-1-1',
      dp21: '2018 1 2',
      dp22: '2018,1,3',
      dp23: '2018/1/4',
      dp31: '',
      dp32: '',
      dp33: '',
      dp4: '',
      dp5: '',
      dp6: '',
      dp71: '',
      dp72: '',
      dateApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Array', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'type', desc: '日期选择类型', type: 'String', choice: 'date/month/year/daterange', default: 'date'},
        {name: 'value-format', desc: '值格式化方式', type: 'String', choice: '—', default: '—'},
        {name: 'placeholder', desc: '占位文本', type: 'String', choice: '—', default: '请选择'},
        {name: 'placeholder-start', desc: 'daterange 起始占位文本', type: 'String', choice: '—', default: '请选择'},
        {name: 'placeholder-end', desc: 'daterange 结束占位文本', type: 'String', choice: '—', default: '请选择'},
        {name: 'size', desc: '按钮尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'width', desc: '宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '高度', type: 'Number', choice: '—', default: '—'},
        {name: 'format', desc: '显示值格式化方式', type: 'Boolean', choice: '—', default: 'yyyy 年 M 月 d 日'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'clearable', desc: '是否能清除', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
