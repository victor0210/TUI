<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Badge</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-alert></t-alert>
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
