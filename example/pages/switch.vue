<template>
  <div>
    <guide title="Switch 开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">开关组件的基本使用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-switch v-model="s"/>
          </t-col>
        </t-row>
      </div>
      <switch-normal/>
    </div>

    <div class="demo-block">
      <div class="title">文字描述</div>
      <div class="sub-title">外部带有文字描述的开关</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-switch v-model="s1" active-text="开" inactive-text="关" @change="changeHandler"/>
          </t-col>
        </t-row>
      </div>
      <switch-text/>
    </div>

    <div class="demo-block">
      <div class="title">TrueValue</div>
      <div class="sub-title">回传 <code>用户值</code> 值而不是 <code>布尔值</code></div>
      <div class="source">
        <div class="half">
          <t-divider content="默认" content-align="left"/>
          <t-switch v-model="s6"/>
          <span style="display: inline-block; line-height: 24px; float: left">当前值: {{ s6 }}</span>
        </div>
        <div class="half">
          <t-divider content="TrueValue" content-align="left"/>
          <t-switch v-model="s7" active-value="1" inactive-value="0"/>
          <span style="display: inline-block; line-height: 24px; float: left">当前值: {{ s7 }}</span>
        </div>
      </div>
      <switch-trueval/>
    </div>

    <div class="demo-block">
      <div class="title">自定义尺寸</div>
      <div class="sub-title">TUI为您提供了自定义尺寸的接口</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-switch v-model="s3" width="100px" height="15px"/>
          </t-col>
        </t-row>
      </div>
      <switch-size/>
    </div>

    <div class="demo-block">
      <div class="title">定制背景色</div>
      <div class="sub-title">定制开和关状态下的背景色</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-switch v-model="s4" inactive-color="#34495e" active-color="#2ed573"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="switchApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="switchMethods">
          <t-table-column label="事件" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="params"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import RadioGroup from '../documents/radio/radioGroup.md'
import SwitchNormal from '../documents/switch/switchNormal.md'
import SwitchText from '../documents/switch/switchText.md'
import SwitchTrueval from '../documents/switch/switchTrueval.md'
import SwitchSize from '../documents/switch/switchSize.md'
import SwitchColor from '../documents/switch/switchColor.md'

export default {
  components: {
    RadioGroup,
    SwitchNormal,
    SwitchText,
    SwitchSize,
    SwitchColor,
    SwitchTrueval
  },

  data () {
    return {
      s: '',
      s1: true,
      s2: '',
      s3: '',
      s4: '',
      s6: false,
      s7: 0,
      switchApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Array', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'active-text', desc: '打开状态的文字', type: 'String', choice: '—', default: '—'},
        {name: 'inactive-text', desc: '关闭状态的文字', type: 'String', choice: '—', default: '—'},
        {name: 'active-color', desc: '打开状态的背景色', type: 'String', choice: '—', default: '—'},
        {name: 'inactive-color', desc: '关闭状态的背景色', type: 'String', choice: '—', default: '—'},
        {name: 'active-value', desc: '打开状态的值', type: '*', choice: '—', default: '—'},
        {name: 'inactive-value', desc: '关闭状态的值', type: '*', choice: '—', default: '—'}
      ],
      switchMethods: [
        {name: 'change', desc: '选项值变化时触发', params: 'value（当前值）'}
      ]
    }
  },

  methods: {
    changeHandler (val) {
      this.$TMessage.show({
        title: '"' + val + '" !',
        type: 'info',
        duration: 1000
      })
    }
  }
}
</script>

<style></style>
