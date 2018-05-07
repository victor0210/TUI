::: demo
> `animation-in` 为显示动画类名，`animation-out` 为隐藏动画类名，TUI内置动画不多，可手动定义动画添加
```html
<!--modal 1-->
<t-modal :show.sync="showAnimation" :animation-in="animationIn">
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
    <t-button size="sm" type="primary" @click="showAnimation = !showAnimation">登录</t-button>
  </div>
</t-modal>

<!--trigger element-->
<div class="panel">
  <t-divider content="直线动画" content-align="left"/>
  <t-button @click="showModalAnimation(0)">down</t-button>
  <t-button @click="showModalAnimation(1)">up</t-button>
  <t-button @click="showModalAnimation(2)">left</t-button>
  <t-button @click="showModalAnimation(3)">right</t-button>
</div>
<div class="panel">
  <t-divider content="大幅度直线动画" content-align="left"/>
  <t-button @click="showModalAnimation(4)">down</t-button>
  <t-button @click="showModalAnimation(5)">up</t-button>
  <t-button @click="showModalAnimation(6)">left</t-button>
  <t-button @click="showModalAnimation(7)">right</t-button>
</div>
<div class="panel">
  <t-divider content="Bounce动画" content-align="left"/>
  <t-button @click="showModalAnimation(8)">bounceDown</t-button>
  <t-button @click="showModalAnimation(9)">bounceUp</t-button>
  <t-button @click="showModalAnimation(10)">bounceLeft</t-button>
  <t-button @click="showModalAnimation(11)">bounceRight</t-button>
</div>

<script>
export default {
  data () {
    return {
      showAnimation: false,
      animationIn: '',
      animationsIn: [
        't-go-down-in',
        't-go-up-in',
        't-go-left-in',
        't-go-right-in',
        't-go-down-big-in',
        't-go-up-big-in',
        't-go-left-big-in',
        't-go-right-big-in',
        't-bounce-down-in',
        't-bounce-up-in',
        't-bounce-left-in',
        't-bounce-right-in'
      ]
    }
  },
  methods: {
    showModalAnimation (a) {
      this.animationIn = this.animationsIn[a]
      this.showAnimation = true
    }
  }
}
</script>

```
:::
