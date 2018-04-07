<template>
  <div>
    <guide title="消息组件" des="永远短暂的消息提醒组件"/>
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
  </div>
</template>

<script>
import RadioGroup from '../documents/radio/radioGroup.md'
// duration: 0,
//   sub: '系统将于2018年8月8日晚 00:00 - 02:00 进行维护，届时将不能登录，很抱歉给您造成不便!'
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
      }
    }
  },

  methods: {
    open (opt) {
      this.$TNotify.show(opt)
    }
  }
}
</script>

<style></style>
