<template>
  <div id='app'>
    <t-back-top/>
    <t-layout flex-direction="vertical" class="frame">
      <t-row>
        <t-col :span="22" :offset="1">
          <t-header class="header" style="height: 53px;">
            <t-head></t-head>
            <div class="bottom-line"></div>
          </t-header>
          <t-layout flex-direction="row" class="container">
            <t-aside class="left-aside" width="250px">
              <left-aside></left-aside>
            </t-aside>
            <t-content class="main-content">
              <router-view></router-view>
            </t-content>
          </t-layout>
        </t-col>
      </t-row>
      <!--<t-footer>-->
        <!--<t-foot></t-foot>-->
      <!--</t-footer>-->
    </t-layout>
  </div>
</template>

<script>
import THead from './components/Header.vue'
import LeftAside from './components/LeftAside.vue'
import RightAside from './components/RightAside.vue'
import TFoot from './components/Footer.vue'

export default {
  components: {
    THead,
    LeftAside,
    RightAside,
    TFoot
  },
  name: 'App'
}
</script>

<style lang="scss">
  @import "../src/vendor/css/fontawesome.css";
  @import "../src/styles/index.scss";
</style>

<style lang="scss">
  @import "styles/app";
</style>
