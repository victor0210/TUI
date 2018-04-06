<template>
  <div>
    <guide title="警告" des="用于一些警告信息的提示组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert title="默认文案提示文案"></t-alert></t-col>
          <t-col :span="24"><t-alert title="info 文案提示文案" type="info"></t-alert></t-col>
          <t-col :span="24"><t-alert title="warning 文案提示文案" type="warning"></t-alert></t-col>
          <t-col :span="24"><t-alert title="danger 文案提示文案" type="danger"></t-alert></t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">关闭</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert title="不可关闭的警告" :closeable="false"/></t-col>
          <t-col :span="24"><t-alert title="自定义 close-text" type="warning" closeText="关闭"/></t-col>
          <t-col :span="24"><t-alert title="设置回调" type="danger" @close="closeHandler"/></t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">提示图标</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert title="默认文案提示文案" show-icon/></t-col>
          <t-col :span="24"><t-alert title="info 文案提示文案" type="info" show-icon/></t-col>
          <t-col :span="24"><t-alert title="warning 文案提示文案" type="warning" show-icon/></t-col>
          <t-col :span="24"><t-alert title="danger 文案提示文案" type="danger" show-icon/></t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">消息居中</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert title="默认文案提示文案" show-icon text-center/></t-col>
          <t-col :span="24"><t-alert title="info 文案提示文案" type="info" show-icon text-center/></t-col>
          <t-col :span="24"><t-alert title="warning 文案提示文案" type="warning" show-icon text-center/></t-col>
          <t-col :span="24"><t-alert title="danger 文案提示文案" type="danger" show-icon text-center/></t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">辅助文案</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-alert title="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态....."/></t-col>
          <t-col :span="24" style="margin-top: 20px"><t-alert type="warning" title="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态，简直是大快国人之心....." text-center/></t-col>
          <t-col :span="24" style="margin-top: 20px"><t-alert type="info" title="国足世界杯赢得首胜" sub="在2888年世界杯小组赛中，中国队对阵巴西已 4 - 0 的比分赢取首胜，胡金宝上演帽子戏法，开场仅27分钟就连续打入三球让巴西队陷入懵逼状态....." text-center show-icon/></t-col>
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
  methods: {
    closeHandler () {
      console.log('close success')
    }
  }
}
</script>
