<template>
  <div>
    <t-modal :show="show">
      <span slot="header">
        modal
      </span>
    </t-modal>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModal">show modal</t-button>
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
      show: false
    }
  },
  methods: {
    showModal () {
      this.show = !this.show
    }
  }
}
</script>

<style></style>
