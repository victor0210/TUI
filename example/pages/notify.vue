<template>
  <div>
    <guide title="Notify 通知" des="用于重要消息提醒组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">不同坐标</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c1)">右上</t-button>
            <t-button @click="open(c2)">左上</t-button>
            <t-button @click="open(c3)">右下</t-button>
            <t-button @click="open(c4)">左下</t-button>
          </t-col>
        </t-row>
      </div>
      <notify-normal/>
    </div>

    <div class="demo-block">
      <div class="title">显示时间</div>
      <div class="sub-title">不同显示时间的消息</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c5)">1s</t-button>
            <t-button @click="open(c6)">不关闭</t-button>
          </t-col>
        </t-row>
      </div>
      <notify-duration/>
    </div>

    <div class="demo-block">
      <div class="title">带状态</div>
      <div class="sub-title">带有状态Icon的通知</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="open(c9)">default</t-button>
            <t-button @click="success(c1)">success</t-button>
            <t-button @click="info(c1)">info</t-button>
            <t-button @click="warning(c1)">warning</t-button>
            <t-button @click="danger(c1)">danger</t-button>
          </t-col>
        </t-row>
      </div>
      <notify-status/>
    </div>

    <div class="demo-block">
      <div class="title">详细信息</div>
      <div class="sub-title">带有详细信息的通知</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="success(c7)">详细信息</t-button>
          </t-col>
        </t-row>
      </div>
      <notify-sub/>
    </div>

    <div class="demo-block">
      <div class="title">隐藏关闭按钮</div>
      <div class="sub-title">不显示关闭按钮的通知</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="success(c8)">隐藏关闭按钮</t-button>
          </t-col>
        </t-row>
      </div>
      <notify-close/>
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
import NotifyNormal from '../documents/notify/notify-normal.md'
import NotifyDuration from '../documents/notify/notify-duration.md'
import NotifyClose from '../documents/notify/notify-close.md'
import NotifyStatus from '../documents/notify/notify-status.md'
import NotifySub from '../documents/notify/notify-sub.md'

export default {
  components: {
    NotifyNormal,
    NotifyClose,
    NotifyDuration,
    NotifyStatus,
    NotifySub
  },

  data () {
    return {
      messageMethods: [
        {name: 'show', desc: '打开通知', args: 'config（见下面参数表）', returnArgs: '—'},
        {name: 'success', desc: '打开成功状态通知', args: 'config', returnArgs: '—'},
        {name: 'info', desc: '打开成功状态通知', args: 'config', returnArgs: '—'},
        {name: 'warning', desc: '打开成功状态通知', args: 'config', returnArgs: '—'},
        {name: 'danger', desc: '打开成功状态通知', args: 'config', returnArgs: '—'}
      ],
      configApis: [
        {name: 'duration', desc: '显示时间（0为永久显示）', type: 'Number', choice: '—', default: '3000（ms）'},
        {name: 'title', desc: '提示主文本', type: 'String/Number', choice: '—', default: 'Please Edit Title'},
        {name: 'sub', desc: '辅助文本', type: 'String/Number', choice: '—', default: '—'},
        {name: 'type', desc: '提示框类型', type: 'String', choice: 'success / info / warning / danger', default: '—'},
        {name: 'position', desc: '通知出现位置', type: 'String', choice: 'top-right / top-left / bottom-right / bottom-left', default: 'top-right'},
        {name: 'icon', desc: '自定义图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'iconColor', desc: '图标颜色', type: 'String', choice: '—', default: '#5285f4'},
        {name: 'titleColor', desc: '标题颜色', type: 'String', choice: '—', default: '—'},
        {name: 'subColor', desc: '主要内容颜色', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '是否可关闭', type: 'Boolean', choice: '—', default: 'true'}
      ],
      c1: {
        title: '维护通知'
      },
      c2: {
        position: 'top-left',
        title: '维护通知'
      },
      c3: {
        position: 'bottom-right',
        title: '维护通知'
      },
      c4: {
        position: 'bottom-left',
        title: '维护通知'
      },
      c5: {
        title: '维护通知',
        duration: 1000
      },
      c6: {
        title: '维护通知',
        duration: 0
      },
      c7: {
        title: '维护通知',
        sub: '系统将于2018年8月8日晚 00:00 - 02:00 进行维护，届时将不能登录，很抱歉给您造成不便!'
      },
      c8: {
        closable: false,
        title: '维护通知',
        sub: '系统将于2018年8月8日晚 00:00 - 02:00 进行维护，届时将不能登录，很抱歉给您造成不便!'
      },
      c9: {
        title: '自定义图标',
        icon: 'fa fa-check',
        iconColor: '#5285f4'
      }
    }
  },

  methods: {
    open (opt) {
      this.$TNotify.show(opt)
    },
    success (opt) {
      this.$TNotify.success(opt)
    },
    info (opt) {
      this.$TNotify.info(opt)
    },
    warning (opt) {
      this.$TNotify.warning(opt)
    },
    danger (opt) {
      this.$TNotify.danger(opt)
    }
  }
}
</script>

<style></style>
