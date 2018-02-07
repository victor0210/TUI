<template>
  <div>
    <h2>普通下拉框</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_1">
            <t-option :key="1" label="v1" val="v1" :disabled="true"/>
            <t-option :key="2" label="v2" val="v2"/>
            <t-option :key="3" label="v3" val="v3"/>
            <t-option :key="4" label="v4" val="v4"/>
            <t-option :key="5" label="v5" val="v5"/>
            <t-option :key="6" label="v6" val="v6"/>
            <t-option :key="7" label="v7" val="v7"/>
            <t-option :key="8" label="v8" val="v8"/>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
      </t-row>
      <t-row>
        <t-col>
          value: {{ val_1 }}
        </t-col>
      </t-row>
    </div>
    <select-normal/>

    <h2>可多选下拉框</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_2" :multiple="true">
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="2" label="v2" val="v2"/>
            <t-option :key="3" label="v3" val="v3"/>
            <t-option :key="4" label="v4" val="v4"/>
            <t-option :key="5" label="v5" val="v5"/>
            <t-option :key="6" label="v6" val="v6"/>
            <t-option :key="7" label="v7" val="v7"/>
            <t-option :key="8" label="v8" val="v8"/>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
        <t-col :span="6">
          <t-select label="请选择" v-model="val_2" :multiple="true" :collapse-tags="true">
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="2" label="v2" val="v2"/>
            <t-option :key="3" label="v3" val="v3"/>
            <t-option :key="4" label="v4" val="v4"/>
            <t-option :key="5" label="v5" val="v5"/>
            <t-option :key="6" label="v6" val="v6"/>
            <t-option :key="7" label="v7" val="v7"/>
            <t-option :key="8" label="v8" val="v8"/>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
      </t-row>
      <t-row>
        <t-col>
          value: {{ val_2 }}
        </t-col>
      </t-row>
    </div>
    <select-multiple/>

    <h2>禁用状态</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" :disabled="true">
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
        <t-col :span="6">
          <t-select label="请选择" :disabled="true" :multiple="true" v-model="val_3">
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
      </t-row>
    </div>
    <select-disabled/>

    <h2>可清除</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" :clearable="true" v-model="val_4">
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="2" label="v2" val="v2"/>
          </t-select>
        </t-col>
        <t-col :span="6">
          <t-select label="请选择" :clearable="true" v-model="val_5" :multiple="true">
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="2" label="v2" val="v2"/>
            <t-option :key="3" label="v3" val="v3"/>
            <t-option :key="4" label="v4" val="v4"/>
            <t-option :key="5" label="v5" val="v5"/>
            <t-option :key="6" label="v6" val="v6"/>
            <t-option :key="7" label="v7" val="v7"/>
            <t-option :key="8" label="v8" val="v8"/>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
      </t-row>
    </div>
    <select-clearable/>

    <h2>可编辑</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_6" :editable="true" :multiple="true">
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="2" label="v2" val="v2"/>
            <t-option :key="3" label="v3" val="v3"/>
            <t-option :key="4" label="v4" val="v4"/>
            <t-option :key="5" label="v5" val="v5"/>
            <t-option :key="6" label="v6" val="v6"/>
            <t-option :key="7" label="v7" val="v7"/>
            <t-option :key="8" label="v8" val="v8"/>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
      </t-row>
    </div>
    <select-editable/>
  </div>
</template>

<script>
import selectNormal from '../documents/select/select-normal.md'
import selectMultiple from '../documents/select/select-multiple.md'
import selectDisabled from '../documents/select/select-disabled.md'
import selectClearable from '../documents/select/select-clearable.md'
import selectEditable from '../documents/select/select-editable.md'

export default {
  components: {
    selectNormal,
    selectMultiple,
    selectDisabled,
    selectClearable,
    selectEditable
  },
  data () {
    return {
      val_1: 'v1',
      val_2: ['v1'],
      val_3: ['v1'],
      val_4: 'v1',
      val_5: ['v1'],
      val_6: ['v1']
    }
  }
}
</script>

<style scoped>

</style>
