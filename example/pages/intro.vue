<template>
  <div>
    <guide title="关于 TUI" des="TUI 是一套针对后台管理系统的UI设计方案"/>
    <div class="demo-block">
      <div class="title">特性</div>
      <div class="sub-title">
        <p>功能丰富</p>
        <p>外观精致</p>
        <p>文档全面</p>
        <p>接口友好</p>
        <p>主题可定</p>
      </div>
    </div>

    <div class="demo-block with-code">
      <div class="title">NPM 安装</div>
      <div class="sub-title">
        npm install vtui
      </div>
    </div>

    <div class="demo-block with-code">
      <div class="title">标签引入</div>
      <div class="sub-title">
        <p>&lt;script src="tui.min.js" type="javascript">&lt;/script></p>
        <p>&lt;link src="tui.min.css" ref="stylesheet"></p>
      </div>
    </div>

    <div class="demo-block with-code">
      <div class="title">版本</div>
      <div class="sub-title">
        v1.0.0
      </div>
    </div>

    <div class="demo-block">
      <div class="title">兼容性</div>
      <div class="sub-title">
        <p>Vue.js 2.x</p>
        <p>浏览器: IE >= 9</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.with-code .sub-title{
  background-color: #f5f7fa;
  padding: 10px;
  line-height: 24px;
  color: #303030;
}
</style>
