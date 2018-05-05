<template>
  <div>
    <guide title="Tree 树形控件" des="用清晰的层级结构展示信息，可展开或折叠"/>
    <div class="demo-block">
      <div class="title">普通用法</div>
      <div class="sub-title">最基本树形组件的使用</div>
      <div class="source">
        <t-tree :data="data" :node-toggle="handleNodeToggle" :node-click="handleNodeClick"/>
      </div>
      <tree-normal/>
    </div>

    <div class="demo-block">
      <div class="title">可选择</div>
      <div class="sub-title">带有选择框的树形组件</div>
      <div class="source">
        <t-tree :data="data" show-checkbox :check-change="handleCheckChange"/>
      </div>
      <tree-checkbox/>
    </div>

    <div class="demo-block">
      <div class="title">动态加载</div>
      <div class="sub-title">根据展开事件触发数据的动态加载</div>
      <div class="source">
        <t-tree :load="loadData" lazy :default-props="defaultProps"/>
      </div>
      <tree-load/>
    </div>

    <div class="demo-block">
      <div class="title">默认展开</div>
      <div class="sub-title">初始化组建时自动展开</div>
      <div class="source">
        <t-tree :data="data" node-key="id" :expand-nodes="[1, 2]"/>
      </div>
      <tree-expand/>
    </div>

    <div class="demo-block">
      <div class="title">默认选中</div>
      <div class="sub-title">渲染师默认选中对应节点（checkbox模式下可用）</div>
      <div class="source">
        <t-tree show-checkbox :data="data" node-key="id" :checked-nodes="[1, 2]" />
      </div>
      <tree-checked/>
    </div>

    <div class="demo-block">
      <div class="title">禁用选项</div>
      <div class="sub-title">禁用选项（checkbox模式下可用）</div>
      <div class="source">
        <t-tree show-checkbox :data="data2" node-key="id" :expand-nodes="[1, 2]" :checked-node="[4]"/>
      </div>
      <tree-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">树节点的操作</div>
      <div class="sub-title">组件的基本 <code>Funtion</code></div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-tree show-checkbox :data="data3" node-key="id" :expand-nodes="[1, 2]" :checked-node="[4]" ref="tree"/>
          </t-col>
          <t-col :span="24">
            <br>
            <br>
            <t-button @click="getCheckNodes">获取node</t-button>
            <t-button @click="getCheckKeys">获取key</t-button>
            <t-button @click="setCheckNodes">通过node设置</t-button>
            <t-button @click="reset">重置</t-button>
          </t-col>
        </t-row>
      </div>
      <tree-actions/>
    </div>

    <div class="demo-block">
      <div class="title">节点过滤</div>
      <div class="sub-title">通过label快速搜索节点，被搜索到节点的父级节点也会被展示</div>
        <div class="source">
          <t-input size="sm" v-model="filterText" placeholder="输入关键字"/>
          <br>
          <t-tree show-checkbox :data="data3" node-key="id" :expand-nodes="[1, 2]" :checked-node="[4]" :filterText="filterText"/>
        </div>
      <tree-filter/>
    </div>

    <div class="demo-block">
      <div class="title">自定义节点</div>
      <div class="sub-title">slot-scope会传回节点node对象，见下列demo</div>
      <div class="source">
        <t-tree :data="data4" ref="tree2">
          <template slot-scope="{node}">
            <t-button type="text" size="sm" @click="append(node)">append</t-button>
            <t-button type="text" size="sm" @click="remove(node)">remove</t-button>
          </template>
        </t-tree>
      </div>
      <tree-slot/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="treeApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="120"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import TreeNormal from '../documents/tree/tree-normal.md'
import TreeActions from '../documents/tree/tree-actions.md'
import TreeChecked from '../documents/tree/tree-checked.md'
import TreeCheckbox from '../documents/tree/tree-checkbox.md'
import TreeDisabled from '../documents/tree/tree-disabled.md'
import TreeExpand from '../documents/tree/tree-expand.md'
import TreeFilter from '../documents/tree/tree-filter.md'
import TreeLoad from '../documents/tree/tree-load.md'
import TreeSlot from '../documents/tree/tree-slot.md'
export default {
  components: {
    TreeNormal,
    TreeActions,
    TreeChecked,
    TreeCheckbox,
    TreeDisabled,
    TreeExpand,
    TreeFilter,
    TreeSlot,
    TreeLoad
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
          disabled: true,
          children: [{
            id: 3,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
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
      data3: [{
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
      data4: [{
        label: '一级 1',
        id: 1,
        children: [{
          id: 2,
          label: '二级 1-1',
          disabled: true,
          children: [{
            id: 3,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
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
      filterText: '',
      treeApis: [
        {name: 'data', desc: '节点数据集', type: 'Array', choice: '节点对象有效参数: disabled/label/children', default: '—'},
        {name: 'default-props', desc: '修改节点属性的key值', type: 'Object', choice: '可修改key: label/children', default: '{label: null, children: null}'},
        {name: 'child-indent', desc: '子节点indent值', type: 'Number', choice: '—', default: '16'},
        {name: 'show-checkbox', desc: '可多选', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'lazy', desc: '开启动态加载', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'load', desc: '动态加载方法', type: 'Function', choice: '—', default: '—'},
        {name: 'node-click', desc: '节点点击回调', type: 'Function', choice: '—', default: '—'},
        {name: 'node-toggle', desc: '节点展开切换回调', type: 'Function', choice: '—', default: '—'},
        {name: 'check-change', desc: '节点选择切换回调', type: 'Funtion', choice: '—', default: '—'},
        {name: 'expand-nodes', desc: '默认展开节点key集合', type: 'Array', choice: '—', default: '—'},
        {name: 'checked-nodes', desc: '默认选中节点key集合', type: 'Array', choice: '—', default: '—'},
        {name: 'nodeKey', desc: '节点key值', type: 'String', choice: '—', default: '—'},
        {name: 'filter-text', desc: '过滤关键字', type: 'String', choice: '—', default: '—'}
      ]
    }
  },
  methods: {
    handleNodeToggle (data) {
      console.log(data, 'toogle')
    },
    handleNodeClick (data) {
      console.log(data, 'click')
    },
    handleCheckChange (data) {
      console.log(data)
    },
    loadData (node, resolve) {
      let data = [{
        'name': `动态加载数据一：${~~(Math.random() * 10000)}`
      }, {
        'name': `动态加载数据二：${~~(Math.random() * 10000)}`
      }]
      let c = node ? 1000 : 0
      setTimeout(() => {
        if (!node || node.nodeIndex.split('-').length < 4) {
          resolve(data)
        } else {
          resolve([])
        }
      }, c)
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
    },
    append (node) {
      this.$refs.tree2.append(node, {
        label: `append-${~~(Math.random() * 10000)}`,
        id: 32
      })
    },
    remove (node) {
      this.$refs.tree2.remove(node)
    }
  }
}
</script>
