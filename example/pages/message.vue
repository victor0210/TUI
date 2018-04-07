<template>
  <div>
    <guide title="消息组件" des="永远短暂的消息提醒组件"/>
    <div class="demo-block">
      <div class="subtitle">基本使用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c1)">success</t-button>
            <t-button type="primary" outline @click="open(c2)">info</t-button>
            <t-button type="primary" outline @click="open(c3)">warning</t-button>
            <t-button type="primary" outline @click="open(c4)">danger</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可关闭</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c5)">success</t-button>
            <t-button type="primary" outline @click="open(c6)">info</t-button>
            <t-button type="primary" outline @click="open(c7)">warning</t-button>
            <t-button type="primary" outline @click="open(c8)">danger</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">文字居中</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c11)">success</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">二级文案</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button type="primary" outline @click="open(c9)">success</t-button>
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
        title: '欢迎来到TUI',
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
