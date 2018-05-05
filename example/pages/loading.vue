<template>
  <div>
    <guide title="Loading 加载" des="更好的用户加载等待提示"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">通过方法使用全局加载组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="show">开始加载</t-button>
          </t-col>
        </t-row>
      </div>
      <loading-normal/>
    </div>

    <div class="demo-block">
      <div class="title">定制样式</div>
      <div class="sub-title">自定义加载状态样式（TODO：全局配置统一样式）</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="show(c1)">show</t-button>
          </t-col>
        </t-row>
      </div>
      <loading-config/>
    </div>

    <div class="demo-block">
      <div class="title">使用指令</div>
      <div class="sub-title">使用 <code>v-t-loading</code> 指令更灵活的应用加载组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <div style="width: 300px; height: 300px; text-align:center; border: 1px solid #eee" v-t-loading="[loading1, c1]">
              <t-divider content="展示指令加载效果"/>
              <p> 我是任意元素，请在顶级容器上使用 </p>
              <p> v-t-loading </p>
            </div>
          </t-col>
          <t-col :span="24" style="margin-top: 20px">
            <t-button @click="loading1 = !loading1">切换加载状态</t-button>
          </t-col>
        </t-row>
      </div>
      <loading-directive/>
    </div>

    <div class="api-docs">
      <t-divider content="Global Loading Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="loadingMethods">
          <t-table-column label="方法" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="传入参数" prop="args"/>
          <t-table-column label="返回参数" prop="returnArgs"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Config Props" class="document-divider"/>
      <div class="source">
        <t-table :data="configApis">
          <t-table-column label="属性" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="类型" prop="type"/>
          <t-table-column label="可选值" prop="choice"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import LoadingNormal from '../documents/loading/loading-normal.md'
import LoadingConfig from '../documents/loading/loading-config.md'
import LoadingDirective from '../documents/loading/loading-directive.md'

export default {
  components: {
    LoadingNormal,
    LoadingConfig,
    LoadingDirective
  },

  data () {
    return {
      loadingMethods: [
        {name: 'show', desc: '开启加载', args: 'config（见下面参数表）', returnArgs: '—'},
        {name: 'hide', desc: '关闭加载', args: '—', returnArgs: '—'},
        {name: 'remove', desc: '清除全局唯一加载实例', args: '—', returnArgs: '—'}
      ],
      configApis: [
        {name: 'maskBgColor', desc: '遮罩层背景色', type: 'String', choice: '—', default: '—'},
        {name: 'contentBgColor', desc: '内容框背景色', type: 'String', choice: '—', default: '—'},
        {name: 'iconColor', desc: '加载图标颜色', type: 'String', choice: '—', default: '—'},
        {name: 'textColor', desc: '加载文本颜色', type: 'String', choice: '—', default: '—'},
        {name: 'text', desc: '加载文案', type: 'String', choice: '—', default: 'Loading ...'},
        {name: 'iconClass', desc: '加载图标类名', type: 'String', choice: '—', default: 'fa fa-circle-notch fa-spin'},
        {name: 'iconSize', desc: '图标尺寸', type: 'String', choice: '—', default: '—'},
        {name: 'textSize', desc: '文案尺寸', type: 'String', choice: '—', default: '—'},
        {name: 'width', desc: '内容框宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '内容框高度', type: 'Number', choice: '—', default: '—'}
      ],
      c1: {
        contentBgColor: 'rgba(0, 0, 0, .3)',
        iconColor: '#fff',
        textColor: '#fff',
        maskBgColor: 'rgba(0, 0, 0, 0)',
        width: 120,
        height: 100,
        iconClass: 'fa fa-circle-notch fa-spin',
        iconSize: '2em',
        text: '拼命加载中...'
      },
      loading1: false,
      loading2: false,
      data: [
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
        {name: 'name4', age: 'ag4', phone: 'phone4', role: 'role4', a: 'a4', b: 'b4', c: 'c4', d: 'd4'}
      ]
    }
  },

  methods: {
    show (o) {
      this.$TLoading.show(o)
      setTimeout(() => {
        this.$TLoading.hide()
      }, 3000)
    }
  }
}
</script>
