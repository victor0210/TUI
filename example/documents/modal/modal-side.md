::: demo
> `side` 设置侧边模态框定位，设置该属性后，所有自定义动画将失效。
```html
<!--modal 1-->
<t-modal :show.sync="showSide" :side="side">
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
    <t-button size="sm" type="primary" @click="showSide = !showSide">登录</t-button>
  </div>
</t-modal>

<!--trigger element-->
<t-button @click="showModalSide(0)">左边</t-button>
<t-button @click="showModalSide(1)">上边</t-button>
<t-button @click="showModalSide(2)">右边</t-button>
<t-button @click="showModalSide(3)">下边</t-button>

<script>
export default {
  data () {
    return {
      showSide: false,
      side: '',
      sides: [
        'left',
        'top',
        'right',
        'bottom'
      ],
    }
  },
  methods: {
    showModalSide (s) {
      this.side = this.sides[s]
      this.showSide = true
    }
  }
}
</script>

```
:::
