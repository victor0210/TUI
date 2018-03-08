<template>
  <div>
    <guide title="Grid布局" des="使用Grid可以快速构建响应式栅格系统，进行页面的快速布局"/>
    <div class="demo-block">
      <div class="subtitle">基础用法</div>
      <div class="source">
        <t-row>
          <t-col :span="24"><div class="grid-content bg-black"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="12"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="12"><div class="grid-content bg-gray-light"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="8"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-gray-light"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-gray"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-gray-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-gray-light"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
        </t-row>
      </div>
      <layout></layout>
    </div>
    <div class="demo-block">
      <div class="subtitle">使用沟槽</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
        </t-row>
      </div>
      <layout-gutter></layout-gutter>
    </div>
  </div>
</template>
<script>
import Layout from '../documents/layout/layout.md'
import layoutGutter from '../documents/layout/layoutGutter.md'
export default {
  components: {
    Layout,
    layoutGutter
  }
}
</script>
