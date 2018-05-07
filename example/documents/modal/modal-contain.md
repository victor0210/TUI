::: demo
> 加载多个模态框按不同时间显示即可
```html
<!--modal 1-->
<t-modal :show.sync="showContain" animation-in="t-bounce-down-in" :hide-on-click="!showContain2">
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
    <t-button size="sm" type="primary" @click="showContain2 = !showContain2">登录</t-button>
  </div>
</t-modal>
<!--modal 2-->
<t-modal :show.sync="showContain2" size="sm" animation-in="t-bounce-down-in" top="130px">
  <h3 slot="header">
    登录
  </h3>
  <div slot="body">
    Hello Modal 2
  </div>
  <div slot="footer" style="text-align: right">
    <t-button size="sm" type="primary" @click="showContain2 = !showContain2">登录</t-button>
  </div>
</t-modal>

<!--trigger element-->
<t-button @click="showModalContain">打开窗口</t-button>

<script>
export default {
  data () {
    return {
      showContain: false,
      showContain2: false
    }
  },
  methods: {
    showModalContain () {
      this.showContain = !this.showContain
    }
  }
}
</script>

```
:::
