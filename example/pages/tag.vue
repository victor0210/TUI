<template>
    <div>
      <guide title="标签" des="用于展示标志性数据"/>
      <div class="demo-block">
        <div class="subtitle">普通标签</div>
        <div class="source">
          <t-tag v-for="(t, idx) in tags1" :key="idx" :type="t.type">{{ t.label }}</t-tag>

        </div>
        <button-md></button-md>
      </div>

      <div class="demo-block">
        <div class="subtitle">可关闭标签</div>
        <div class="source">
          <t-tag v-for="(t, idx) in tags1" closeable :key="idx" :type="t.type">{{ t.label }}</t-tag>
        </div>
        <button-md></button-md>
      </div>

      <div class="demo-block">
        <div class="subtitle">可关闭标签</div>
        <div class="source">
          <t-tag v-for="(t, idx) in tags" closeable :key="idx" @close="closeHandler(t)">{{ t.label }}</t-tag>
          <t-button size="sm" @click="addTag">+ 标签</t-button>
        </div>
        <button-md></button-md>
      </div>
    </div>
</template>

<script>
import ButtonMd from '../documents/button/button.md'
export default {
  components: {
    ButtonMd
  },
  data () {
    return {
      tags1: [
        {label: '标签1'},
        {label: '标签2', type: 'success'},
        {label: '标签3', type: 'warning'},
        {label: '标签4', type: 'danger'},
        {label: '标签5', type: 'inverse'}
      ],
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

<style scoped>
  .t-tag {
    margin-right: 10px;
  }
</style>
