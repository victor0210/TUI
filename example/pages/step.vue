<template>
  <div>
    <guide title="Step 步骤条" des="引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="steps" :active="2"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>

<script>
  import RadioGroup from '../documents/radio/radioGroup.md'

  export default {
    components: {
      RadioGroup
    },

    data () {
      return {
        steps: [
          {
            title: '步骤1',
            desc: '很长的第一段描述文字...'
          },
          {
            title: '步骤2',
            desc: '很长的第一段描述文字...'
          },
          {
            title: '步骤3',
            desc: '没那么长了'
          }
        ]
      }
    }
  }
</script>

<style></style>
