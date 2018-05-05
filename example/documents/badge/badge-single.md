::: demo
> 在标记组件内不嵌入任何元素将会被单独使用
```html
<div class="half" style="height: 200px">
  <t-divider content="文字" content-align="left"/>
  单独使用 <t-badge value="new"/>
</div>

<div class="half" style="height: 200px">
  <t-divider content="小红点" content-align="left"/>
  单独使用dot <t-badge dot/>
</div>
```
:::
