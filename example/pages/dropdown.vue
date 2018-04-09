<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown @command="commandHandler">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1">link1</t-dropdown-item>
                <t-dropdown-item :command="2">link2</t-dropdown-item>
                <t-dropdown-item :command="3">link3</t-dropdown-item>
                <t-dropdown-item :command="4">link4</t-dropdown-item>
              </template>
            </t-dropdown>
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
  methods: {
    commandHandler (cmd) {
      this.$TMessage.show({
        title: `Command Is ${cmd}`,
        type: 'info',
        showIcon: true
      })
    }
  }
}
</script>

<style></style>
