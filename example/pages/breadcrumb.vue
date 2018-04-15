<template>
  <div>
    <guide title="面包屑" des="显示当前页面的路径，快速返回之前的任意页面"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-breadcrumb separator="-">
              <t-breadcrumb-item to="/">首页</t-breadcrumb-item>
              <t-breadcrumb-item>商品分类</t-breadcrumb-item>
              <t-breadcrumb-item>男装</t-breadcrumb-item>
              <t-breadcrumb-item>TUI男装</t-breadcrumb-item>
            </t-breadcrumb>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">图标separator</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-breadcrumb separator-icon="fa fa-caret-right">
              <t-breadcrumb-item to="/">首页</t-breadcrumb-item>
              <t-breadcrumb-item>商品分类</t-breadcrumb-item>
              <t-breadcrumb-item>男装</t-breadcrumb-item>
              <t-breadcrumb-item>TUI男装</t-breadcrumb-item>
            </t-breadcrumb>
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
