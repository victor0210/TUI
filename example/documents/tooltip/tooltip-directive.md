:::demo
> 在弹出层上使用定义ref定义唯一key，然后在触发元素上使用 `v-t-tootip` 绑定即可，两者必须在同一父级组件内 
```html
<t-tooltip content="this is tooltip" theme="light" ref="t1"/>
<t-button v-t-tooltip:t1>directive</t-button>
```
:::
