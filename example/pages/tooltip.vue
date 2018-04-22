<template>
  <div>
    <guide title="文字提示" des="用于简单的文字文字提示场景,复杂场景请使用popover"/>
    <div class="demo-block">
      <div class="subtitle">主题</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tooltip content="this is tooltip" theme="light">
              <t-button>light</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="dark">
              <t-button>dark</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="dark-gold">
              <t-button>dark-gold</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="info">
              <t-button>info</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="warning">
              <t-button>warning</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="danger">
              <t-button>danger</t-button>
            </t-tooltip>
            <t-tooltip content="this is tooltip" theme="success">
              <t-button>success</t-button>
            </t-tooltip>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>

<script>
import RadioGroup from '../documents/radio/radioGroup.md'
import TPopover from "../../src/components/popover/popover";

export default {
  components: {
    TPopover,
    RadioGroup
  }
}
</script>

<style></style>
