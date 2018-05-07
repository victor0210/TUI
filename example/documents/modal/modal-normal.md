::: demo
> 组件的 `show` 为控制模态框显示隐藏的属性，类型为 `Boolean`，也是双向绑定的属性，详情请见Vue sync文档说明。组件支持两个事件 `modal-open` 和 `modal-close` 分别在显示和关闭时触发
```html
<t-modal :show.sync="show" @modal-open="onOpen" @modal-close="onClose">
  <h3 slot="header">
    登录
  </h3>
  <div slot="body">
    <t-form>
      <t-form-item label="Username:">
        <t-input placeholder="name" type="text"/>
      </t-form-item>
      <t-form-item label="Password:">
        <t-input placeholder="password" type="password"/>
      </t-form-item>
    </t-form>
  </div>
  <div slot="footer" style="text-align: right">
    <t-button size="sm" type="primary" @click="show = !show">登录</t-button>
  </div>
</t-modal>

<!--trigger element-->
<t-button @click="showModal">打开窗口</t-button>

<script>
export default {
  data () {
    return {
      show: false,
    }
  },
  methods: {
    showModal () {
      this.show = !this.show
    },
    
    onOpen () {
      this.$TMessage.show({
        content: '打开 Modal',
        type: 'info'
      })
    },

    onClose () {
      this.$TMessage.show({
        content: '关闭 Modal',
        type: 'info'
      })
    }
  }
}
</script>

```
:::
