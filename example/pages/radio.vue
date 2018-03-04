<template>
  <div>
    <h2>checkbox Group</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="8">
          <t-radio-group v-model="val_1">
            <t-radio label="北京" val="Beijing"/>
            <t-radio label="上海" val="Shanghai"/>
            <t-radio label="成都" val="Chengdu"/>
          </t-radio-group>
        </t-col>
      </t-row>
      <t-row :gutter="20">
        <t-col :span="8">
          value: {{ val_1 }}
        </t-col>
      </t-row>
    </div>
    <radio-group/>

    <h2>checkbox disabled</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="24">
          <t-radio label="禁用" disabled val="1" v-model="val_2"/>
          <t-radio label="禁用并选用" disabled val="2" v-model="val_2"/>
        </t-col>
      </t-row>
    </div>
    <radio-disabled/>

    <h2>checkbox label</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="24">
          <t-radio label="默认" val="1" v-model="val_3"/>
          <t-radio label="label在左边" labelLeft val="2" v-model="val_3"/>
        </t-col>
      </t-row>
    </div>
    <radio-style/>

    <h2>checkbox border</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="24">
          <t-radio-group v-model="val_5">
            <t-radio label="北京" val='Beijing' outbox/>
            <t-radio label="上海" val='Shanghai' outbox/>
            <t-radio label="成都" val='Chengdu' outbox/>
            <t-radio label="广州" val='Guangzhou' outbox/>
          </t-radio-group>
        </t-col>
      </t-row>
      <t-row :gutter="20">
        <t-col :span="8">
          value: {{ val_5 }}
        </t-col>
      </t-row>
    </div>
    <radio-border/>

  </div>
</template>
<script>
import RadioDisabled from '../documents/radio/radioDisabled.md'
import RadioStyle from '../documents/radio/radioStyle.md'
import RadioGroup from '../documents/radio/radioGroup.md'
import RadioBorder from '../documents/radio/radioBorder.md'

export default {
  components: {
    RadioGroup,
    RadioBorder,
    RadioStyle,
    RadioDisabled
  },
  data () {
    return {
      val_1: '',
      val_2: 2,
      val_3: 1,
      val_5: ''
    }
  }
}
</script>
