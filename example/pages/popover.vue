<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-popover position="right" bg-color="#ffcc00" border-color="#000">
              <t-button type="primary" size="lg">hover</t-button>
              <div slot="popover">
                okok
                what fuck ?? what
              </div>
            </t-popover>
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

<style></style>
