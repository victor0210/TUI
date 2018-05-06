<template>
  <div>
    <guide title="Dropdown 下拉组件" des="将触发元素放到下拉菜单中，需要时显示，平时隐藏"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">快速使用下拉菜单</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown>
              <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
              <template slot="dropdown">
                <t-dropdown-item>中秋活动</t-dropdown-item>
                <t-dropdown-item>春节活动</t-dropdown-item>
                <t-dropdown-item>元旦活动</t-dropdown-item>
                <t-dropdown-item>五一活动</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <drop-normal/>
    </div>

    <div class="demo-block">
      <div class="title">Item样式</div>
      <div class="sub-title">设置菜单中item的样式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown>
              <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
              <template slot="dropdown">
                <t-dropdown-item disabled>中秋活动</t-dropdown-item>
                <t-dropdown-item>春节活动</t-dropdown-item>
                <t-dropdown-item>元旦活动</t-dropdown-item>
                <t-dropdown-item divided>五一活动</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <drop-item/>
    </div>

    <div class="demo-block">
      <div class="title">下拉框宽度</div>
      <div class="sub-title">设置不同的下拉框宽度</div>
      <div class="source">
        <div class="half">
          <t-divider content="与触发组件相同" content-align="left"/>
          <t-dropdown :width="0">
            <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
            <template slot="dropdown">
              <t-dropdown-item disabled>中秋活动</t-dropdown-item>
              <t-dropdown-item>春节活动</t-dropdown-item>
              <t-dropdown-item>元旦活动</t-dropdown-item>
              <t-dropdown-item divided>五一活动</t-dropdown-item>
            </template>
          </t-dropdown>
        </div>
        <div class="half">
          <t-divider content="200px" content-align="left"/>
          <t-dropdown :width="200">
            <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
            <template slot="dropdown">
              <t-dropdown-item disabled>中秋活动</t-dropdown-item>
              <t-dropdown-item>春节活动</t-dropdown-item>
              <t-dropdown-item>元旦活动</t-dropdown-item>
              <t-dropdown-item divided>五一活动</t-dropdown-item>
            </template>
          </t-dropdown>
        </div>
      </div>
      <drop-width/>
    </div>

    <div class="demo-block">
      <div class="title">触发方式</div>
      <div class="sub-title">两种不同方式触发显示下拉菜单</div>
      <div class="source">
        <div class="half">
          <t-divider content="Click触发" content-align="left"/>
          <t-dropdown trigger="click">
            <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
            <template slot="dropdown">
              <t-dropdown-item disabled>中秋活动</t-dropdown-item>
              <t-dropdown-item>春节活动</t-dropdown-item>
              <t-dropdown-item>元旦活动</t-dropdown-item>
              <t-dropdown-item divided>五一活动</t-dropdown-item>
            </template>
          </t-dropdown>
        </div>
        <div class="half">
          <t-divider content="Hover触发" content-align="left"/>
          <t-dropdown>
            <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
            <template slot="dropdown">
              <t-dropdown-item disabled>中秋活动</t-dropdown-item>
              <t-dropdown-item>春节活动</t-dropdown-item>
              <t-dropdown-item>元旦活动</t-dropdown-item>
              <t-dropdown-item divided>五一活动</t-dropdown-item>
            </template>
          </t-dropdown>
        </div>
      </div>
      <drop-trigger/>
    </div>

    <div class="demo-block">
      <div class="title">点击关闭</div>
      <div class="sub-title">点击菜单选项自动收起下拉</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown hide-on-click>
              <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
              <template slot="dropdown">
                <t-dropdown-item disabled>中秋活动</t-dropdown-item>
                <t-dropdown-item>春节活动</t-dropdown-item>
                <t-dropdown-item>元旦活动</t-dropdown-item>
                <t-dropdown-item divided>五一活动</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <drop-close/>
    </div>

    <div class="demo-block">
      <div class="title">Command操作</div>
      <div class="sub-title">通过获取指令参数进行操作</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-dropdown hide-on-click @command="commandHandler">
              <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
              <template slot="dropdown">
                <t-dropdown-item command="中秋活动">中秋活动</t-dropdown-item>
                <t-dropdown-item command="春节活动">春节活动</t-dropdown-item>
                <t-dropdown-item command="元旦活动">元旦活动</t-dropdown-item>
                <t-dropdown-item divided command="五一活动">五一活动</t-dropdown-item>
              </template>
            </t-dropdown>
          </t-col>
        </t-row>
      </div>
      <drop-command/>
    </div>

    <div class="api-docs">
      <t-divider content="Dropdown Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="dropdownApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Dropdown Item Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="dropdownItemApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import DropNormal from '../documents/dropdown/dropdown-normal.md'
import DropClose from '../documents/dropdown/dropdown-close.md'
import DropCommand from '../documents/dropdown/dropdown-command.md'
import DropItem from '../documents/dropdown/dropdown-item.md'
import DropTrigger from '../documents/dropdown/dropdown-trigger.md'
import DropWidth from '../documents/dropdown/dropdown-width.md'

export default {
  components: {
    DropNormal,
    DropClose,
    DropCommand,
    DropItem,
    DropTrigger,
    DropWidth
  },
  data () {
    return {
      dropdownApis: [
        {name: 'width', desc: '菜单宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'min-width', desc: '菜单最小宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'max-width', desc: '菜单最大高度', type: 'Number', choice: '—', default: '—'},
        {name: 'trigger', desc: '显示触发方式', type: 'Number', choice: 'hover/click', default: 'hover'},
        {name: 'text-center', desc: '文本居中', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'hide-on-click', desc: '点击关闭', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'side', desc: '右侧显示下拉菜单', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'sub', desc: '子菜单', type: 'Array', choice: '—', default: '—'}
      ],
      dropdownItemApis: [
        {name: 'command', desc: '指令透传参数', type: '*', choice: '—', default: '—'},
        {name: 'disabled', desc: '点击关闭', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'divided', desc: '点击关闭', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  },
  methods: {
    commandHandler (cmd) {
      this.$TMessage.show({
        content: `Command Is ${cmd}`,
        type: 'info',
        showIcon: true
      })
    }
  }
}
</script>

<style></style>
