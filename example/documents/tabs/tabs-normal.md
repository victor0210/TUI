:::demo
> `t-tab-panel` 为标签页具体内容，`tabValue` 为标签的下标，第一个下标为`0` 
```html
<div class="half" style="height: 300px">
  <t-tabs v-model="tabValue">
    <t-tab-panel title="Tab-1">
      <h3>为中华振兴而敲代码-Tab1</h3>
    </t-tab-panel>
    <t-tab-panel title="Tab-2">
      <h3>为中华振兴而敲代码-Tab2</h3>
    </t-tab-panel>
    <t-tab-panel title="Tab-3">
      <h3>为中华振兴而敲代码-Tab3</h3>
    </t-tab-panel>
  </t-tabs>
</div>
<div class="half" style="height: 300px">
  <t-radio v-model="tabValue" :val="0" label="tab1"/>
  <t-radio v-model="tabValue" :val="1" label="tab2"/>
  <t-radio v-model="tabValue" :val="2" label="tab3"/>
</div>

<script>
export default {
  data () {
    return {
      tabPanels: [
        {title: '精忠报国'},
        {title: '国富民强'},
        {title: '强作解人'},
        {title: '人命危浅'},
        {title: '浅尝辄止'},
        {title: '止暴禁非'},
        {title: '非同寻常'},
        {title: '常年累月'},
        {title: '月晕而风'},
        {title: '风风雨雨'},
        {title: '雨打风吹'},
        {title: '吹灰之力'},
        {title: '力倍功半'},
        {title: '半筹莫展'},
        {title: '展翅高飞'},
        {title: '飞蛾扑火'},
        {title: '火耕流种'},
        {title: '种豆得豆'},
        {title: '豆蔻年华'},
        {title: '华冠丽服'},
        {title: '服服贴贴'},
      ]
    }
  }  
}
</script>
```
:::
