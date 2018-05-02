<template>
  <div>
    <guide title="Checkbox 复选框" des="用于输入的表单复选组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">label不同定位</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-checkbox label="label在右边"/>
            <t-checkbox label="label在左边" label-left/>
          </t-col>
        </t-row>
      </div>
      <checkbox-normal/>
    </div>

    <div class="demo-block">
      <div class="title">TrueValue</div>
      <div class="sub-title">选中时返回 val 值而不是 true</div>
      <div class="source">
        <div class="half">
          <t-divider content="默认" content-align="left"/>
          <t-checkbox label="默认使用" val="TrueValue" v-model="v21"/> 当前值: {{ v21 }}
        </div>
        <div class="half">
          <t-divider content="TrueValue" content-align="left"/>
          <t-checkbox label="TrueValue" val="TrueValue" true-value v-model="v22"/> 当前值: {{ v22 }}
        </div>
      </div>
      <checkbox-trueval/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的复选框不可操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-checkbox label="禁用" disabled/>
            <t-checkbox label="禁用并选用" checked disabled/>
          </t-col>
        </t-row>
      </div>
      <checkbox-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">复选框组</div>
      <div class="sub-title">使用复选框组可简化value绑定操作</div>
      <div class="source">
        <div class="half">
          <t-divider content="单独使用" content-align="left"/>
          <t-checkbox label="北京" val="Beijing" v-model="v1"/>
          <t-checkbox label="上海" val="Shanghai" v-model="v1"/>
          <t-checkbox label="成都" val="Chengdu" v-model="v1"/>
        </div>

        <div class="half">
          <t-divider content="复选框组" content-align="left"/>
          <t-checkbox-group v-model="v1">
            <t-checkbox label="北京" val="Beijing"/>
            <t-checkbox label="上海" val="Shanghai"/>
            <t-checkbox label="成都" val="Chengdu"/>
          </t-checkbox-group>
        </div>
      </div>
      <checkbox-group/>
    </div>

    <div class="demo-block">
      <div class="title">待定状态</div>
      <div class="sub-title">结合待定状态属性实现全选功能</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"/>
          </t-col>
          <t-col :span="24">
            <t-checkbox-group @change="handleOptionChange" v-model="checkedCities">
              <t-checkbox v-for="o in options" :label="o.label" :val="o.val" :key="o.val"/>
            </t-checkbox-group>
          </t-col>
        </t-row>
      </div>
      <checkbox-indeterminate/>
    </div>
    <div class="demo-block">
      <div class="title">限制选中个数</div>
      <div class="sub-title">限制可选中的最小个数，首次渲染时会自动填充缺少的个数</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-checkbox-group v-model="v2" :min="1">
              <t-checkbox label="西瓜" val='1'/>
              <t-checkbox label="苹果" val='2'/>
              <t-checkbox label="栗子" val='3'/>
              <t-checkbox label="香蕉" val='4'/>
            </t-checkbox-group>
          </t-col>
        </t-row>
      </div>
      <checkbox-limit/>
    </div>
    <div class="demo-block">
      <div class="title">按钮样式</div>
      <div class="sub-title">按钮样式的复选框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-checkbox label="北京" val='1' outbox/>
            <t-checkbox label="上海" val='2' outbox/>
            <t-checkbox label="成都" val='3' outbox/>
            <t-checkbox label="广州" val='4' outbox/>
          </t-col>
        </t-row>
      </div>
      <checkbox-border/>
    </div>

    <div class="api-docs">
      <t-divider content="Checkbox Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="checkboxApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Checkbox Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="checkboxMethods">
          <t-table-column label="事件" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="params"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Checkbox Group Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="checkboxGroupApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Checkbox Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="checkboxGroupMethods">
          <t-table-column label="事件" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="params"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import CheckboxNormal from '../documents/checkbox/checkboxNormal.md'
import CheckboxTrueval from '../documents/checkbox/checkboxTrueval.md'
import CheckboxDisabled from '../documents/checkbox/checkboxDisabled.md'
import CheckboxGroup from '../documents/checkbox/checkboxGroup.md'
import CheckboxIndeterminate from '../documents/checkbox/checkboxIndeterminate.md'
import CheckboxLimit from '../documents/checkbox/checkboxLimit.md'
import CheckboxBorder from '../documents/checkbox/checkboxBorder.md'

const arr = ['1', '2', '3', '4', '5']
export default {
  components: {
    CheckboxNormal,
    CheckboxTrueval,
    CheckboxGroup,
    CheckboxDisabled,
    CheckboxIndeterminate,
    CheckboxLimit,
    CheckboxBorder
  },
  data () {
    return {
      options: [
        {label: '香蕉', val: '1'},
        {label: '苹果', val: '2'},
        {label: '梨子', val: '3'},
        {label: '香瓜', val: '4'},
        {label: '火龙果', val: '5'}
      ],
      cities: arr,
      v1: ['Beijing'],
      v2: [],
      v3: ['1', '2', '3'],
      v21: false,
      v22: false,
      isIndeterminate: false,
      checkAll: false,
      checkedCities: ['1', '2', '3'],
      checkboxApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Array', choice: '—', default: '—'},
        {name: 'val', desc: '选项值', type: 'String/Number', choice: '—', default: '—'},
        {name: 'label', desc: '标题', type: 'String', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'checked', desc: '初始选中', type: 'Boolean', choice: '—', default: '—'},
        {name: 'label-left', desc: '标题靠左', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'outbox', desc: '按钮样式', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'indeterminate', desc: '待定状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'true-value', desc: '单个选中返回 val 值而不是返回 true', type: 'Boolean', choice: '—', default: 'false'}
      ],
      checkboxGroupApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Array', choice: '—', default: '—'},
        {name: 'min', desc: '最少选中个数', type: 'Number', choice: '—', default: '—'},
        {name: 'max', desc: '最大选中个数', type: 'Number', choice: '—', default: '—'}
      ],
      checkboxMethods: [
        {name: 'change', desc: '触发选项值变化时触发', params: 'value（当前是否选中）'}
      ],
      checkboxGroupMethods: [
        {name: 'change', desc: '触发选项结果集变化时触发', params: 'value（当前选中的结果集）'}
      ]
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? [...this.cities] : []
      this.isIndeterminate = false
    },
    handleOptionChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
