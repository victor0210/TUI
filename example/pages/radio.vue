<template>
  <div>
    <guide title="Radio 单选框" des="用于输入的表单单选组件"/>

    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">label不同定位</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-radio label="label在右边" val="1" v-model="val_1"/>
            <t-radio label="label在左边" val="2" v-model="val_1"/>
          </t-col>
        </t-row>
      </div>
      <radio-normal/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的单选框不可操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-radio label="禁用" disabled val="1" v-model="val_2"/>
            <t-radio label="禁用并选用" disabled val="2" v-model="val_2"/>
          </t-col>
        </t-row>
      </div>
      <radio-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">单选框组</div>
      <div class="sub-title">使用单选框组可简化value绑定操作</div>
      <div class="source">
        <div class="half">
          <t-divider content="单独使用" content-align="left"/>
          <t-radio label="北京" val="Beijing" v-model="val_4"/>
          <t-radio label="上海" val="Shanghai" v-model="val_4"/>
          <t-radio label="成都" val="Chengdu" v-model="val_4"/>
        </div>

        <div class="half">
          <t-divider content="复选框组" content-align="left"/>
          <t-radio-group v-model="val_4" @change="handleChange">
            <t-radio label="北京" val="Beijing"/>
            <t-radio label="上海" val="Shanghai"/>
            <t-radio label="成都" val="Chengdu"/>
          </t-radio-group>
        </div>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="title">按钮样式</div>
      <div class="sub-title">按钮样式的单选框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-radio-group v-model="val_5">
              <t-radio label="北京" val='Beijing' outbox/>
              <t-radio label="上海" val='Shanghai' outbox/>
              <t-radio label="成都" val='Chengdu' outbox/>
              <t-radio label="广州" val='Guangzhou' outbox/>
            </t-radio-group>
          </t-col>
        </t-row>
      </div>
      <radio-border/>
    </div>

    <div class="api-docs">
      <t-divider content="Radio Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="radioApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="150"/>
          <t-table-column label="类型" prop="type" :width="200"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Radio Group Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="radioGroupApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="150"/>
          <t-table-column label="类型" prop="type" :width="200"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Radio Group Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="radioGroupMethods">
          <t-table-column label="事件" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="params"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import RadioNormal from '../documents/radio/radioNormal.md'
import RadioDisabled from '../documents/radio/radioDisabled.md'
import RadioStyle from '../documents/radio/radioStyle.md'
import RadioGroup from '../documents/radio/radioGroup.md'
import RadioBorder from '../documents/radio/radioBorder.md'

export default {
  components: {
    RadioNormal,
    RadioGroup,
    RadioBorder,
    RadioStyle,
    RadioDisabled
  },
  data () {
    return {
      val_1: '',
      val_2: 2,
      val_3: 1,
      val_4: '',
      val_5: '',
      radioApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Number', choice: '—', default: '—'},
        {name: 'val', desc: '选项值', type: 'String/Number (必填)', choice: '—', default: '—'},
        {name: 'label', desc: '标题', type: 'String', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'label-left', desc: '标题靠左', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'outbox', desc: '按钮样式', type: 'Boolean', choice: '—', default: 'false'}
      ],
      radioGroupApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Number', choice: '—', default: '—'}
      ],
      radioGroupMethods: [
        {name: 'change', desc: '触发当前组单选值变化时触发', params: 'value（当前选中的结果集）'}
      ]
    }
  },

  methods: {
    handleChange (val) {
      this.$TMessage.show({
        content: 'group change event："' + val + '" !',
        type: 'info',
        duration: 1000
      })
    }
  }
}
</script>
