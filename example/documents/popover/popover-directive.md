:::demo
> 在弹出层上使用定义ref定义唯一key，然后在触发元素上使用 `v-t-popover` 绑定即可，两者必须在同一父级组件内
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-popover position="bottom" ref="popover1">
      <p>Here Is Popover1</p>
    </t-popover>

    <t-popover position="top" ref="popover2">
      <p>Here Is Popover2</p>
    </t-popover>

    <t-popover position="right" :width="250" ref="popover3" v-model="visible2">
      <p style="margin-bottom: 10px">您确定删除这段消息吗？</p>
      <div style="text-align: right">
        <t-button size="sm" type="text" @click="visible2 = false">取消</t-button>
        <t-button size="sm" type="primary" @click="visible2 = false">确定</t-button>
      </div>
    </t-popover>

    <t-button type="primary" style="margin-right: 10px" v-t-popover:popover1>弹出层1</t-button>
    <t-button type="primary" style="margin-right: 10px" v-t-popover:popover2>弹出层2</t-button>
    <t-button type="primary" style="margin-right: 10px" v-t-popover:popover3>弹出层3</t-button>
  </t-col>
</t-row>
```
:::
