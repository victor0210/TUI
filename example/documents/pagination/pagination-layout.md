:::demo
> 设置 `layout` 进行组件不同布局，可选值 `total`、`size`、`pager`、`jump`，每项用 `,` 分开，可任意调换顺序
```html
<div class="panel">
  <t-divider content="页码" content-align="left"/>
  <t-pagination :total="1000"/>
</div>
<div class="panel">
  <t-divider content="总数，页码" content-align="left"/>
  <t-pagination :total="1000" layout="total, pager"/>
</div>
<div class="panel">
  <t-divider content="总数，页码，每页数量" content-align="left"/>
  <t-pagination :total="1000" layout="total, pager, size" :sizes="sizes"/>
</div>
<div class="panel">
  <t-divider content="全部组件" content-align="left"/>
  <t-pagination :total="1000" layout="total, size, pager, jump" :sizes="sizes"/>
</div>

<script>
export default {
  data () {
    return {
      sizes: [100, 200, 300, 400]
    }
  },

  methods: {
    sizeChange (s) {
      console.log(s)
    },
    currentChange (c) {
      console.log(c)
    }
  }
}
</script>
```
:::
