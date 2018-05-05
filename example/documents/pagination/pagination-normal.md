:::demo
> 传入 `total` 可自动计算出页数，默认每页数量 `10`
```html
<div class="half">
  <t-divider content="小于7页" content-align="left"/>
  <t-pagination :total="50"/>
</div>
<div class="half">
  <t-divider content="大于7页" content-align="left"/>
  <t-pagination :total="120"/>
</div>
```
:::
