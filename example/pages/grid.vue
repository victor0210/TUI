<template>
  <div>
    <guide title="Grid 栅格布局" des="使用Grid可以快速构建响应式栅格系统，进行页面的快速布局"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">使用同样占比均分行布局</div>
      <div class="source">
        <t-row>
          <t-col :span="24"><div class="grid-content bg-primary"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="12"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="12"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>
        <t-row>
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>
      </div>
      <grid-normal/>
    </div>

    <div class="demo-block">
      <div class="title">分块间隔</div>
      <div class="sub-title">同行单位分块间带有间隔空隙</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>

        <t-row :gutter="40">
          <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
      </div>
      <grid-gutter/>
    </div>

    <div class="demo-block">
      <div class="title">混合布局</div>
      <div class="sub-title">使用任意占比填满整行布局</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="2"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>

        <t-row :gutter="20">
          <t-col :span="14"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>

        <t-row :gutter="20">
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="16"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
      </div>
      <grid-mix/>
    </div>

    <div class="demo-block">
      <div class="title">对齐方式</div>
      <div class="sub-title">通过 flex 布局来对分栏进行灵活的对齐</div>
      <div class="source">
        <t-row type="flex" class="row-bg">
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
        <t-row type="flex" class="row-bg" justify="center">
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
        <t-row type="flex" class="row-bg" justify="end">
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
        <t-row type="flex" class="row-bg" justify="space-between">
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
        <t-row type="flex" class="row-bg" justify="space-around">
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
      </div>
      <grid-flex/>
    </div>

    <div class="demo-block">
      <div class="title">区块偏移</div>
      <div class="sub-title">使用区块偏移来进行较为复杂的页面栅格布局</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="4" :offset="4"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="4" :offset="4"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>
        <t-row :gutter="20">
          <t-col :span="6" :offset="4"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :span="4" :offset="4"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
        <t-row :gutter="20">
          <t-col :span="12" :offset="6"><div class="grid-content bg-primary-light"></div></t-col>
        </t-row>
      </div>
      <grid-offset/>
    </div>

    <div class="demo-block">
      <div class="title">响应式布局</div>
      <div class="sub-title">参照了 Bootstrap 的响应式设计</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :xs="24" :sm="12" :md="6" :lg="4" :xl="2" style="margin-bottom: 10px"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :xs="24" :sm="12" :md="6" :lg="8" :xl="10" style="margin-bottom: 10px"><div class="grid-content bg-primary-lighter"></div></t-col>
          <t-col :xs="24" :sm="12" :md="6" :lg="8" :xl="10" style="margin-bottom: 10px"><div class="grid-content bg-primary-light"></div></t-col>
          <t-col :xs="24" :sm="12" :md="6" :lg="4" :xl="2" style="margin-bottom: 10px"><div class="grid-content bg-primary-lighter"></div></t-col>
        </t-row>
      </div>
      <grid-responsive/>
    </div>

    <div class="api-docs">
      <t-divider content="Row Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="rowApis">
          <t-table-column label="属性" prop="name" :width="80"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="120"/>
          <t-table-column label="可选值" prop="choice" :width="320"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Col Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="colApis">
          <t-table-column label="属性" prop="name" :width="80"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="300"/>
          <t-table-column label="可选值" prop="choice" :width="120"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import GridNormal from '../documents/grid/gridNormal.md'
import GridGutter from '../documents/grid/gridGutter.md'
import GridMix from '../documents/grid/gridMix.md'
import GridOffset from '../documents/grid/gridOffset.md'
import GridFlex from '../documents/grid/gridFlex.md'
import GridResponsive from '../documents/grid/gridResponsive.md'
export default {
  components: {
    GridNormal,
    GridGutter,
    GridMix,
    GridOffset,
    GridFlex,
    GridResponsive,
  },

  data () {
    return {
      rowApis: [
        {name: 'gutter', desc: '栅格间隔', type: 'Number', choice: '—', default: '0'},
        {name: 'type', desc: '布局模式', type: 'String', choice: 'flex', default: '—'},
        {name: 'justify', desc: 'flex 布局下的水平排列方式', type: 'String', choice: 'start/end/center/space-around/space-between', default: 'start'},
        {name: 'align', desc: 'flex 布局下的垂直排列方式', type: 'String', choice: 'top/middle/bottom', default: 'top'},
        {name: 'tag', desc: '自定义元素标签', type: 'String', choice: '*', default: 'div'}
      ],
      colApis: [
        {name: 'span', desc: '栅格占据的列数', type: 'Number', choice: '—', default: '24'},
        {name: 'offset', desc: '栅格偏移的猎术', type: 'Number', choice: '—', default: '0'},
        {name: 'push', desc: '栅格向右移动格数', type: 'Number', choice: '—', default: '0'},
        {name: 'pull', desc: '栅格向左移动格数', type: 'Number', choice: '—', default: '0'},
        {name: 'xs', desc: '<768px 响应式栅格数', type: 'Number/Object (例： {span: 4, offset: 4})', choice: '—', default: '—'},
        {name: 'sm', desc: '≥768px 响应式栅格数', type: 'Number/Object (例： {span: 4, offset: 4})', choice: '—', default: '—'},
        {name: 'md', desc: '≥992px 响应式栅格数', type: 'Number/Object (例： {span: 4, offset: 4})', choice: '—', default: '—'},
        {name: 'lg', desc: '≥1200px 响应式栅格数', type: 'Number/Object (例： {span: 4, offset: 4})', choice: '—', default: '—'},
        {name: 'xl', desc: '≥1920px 响应式栅格数', type: 'Number/Object (例： {span: 4, offset: 4})', choice: '—', default: '—'},
        {name: 'tag', desc: '自定义元素标签', type: 'String', choice: '*', default: 'div'},
      ]
    }
  }
}
</script>
