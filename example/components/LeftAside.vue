<template>
  <ul class="aside-item">
    <li class="t-menu-item">
      <a href="#">
        <span>安装</span>
      </a>
    </li>
    <li class="t-menu-item">
      <a href="#">
        <span>快速上手</span>
      </a>
    </li>
    <li class="t-menu-item">
      <a href="#">
        <span>概览</span>
      </a>
    </li>
    <li class="t-menu-item">
      <a href="#">
        <span>定制主题</span>
      </a>
    </li>
    <li class="t-menu-item">
      <a href="#">
        <span>更新日志</span>
      </a>
    </li>
    <div class="navigate-group">组件</div>
    <!--基础组件-->
    <li class="t-menu-item-group">
      <div class="t-menu-item-title">
        Basic
      </div>
      <ul class="t-menu-item-list">
        <li>
          <router-link to="/button">
            <span>Button</span>
            <span class="chinese">按钮</span>
          </router-link>
        </li>
        <li>
          <router-link to="/dialog">
            <span>Dialog</span>
            <span class="chinese">提示框</span>
          </router-link>
        </li>
        <li>
          <router-link to="/layout">
            <span>Layout</span>
            <span class="chinese">栅格</span>
          </router-link>
        </li>
      </ul>
    </li>
    <!--表单组件-->
    <li class="t-menu-item-group">
      <div class="t-menu-item-title">
        Form
      </div>
      <ul class="t-menu-item-list">
        <li>
          <router-link to="/input">
            <span>Input</span>
            <span class="chinese">输入框</span>
          </router-link>
        </li>
        <li>
          <router-link to="/input-number">
            <span>InputNumber</span>
            <span class="chinese">计数器</span>
          </router-link>
        </li>
        <li>
          <router-link to="/checkbox">
            <span>CheckBox</span>
            <span class="chinese">多选框</span>
          </router-link>
        </li>
        <li>
          <router-link to="/radio">
            <span>Radio</span>
            <span class="chinese">单选框</span>
          </router-link>
        </li>
        <li>
          <router-link to="/select">
            <span>Select</span>
            <span class="chinese">下拉框</span>
          </router-link>
        </li>
        <li>
          <router-link to="/cascader">
            <span>Cascader</span>
            <span class="chinese">级联</span>
          </router-link>
        </li>
        <li>
          <router-link to="/datepicker">
            <span>Datepicker</span>
            <span class="chinese">日期选择器</span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped="">
  @import "../styles/leftAside";
</style>
