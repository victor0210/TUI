<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-switch v-model="s1"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-switch v-model="s2" active-text="开" inactive-text="关"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-switch v-model="s3" active-text="开" inactive-text="关" :width="100"/>
          </t-col>
          <t-col :span="12">
            <t-switch v-model="s3" active-text="开" inactive-text="关" :width="100" :height="80"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-switch v-model="s4" active-text="开" inactive-text="关" active-color="#ffcc00" active-value="active" inactive-value="inactive"/>
          </t-col>
        </t-row>
        {{ s4 }}
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
      s1: true,
      s2: '',
      s3: '',
      s4: ''
    }
  }
}
</script>

<style></style>
