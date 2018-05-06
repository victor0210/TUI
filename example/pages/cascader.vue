<template>
  <div>
    <guide title="Cascader 级联下拉" des="用于输入的表单级联下拉组件"/>
    <div class="demo-block">
      <div class="title">普通用法</div>
      <div class="sub-title">组件支持键盘事件，打开下拉列表试试 <code>↑</code> 、 <code>↓</code> 、<code>←</code> 、<code>→</code> 、<code>enter</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op4" @change="changeHandler"/>
          </t-col>
        </t-row>
      </div>
      <cascader-normal/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的级联组件不可操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op2" disabled/>
          </t-col>
        </t-row>
      </div>
      <cascader-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">可清除</div>
      <div class="sub-title">清空当前所选值</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op3" clearable/>
          </t-col>
        </t-row>
      </div>
      <cascader-clearable/>
    </div>

    <div class="demo-block">
      <div class="title">只显示最后一级</div>
      <div class="sub-title">隐藏除了所选结果最后一级选项外的其余选项</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op3" only-last/>
          </t-col>
        </t-row>
      </div>
      <cascader-last/>
    </div>

    <div class="demo-block">
      <div class="title">可搜索</div>
      <div class="sub-title">通过匹配 <code>label</code> 可快速搜索当前选项列表中的值</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op3" searchable/>
          </t-col>
        </t-row>
      </div>
      <cascader-searchable/>
    </div>

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">TUI一共为您提供了四种按钮尺寸，分别是 <code>lg</code> 、<code>default</code> 、<code>sm</code> 、<code>mini</code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op1" size="lg"/>
          </t-col>
          <t-col :span="6">
            <t-cascader :options="option" v-model="op1"/>
          </t-col>
          <t-col :span="6">
            <t-cascader :options="option" v-model="op1" size="sm"/>
          </t-col>
          <t-col :span="6">
            <t-cascader :options="option" v-model="op1" size="mini"/>
          </t-col>
        </t-row>
      </div>
      <cascader-size/>
    </div>

    <div class="api-docs">
      <t-divider content="Cascader Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="cascaderApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Cascader Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="cascaderMethods">
          <t-table-column label="事件" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="参数" prop="params"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import cascaderNormal from '../documents/cascader/cascader-normal.md'
import cascaderDisabled from '../documents/cascader/cascader-disabled.md'
import cascaderClearable from '../documents/cascader/cascader-clearable.md'
import cascaderLast from '../documents/cascader/cascader-last.md'
import cascaderSearchable from '../documents/cascader/cascader-searchable.md'
import cascaderSize from '../documents/cascader/cascader-size.md'

export default {
  components: {
    cascaderNormal,
    cascaderDisabled,
    cascaderClearable,
    cascaderLast,
    cascaderSearchable,
    cascaderSize
  },
  methods: {
    changeHandler (val) {
      this.$TMessage.show({
        title: '选中值：' + val,
        type: 'info',
        duration: 1000
      })
    }
  },
  data () {
    return {
      op1: [''],
      op2: ['hp', '1000000', '1000000'],
      op3: ['hp', '1000000', '1000000'],
      op4: [''],
      option: [
        {
          label: '高价',
          val: 'hp',
          children: [
            {
              label: '1000000',
              val: '1000000',
              children: [
                {
                  label: '1000000',
                  val: '1000000'
                },
                {
                  label: '2000000',
                  val: '2000000'
                },
                {
                  label: '3000000',
                  val: '3000000'
                }
              ]
            },
            {
              label: '2000000',
              val: '2000000'
            },
            {
              label: '3000000',
              val: '3000000'
            }
          ]
        },
        {
          label: '低价',
          val: 'lp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'a价',
          val: 'ap',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'b价',
          val: 'bp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'c价',
          val: 'cp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'd价',
          val: 'dp',
          children: [
            {
              label: '1000000',
              val: '1000000',
              children: [
                {
                  label: '1000000',
                  val: '1000000'
                },
                {
                  label: '2000000',
                  val: '2000000'
                },
                {
                  label: '3000000',
                  val: '3000000'
                },
                {
                  label: '4000000',
                  val: '4000000'
                },
                {
                  label: '5000000',
                  val: '5000000'
                },
                {
                  label: '6000000',
                  val: '6000000'
                },
                {
                  label: '7000000',
                  val: '7000000'
                },
                {
                  label: '8000000',
                  val: '8000000'
                },
                {
                  label: '9000000',
                  val: '9000000'
                }
              ]
            }
          ]
        }
      ],
      cascaderApis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Array', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'size', desc: '按钮尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'width', desc: '宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '高度', type: 'Number', choice: '—', default: '—'},
        {name: 'only-last', desc: '只展示最后一集', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'clearable', desc: '是否能清除', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'editable', desc: '能否编辑', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'searchable', desc: '能否搜索', type: 'Boolean', choice: '—', default: 'false'}
      ],
      cascaderMethods: [
        {name: 'change', desc: '选项值变化时触发', params: 'value（当前值）'}
      ]
    }
  }
}
</script>

<style scoped>

</style>
