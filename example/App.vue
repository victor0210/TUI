<template>
  <div id='app'>
    <t-layout class="frame">
      <!--头部-->
      <t-header class="header">
        <t-head></t-head>
      </t-header>
      <!--中间部分-->
      <t-layout flexDirection="row" class="container">
        <!--左边侧边栏-->
        <t-aside class="left-aside">
          <left-aside></left-aside>
        </t-aside>
        <!--内容部分-->
        <t-content>
          <router-view></router-view>
        </t-content>
        <!--右边侧边栏部分-->
        <t-aside class="right-aside">
          <right-aside></right-aside>
        </t-aside>
      </t-layout>
      <!--底部内容-->
      <t-footer>
        <t-foot></t-foot>
      </t-footer>
    </t-layout>
  </div>
</template>

<script>
import TLayout from '../src/components/layout/layout.vue'
import THead from './components/Header.vue'
import LeftAside from './components/LeftAside.vue'
import RightAside from './components/RightAside.vue'
import TFoot from './components/Footer.vue'

export default {
  components: {
    TLayout,
    THead,
    LeftAside,
    RightAside,
    TFoot},
  name: 'App'
}
</script>

<style lang="scss">
  @import "../src/vendor/css/fontawesome.css";
  @import "../src/styles/common.scss";
  @import "../src/styles/index.scss";

  .frame{
    .header{
      background-color: #ffffff ;
      box-shadow: 0 2px 8px #f0f1f2;
      margin-bottom: 5px;
    }
    .container{
      box-shadow: 0 2px 8px #f0f1f2;
      margin-bottom: 5px;
      background-color: #ffffff;
      .left-aside{
        background-color: #ffffff;
      }
      .t-content{
        overflow: inherit;
      }
      .right-aside{
        height: auto;
        width: 200px !important;
        background-color: #ffffff;
      }
    }
    .t-footer{
      height: auto !important;
      background-color: #ffffff;
    }
  }
</style>
