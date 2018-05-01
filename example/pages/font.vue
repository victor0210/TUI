<template>
  <div id="font-docs">
    <guide title="Font 字体" des="TUI 进行了字体的统一设置，尽可能的保证组件在不同系统下的展示效果达到最佳。"/>

    <div class="demo-block without-code">
      <div class="title">中文字体</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <div class="font-panel">
              <div class="main" style="font-family: 'PingFang SC'">精忠报国</div>
              <div class="sub">PingFang SC</div>
            </div>
          </t-col>
          <t-col :span="6">
            <div class="font-panel">
              <div class="main" style="font-family: 'Hiragino Sans GB'">精忠报国</div>
              <div class="sub">Hiragino Sans GB</div>
            </div>
          </t-col>
          <t-col :span="6">
            <div class="font-panel">
              <div class="main" style="font-family: 'Microsoft YaHei'">精忠报国</div>
              <div class="sub">Microsoft YaHei</div>
            </div>
          </t-col>
        </t-row>
      </div>
    </div>

    <div class="demo-block without-code">
      <div class="title">英文字体</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <div class="font-panel">
              <div class="main" style="font-family: 'Helvetica Neue'">Loyalty</div>
              <div class="sub">Helvetica Neue</div>
            </div>
          </t-col>
          <t-col :span="6">
            <div class="font-panel">
              <div class="main" style="font-family: 'Helvetica'">Loyalty</div>
              <div class="sub">Helvetica</div>
            </div>
          </t-col>
          <t-col :span="6">
            <div class="font-panel">
              <div class="main" style="font-family: 'Arial'">Loyalty</div>
              <div class="sub">Arial</div>
            </div>
          </t-col>
        </t-row>
      </div>
    </div>

    <div class="demo-block without-code">
      <div class="title">Font-Family 代码</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <font-md/>
          </t-col>
        </t-row>
      </div>
    </div>

    <div class="api-docs">
      <div class="title">字体使用规范</div>
      <div class="source">
        <t-table :data="apis">
          <t-table-column label="字体展示">
            <template slot-scope="{row}">
              <span :style="{
                fontSize: row.size,
                fontWeight: row.weight,
                color: row.color
              }">欢迎使用 TUI</span>
            </template>
          </t-table-column>
          <t-table-column prop="name" label="描述"/>
          <t-table-column prop="weight" label="字粗"/>
          <t-table-column prop="size" label="字号"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import FontMd from '../documents/font/font.md'
export default {
  components: {
    FontMd
  },
  data () {
    return {
      apis: [
        {name: '一级标题', weight: 'bold', size: '23px', color: '#303030'},
        {name: '二级标题', weight: 'bold', size: '20px', color: '#303030'},
        {name: '三级标题', weight: 'bold', size: '18px', color: '#303030'},
        {name: '正文', weight: 'normal', size: '14px', color: '#606060'},
        {name: '帮助信息', weight: 'normal', size: '13px', color: '#909090'},
        {name: '失效文字', weight: 'normal', size: '13px', color: '#c0c0c0'}
      ]
    }
  }
}
</script>

<style scoped>
  .source {
    margin-top: 20px;
  }

  .font-panel {
    width: 100%;
    /*border-radius: 4px;*/
    text-align: center;
    border: 1px solid #e9e9e9;
    overflow: hidden;
    /*box-shadow: 0 0 10px 1px #e9e9e9;*/
  }

  .font-panel .main{
    color: #303030;
    font-size: 40px;
    font-weight: 400;
    line-height: 180px;
    box-shadow: 0 0 4px 1px #e9e9e9;
  }

  .font-panel .sub{
    color: #909090;
    font-size: 13px;
    line-height: 40px;
  }

</style>
