<template>
  <div>
    <guide title="Message 消息" des="用于短暂消息提醒的组件"/>
    <div class="demo-block">
      <div class="title">基本使用</div>
      <div class="sub-title">消息组件的基本使用，属性与 <code><router-link to="/components/alert">Alert</router-link></code> 组件相似</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c0)">default</t-button>
            <t-button @click="open(c1)">success</t-button>
            <t-button @click="open(c2)">info</t-button>
            <t-button @click="open(c3)">warning</t-button>
            <t-button @click="open(c4)">danger</t-button>
          </t-col>
        </t-row>
      </div>
      <message-normal/>
    </div>

    <div class="demo-block">
      <div class="title">可关闭</div>
      <div class="sub-title">显示关闭按钮的消息组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c5)">success</t-button>
            <t-button @click="open(c6)">info</t-button>
            <t-button @click="open(c7)">warning</t-button>
            <t-button @click="open(c8)">danger</t-button>
          </t-col>
        </t-row>
      </div>
      <message-closable/>
    </div>

    <div class="demo-block">
      <div class="title">文字居中</div>
      <div class="sub-title">文字居中显示的消息组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c11)">success</t-button>
          </t-col>
        </t-row>
      </div>
      <message-center/>
    </div>

    <div class="demo-block">
      <div class="title">辅助信息</div>
      <div class="sub-title">带有二级文案的消息组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c9)">success</t-button>
          </t-col>
        </t-row>
      </div>
      <message-sub/>
    </div>

    <div class="api-docs">
      <t-divider content="Global Message Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="messageMethods">
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
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import MessageNormal from '../documents/message/message-normal.md'
import MessageClosable from '../documents/message/message-closable.md'
import MessageCenter from '../documents/message/message-center.md'
import MessageSub from '../documents/message/message-sub.md'

export default {
  components: {
    MessageNormal,
    MessageClosable,
    MessageCenter,
    MessageSub
  },

  data () {
    return {
      messageMethods: [
        {name: 'show', desc: '打开消息', args: 'config（见下面参数表）', returnArgs: '—'},
        {name: 'hide', desc: '关闭消息', args: '—', returnArgs: '—'}
      ],
      configApis: [
        {name: 'duration', desc: '显示时间（0为永久显示）', type: 'Number', choice: '—', default: '3000（ms）'},
        {name: 'content', desc: '提示主文本', type: 'String/Number', choice: '—', default: 'Edit Message Here !!'},
        {name: 'sub', desc: '辅助文本', type: 'String/Number', choice: '—', default: '—'},
        {name: 'type', desc: '提示框类型', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'closeText', desc: '关闭文本', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '自定义图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '是否可关闭', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'showIcon', desc: '是否显示Icon', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'textCenter', desc: '文本居中', type: 'Boolean', choice: '—', default: 'false'}
      ],
      c0: {
        icon: 'fa fa-check',
        showIcon: true
      },
      c1: {
        type: 'success',
        showIcon: true
      },
      c2: {
        type: 'info',
        showIcon: true
      },
      c3: {
        type: 'warning',
        showIcon: true
      },
      c4: {
        type: 'danger',
        showIcon: true
      },
      c5: {
        type: 'success',
        showIcon: true,
        closable: true
      },
      c6: {
        type: 'info',
        showIcon: true,
        closable: true
      },
      c7: {
        type: 'warning',
        showIcon: true,
        closable: true
      },
      c8: {
        type: 'danger',
        showIcon: true,
        closable: true
      },
      c11: {
        type: 'info',
        showIcon: true,
        textCenter: true
      },
      c9: {
        content: '欢迎来到TUI',
        sub: 'there is the sub description',
        type: 'info'
      }
    }
  },

  methods: {
    open (opt) {
      this.$TMessage.show(opt)
    }
  }
}
</script>

<style></style>
