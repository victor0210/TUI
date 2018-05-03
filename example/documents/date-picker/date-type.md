:::demo
> `type` 默认为选择年月日，`month` 为选择年月，`year` 为选择年
```html
<div class="third">
  <t-divider content="选择年月日" content-align="left"/>
  <t-date-picker v-model="dp31" placeholder="选择日期"/>
</div>
<div class="third">
  <t-divider content="选择年月" content-align="left"/>
  <t-date-picker v-model="dp32" type="month" placeholder="选择日期"/>
</div>
<div class="third">
  <t-divider content="选择年" content-align="left"/>
  <t-date-picker v-model="dp33" type="year" placeholder="选择日期"/>
</div>

<script>
export default {
  data () {
    return {
      dp31: '',
      dp32: '',
      dp33: ''
    }
  }
}
</script>
```
:::
