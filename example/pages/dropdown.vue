<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
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

    <div class="demo-block">
      <div class="subtitle">Item样式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown @command="commandHandler">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">下拉宽度</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown @command="commandHandler" :width="0">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
          <t-col :span="8">
            <t-dropdown @command="commandHandler" :width="200">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">下拉高度</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown @command="commandHandler">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4">深圳</t-dropdown-item>
                <t-dropdown-item :command="5">杭州</t-dropdown-item>
                <t-dropdown-item :command="6">西安</t-dropdown-item>
                <t-dropdown-item :command="7">兰州</t-dropdown-item>
                <t-dropdown-item :command="8" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
          <t-col :span="8">
            <t-dropdown @command="commandHandler" :max-height="300">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4">深圳</t-dropdown-item>
                <t-dropdown-item :command="5">杭州</t-dropdown-item>
                <t-dropdown-item :command="6">西安</t-dropdown-item>
                <t-dropdown-item :command="7">兰州</t-dropdown-item>
                <t-dropdown-item :command="8" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">触发方式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown @command="commandHandler" trigger="click">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Click</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
          <t-col :span="8">
            <t-dropdown @command="commandHandler">
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Hover</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4" divided>成都</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">点击关闭</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown @command="commandHandler" hide-on-click>
              <t-button type="primary" icon="fa fa-caret-down" icon-right>Dropdown</t-button>
              <template slot="dropdown">
                <t-dropdown-item :command="1" disabled>北京</t-dropdown-item>
                <t-dropdown-item :command="2">上海</t-dropdown-item>
                <t-dropdown-item :command="3">广州</t-dropdown-item>
                <t-dropdown-item :command="4" divided>成都</t-dropdown-item>
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
