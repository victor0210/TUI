<template>
    <div>
        <guide title="按钮" des="常用的操作按钮"/>
        <div class="demo-block">
          <div class="subtitle">按钮样式</div>
          <div class="source">
            <t-button type="primary">primary</t-button>
            <t-button type="success">success</t-button>
            <t-button type="info">info</t-button>
            <t-button type="warning">warning</t-button>
            <t-button type="danger">danger</t-button>
            <t-button >default</t-button>
            <t-button type="text">text</t-button>
          </div>
          <button-md></button-md>
        </div>
        <div class="demo-block">
          <div class="subtitle">按钮尺寸</div>
          <div class="source">
            <t-button type="primary" size="lg">large</t-button>
            <t-button type="primary">normal</t-button>
            <t-button type="primary" size="sm">small</t-button>
          </div>
          <button-md></button-md>
        </div>
        <div class="demo-block">
          <div class="subtitle">Round</div>
          <div class="source">
            <t-button type="primary" round>primary</t-button>
            <t-button type="success" round>success</t-button>
            <t-button type="info" round>info</t-button>
            <t-button type="warning" round>warning</t-button>
            <t-button type="danger" round>danger</t-button>
          </div>
          <button-round></button-round>
        </div>
      <div class="demo-block">
        <div class="subtitle">Outline</div>
        <div class="source">
          <t-button type="primary" round outline>primary</t-button>
          <t-button type="success" round outline>success</t-button>
          <t-button type="info" round outline>info</t-button>
          <t-button type="warning" round outline>warning</t-button>
          <t-button type="danger" round outline>danger</t-button>
        </div>
        <button-round></button-round>
      </div>
      <div class="demo-block">
        <div class="subtitle">Disable</div>
        <div class="source">
          <t-button type="primary" round disabled>primary</t-button>
          <t-button type="success" round disabled>success</t-button>
          <t-button type="info" round disabled>info</t-button>
          <t-button type="warning" round disabled>warning</t-button>
          <t-button type="danger" round disabled>danger</t-button>
        </div>
        <button-round></button-round>
      </div>
        <div class="demo-block">
          <div class="subtitle">按钮组</div>
          <div class="source">
            <t-button-group>
                <t-button type="primary" outline icon="fa fa-arrow-left"></t-button>
                <t-button type="primary" icon="fa fa-arrow-right"></t-button>
            </t-button-group>
            <t-button-group>
                <t-button type="danger">点赞</t-button>
                <t-button type="success">关注</t-button>
            </t-button-group>
          </div>
          <button-group></button-group>
        </div>
        <div class="demo-block">
          <div class="subtitle">嵌入图标</div>
          <div class="source">
            <t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
            <t-button type="warning" icon="fa fa-circle-notch fa-spin">circle-notch</t-button>
            <t-button type="danger" icon="fa fa-sync fa-spin">sync</t-button>
          </div>
          <button-icon></button-icon>
        </div>
    </div>
</template>

<script>
import ButtonMd from '../documents/button/button.md'
import ButtonRound from '../documents/button/buttonRound.md'
import ButtonGroup from '../documents/button/buttonGroup.md'
import ButtonIcon from '../documents/button/buttonIcon.md'
export default {
  components: {
    ButtonMd,
    ButtonRound,
    ButtonGroup,
    ButtonIcon
  }
}
</script>
