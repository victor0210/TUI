<template>
  <div>
    <t-modal :show="show" :top="100">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary">登录</t-button>
      </div>
    </t-modal>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModal">show Modal {{ count }}</t-button>
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
      show: false,
      count: 0
    }
  },
  methods: {
    showModal () {
      this.show = !this.show
      this.count++
    }
  }
}
</script>

<style></style>
