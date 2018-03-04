<template>
    <div>
      <h2>普通计数器</h2>
      <div class="demo-block">
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" /></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="primary"/></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="success"/></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="warning"/></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="danger"/></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="info"/></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="cyan"/></t-col></t-row>
          <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" type="inverse"/></t-col></t-row>
      </div>
      <normal-md/>

      <h2>禁用状态</h2>
      <div class="demo-block">
        <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n" disabled/></t-col></t-row>
      </div>
      <disabled-md/>

      <h2>变化步数</h2>
      <div class="demo-block">
        <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n31" :range="10"/></t-col></t-row>
        <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n32" :range="20"/></t-col></t-row>
      </div>
      <range-md/>

      <h2>规定范围</h2>
      <div class="demo-block">
        <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n41" :max="10" :min="-1"/></t-col></t-row>
      </div>
      <limit-md/>

      <h2>side control</h2>
      <div class="demo-block">
        <t-row :gutter="20"><t-col :span="5"><t-input-number  v-model="n51" :max="10" :min="1" side-control/></t-col></t-row>
      </div>
      <side-control-md/>
    </div>
</template>
<script>
import NormalMd from '../documents/input-number/input-number-normal.md'
import DisabledMd from '../documents/input-number/input-number-disabled.md'
import RangeMd from '../documents/input-number/input-number-range.md'
import LimitMd from '../documents/input-number/input-number-limit.md'
import SideControlMd from '../documents/input-number/input-number-side-control.md'
export default {
  components: {
    NormalMd,
    DisabledMd,
    RangeMd,
    LimitMd,
    SideControlMd
  },
  data () {
    return {
      n: 1,
      n31: 1,
      n32: 1,
      n41: -1,
      n51: 1
    }
  }
}
</script>
