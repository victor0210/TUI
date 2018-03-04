<template>
    <div>
        <h2>Button</h2>
        <div class="demo-block">
            <t-button type="primary" size="lg">primary</t-button>
            <t-button type="cyan" size="lg">cyan</t-button>
            <t-button type="warning" size="lg">warning</t-button>
            <t-button type="danger">danger</t-button>
            <t-button type="success">success</t-button>
            <t-button type="info">info</t-button>
            <t-button type="inverse" size="sm">inverse</t-button>
            <t-button size="sm">default</t-button>
            <t-button type="text" size="sm">text</t-button>
        </div>
        <button-md></button-md>
        <h2>Button round</h2>
        <div class="demo-block">
            <t-button type="primary" size="lg" :round=true>primary</t-button>
            <t-button type="cyan" size="lg" :round=true>cyan</t-button>
            <t-button type="warning" size="lg" :round=true>warning</t-button>
            <t-button type="danger" :round=true>danger</t-button>
            <t-button type="inverse" :round=true>inverse</t-button>
            <br>
            <br>
            <t-button type="primary" size="lg" :round=true :disabled=true>primary</t-button>
            <t-button type="cyan" size="lg" :round=true :disabled=true>cyan</t-button>
            <t-button type="warning" size="lg" :round=true :disabled=true>warning</t-button>
            <t-button type="danger" :round=true :disabled=true>danger</t-button>
            <t-button type="inverse" :round=true :disabled=true>inverse</t-button>
            <br>
            <br>
            <t-button type="primary" size="lg" :round=true :outline=true>primary</t-button>
            <t-button type="cyan" size="lg" :round=true :outline=true>cyan</t-button>
            <t-button type="warning" size="lg" :round=true :outline=true>warning</t-button>
            <t-button type="danger" :round=true :outline=true>danger</t-button>
            <t-button type="inverse" :round=true :outline=true>inverse</t-button>
        </div>
        <button-round></button-round>
        <h2>Button group</h2>
        <div class="demo-block">
            <t-button-group>
                <t-button type="primary" :outline=true size="lg">btn1</t-button>
                <t-button type="cyan" size="lg">btn2</t-button>
                <t-button type="danger" size="lg">btn3</t-button>
            </t-button-group>
            <t-button-group>
                <t-button type="warning">btn1</t-button>
                <t-button type="inverse">btn2</t-button>
            </t-button-group>
        </div>
        <button-group></button-group>
        <h2>图标按钮</h2>
        <div class="demo-block">
            <t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
            <t-button type="cyan" icon="fa fa-asterisk fa-spin">asterisk</t-button>
            <t-button type="warning" icon="fa fa-circle-notch fa-spin">circle-notch</t-button>
            <t-button type="danger" icon="fa fa-sync fa-spin">sync</t-button>
        </div>
        <button-icon></button-icon>
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
