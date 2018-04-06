<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Badge</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-badge :max="10" value="new">
              <t-button>按钮</t-button>
            </t-badge>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="8">
            <t-badge :max="10" :value="20">
              <t-button type="primary">按钮</t-button>
            </t-badge>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="8">
            <t-badge dot>
              <t-button>查看</t-button>
            </t-badge>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="8">
            <div>
              单独使用 <t-badge value="new"/>
            </div>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="8">
            <div>
              单独使用dot <t-badge dot/>
            </div>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>
<script>
import RadioGroup from '../documents/radio/radioGroup.md'

export default {
  components: {
    RadioGroup
  }
}
</script>
