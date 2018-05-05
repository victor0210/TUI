<template>
  <div>
    <guide title="Pagination 分页组件" des="用于分页展示数据"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">分页组件的最基本用法</div>
      <div class="source">
        <div class="half">
          <t-divider content="小于7页" content-align="left"/>
          <t-pagination :total="50"/>
        </div>
        <div class="half">
          <t-divider content="大于7页" content-align="left"/>
          <t-pagination :total="120"/>
        </div>
      </div>
      <pagination-normal/>
    </div>

    <div class="demo-block">
      <div class="title">详细参数</div>
      <div class="sub-title">分页组件的详细用法</div>
      <div class="source">
        <t-pagination
          :total="1000"
          :per-page="20"
          :current-page="3"
          :sizes="sizes"
          :size-change="sizeChange"
          :current-change="currentChange"
          layout="pager, size"
        />
      </div>
      <pagination-desc/>
    </div>

    <div class="demo-block">
      <div class="title">不同布局</div>
      <div class="sub-title">根据传入layout动态渲染组件单元</div>
      <div class="source">
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
      </div>
      <pagination-layout/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="paginationApis">
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
import PaginationNormal from '../documents/pagination/pagination-normal.md'
import PaginationDesc from '../documents/pagination/pagination-desc.md'
import PaginationLayout from '../documents/pagination/pagination-layout.md'

export default {
  components: {
    PaginationNormal,
    PaginationDesc,
    PaginationLayout
  },

  data () {
    return {
      sizes: [100, 200, 300, 400],
      paginationApis: [
        {name: 'total', desc: '分页总数（必填）', type: 'Number', choice: '—', default: '—'},
        {name: 'per-page', desc: '每页数量', type: 'Number', choice: '—', default: '10'},
        {name: 'current-page', desc: '当且页数', type: 'Number', choice: '—', default: '1'},
        {name: 'sizes', desc: '可选每页尺寸', type: 'Array', choice: '—', default: '—'},
        {name: 'size-change', desc: '页尺寸变化回调', type: 'Function', choice: '—', default: '—'},
        {name: 'current-change', desc: '页数变化回调', type: 'Function', choice: '—', default: '—'},
        {name: 'layout', desc: '布局', type: 'String', choice: 'total/size/pager/jumper', default: 'pager'}
      ]
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
