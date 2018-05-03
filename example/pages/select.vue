<template>
  <div>
    <guide title="下拉框" des="用于输入的表单下拉组件"/>
    <div class="demo-block">
      <div class="title">普通用法</div>
      <div class="sub-title">所有下拉组件支持键盘事件，打开下拉列表试试 <code>↑</code> 、 <code>↓</code> 、<code>enter</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_1">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-normal/>
    </div>

    <div class="demo-block">
      <div class="title">可多选下拉框</div>
      <div class="sub-title">适合用于选择一个结果集</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_2" multiple>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_2" multiple collapse-tags>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-multiple/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的下拉框不可操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" disabled v-model="val_31">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select placeholder="Select" disabled multiple v-model="val_32">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">可清除</div>
      <div class="sub-title">清空当前所选值</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_41" clearable>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_42" multiple clearable>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-clearable/>
    </div>

    <div class="demo-block">
      <div class="title">选项分组</div>
      <div class="sub-title">使用 <code>t-option-group</code> 组件可实现选项分组</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_6">
              <t-option-group label="城市">
                <t-option :key="1" label="选项1" val="1"/>
                <t-option :key="2" label="选项2" val="2"/>
                <t-option :key="3" label="选项3" val="3"/>
                <t-option :key="4" label="选项4" val="4"/>
                <t-option :key="5" label="选项5" val="5"/>
              </t-option-group>
              <t-option-group label="地区">
                <t-option :key="6" label="选项6" val="6"/>
                <t-option :key="7" label="选项7" val="7"/>
                <t-option :key="8" label="选项8" val="8"/>
                <t-option :key="9" label="选项9" val="9"/>
              </t-option-group>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-divide/>
    </div>

    <div class="demo-block">
      <div class="title">可编辑</div>
      <div class="sub-title">可自定义添加选项中没有的值，新增值不会加入到默认列表中</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_71" editable multiple>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-editable/>
    </div>

    <div class="demo-block">
      <div class="title">可搜索</div>
      <div class="sub-title">通过匹配 <code>label</code> 可快速搜索当前选项列表中的值</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_8" searchable>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-searchable/>
    </div>

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">TUI一共为您提供了四种按钮尺寸，分别是 <code>lg</code> 、<code>default</code> 、<code>sm</code> 、<code>mini</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_31" size="lg">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_31">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_31" size="sm">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select placeholder="Select" v-model="val_31" size="mini">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-size/>
    </div>

    <!--<div class="subtitle">远程搜索</div>-->
    <!--<div class="demo-block">-->
      <!--<t-row :gutter="20">-->
        <!--<t-col :span="6">-->
          <!--<t-select-bak placeholder="Select" v-model="val_10" remote :remote-method="remote" searchable>-->
            <!--<t-option v-for="item in val_10_data" :key="item" :label="item" :val="item"/>-->
          <!--</t-select-bak>-->
        <!--</t-col>-->
      <!--</t-row>-->
    <!--</div>-->
    <!--<select-bak-remote/>-->

    <div class="api-docs">
      <t-divider content="Select Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="selectApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Option Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="optionApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Option Group Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="optionGroupApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import selectNormal from '../documents/select/select-normal.md'
import selectMultiple from '../documents/select/select-multiple.md'
import selectDisabled from '../documents/select/select-disabled.md'
import selectClearable from '../documents/select/select-clearable.md'
import selectEditable from '../documents/select/select-editable.md'
import selectDivide from '../documents/select/select-divide.md'
import selectSearchable from '../documents/select/select-searchable.md'
import selectSize from '../documents/select/select-size.md'

export default {
  components: {
    selectNormal,
    selectMultiple,
    selectDisabled,
    selectClearable,
    selectEditable,
    selectDivide,
    selectSearchable,
    selectSize
  },
  data () {
    return {
      val_1: '',
      val_2: ['1'],
      val_31: '',
      val_32: [],
      val_41: '1',
      val_42: ['1'],
      val_5: ['1'],
      val_6: '1',
      val_71: ['1'],
      val_72: ['1', '自定义1'],
      val_8: '1',
      val_9: ['1'],
      opt: [],
      options1: [
        {label: '北京烤鸭', val: '1'},
        {label: '冷吃牛肉', val: '2'},
        {label: '驴肉火烧', val: '3'},
        {label: '宫保鸡丁', val: '4'},
        {label: '黄焖鸡米饭', val: '5'}
      ],
      options2: [
        {label: '北京烤鸭', val: '1'},
        {label: '冷吃牛肉', val: '2'},
        {label: '驴肉火烧', val: '3'},
        {label: '宫保鸡丁', val: '4'},
        {label: '黄焖鸡米饭', val: '5'}
      ],
      selectApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Array', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'size', desc: '按钮尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'width', desc: '宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '高度', type: 'Number', choice: '—', default: '—'},
        {name: 'multiple', desc: '是否多选', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'collapse-tags', desc: '是否收起结果集（多选下生效）', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'clearable', desc: '是否能清除', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'editable', desc: '能否编辑', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'searchable', desc: '能否搜索', type: 'Boolean', choice: '—', default: 'false'}
      ],
      optionApis: [
        {name: 'val', desc: '选项值', type: 'String/Number', choice: '—', default: '—'},
        {name: 'label', desc: '标题', type: 'String', choice: '—', default: '—'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'}
      ],
      optionGroupApis: [
        {name: 'label', desc: '标题', type: 'String（必填）', choice: '—', default: '—'}
      ],
      checkboxMethods: [
        {name: 'change', desc: '触发选项值变化时触发', params: 'value（当前是否选中）'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
