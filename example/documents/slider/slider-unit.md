::: demo
>  `unit` 定义单位值同时定义了精度，类型为数字
```html
<div class="half">
  <t-divider content="间隔为10" content-align="left"/>
  <t-slider v-model="v31" :min="0" :max="100" :unit="10"/>
</div>
<div class="half">
  <t-divider content="间隔为0.1（不精确）" content-align="left"/>
  <t-slider v-model="v32" :min="0" :max="60" :unit="0.1"/>
</div>
<div class="panel">
  <t-divider content="间隔为0.1（较精确）" content-align="left"/>
  <t-slider v-model="v33" :min="0" :max="60" :unit="0.1"/>
</div>

<script>
export default {
  data () {
    return {
      v31: 10,
      v32: 10,
      v33: 0.5,
    }
  }
}
</script>
```
:::
