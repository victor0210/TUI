:::demo
> 结合TUI部分组件实现快速布局
```html
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
  <t-aside style="padding: 0">
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

<script>
export default {
  data () {
    return {
      c: false,
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
```
:::
