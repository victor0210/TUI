<template>
    <div>
        <h2>Switch</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="24">
                    <t-switch type="cyan" size="lg"></t-switch>
                    <t-switch type="warning" size="lg"></t-switch>
                    <t-switch type="danger" size=""></t-switch>
                    <t-switch type="success" size=""></t-switch>
                    <t-switch type="info" size=""></t-switch>
                    <t-switch type="inverse" size="sm"></t-switch>
                    <t-switch size="sm"></t-switch>
                </t-col>
            </t-row>
        </div>
        <switchMd></switchMd>
        <h2>Switch model</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="24">
                    <t-switch v-model="state"></t-switch>
                    <span class="state">{{ state }}</span>
                </t-col>
            </t-row>
        </div>
        <switch-model></switch-model>
        <h2>Switch text/icon</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="24">
                    <t-switch checkedChildren="开" unCheckedChildren="关"></t-switch>
                    <t-switch checkedChildren="1" unCheckedChildren="0"></t-switch>
                    <t-switch checkedChildren="√" unCheckedChildren="×"></t-switch>
                </t-col>
            </t-row>
        </div>
        <switch-text></switch-text>
    </div>
</template>
<script>
import switchMd from '../documents/switch/switch.md'
import switchModel from '../documents/switch/switchModel.md'
import switchText from '../documents/switch/switchText.md'
export default {
  data () {
    return {
      state: true
    }
  },
  components: {
    switchMd,
    switchModel,
    switchText}
}
</script>
<style lang="scss">
    .t-switch{
        float: left;
        margin-right: 15px;
    }
    .state{
        line-height: 22px;
    }
</style>
