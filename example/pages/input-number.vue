<template>
  <div>
    <guide title="InputNumber 计数器" des="用于用户输入数字信息"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">TUI提供了6种主题</div>
      <div class="source">
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n" type="primary"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n" type="success"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n" type="info"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n" type="warning"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n" type="danger"/></t-col></t-row>
      </div>
      <input-number-normal/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的计数器不可操作</div>
      <div class="source">
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n1" disabled/></t-col></t-row>
      </div>
      <input-number-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">变化步数</div>
      <div class="sub-title">规定值每次变化的单位</div>
      <div class="source">
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n31" :range="10"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n32" :range="20"/></t-col></t-row>
      </div>
      <input-number-range/>
    </div>

    <div class="demo-block">
      <div class="title">规定范围</div>
      <div class="sub-title">配置值的上下限</div>
      <div class="source">
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n41" :max="10" :min="0"/></t-col></t-row>
      </div>
      <input-number-limit/>
    </div>

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">除默认尺寸外，TUI还为您提供了另外三种预设尺寸</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="5"><t-input-number v-model="n" size="lg"/></t-col>
          <t-col :span="5"><t-input-number v-model="n"/></t-col>
          <t-col :span="5"><t-input-number v-model="n" size="sm" width="150px"/></t-col>
          <t-col :span="5"><t-input-number v-model="n" size="mini" width="120px"/></t-col>
        </t-row>
      </div>
      <input-number-size/>
    </div>

    <div class="demo-block">
      <div class="title">SideControl</div>
      <div class="sub-title">不同于默认样式，SideControl计数器的操作按钮在右边</div>
      <div class="source">
        <t-row :gutter="20"><t-col :span="5"><t-input-number v-model="n51" side-control/></t-col></t-row>
      </div>
      <side-control-md/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="apis">
          <t-table-column label="属性" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="150"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="300"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="methods">
          <t-table-column label="事件" prop="name" :width="200"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="参数" prop="params"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import InputNumberNormal from '../documents/input-number/input-number-normal.md'
import InputNumberDisabled from '../documents/input-number/input-number-disabled.md'
import InputNumberRange from '../documents/input-number/input-number-range.md'
import InputNumberLimit from '../documents/input-number/input-number-limit.md'
import InputNumberSize from '../documents/input-number/input-number-size.md'
import SideControlMd from '../documents/input-number/input-number-side-control.md'
export default {
  components: {
    InputNumberNormal,
    InputNumberDisabled,
    InputNumberRange,
    InputNumberLimit,
    InputNumberSize,
    SideControlMd
  },
  data () {
    return {
      n: 1,
      n1: 1,
      n31: 1,
      n32: 1,
      n41: -1,
      n51: 1,
      apis: [
        {name: 'v-model', desc: '绑定值（数字）', type: 'String/Number', choice: '—', default: '—'},
        {name: 'type', desc: '类型', type: 'String', choice: 'default/primary/success/info/warning/danger', default: 'default'},
        {name: 'size', desc: '尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'width', desc: '宽度', type: 'String', choice: '—', default: '—'},
        {name: 'placeholder', desc: '占位文本', type: 'String', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'max', desc: '设置最大值', type: 'Number', choice: '—', default: '—'},
        {name: 'min', desc: '设置最小值', type: 'Number', choice: '—', default: '—'},
        {name: 'range', desc: '变化步数（大于0）', type: 'Number', choice: '—', default: '1'},
        {name: 'autocomplete', desc: '自动填充', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'readonly', desc: '是否只读', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '是否禁用', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'side-control', desc: '右边控制', type: 'Boolean', choice: '—', default: 'false'},
      ],
      methods: [
        {name: 'focus', desc: '在输入框获得焦点时触发', params: 'event（事件对象）'},
        {name: 'blur', desc: '在输入框失去焦点时触发', params: 'event（事件对象）'},
        {name: 'change', desc: '在输入框值变化时触发', params: 'value（当前输入框的值）'}
      ]
    }
  }
}
//
// disabled: Boolean,
//   name: String,
//   min: Number,
//   max: Number,
//   range: {
//   type: Number,
// default: 1,
//     validator: function (v) {
//     return v > 0
//   }
// },
// type: {
//   type: String,
// default: 'default'
// },
// sideControl: Boolean,
//   value: {},
// size: String
</script>
