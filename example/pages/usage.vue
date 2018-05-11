<template>
  <div>
    <guide title="Usage 快读上手" des="下边将介绍如何在项目中快速使用TUI"/>

    <div class="demo-block with-code">
      <div class="title">1. NPM 安装</div>
      <div class="sub-title">
        npm install vtui
      </div>
    </div>

    <div class="demo-block with-code">
      <div class="title">2. 在入口文件引入</div>
      <usage-import/>
    </div>

    <div class="demo-block with-code">
      <div class="title">3. 在项目中使用</div>
      <usage-project/>
    </div>
  </div>
</template>

<script>
import usageImport from '../documents/usage/usage-normal.md'
import usageProject from '../documents/usage/usage-project.md'
export default {
  components: {
    usageImport,
    usageProject
  }
}
</script>
