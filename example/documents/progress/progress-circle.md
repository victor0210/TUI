:::demo
> `type` 设置为 `circle` 使用环形进度条，`circle-size` 设置尺寸，`round` 为是否展示圆角，通过 `slot-socpe` 可获取 `percentage` 值，自己实现内容请自行编写css哦，内容区域宽高为 `circle-size` 的 50%
```html
<t-progress :percentage="100" :circle-size="200" type="circle" status="success" percentage-color="orangered">
  <template slot-scope="scope">
    <p>达标状态：<i class="fa fa-check-circle" style="color: #44c47d"></i></p>
    <p>完成率：{{ `${scope.percentage}%` }}</p>
    <p>超标：30%</p>
  </template>
</t-progress>

<t-progress :percentage="40" :circle-size="160" :stroke-width="10" type="circle" :round="false"/>

<t-progress :percentage="75" :circle-size="130" type="circle" status="danger"/>

<t-progress :percentage="100" :circle-size="100" type="circle" status="success" percentage-color="orangered">
  <template slot-scope="scope">
    <i class="fa fa-check fa-2x" style="color: #44c47d; width: 100%;height: 100%;display: inline-block;text-align: center;line-height: 50px"></i>
  </template>
</t-progress>

<style scoped>
  .t-progress.is-circle {
    margin-right: 50px;
  }
</style>
```
:::
