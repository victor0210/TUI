<template>
  <div>
    <guide title="Step 步骤条" des="引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">最基本的步骤条使用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="steps" :active="2" vertical/>
          </t-col>
        </t-row>
      </div>
      <step-normal/>
    </div>

    <div class="demo-block">
      <div class="title">居中步骤条</div>
      <div class="sub-title">内容居中显示的步骤条</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="steps" :active="2" text-center/>
          </t-col>
        </t-row>
      </div>
      <step-center/>
    </div>

    <div class="demo-block">
      <div class="title">自定义图标</div>
      <div class="sub-title">每个步骤自定义步骤图标</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="stepsWithIcon" :active="2"/>
          </t-col>
        </t-row>
      </div>
      <step-icon/>
    </div>

    <div class="demo-block">
      <div class="title">区域宽度</div>
      <div class="sub-title">设置每个步骤内容的宽度</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-step :steps="stepsWithIcon" :active="2" flex-basis="200px"/>
          </t-col>
        </t-row>
      </div>
      <step-width/>
    </div>

    <div class="demo-block">
      <div class="title">状态色</div>
      <div class="sub-title">带有特性状态色的步骤条</div>
      <div class="source">
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="info"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="success"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="warning"/></t-col></t-row>
        <t-row :gutter="20" style="margin-bottom: 20px"><t-col :span="24"><t-step :steps="steps" :active="2" status="danger"/></t-col></t-row>
      </div>
      <step-status/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="stepApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="250"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Config Props" class="document-divider"/>
      <div class="source">
        <t-table :data="configApis">
          <t-table-column label="属性" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="类型" prop="type"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import StepNormal from '../documents/step/step-normal.md'
import StepCenter from '../documents/step/step-center.md'
import StepIcon from '../documents/step/step-icon.md'
import StepWidth from '../documents/step/step-width.md'
import StepStatus from '../documents/step/step-status.md'

export default {
  components: {
    StepNormal,
    StepCenter,
    StepIcon,
    StepWidth,
    StepStatus
  },

  data () {
    return {
      stepApis: [
        {name: 'steps', desc: '步骤内容（配置参数见下表）', type: 'Array', choice: '—', default: '/'},
        {name: 'active', desc: '当前进度数', type: 'Number', choice: '—', default: '—'},
        {name: 'flex-basis', desc: '进度条宽度', type: 'String', choice: '—', default: '—'},
        {name: 'status', desc: '进度条状态', type: 'String', choice: 'info/success/warning/danger', default: '—'},
        {name: 'text-center', desc: '内容居中', type: 'Boolean', choice: '—', default: 'false'}
      ],
      configApis: [
        {name: 'title', desc: '步骤标题', type: 'String', choice: '—', default: '—'},
        {name: 'desc', desc: '步骤主内容', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '步骤icon类名', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '步骤完成状态icon类名', type: 'String', choice: '—', default: '—'}
      ],
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
          desc: '比较短了哈哈'
        }
      ],
      stepsWithIcon: [
        {
          title: '步骤 1',
          desc: '很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字...',
          icon: 'fa fa-file'
        },
        {
          title: '步骤 2',
          desc: '很长的第一段描述文字很长的第一段描述文字...',
          icon: 'fa fa-cloud-upload-alt'
        },
        {
          title: '步骤 3',
          desc: '比较短了哈哈',
          icon: 'fa fa-check-circle'
        }
      ]
    }
  }
}
</script>

<style></style>
