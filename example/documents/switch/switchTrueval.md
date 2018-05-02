:::demo
> 显示文字只需要设置 `active-text` 和 `inactive-text` 即可 
```html
<div class="half">
  <t-divider content="默认" content-align="left"/>
  <t-switch v-model="s1"/>
  <span style="display: inline-block; line-height: 24px; float: left">当前值: {{ s1 }}</span>
</div>

<div class="half">
  <t-divider content="TrueValue" content-align="left"/>
  <t-switch v-model="s2" active-value="1" inactive-value="0"/>
  <span style="display: inline-block; line-height: 24px; float: left">当前值: {{ s2 }}</span>
</div>

<script>
export default {
  data () {
    return {
      s1: false,
      s2: false
    }
  }
}
</script>
```
:::
