::: demo
> 垂直菜单设置默认选中，如果有子菜单会自动展开（只会在组件首次加载的时候生效），使用 `default-active-index` 设置对应下标即可，多级使用 `-` 链接，参见下列demo
```html
<div class="half">
  <t-divider content="默认样式" content-align="left"/>
  <t-menu :data="menu" vertical default-active-index="0-2"/>
</div>
<div class="half">
  <t-divider content="Info样式" content-align="left"/>
  <t-menu :data="menu" vertical type="info" default-active-index="1"/>
</div>
<script>
export default {
  data () {
    return {
      menu: [
        {
          name: '首页',
          icon: 'fa fa-home',
          subMenu: [
            {
              name: '首页一',
              path: '/components/tooltip'
            },
            {
              name: '首页二',
              link: 'http://www.baidu.com',
              target: '_blank'
            },
            {
              name: '首页三',
              subMenu: [
                {
                  name: '首页一',
                  path: '/components/tooltip'
                },
                {
                  name: '首页二',
                  path: '/components/tooltip'
                },
                {
                  name: '首页三',
                  subMenu: [
                    {
                      name: '首页一',
                      path: '/components/tooltip'
                    },
                    {
                      name: '首页二',
                      path: '/components/tooltip'
                    },
                    {
                      name: '首页三',
                      path: '/components/tooltip'
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
          path: '/components/tooltip'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper',
          path: '/components/tooltip'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user',
          path: '/components/tooltip'
        }
      ]
    }
  }
}
</script>
```
:::
