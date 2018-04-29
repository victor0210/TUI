<template>
  <div>
    <guide title="Button 按钮" des="常用的操作按钮"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">按钮的基本样式和基本用法</div>
      <div class="source">
        <div class="row">
          <div class="col" :span="24">
            <t-button type="primary">Primary</t-button>
            <t-button type="success">Success</t-button>
            <t-button type="info">Info</t-button>
            <t-button type="warning">Warning</t-button>
            <t-button type="danger">Danger</t-button>
            <t-button>Default</t-button>
          </div>
          <div class="col" :span="24" style="margin-top: 20px">
            <t-button type="primary" outline>Primary</t-button>
            <t-button type="success" outline>Success</t-button>
            <t-button type="info" outline>Info</t-button>
            <t-button type="warning" outline>Warning</t-button>
            <t-button type="danger" outline>Danger</t-button>
            <t-button outline>Default</t-button>
          </div>
          <div class="col" :span="24" style="margin-top: 20px">
            <t-button type="primary" round>Primary</t-button>
            <t-button type="success" round>Success</t-button>
            <t-button type="info" round>Info</t-button>
            <t-button type="warning" round>Warning</t-button>
            <t-button type="danger" round>Danger</t-button>
            <t-button round>Default</t-button>
          </div>
          <div class="col" :span="24" style="margin-top: 20px">
            <t-button type="primary" circle icon="fa fa-search"/>
            <t-button type="success" circle icon="fa fa-check"/>
            <t-button type="info" circle icon="fa fa-envelope"/>
            <t-button type="warning" circle icon="fa fa-star"/>
            <t-button type="danger" circle icon="fa fa-trash-alt"/>
          </div>
        </div>
      </div>
      <button-md/>
    </div>

    <div class="demo-block">
      <div class="title">按钮尺寸</div>
      <div class="sub-title">根据不同的业务场景选择不同尺寸的按钮</div>
      <div class="source">
        <t-button type="primary" size="lg">large</t-button>
        <t-button type="primary">default</t-button>
        <t-button type="primary" size="sm">small</t-button>
        <t-button type="primary" size="mini">mini</t-button>
      </div>
      <button-size/>
    </div>

    <div class="demo-block">
      <div class="title">禁用状态</div>
      <div class="sub-title">禁用状态的按钮不可点击</div>
      <div class="source">
        <div class="row">
          <div class="col" :span="24">
            <t-button type="primary" disabled>Primary</t-button>
            <t-button type="success" disabled>Success</t-button>
            <t-button type="info" disabled>Info</t-button>
            <t-button type="warning" disabled>Warning</t-button>
            <t-button type="danger" disabled>Danger</t-button>
            <t-button disabled>Default</t-button>
          </div>
        </div>
      </div>
      <button-disabled/>
    </div>

    <div class="demo-block">
      <div class="title">文字按钮</div>
      <div class="sub-title">外观是文字，实际是按钮哦</div>
      <div class="source">
        <t-button type="text">Text-Button</t-button>
        <t-button type="text" disabled>Text-Button</t-button>
      </div>
      <button-text/>
    </div>

    <div class="demo-block">
      <div class="title">按钮组</div>
      <div class="sub-title">以按钮组的方式出现，可用于相似操作按钮的组合</div>
      <div class="source">
        <t-button-group>
          <t-button type="primary" icon="fa fa-chevron-left">上一页</t-button>
          <t-button type="primary" icon="fa fa-chevron-right" icon-right>下一页</t-button>
        </t-button-group>
        <t-button-group>
          <t-button type="primary" icon="fa fa-star"/>
          <t-button type="primary" icon="fa fa-heart"/>
          <t-button type="primary" icon="fa fa-eye"/>
        </t-button-group>
      </div>
      <button-group/>
    </div>

    <div class="demo-block">
      <div class="title">加载按钮</div>
      <div class="sub-title">加载状态的按钮，可用于操作等待的友好提示</div>
      <div class="source">
        <t-button type="primary" loading disabled>Loading...</t-button>
      </div>
      <button-loading/>
    </div>

    <div class="api-docs">
      <div class="title">API Documents</div>
      <div class="source">
        <t-table :data="apis">
          <t-table-column label="属性" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="120"/>
          <t-table-column label="类型" prop="type" :width="120"/>
          <t-table-column label="可选值" prop="choice" :width="350"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonMd from '../documents/button/button.md'
import ButtonSize from '../documents/button/buttonSize.md'
import buttonDisabled from '../documents/button/buttonDisabled.md'
import buttonText from '../documents/button/buttonText.md'
import ButtonGroup from '../documents/button/buttonGroup.md'
import ButtonLoading from '../documents/button/buttonLoading.md'

export default {
  components: {
    ButtonMd,
    ButtonSize,
    buttonDisabled,
    buttonText,
    ButtonGroup,
    ButtonLoading
  },

  data () {
    return {
      apis: [
        {name: 'type', desc: '按钮类型', type: 'String', choice: 'primary / success / warning / danger / info / text', default: '—'},
        {name: 'size', desc: '按钮尺寸', type: 'String', choice: 'lg / sm / mini', default: '—'},
        {name: 'icon', desc: '图标类名', type: 'String', choice: '—', default: '—'},
        {name: 'round', desc: '弧形按钮', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'loading', desc: '加载状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'outline', desc: '边框按钮', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'circle', desc: '圆形按钮', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'icon-right', desc: '图标位于右侧', type: 'Boolean', choice: '—', default: 'false'}
      ],
    }
  }
}
</script>
