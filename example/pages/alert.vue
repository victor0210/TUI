<template>
  <div>
    <guide title="Alert 提示" des="用于一些提示信息展示的组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">不同状态的提示信息</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert content="默认提示文案"/></t-col>
          <t-col :span="24"><t-alert content="success 提示文案" type="success"/></t-col>
          <t-col :span="24"><t-alert content="info 提示文案" type="info"/></t-col>
          <t-col :span="24"><t-alert content="warning 提示文案" type="warning"/></t-col>
          <t-col :span="24"><t-alert content="danger 提示文案" type="danger"/></t-col>
        </t-row>
      </div>
      <alert-normal/>
    </div>

    <div class="demo-block">
      <div class="title">更多用法</div>
      <div class="sub-title">下面介绍更详尽的组件属性</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert content="不可关闭的警告" :closable="false"/></t-col>
          <t-col :span="24"><t-alert content="自定义 close-text" type="warning" closeText="关闭"/></t-col>
          <t-col :span="24"><t-alert content="设置回调" type="danger" @close="closeHandler"/></t-col>
        </t-row>
      </div>
      <alert-more/>
    </div>

    <div class="demo-block">
      <div class="title">提示图标</div>
      <div class="sub-title">带有图标的提示组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert content="自定义 Icon" icon="fa fa-question-circle" show-icon/></t-col>
          <t-col :span="24"><t-alert content="默认文案提示文案" type="success" show-icon/></t-col>
          <t-col :span="24"><t-alert content="info 文案提示文案" type="info" show-icon/></t-col>
          <t-col :span="24"><t-alert content="warning 文案提示文案" type="warning" show-icon/></t-col>
          <t-col :span="24"><t-alert content="danger 文案提示文案" type="danger" show-icon/></t-col>
        </t-row>
      </div>
      <alert-icon/>
    </div>

    <div class="demo-block">
      <div class="title">消息居中</div>
      <div class="sub-title">内容居中的提示组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert content="默认文案提示文案" show-icon text-center/></t-col>
          <t-col :span="24"><t-alert content="info 文案提示文案" type="info" show-icon text-center/></t-col>
          <t-col :span="24"><t-alert content="warning 文案提示文案" type="warning" show-icon text-center/></t-col>
          <t-col :span="24"><t-alert content="danger 文案提示文案" type="danger" show-icon text-center/></t-col>
        </t-row>
      </div>
      <alert-center/>
    </div>

    <div class="demo-block">
      <div class="title">辅助文案</div>
      <div class="sub-title">带有辅助文案的提示组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert content="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态....."/></t-col>
          <t-col :span="24" style="margin-top: 20px"><t-alert type="warning" content="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态，简直是大快国人之心....." text-center/></t-col>
          <t-col :span="24" style="margin-top: 20px"><t-alert type="info" content="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态....." text-center show-icon/></t-col>
        </t-row>
      </div>
      <alert-sub/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="alertApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="150"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="250"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import AlertNormal from '../documents/alert/alert-normal.md'
import AlertMore from '../documents/alert/alert-more.md'
import AlertIcon from '../documents/alert/alert-icon.md'
import AlertCenter from '../documents/alert/alert-center.md'
import AlertSub from '../documents/alert/alert-sub.md'

export default {
  components: {
    AlertNormal,
    AlertCenter,
    AlertIcon,
    AlertMore,
    AlertSub
  },
  methods: {
    closeHandler () {
      console.log('警告框被关闭')
    }
  },
  data () {
    return {
      alertApis: [
        {name: 'content', desc: '提示主文本', type: 'String', choice: '—', default: '—'},
        {name: 'sub', desc: '辅助文本', type: 'String', choice: '—', default: '—'},
        {name: 'type', desc: '提示框类型', type: 'String', choice: 'success/info/warning/danger', default: '—'},
        {name: 'closeText', desc: '关闭文本', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '自定义图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'closable', desc: '是否可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'showIcon', desc: '是否显示Icon', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'textCenter', desc: '文本居中', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>
