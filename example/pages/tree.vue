<template>
  <div>
    <guide title="树形控件" des="用清晰的层级结构展示信息，可展开或折叠"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-tree :data="data"/>
      </div>
      <Dialog></Dialog>
    </div>

    <div class="demo-block">
      <div class="subtitle">可选择</div>
      <div class="source">
        <t-tree :data="data" show-checkbox :node-click="handleNodeClick" :check-change="handleCheckChange"/>
      </div>
      <Dialog></Dialog>
    </div>
  </div>
</template>
<script>
import Dialog from '../documents/dialog/dialog.md'
export default {
  components: {
    Dialog
  },
  data () {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }, {
            label: '三级 3-2-2'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleCheckChange (data) {
      console.log(data)
    }
  }
}
</script>
