<template>
  <div>
    <guide title="分割线" des="用于分割内容"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">按钮的基本样式和基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            这里是分割线哦
            <t-divider line-style="dashed"/>
            这是带有文字的分割线
            <t-divider content="With Text" line-style="dotted"/>
            文字在左边
            <t-divider content="Left Text" content-align="left" line-style="inset"/>
            文字在右边
            <t-divider content="Right Text" content-align="right" line-style="double"/>
            简单实用哦
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
