<template>
  <div>
    <guide title="Install 安装"/>
    <install-docs/>
    <div class="demo-block">
      <div class="title">npm 安装</div>
      <div class="code">
        npm install @bennnis/tui
      </div>
    </div>

    <div class="demo-block">
      <div class="title">标签引入</div>
      <div class="code">
        引入标签
      </div>
    </div>

    <div class="demo-block">
      <div class="title">版本</div>
      <div class="code">
        引入版本
      </div>
    </div>

    <div class="demo-block">
      <div class="title">兼容性</div>
      <div class="code">
        引入版本
      </div>
    </div>
  </div>
</template>

<script>
import InstallDocs from '../documents/install/install-docs.md'
export default {
  components: {
    InstallDocs
  },
  data () {
    return {}
  }
}
</script>

<style></style>
