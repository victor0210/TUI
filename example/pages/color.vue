<template>
  <div>
    <guide title="Color 色彩" des="TUI 推荐您使用以下配色方案，致力让组件在页面的展示效果达到最佳。"/>

    <div class="demo-block without-code">
      <div class="title">主色</div>
      <div class="sub-title">TUI 推荐主色为清澈的蓝色</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <div class="color-panel" style="background-color: #34b5b8">
              <div class="main">主要 Primary</div>
              <div class="sub">#34b5b8</div>
            </div>
          </t-col>
        </t-row>
      </div>
    </div>

    <div class="demo-block without-code">
      <div class="title">辅助色</div>
      <div class="sub-title">除主色外的其他辅助配色，可根据不同的业务场景选择最恰当的颜色，如：成功（绿色）、信息（蓝灰色）、警告（黄色）、危险（红色）</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><div class="color-panel" style="background-color: #44c47d"><div class="main">成功 Success</div><div class="sub">#44c47d</div></div></t-col>
          <t-col :span="6"><div class="color-panel" style="background-color: #34495e"><div class="main">信息 Info</div><div class="sub">#34495e</div></div></t-col>
          <t-col :span="6"><div class="color-panel" style="background-color: #fab526"><div class="main">警告 Warning</div><div class="sub">#fab526</div></div></t-col>
          <t-col :span="6"><div class="color-panel" style="background-color: #f33816"><div class="main">危险 Danger</div><div class="sub">#f33816</div></div></t-col>
        </t-row>
      </div>
    </div>

    <div class="demo-block without-code">
      <div class="title">中性色</div>
      <div class="sub-title">为了更好的展示出文本、背景、边框、阴影的层次效果，提供了以下中性色</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><div class="color-panel" style="background-color: #303030"><div class="main">一级文本</div><div class="sub">#303030</div></div></t-col>
          <t-col :span="6"><div class="color-panel" style="background-color: #606060"><div class="main">二级文本</div><div class="sub">#606060</div></div></t-col>
          <t-col :span="6"><div class="color-panel" style="background-color: #909090"><div class="main">三级文本</div><div class="sub">#909090</div></div></t-col>
          <t-col :span="6"><div class="color-panel" style="background-color: #c0c0c0"><div class="main">四级文本</div><div class="sub">#C0C0C0</div></div></t-col>
        </t-row>
        <t-row :gutter="20">
          <t-col :span="6"><div class="color-panel info" style="background-color: #dfdfdf"><div class="main">一级边框</div><div class="sub">#DFDFDF</div></div></t-col>
          <t-col :span="6"><div class="color-panel info" style="background-color: #e3e3e3"><div class="main">二级边框</div><div class="sub">#E3E3E3</div></div></t-col>
          <t-col :span="6"><div class="color-panel info" style="background-color: #e6e6e6"><div class="main">三级边框</div><div class="sub">#E6E6E6</div></div></t-col>
          <t-col :span="6"><div class="color-panel info" style="background-color: #f4f5f6"><div class="main">四级边框</div><div class="sub">#F4F5F6</div></div></t-col>
        </t-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .color-panel {
    width: 100%;
    height: 80px;
    border-radius: 5px;
    font-weight: 300;
  }

  .color-panel .main {
    font-size: 15px;
    color: #fff;
    padding: 15px 20px;
  }

  .color-panel .sub {
    font-size: 12px;
    color: #f5f7fa;
    padding: 0 20px;
  }

  .color-panel.info .main,
  .color-panel.info .sub {
    color: #303030;
    font-weight: 400;
  }
</style>
