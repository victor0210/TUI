<template>
  <div>
    <guide title="Progress 进度条" des="用于展示操作进度，告知用户当前状态和预期。"/>
    <div class="demo-block">
      <div class="title">普通进度条</div>
      <div class="sub-title">进度条的基本用法</div>
      <div class="source">
        <t-row>
          <t-col>
            <t-progress/>
            <t-progress :percentage="25"/>
            <t-progress :percentage="50" status="success"/>
            <t-progress :percentage="75" bar-fill="#ffcc00"/>
            <t-progress :percentage="100" bar-fill="linear-gradient(to left, #ff9900, #ffcc00)"/>
          </t-col>
        </t-row>
      </div>
      <progress-normal/>
    </div>

    <div class="demo-block">
      <div class="title">内嵌进度</div>
      <div class="sub-title">进度在内部显示</div>
      <div class="source">
        <t-row>
          <t-col>
            <t-progress :stroke-width="16" text-inside width="200px"/>
            <t-progress :percentage="50" :stroke-width="16" text-inside width="250px"/>
            <t-progress :percentage="100" :stroke-width="16" status="success" text-inside width="300px"/>
          </t-col>
        </t-row>
      </div>
      <progress-inner/>
    </div>

    <div class="demo-block">
      <div class="title">进度环</div>
      <div class="sub-title">环形的进度条，可自定义内部显示内容</div>
      <div class="source">
        <t-row>
          <t-col>
            <t-progress :percentage="100" :circle-size="200" type="circle" status="success">
              <template slot-scope="scope">
                <p>达标状态：<i class="fa fa-check-circle" style="color: #2ed573"></i></p>
                <p>完成率：{{ `${scope.percentage}%` }}</p>
                <p>超标：30%</p>
              </template>
            </t-progress>
            <t-progress :percentage="40" :circle-size="160" :stroke-width="10" type="circle" :round="false"/>
            <t-progress :percentage="75" :circle-size="130" type="circle" status="danger"/>
            <t-progress :percentage="100" :circle-size="100" type="circle" status="success">
              <template slot-scope="scope">
                <i class="fa fa-check fa-2x" style="color: #2ed573; width: 100%;height: 100%;display: inline-block;text-align: center;line-height: 50px"></i>
              </template>
            </t-progress>
          </t-col>
        </t-row>
      </div>
      <progress-circle/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="progressApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="200"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressNormal from '../documents/progress/progress-normal.md'
import ProgressInner from '../documents/progress/progress-inner.md'
import ProgressCircle from '../documents/progress/progress-circle.md'
export default {
  components: {
    ProgressNormal,
    ProgressInner,
    ProgressCircle
  },

  data () {
    return {
      progressApis: [
        {name: 'type', desc: '进度条样式', type: 'String', choice: 'line/circle', default: 'line'},
        {name: 'width', desc: 'line样式下进度条宽度', type: 'String', choice: '—', default: '100%'},
        {name: 'stroke-width', desc: '进度条宽度', type: 'Number', choice: '—', default: '6'},
        {name: 'status', desc: '进度条状态', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'bar-fill', desc: '进度条颜色', type: 'String', choice: '—', default: '—'},
        {name: 'percentage-color', desc: '进度数字颜色', type: 'String', choice: '—', default: '—'},
        {name: 'percentage', desc: '进度数', type: 'Number', choice: '—', default: '0'},
        {name: 'circle-size', desc: 'circle样式下进度条宽度', type: 'Number', choice: '—', default: '200'},
        {name: 'text-inside', desc: '内部显示进度', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'round', desc: '进度条弧边', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'hide-percentage', desc: '隐藏进度数', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>

<style scoped>
  .t-progress {
    margin-bottom: 10px;
  }

  .t-progress.is-circle {
    margin-right: 50px;
  }
</style>
