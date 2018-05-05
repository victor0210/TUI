<template>
  <div>
    <guide title="Badge 标记" des="提示新消息活消息数量的辅助组件"/>
    <div class="demo-block">
      <div class="title">消息数量</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-badge :value="8">
              <t-button>新订单</t-button>
            </t-badge>
          </t-col>

          <t-col :span="8">
            <t-badge :value="31">
              <t-button>新消息</t-button>
            </t-badge>
          </t-col>
        </t-row>
      </div>
      <badge-normal/>
    </div>

    <div class="demo-block">
      <div class="title">最大值</div>
      <div class="sub-title">超出后文本显示自动格式化</div>
      <div class="source">
        <t-row>
          <t-col :span="8">
            <t-badge :max="10" :value="20">
              <t-button type="primary">短信</t-button>
            </t-badge>
          </t-col>
        </t-row>
      </div>
      <badge-limit/>
    </div>

    <div class="demo-block">
      <div class="title">自定义显示内容</div>
      <div class="sub-title">超出后文本显示自动格式化</div>
      <div class="source">
        <t-row>
          <t-col :span="8">
            <t-badge value="新消息">
              <t-button type="primary">通知</t-button>
            </t-badge>
          </t-col>
          <t-col :span="8">
            <t-badge value="New">
              <t-button>新用户</t-button>
            </t-badge>
          </t-col>
        </t-row>
      </div>
      <badge-custom/>
    </div>

    <div class="demo-block">
      <div class="title">小点点</div>
      <div class="sub-title">不显示文本只显示红色小圆点</div>
      <div class="source">
        <t-row>
          <t-col :span="8">
            <t-badge dot>
              <t-button>查看</t-button>
            </t-badge>
          </t-col>
        </t-row>
      </div>
      <badge-dot/>
    </div>

    <div class="demo-block">
      <div class="title">单独使用</div>
      <div class="sub-title">不嵌套任何组件，单独使用</div>
      <div class="source">
        <div class="half" style="height: 200px">
          <t-divider content="文字" content-align="left"/>
          单独使用 <t-badge value="new"/>
        </div>
        <div class="half" style="height: 200px">
          <t-divider content="小红点" content-align="left"/>
          单独使用dot <t-badge dot/>
        </div>
      </div>
      <badge-single/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="badgeApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import BadgeNormal from '../documents/badge/badge-normal.md'
import BadgeLimit from '../documents/badge/badge-limit.md'
import BadgeCustom from '../documents/badge/badge-custom.md'
import BadgeDot from '../documents/badge/badge-dot.md'
import BadgeSingle from '../documents/badge/badge-single.md'

export default {
  components: {
    BadgeNormal,
    BadgeLimit,
    BadgeCustom,
    BadgeDot,
    BadgeSingle
  },
  data () {
    return {
      badgeApis: [
        {name: 'value', desc: '标记显示文本', type: 'Number/String', choice: '—', default: '—'},
        {name: 'max', desc: '最大标记数（value为数字是生效）', type: 'Number', choice: '—', default: '—'},
        {name: 'dot', desc: '显示小红点', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'hidden', desc: '隐藏标记', type: 'Boolean', choice: '—', default: 'false'}
      ]
    }
  }
}
</script>
