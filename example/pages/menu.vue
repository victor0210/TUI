<template>
  <div>
    <guide title="导航菜单" des="用于显示网站菜单的导航组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-menu :data="menu"/>
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
      menu: [
        {name: '首页'},
        {name: '下载'},
        {name: '帮助'},
        {name: '个人中心'}
      ]
    }
  }
}
</script>

<style></style>
