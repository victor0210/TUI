<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs v-model="tabValue">
              <t-tab-panel title="标签页1">
                内容1
              </t-tab-panel>
              <t-tab-panel title="标签页2">
                内容2
              </t-tab-panel>
              <t-tab-panel title="标签页3">
                内容3
              </t-tab-panel>
            </t-tabs>
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
  },

  data () {
    return {
      tabValue: ''
    }
  }
}
</script>
