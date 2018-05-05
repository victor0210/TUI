::: demo
> 调用状态方法会带有对应的状态图标，分别是 `success`、`info`、`warning`、`danger`
```html
<t-button @click="open(c2)">default</t-button>
<t-button @click="success(c1)">success</t-button>
<t-button @click="info(c1)">info</t-button>
<t-button @click="warning(c1)">warning</t-button>
<t-button @click="danger(c1)">danger</t-button>
<script>
export default {
  data () {
    return {
      c1: {
        title: '维护通知'
      },
      c2: {
        icon: 'fa fa-check',
        title: '自定义图标'
      }
    }
  },
  methods: {
    open (opt) {
      this.$TNotify.show(opt)
    },
    success (opt) {
      this.$TNotify.success(opt)
    },
    info (opt) {
      this.$TNotify.info(opt)
    },
    warning (opt) {
      this.$TNotify.warning(opt)
    },
    danger (opt) {
      this.$TNotify.danger(opt)
    }
  }
}
</script>
```
:::
