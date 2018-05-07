::: demo
> 除默认外，TUI一共预设了四种模态框尺寸，分别是 `xs`、`sm`、`lg` 和 `xl`，如果还不够，可通过设置 `width` 和 `height` 调整尺寸
```html
<!--modal 1-->
<t-modal :show.sync="showSize" :size="size">
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
    <t-button size="sm" type="primary" @click="showSize = !showSize">登录</t-button>
  </div>
</t-modal>

<!--trigger element-->
<t-button @click="showModalSize(0)">sm</t-button>
<t-button @click="showModalSize(1)">xs</t-button>
<t-button @click="showModalSize(2)">lg</t-button>
<t-button @click="showModalSize(3)">xl</t-button>

<script>
export default {
  data () {
    return {
      showSize: false,
      size: '',
      sizes: [
        'xs',
        'sm',
        'lg',
        'xl'
      ]
    }
  },
  methods: {
    showModalSize (s) {
      this.size = this.sizes[s]
      this.showSize = true
    }
  }
}
</script>

```
:::
