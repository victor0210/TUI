<template>
  <div>
    <guide title="消息组件" des="永远短暂的消息提醒组件"/>
    <div class="demo-block">
      <div class="subtitle">基本使用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c1)">success</t-button>
            <t-button type="primary" outline @click="open(c2)">success</t-button>
            <t-button type="primary" outline @click="open(c3)">success</t-button>
            <t-button type="primary" outline @click="open(c4)">success</t-button>
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
        position: 'top-right',
        duration: 0,
        title: '维护通知',
        sub: '系统将于2018年8月8日晚 00:00 - 02:00 进行维护，届时将不能登录，很抱歉给您造成不便!'
      },
      c2: {
        position: 'top-left'
      },
      c3: {
        position: 'bottom-right'
      },
      c4: {
        position: 'bottom-left'
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
