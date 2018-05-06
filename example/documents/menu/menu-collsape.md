::: demo
> `collsape` 为 `true` 收起菜单，当不传入 `link` 或 `path` 的时候，还可以通过获取点击的item做一些事哦
```html
<t-row :gutter="20">
  <t-col :span="12" style="height: 500px">
    <t-menu :data="menu2" vertical :collsape="c" type="inverse" @handleClick="handleClick"/>
  </t-col>
  
  <t-col :span="12">
    <t-switch active-text="收起" inactive-text="展开" v-model="c"/>
  </t-col>
</t-row>
<script>
export default {
  data () {
    return {
      c: false,
      menu2: [
        {
          name: '首页',
          icon: 'fa fa-home',
          subMenu: [
            {
              name: '首页一'
            },
            {
              name: '首页二'
            },
            {
              name: '首页三',
              subMenu: [
                {
                  name: '首页一'
                },
                {
                  name: '首页二'
                },
                {
                  name: '首页三',
                  subMenu: [
                    {
                      name: '首页一'
                    },
                    {
                      name: '首页二'
                    },
                    {
                      name: '首页三'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '下载',
          icon: 'fa fa-download'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user'
        }
      ]
    }
  },
  methods: {
    handleClick (item) {
      this.$TMessage.show({
        content: '点击了' + item.name,
        type: 'info'
      })
    }
  }
}
</script>
```
:::
