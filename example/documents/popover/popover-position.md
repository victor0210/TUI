:::demo
> `postion` 一共有十二种 `top`、`top-left`、`top-right` | `left`、`left-top`、`left-bottom` | `right`、`right-top`、`right-bottom` | `bottom`、`bottom-left`、 `bottom-right`
```html
<t-row :gutter="20">
  <t-col :span="24">
    <div class="top" style="text-align: center">
      <t-popover position="top-left">
        <t-button type="primary">上左</t-button>
        <div slot="popover">
          {{ msg }}
          <br>
          {{ msg2 }}
        </div>
      </t-popover>
      <t-popover position="top">
        <t-button type="primary">上边</t-button>
        <div slot="popover">
          {{ msg }}
          <br>
          {{ msg2 }}
        </div>
      </t-popover>
      <t-popover position="top-right">
        <t-button type="primary">上右</t-button>
        <div slot="popover">
          {{ msg }}
          <br>
          {{ msg2 }}
        </div>
      </t-popover>
    </div>
    <div class="left" style="width: 50%; float: left">
      <div style="text-align: center; margin-bottom: 20px;">
        <t-popover position="left-top">
          <t-button type="primary">左上</t-button>
          <div slot="popover">
            {{ msg }}
            <br>
            {{ msg2 }}
          </div>
        </t-popover>
      </div>
    <div style="text-align: center; margin-bottom: 20px;">
      <t-popover position="left">
          <t-button type="primary">左边</t-button>
          <div slot="popover">
            {{ msg }}
            <br>
            {{ msg2 }}
          </div>
        </t-popover>
      </div>
    <div style="text-align: center; margin-bottom: 20px;">
      <t-popover position="left-bottom">
          <t-button type="primary">左下</t-button>
          <div slot="popover">
            {{ msg }}
            <br>
            {{ msg2 }}
          </div>
        </t-popover>
      </div>
    </div>
    <div class="right" style="width: 50%; float: left">
      <div style="text-align: center; margin-bottom: 20px;">
        <t-popover position="right-top">
          <t-button type="primary">右上</t-button>
          <div slot="popover">
            {{ msg }}
            <br>
            {{ msg2 }}
          </div>
        </t-popover>
      </div>
      <div style="text-align: center; margin-bottom: 20px;">
        <t-popover position="right">
          <t-button type="primary">右边</t-button>
          <div slot="popover">
            {{ msg }}
            <br>
            {{ msg2 }}
          </div>
        </t-popover>
      </div>
      <div style="text-align: center; margin-bottom: 20px;">
        <t-popover position="right-bottom">
          <t-button type="primary">右下</t-button>
          <div slot="popover">
            {{ msg }}
            <br>
            {{ msg2 }}
          </div>
        </t-popover>
      </div>
    </div>
    <div class="bottom" style="text-align: center">
      <t-popover position="bottom-left">
        <t-button type="primary">下左</t-button>
        <div slot="popover">
          {{ msg }}
          <br>
          {{ msg2 }}
        </div>
      </t-popover>
      <t-popover position="bottom">
        <t-button type="primary">下边</t-button>
        <div slot="popover">
          {{ msg }}
          <br>
          {{ msg2 }}
        </div>
      </t-popover>
      <t-popover position="bottom-right">
        <t-button type="primary">下右</t-button>
        <div slot="popover">
          {{ msg }}
          <br>
          {{ msg2 }}
        </div>
      </t-popover>
    </div>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      msg: 'Welcome TUI !',
      msg2: 'Here is Popover!'
    }
  }
}
</script>
```
:::
