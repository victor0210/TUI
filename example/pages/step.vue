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

    <div class="demo-block">
      <div class="subtitle">居中步骤条</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="steps" :active="2" text-center/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">自定义icon</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="stepsWithIcon" :active="2"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">flex-basis</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="stepsWithIcon" :active="2" flex-basis="200px"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">状态色</div>
      <div class="source">
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="0"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="success"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="warning"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="danger"/></t-col></t-row>
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
          title: '步骤 1',
          desc: '很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字...',
          completeIcon: 'fa fa-check-circle'
        },
        {
          title: '步骤 2',
          desc: '很长的第一段描述文字很长的第一段描述文字...',
          completeIcon: 'fa fa-check-circle'
        },
        {
          title: '步骤 3',
          desc: '比较短了哈哈好'
        }
      ],
      stepsWithIcon: [
        {
          title: '步骤 1',
          desc: '很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字...',
          icon: 'fa fa-file',
        },
        {
          title: '步骤 2',
          desc: '很长的第一段描述文字很长的第一段描述文字...',
          icon: 'fa fa-cloud-upload-alt'
        },
        {
          title: '步骤 3',
          desc: '比较短了哈哈好',
          icon: 'fa fa-check-circle'
        }
      ]
    }
  }
}
</script>

<style></style>
