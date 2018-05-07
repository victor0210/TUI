<template>
  <div>
    <guide title="Dialog 提示框" des="提示框用于提醒用户一些信息"/>
    <div class="demo-block">
      <div class="title">基础用法</div>
      <div class="sub-title">默认提示框</div>
      <div class="source">
        <t-button @click="show">打开提示框</t-button>
      </div>
      <dialog-normal/>
    </div>

    <div class="demo-block">
      <div class="title">展示底部</div>
      <div class="sub-title">底部会有确认按钮和取消按钮，可绑定对应事件，更多参数说明见网站底部配置文档</div>
      <div class="source">
        <t-button @click="showFooter">打开提示框</t-button>
      </div>
      <dialog-footer/>
    </div>

    <div class="demo-block">
      <div class="title">不同状态</div>
      <div class="sub-title">带有不同状态图标的提示框</div>
      <div class="source">
        <t-button type="success" @click="showSuccess">成功</t-button>
        <t-button type="info" @click="showInfo">信息</t-button>
        <t-button type="warning" @click="showWarning">警告</t-button>
        <t-button type="danger" @click="showDanger">危险</t-button>
      </div>
      <dialog-status/>
    </div>

    <div class="api-docs">
      <t-divider content="Global Dialog Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="dialogMethods">
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
import DialogNormal from '../documents/dialog/dialog-normal.md'
import DialogFooter from '../documents/dialog/dialog-footer.md'
import DialogStatus from '../documents/dialog/dialog-status.md'
export default {
  components: {
    DialogNormal,
    DialogFooter,
    DialogStatus
  },
  data () {
    return {
      dialogMethods: [
        {name: 'show', desc: '打开默认提示框', args: 'config（见下面参数表）', returnArgs: '—'},
        {name: 'success', desc: '打开成功提示框', args: 'config', returnArgs: '—'},
        {name: 'info', desc: '打开信息提示框', args: 'config', returnArgs: '—'},
        {name: 'warning', desc: '打开警告提示框', args: 'config', returnArgs: '—'},
        {name: 'danger', desc: '打开危险提示框', args: 'config', returnArgs: '—'},
        {name: 'hide', desc: '关闭消息', args: '—', returnArgs: '—'}
      ],
      configApis: [
        {name: 'icon', desc: '展示图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'iconColor', desc: '图标颜色', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '显示关闭按钮并且键盘"ESC"按钮可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'title', desc: '标题', type: 'String', choice: '—', default: 'title'},
        {name: 'content', desc: '主要内容', type: 'String', choice: '—', default: 'content'},
        {name: 'okText', desc: '确认按钮文案', type: 'String', choice: '—', default: 'ok'},
        {name: 'cancelText', desc: '取消按钮文案', type: 'String', choice: '—', default: 'cancel'},
        {name: 'top', desc: '提示框到顶部距离', type: 'Number', choice: '—', default: '120'},
        {name: 'width', desc: '提示框宽度', type: 'Number', choice: '—', default: '420'},
        {name: 'showFooter', desc: '显示底部', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  },
  methods: {
    show () {
      this.$TDialog.show({
        content: 'Welcome to TUI !'
      })
    },
    showFooter () {
      this.$TDialog.show({
        showFooter: true,
        content: 'Welcome to TUI !',
        onOk: () => {
          this.$TMessage.show({
            content: '点击了ok',
            type: 'info',
            showIcon: true
          })
        },
        onClose: () => {
          this.$TMessage.show({
            content: '点击了取消',
            type: 'warning',
            showIcon: true
          })
        }
      })
    },
    showSuccess () {
      this.$TDialog.success({
        showFooter: true
      })
    },
    showInfo () {
      this.$TDialog.info({
        showFooter: true
      })
    },
    showDanger () {
      this.$TDialog.danger({
        showFooter: true
      })
    },
    showWarning () {
      this.$TDialog.warning({
        showFooter: true
      })
    }
  }
}
</script>
