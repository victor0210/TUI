<template>
    <div>
        <guide title="按钮" des="常用的操作按钮"/>
        <div class="demo-block">
          <div class="subtitle">按钮样式</div>
          <div class="source">
            <t-button type="primary">primary</t-button>
            <t-button type="cyan">cyan</t-button>
            <t-button type="warning">warning</t-button>
            <t-button type="danger">danger</t-button>
            <t-button type="success">success</t-button>
            <t-button type="info">info</t-button>
            <t-button type="inverse">inverse</t-button>
            <t-button >default</t-button>
            <t-button type="text">text</t-button>
          </div>
          <button-md></button-md>
        </div>
        <div class="demo-block">
          <div class="subtitle">按钮尺寸</div>
          <div class="source">
            <t-button type="primary" size="lg">primary</t-button>
            <t-button type="cyan">cyan</t-button>
            <t-button type="warning" size="sm">warning</t-button>
          </div>
          <button-md></button-md>
        </div>
        <div class="demo-block">
          <div class="subtitle">Round</div>
          <div class="source">
            <t-button type="primary" round>primary</t-button>
            <t-button type="cyan" round>cyan</t-button>
            <t-button type="warning" round>warning</t-button>
            <t-button type="danger" round>danger</t-button>
            <t-button type="inverse" round>inverse</t-button>
          </div>
          <button-round></button-round>
        </div>
      <div class="demo-block">
        <div class="subtitle">Outline</div>
        <div class="source">
          <t-button type="primary" round outline>primary</t-button>
          <t-button type="cyan" round outline>cyan</t-button>
          <t-button type="warning" round outline>warning</t-button>
          <t-button type="danger" round outline>danger</t-button>
          <t-button type="inverse" round outline>inverse</t-button>
        </div>
        <button-round></button-round>
      </div>
      <div class="demo-block">
        <div class="subtitle">Disable</div>
        <div class="source">
          <t-button type="primary" round disabled>primary</t-button>
          <t-button type="cyan" round disabled>cyan</t-button>
          <t-button type="warning" round disabled>warning</t-button>
          <t-button type="danger" round disabled>danger</t-button>
          <t-button type="inverse" round disabled>inverse</t-button>
        </div>
        <button-round></button-round>
      </div>
        <div class="demo-block">
          <div class="subtitle">按钮组</div>
          <div class="source">
            <t-button-group>
                <t-button type="primary" outline>btn1</t-button>
                <t-button type="cyan">btn2</t-button>
                <t-button type="danger">btn3</t-button>
            </t-button-group>
            <t-button-group>
                <t-button type="warning">btn1</t-button>
                <t-button type="inverse">btn2</t-button>
            </t-button-group>
          </div>
          <button-group></button-group>
        </div>
        <div class="demo-block">
          <div class="subtitle">嵌入图标</div>
          <div class="source">
            <t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
            <t-button type="cyan" icon="fa fa-asterisk fa-spin">asterisk</t-button>
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
