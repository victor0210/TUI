<template>
  <div>
    <guide title="警告" des="用于一些警告信息的提示组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="show">show</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">定制样式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="show(c1)">show</t-button>
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
        contentBgColor: 'rgba(0,0,0, .3)',
        iconColor: '#fff',
        textColor: '#fff',
        maskBgColor: 'rgba(0,0,0,0)',
        width: 150,
        height: 120,
        iconClass: 'fa fa-spinner fa-pulse',
        text: '拼命加载中'
      }
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
