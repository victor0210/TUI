<template>
  <div>
    <guide title="BreadCrumb 面包屑" des="显示当前页面的路径，快速返回之前的任意页面"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">面包屑的使用很简单，只需要配置分隔符和对应的路由即可</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-breadcrumb>
              <t-breadcrumb-item to="/">首页</t-breadcrumb-item>
              <t-breadcrumb-item>商品分类</t-breadcrumb-item>
              <t-breadcrumb-item>男装</t-breadcrumb-item>
              <t-breadcrumb-item>TUI男装</t-breadcrumb-item>
            </t-breadcrumb>
          </t-col>
        </t-row>
      </div>
      <bread-normal/>
    </div>

    <div class="demo-block">
      <div class="title">自定义分隔符</div>
      <div class="sub-title">配置字符类型的分隔符</div>
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
      <bread-separator/>
    </div>

    <div class="demo-block">
      <div class="title">图标分隔符</div>
      <div class="sub-title">配置图标类型的分隔符</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-breadcrumb separator-icon="fa fa-angle-right">
              <t-breadcrumb-item to="/">首页</t-breadcrumb-item>
              <t-breadcrumb-item>商品分类</t-breadcrumb-item>
              <t-breadcrumb-item>男装</t-breadcrumb-item>
              <t-breadcrumb-item>TUI男装</t-breadcrumb-item>
            </t-breadcrumb>
          </t-col>
        </t-row>
      </div>
      <bread-normal/>
    </div>

    <div class="api-docs">
      <t-divider content="BreadCrumb Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="breadcrumbApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="BreadCrumb Item Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="breadcrumbItemApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import BreadNormal from '../documents/bread-crumb/bread-normal.md'
import BreadSeparator from '../documents/bread-crumb/bread-separator.md'
import BreadIcon from '../documents/bread-crumb/bread-separator-icon.md'

export default {
  components: {
    BreadIcon,
    BreadNormal,
    BreadSeparator
  },

  data () {
    return {
      breadcrumbApis: [
        {name: 'separator', desc: '分割字符', type: 'String', choice: '—', default: '/'},
        {name: 'separator', desc: '分割图标类名', type: 'String', choice: '—', default: '—'}
      ],
      breadcrumbItemApis: [
        {name: 'separator', desc: '单个分割字符（覆盖外层配置）', type: 'String', choice: '—', default: '—'},
        {name: 'separator-icon', desc: '单个分割图标类名（覆盖外层配置）', type: 'String', choice: '—', default: '—'},
        {name: 'to', desc: 'router-link "to" 属性', type: 'String', choice: '—', default: '—'},
        {name: 'replace', desc: 'router-link "replace" 属性', type: 'String', choice: '—', default: '—'},
        {name: 'append', desc: 'router-link "append" 属性', type: 'String', choice: '—', default: '—'}
      ]
    }
  }
}
</script>

<style></style>
