<template>
  <div>
    <guide title="下拉框" des="用于输入的表单下拉组件"/>
    <div class="demo-block">
      <div class="subtitle">普通下拉框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_3">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-normal/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可多选下拉框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_2" multiple :height="30">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" v-model="val_2" multiple collapse-tags>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-multiple/>
    </div>

    <div class="demo-block">
      <div class="subtitle">禁用状态</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" disabled v-model="val_1">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" disabled multiple v-model="val_2">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-disabled/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可清除</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_4" clearable>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" v-model="val_5" multiple clearable>
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-clearable/>
    </div>

    <div class="demo-block">
      <div class="subtitle">选项分组</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_6">
              <t-option-group label="城市">
                <t-option :key="1" label="选项1" val="v1"/>
                <t-option :key="2" label="选项2" val="v2"/>
                <t-option :key="3" label="选项3" val="v3"/>
                <t-option :key="4" label="选项4" val="v4"/>
                <t-option :key="5" label="选项5" val="v5"/>
              </t-option-group>
              <t-option-group label="地区">
                <t-option :key="6" label="选项6" val="v6"/>
                <t-option :key="7" label="选项7" val="v7"/>
                <t-option :key="8" label="选项8" val="v8"/>
                <t-option :key="9" label="选项9" val="v9"/>
              </t-option-group>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-divide/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可编辑</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_71" editable multiple>
              <t-option :key="1" label="选项1" val="v1"/>
              <t-option :key="2" label="选项2" val="v2"/>
              <t-option :key="3" label="选项3" val="v3"/>
              <t-option :key="4" label="选项4" val="v4"/>
              <t-option :key="5" label="选项5" val="v5"/>
              <t-option :key="6" label="选项6" val="v6"/>
              <t-option :key="7" label="选项7" val="v7"/>
              <t-option :key="8" label="选项8" val="v8"/>
              <t-option :key="9" label="选项9" val="v9"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-editable/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可搜索</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_8" searchable>
              <t-option :key="1" label="选项1" val="v1"/>
              <t-option :key="2" label="选项2" val="v2"/>
              <t-option :key="3" label="选项3" val="v3"/>
              <t-option :key="4" label="选项4" val="v4"/>
              <t-option :key="5" label="选项5" val="v5"/>
              <t-option :key="6" label="选项6" val="v6"/>
              <t-option :key="7" label="选项7" val="v7"/>
              <t-option :key="8" label="选项8" val="v8"/>
              <t-option :key="9" label="选项9" val="v9"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" v-model="val_9" searchable multiple>
              <t-option :key="1" label="选项1" val="v1"/>
              <t-option :key="2" label="选项2" val="v2"/>
              <t-option :key="3" label="选项3" val="v3"/>
              <t-option :key="4" label="选项4" val="v4"/>
              <t-option :key="5" label="选项5" val="v5"/>
              <t-option :key="6" label="选项6" val="v6"/>
              <t-option :key="7" label="选项7" val="v7"/>
              <t-option :key="8" label="选项8" val="v8"/>
              <t-option :key="9" label="选项9" val="v9"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-searchable/>
    </div>

    <div class="demo-block">
      <div class="subtitle">不同尺寸</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-select label="请选择" v-model="val_3" size="lg">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" v-model="val_3">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" v-model="val_3" size="sm">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
          <t-col :span="6">
            <t-select label="请选择" v-model="val_3" size="mini">
              <t-option v-for="o in options2" :key="o.val" :label="o.label" :val="o.val"/>
            </t-select>
          </t-col>
        </t-row>
      </div>
      <select-normal/>
    </div>

    <!--<div class="subtitle">远程搜索</div>-->
    <!--<div class="demo-block">-->
      <!--<t-row :gutter="20">-->
        <!--<t-col :span="6">-->
          <!--<t-select-bak label="请选择" v-model="val_10" remote :remote-method="remote" searchable>-->
            <!--<t-option v-for="item in val_10_data" :key="item" :label="item" :val="item"/>-->
          <!--</t-select-bak>-->
        <!--</t-col>-->
      <!--</t-row>-->
    <!--</div>-->
    <!--<select-bak-remote/>-->
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

export default {
  components: {
    selectNormal,
    selectMultiple,
    selectDisabled,
    selectClearable,
    selectEditable,
    selectDivide,
    selectSearchable
  },
  data () {
    return {
      val_1: '1',
      val_2: ['1'],
      val_3: '3',
      val_4: '1',
      val_5: ['1'],
      val_6: 'v1',
      val_71: ['v1'],
      val_72: ['v1', 'o1'],
      val_8: 'v1',
      val_9: ['v1'],
      opt: [],
      options1: [
        {label: 'v1', val: '1'},
        {label: 'v2', val: '2'},
        {label: 'v3', val: '3'},
        {label: 'v4', val: '4'},
        {label: 'v5', val: '5'},
        {label: 'v6', val: '6'},
        {label: 'v7', val: '7'},
        {label: 'v8', val: '8'},
        {label: 'v9', val: '9'}
      ],
      options2: [
        {label: 'o1', val: '1', disabled: true},
        {label: 'o2', val: '2'},
        {label: 'o3', val: '3'},
        {label: 'o4', val: '4'},
        {label: 'o5', val: '5'},
        {label: 'o6', val: '6'},
        {label: 'o7', val: '7'},
        {label: 'o8', val: '8'},
        {label: 'o9', val: '9'}
      ]
    }
  },
  methods: {
    cli () {
      this.opt = this.options2
    }
  }
}
</script>

<style scoped>

</style>
