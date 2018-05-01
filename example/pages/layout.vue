<template>
  <div>
    <guide title="Layout 布局" des="Flex快速页面布局，使用前请查询Flex属性的浏览器兼容性"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">快速构建简单布局</div>
      <div class="source">
        <t-layout flex-direction="column">
          <t-header class="flex-content bg-primary">Header</t-header>
          <t-content class="flex-content bg-primary-light" style="height: 150px">Content</t-content>
          <t-footer class="flex-content bg-primary">Footer</t-footer>
        </t-layout>
      </div>
      <layout-normal/>
    </div>

    <div class="demo-block">
      <div class="title">组合使用</div>
      <div class="sub-title">快速构建组合嵌套布局</div>
      <div class="source">
        <t-layout flex-direction="column" style="margin-bottom: 50px">
          <t-header class="flex-content bg-primary">Header</t-header>
          <t-layout flex-direction="row" style="height: 150px">
            <t-aside class="flex-content bg-primary-lighter" width="200px">Left Side</t-aside>
            <t-content class="flex-content bg-primary-light">Content</t-content>
            <t-aside class="flex-content bg-primary-lighter" width="200px">Right Side</t-aside>
          </t-layout>
          <t-footer class="flex-content bg-primary">Footer</t-footer>
        </t-layout>

        <t-layout flex-direction="row">
          <t-aside class="flex-content bg-primary-lighter" width="200px">Left Side</t-aside>
          <t-layout flex-direction="column" style="height: 250px">
            <t-header class="flex-content bg-primary">Header</t-header>
            <t-content class="flex-content bg-primary-light">Content</t-content>
            <t-footer class="flex-content bg-primary">Footer</t-footer>
          </t-layout>
        </t-layout>
      </div>
      <layout-mix/>
    </div>

    <div class="demo-block">
      <div class="title">布局样例</div>
      <div class="sub-title">结合TUI组件快速构建后台管理系统</div>
      <div class="source">
        <t-layout flex-direction="column" style="margin-bottom: 50px; border: 1px solid #e0e0e0">
          <t-header style="background-color: #545c64">
            <t-menu :data="menu" type="info"/>
          </t-header>
          <t-content style="background-color: #F4F5F6">
            <t-breadcrumb separatorIcon="fa fa-caret-right">
              <t-breadcrumb-item to="#">Home</t-breadcrumb-item>
              <t-breadcrumb-item to="#">Category</t-breadcrumb-item>
              <t-breadcrumb-item>TUI Layout</t-breadcrumb-item>
            </t-breadcrumb>
            <div class="card">
              Content
            </div>
          </t-content>
          <t-footer class="flex-content" style="background-color: #F4F5F6; color: #606060;font-family: 'Apple Chancery'">
            TUI © bennnis
          </t-footer>
        </t-layout>

        <t-layout flex-direction="row">
          <t-aside style="padding: 0" width="auto">
            <t-menu :data="menu" type="info" vertical :collsape="!c"/>
          </t-aside>
          <t-layout flex-direction="column">
            <t-content style="background-color: #F4F5F6">
              <t-breadcrumb separatorIcon="fa fa-caret-right">
                <t-breadcrumb-item to="#">Home</t-breadcrumb-item>
                <t-breadcrumb-item to="#">Category</t-breadcrumb-item>
                <t-breadcrumb-item>TUI Layout</t-breadcrumb-item>
              </t-breadcrumb>
              <div class="card">
                <t-switch v-model="c" active-text="展开菜单" inactive-text="卷起菜单"/>
              </div>
            </t-content>
            <t-footer class="flex-content" style="background-color: #F4F5F6; color: #606060;font-family: 'Apple Chancery'">
              TUI © bennnis
            </t-footer>
          </t-layout>
        </t-layout>
      </div>
      <layout-demo/>
    </div>

    <div class="api-docs">
      <t-divider content="Layout Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="layoutApis">
          <t-table-column label="属性" prop="name" :width="140"/>
          <t-table-column label="描述" prop="desc" :width="140"/>
          <t-table-column label="类型" prop="type" :width="140"/>
          <t-table-column label="可选值" prop="choice" :width="300"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Header Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="headerApis">
          <t-table-column label="属性" prop="name" :width="140"/>
          <t-table-column label="描述" prop="desc" :width="140"/>
          <t-table-column label="类型" prop="type" :width="140"/>
          <t-table-column label="可选值" prop="choice" :width="300"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Footer Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="footerApis">
          <t-table-column label="属性" prop="name" :width="140"/>
          <t-table-column label="描述" prop="desc" :width="140"/>
          <t-table-column label="类型" prop="type" :width="140"/>
          <t-table-column label="可选值" prop="choice" :width="300"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Aside Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="asideApis">
          <t-table-column label="属性" prop="name" :width="140"/>
          <t-table-column label="描述" prop="desc" :width="140"/>
          <t-table-column label="类型" prop="type" :width="140"/>
          <t-table-column label="可选值" prop="choice" :width="300"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Content Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="contentApis">
          <t-table-column label="属性" prop="name" :width="140"/>
          <t-table-column label="描述" prop="desc" :width="140"/>
          <t-table-column label="类型" prop="type" :width="140"/>
          <t-table-column label="可选值" prop="choice" :width="300"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutNormal from '../documents/layout/layoutNormal.md'
import LayoutMix from '../documents/layout/layoutMix.md'
import LayoutDemo from '../documents/layout/layoutDemo.md'

export default {
  components: {
    LayoutNormal,
    LayoutMix,
    LayoutDemo
  },

  data () {
    return {
      c: false,
      layoutApis: [
        {name: 'flex-direction', desc: 'flex布局方向', type: 'String', choice: 'row/column', default: '—'}
      ],
      headerApis: [
        {name: 'height', desc: '高度', type: 'String', choice: '—', default: '60px'}
      ],
      footerApis: [
        {name: 'height', desc: '高度', type: 'String', choice: '—', default: '—'}
      ],
      asideApis: [
        {name: 'width', desc: '宽度', type: 'String', choice: '—', default: 'auto'}
      ],
      contentApis: [
        {name: '—', desc: '—', type: '—', choice: '—', default: '—'}
      ],
      menu: [
        {
          name: '首页',
          icon: 'fa fa-home',
          subMenu: [
            {
              name: '首页一',
              path: '/tooltip'
            },
            {
              name: '首页二',
              path: '/tooltip'
            },
            {
              name: '首页三',
              path: '/tooltip',
              subMenu: [
                {
                  name: '首页一',
                  path: '/tooltip'
                },
                {
                  name: '首页二',
                  path: '/tooltip'
                },
                {
                  name: '首页三',
                  path: '/tooltip',
                  subMenu: [
                    {
                      name: '首页一',
                      path: '/tooltip'
                    },
                    {
                      name: '首页二',
                      path: '/tooltip'
                    },
                    {
                      name: '首页三',
                      path: '/tooltip'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '下载',
          icon: 'fa fa-download',
          path: '/tooltip'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper',
          path: '/tooltip'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user',
          path: '/tooltip'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .card {
    margin-top: 20px;
    padding: 30px 20px 200px 30px;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #eee;
    color: #303030;
    font-size: 16px;
    transition: all .2s;

    &:hover {
      box-shadow: 0 2px 6px 0 #e9e9e9;
    }
  }
</style>
