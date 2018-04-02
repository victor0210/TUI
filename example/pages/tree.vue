<template>
  <div>
    <guide title="树形控件" des="用清晰的层级结构展示信息，可展开或折叠"/>
    <!--<div class="demo-block">-->
      <!--<div class="subtitle">基本用法</div>-->
      <!--<div class="source">-->
        <!--<t-tree :data="data"/>-->
      <!--</div>-->
      <!--<Dialog></Dialog>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">可选择</div>-->
      <!--<div class="source">-->
        <!--<t-tree :data="data" show-checkbox :node-click="handleNodeClick" :check-change="handleCheckChange"/>-->
      <!--</div>-->
      <!--<Dialog></Dialog>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">动态加载</div>-->
      <!--<div class="source">-->
        <!--<t-tree :load="loadData" lazy show-checkbox :default-props="defaultProps"/>-->
      <!--</div>-->
      <!--<Dialog></Dialog>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">默认展开</div>-->
      <!--<div class="source">-->
        <!--<t-tree show-checkbox :data="data" node-key="id" :expand-node="[1, 2]" :checked-node="[3]"/>-->
      <!--</div>-->
      <!--<Dialog></Dialog>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">禁用选项</div>-->
      <!--<div class="source">-->
        <!--<t-tree show-checkbox :data="data2" node-key="id" :expand-node="[1, 2]" :checked-node="[4]"/>-->
      <!--</div>-->
      <!--<Dialog></Dialog>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">树节点的操作</div>-->
      <!--<div class="source">-->
        <!--<t-row>-->
          <!--<t-col :span="24">-->
            <!--<t-tree show-checkbox :data="data" node-key="id" :expand-node="[1, 2]" :checked-node="[4]" ref="tree"/>-->
          <!--</t-col>-->
          <!--<t-col :span="24">-->
            <!--<br>-->
            <!--<br>-->
            <!--<t-button @click="getCheckNodes">获取node</t-button>-->
            <!--<t-button @click="getCheckKeys">获取key</t-button>-->
            <!--<t-button @click="setCheckNodes">通过node设置</t-button>-->
            <!--<t-button @click="reset">重置</t-button>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<Dialog></Dialog>-->
    <!--</div>-->

    <div class="demo-block">
      <div class="subtitle">禁用选项</div>
        <div class="source">
          <t-input v-model="filterText" placeholder="输入关键字"/>
          <br>
          <t-tree show-checkbox :data="data2" node-key="id" :expand-node="[1, 2]" :checked-node="[4]" :filterText="filterText"/>
        </div>
      <Dialog></Dialog>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import Dialog from '../documents/dialog/dialog.md'
export default {
  components: {
    Dialog
  },
  data () {
    return {
      data: [{
        label: '一级 1',
        id: 1,
        children: [{
          id: 2,
          label: '二级 1-1',
          children: [{
            id: 3,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        id: 4,
        children: [{
          label: '二级 2-1',
          id: 5,
          children: [{
            label: '三级 2-1-1',
            id: 6
          }]
        }, {
          label: '二级 2-2',
          id: 7,
          children: [{
            label: '三级 2-2-1',
            id: 8
          }]
        }]
      }, {
        label: '一级 3',
        id: 9,
        children: [{
          label: '二级 3-1',
          id: 10,
          children: [{
            label: '三级 3-1-1',
            id: 11
          }]
        }, {
          label: '二级 3-2',
          id: 12,
          children: [{
            label: '三级 3-2-1',
            id: 13
          }, {
            label: '三级 3-2-2',
            id: 14
          }]
        }]
      }],
      data2: [{
        label: '一级 1',
        id: 1,
        children: [{
          id: 2,
          label: '二级 1-1',
          children: [{
            id: 3,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          disabled: true,
          children: [{
            label: '三级 2-1-1',
            id: 4,
            disabled: true
          }, {
            label: '三级 3-1-2',
            id: 6,
            disabled: true
          }]
        }, {
          label: '二级 2-2',
          disabled: true,
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
        label: 'name'
      },
      filterText: ''
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    handleCheckChange (data) {
      console.log(data)
    },
    loadData (node, resolve) {
      axios.get('/tree/list').then((resp) => {
        let c = node ? 1000 : 0
        setTimeout(() => {
          if (!node || node.nodeIndex.split('-').length < 4) {
            resolve(resp.data)
          } else {
            resolve()
          }
        }, c)
      })
    },
    getCheckNodes () {
      console.log(this.$refs.tree.getCheckNodes())
    },
    getCheckKeys () {
      console.log(this.$refs.tree.getCheckKeys())
    },
    setCheckNodes () {
      this.$refs.tree.setCheckNodes([1, 2])
    },
    reset () {
      this.$refs.tree.resetCheckNodes()
    }
  }
}
</script>
