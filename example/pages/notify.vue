<template>
  <div>
    <guide title="通知" des="用于重要消息提醒组件"/>
    <div class="demo-block">
      <div class="subtitle">不同坐标</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c1)">右上</t-button>
            <t-button type="primary" outline @click="open(c2)">左上</t-button>
            <t-button type="primary" outline @click="open(c3)">右下</t-button>
            <t-button type="primary" outline @click="open(c4)">右下</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">自动关闭</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c5)">1s</t-button>
            <t-button type="primary" outline @click="open(c6)">不关闭</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">带状态</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="success(c1)">success</t-button>
            <t-button type="primary" outline @click="info(c1)">info</t-button>
            <t-button type="primary" outline @click="warning(c1)">warning</t-button>
            <t-button type="primary" outline @click="danger(c1)">danger</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">详细信息</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="success(c7)">详细信息</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">隐藏关闭按钮</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="success(c8)">隐藏关闭按钮</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>

<script>
import RadioGroup from '../documents/radio/radioGroup.md'

export default {
  components: {
    RadioGroup
  },

  data () {
    return {
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
