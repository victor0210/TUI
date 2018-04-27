<template>
    <div>
      <guide title="进度条" des="用于展示操作进度，告知用户当前状态和预期。"/>
      <div class="demo-block">
        <div class="subtitle">普通进度条</div>
        <div class="source">
          <t-row>
            <t-col>
              <t-progress/>
              <t-progress :percentage="35"/>
              <t-progress :percentage="70" status="success"/>
              <t-progress :percentage="100" bar-fill="#ffcc00"/>
            </t-col>
          </t-row>
        </div>
        <button-md></button-md>
      </div>

      <div class="demo-block">
        <div class="subtitle">内嵌进度</div>
        <div class="source">
          <t-row>
            <t-col>
              <t-progress :stroke-width="16" text-inside width="200px"/>
              <t-progress :percentage="35" :stroke-width="16" text-inside width="250px"/>
              <t-progress :percentage="70" :stroke-width="16" status="success" text-inside width="300px"/>
              <t-progress :percentage="100" :stroke-width="16" bar-fill="linear-gradient(to left, #ff9900, #ffcc00)" text-inside width="350px"/>
            </t-col>
          </t-row>
        </div>
        <button-md></button-md>
      </div>

      <div class="demo-block">
        <div class="subtitle">内嵌进度</div>
        <div class="source">
          <t-row>
            <t-col>
              <t-progress :percentage="40" :circle-size="200" :stroke-width="10" type="circle" :round="false"/>
              <t-progress :percentage="75" :circle-size="150" type="circle" status="success"/>
              <t-progress :percentage="100" :circle-size="120" type="circle" status="danger" percentage-color="orangered">
                <template slot-scope="scope">
                  {{ `进度:${scope.percentage}%` }}
                </template>
              </t-progress>
            </t-col>
          </t-row>
        </div>
        <button-md></button-md>
      </div>
    </div>
</template>

<script>
import ButtonMd from '../documents/button/button.md'
export default {
  components: {
    ButtonMd
  },
  data () {
    return {
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
