:::demo
> `per-page` 为每页数量，`current-page` 为当前页数，`sizes`为可选每页数量，`size-change`为每页数量变化回调，`page-change`为页数变化回调
```html
<t-pagination
  :total="1000"
  :per-page="20"
  :current-page="3"
  :sizes="sizes"
  :size-change="sizeChange"
  :current-change="currentChange"
  layout="pager, size"
/>

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
