:::demo
> 可通过 `close` 事件进行标签的删除操作 
```html
<t-tag v-for="(t, idx) in tags" closable :key="idx" @close="closeHandler(t)">{{ t.label }}</t-tag>
<t-button size="sm" @click="addTag">+ 标签</t-button>

<script>
export default {
  data () {
    return {
      tags: [
        {label: '标签1'},
        {label: '标签2'},
        {label: '标签3'}
      ],
      counter: 4
    }
  },
  methods: {
    addTag () {
      this.tags.push({label: `标签${this.counter++}`})
    },
    closeHandler (tag) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    }
  }
}
</script>
```
:::
