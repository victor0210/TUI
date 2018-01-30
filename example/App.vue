<template>
  <div id='app'>
    <t-layout class="frame">
      <t-header class="header">
        <t-head></t-head>
      </t-header>
      <t-layout flexDirection="row" class="container">
        <t-aside class="left-aside" width="250px">
          <left-aside></left-aside>
        </t-aside>
        <t-content>
          <router-view></router-view>
        </t-content>
        <t-aside class="right-aside" width="200px">
          <right-aside></right-aside>
        </t-aside>
      </t-layout>
      <t-footer>
        <t-foot></t-foot>
      </t-footer>
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

<style lang="scss" scoped>
  @import "styles/app";
</style>
