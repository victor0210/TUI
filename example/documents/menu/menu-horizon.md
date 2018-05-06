::: demo
> 水平菜单，一共有两种主题，除了默认主题啊我，TUI还设置了另外一种主题 `info`，使用起来非常简洁，只需要传入一个menu参数即可，不过简洁的同时也牺牲了一些可定制性，menu 配置表见网站底部参数表
```html
<t-menu :data="menu"/>
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
