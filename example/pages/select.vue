<template>
  <div>
    <h2>普通下拉框</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_1">
            <t-option :key="1" label="v1" val="v1" disabled/>
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
    <select-normal/>

    <h2>可多选下拉框</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_2" multiple>
            <t-option :key="1" label="v1" val="v1" disabled/>
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
          <t-select label="请选择" v-model="val_2" multiple collapse-tags>
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
    <select-multiple/>

    <h2>禁用状态</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" disabled>
            <t-option :key="9" label="v9" val="v9"/>
          </t-select>
        </t-col>
        <t-col :span="6">
          <t-select label="请选择" disabled multiple v-model="val_3">
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
          <t-select label="请选择" v-model="val_4" clearable>
            <t-option :key="1" label="v1" val="v1"/>
            <t-option :key="2" label="v2" val="v2"/>
          </t-select>
        </t-col>
        <t-col :span="6">
          <t-select label="请选择" v-model="val_5" multiple clearable>
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

    <h2>选项分组</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_6">
            <t-option-group label="城市">
              <t-option :key="1" label="v1" val="v1"/>
              <t-option :key="2" label="v2" val="v2"/>
              <t-option :key="3" label="v3" val="v3"/>
              <t-option :key="4" label="v4" val="v4"/>
              <t-option :key="5" label="v5" val="v5"/>
            </t-option-group>
            <t-option-group label="地区">
              <t-option :key="6" label="v6" val="v6"/>
              <t-option :key="7" label="v7" val="v7"/>
              <t-option :key="8" label="v8" val="v8"/>
              <t-option :key="9" label="v9" val="v9"/>
            </t-option-group>
          </t-select>
        </t-col>
      </t-row>
    </div>
    <select-divide/>

    <h2>可编辑</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_7" editable multiple>
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

    <h2>本地搜索</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_8" searchable>
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
          <t-select label="请选择" v-model="val_9" searchable multiple>
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
    <select-searchable/>

    <h2>远程搜索</h2>
    <div class="demo-block">
      <t-row :gutter="20">
        <t-col :span="6">
          <t-select label="请选择" v-model="val_10" remote :remote-method="remote" searchable>
            <t-option v-for="item in val_10_data" :key="item" :label="item" :val="item"/>
          </t-select>
        </t-col>
      </t-row>
    </div>
    <select-remote/>
  </div>
</template>

<script>
import selectNormal from '../documents/select/select-normal.md'
import selectMultiple from '../documents/select/select-multiple.md'
import selectDisabled from '../documents/select/select-disabled.md'
import selectClearable from '../documents/select/select-clearable.md'
import selectEditable from '../documents/select/select-editable.md'
import selectDivide from '../documents/select/select-divide.md'
import selectSearchable from '../documents/select/select-searchable.md'
import selectRemote from '../documents/select/select-remote.md'

export default {
  components: {
    selectNormal,
    selectMultiple,
    selectDisabled,
    selectClearable,
    selectEditable,
    selectDivide,
    selectSearchable,
    selectRemote
  },
  data () {
    return {
      val_1: 'v1',
      val_2: ['v1'],
      val_3: ['v1'],
      val_4: 'v1',
      val_5: ['v1'],
      val_6: 'v1',
      val_7: ['v1'],
      val_8: '',
      val_9: [],
      val_10: '',
      val_10_data: [],
      remoteData: ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7']
    }
  },
  methods: {
    remote () {
      // filter remote data
      (this.remoteData !== null && this.remoteData !== this.val_10_data) && (this.val_10_data = this.remoteData)
    }
  }
}
</script>

<style scoped>

</style>
