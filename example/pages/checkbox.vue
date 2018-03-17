<template>
    <div>
      <guide title="复选框" des="用于输入的表单复选组件"/>
        <div class="demo-block">
          <div class="subtitle">checkbox</div>
          <div class="source">
            <t-row :gutter="20">
              <t-col :span="8">
                <t-checkbox label="label在右边" true-value></t-checkbox>
                <t-checkbox label="label在左边" labelLeft></t-checkbox>
              </t-col>
            </t-row>
          </div>
          <checkbox-md></checkbox-md>
        </div>

        <div class="demo-block">
          <div class="subtitle">checkbox style</div>
          <div class="source">
            <t-row :gutter="20">
              <t-col :span="24">
                <t-checkbox label="默认" val="1"></t-checkbox>
                <t-checkbox label="默认选中" :checked="true" val="2"></t-checkbox>
                <t-checkbox label="禁用" :disabled="true" val="3"></t-checkbox>
                <t-checkbox label="禁用并选用" :checked="true" :disabled="true" val="4"></t-checkbox>
              </t-col>
            </t-row>
          </div>
          <checkbox-style></checkbox-style>
        </div>

        <div class="demo-block">
          <div class="subtitle">checkbox Group</div>
          <div class="source">
            <t-row :gutter="20">
              <t-col :span="8">
                <t-checkbox-group v-model="v1">
                  <t-checkbox label="北京" val="Beijing"></t-checkbox>
                  <t-checkbox label="上海" val="Shanghai"></t-checkbox>
                  <t-checkbox label="成都" val="Chengdu"></t-checkbox>
                </t-checkbox-group>
              </t-col>
            </t-row>
          </div>
          <checkbox-group></checkbox-group>
        </div>

        <div class="demo-block">
          <div class="subtitle">checkbox indeterminate</div>
          <div class="source">
            <t-row :gutter="20">
              <t-col :span="24">
                <t-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"/>
              </t-col>
            </t-row>
            <t-row :gutter="20">
              <t-col :span="24">
                <t-checkbox-group @change="handleOptionChange" v-model="checkedCities">
                  <t-checkbox v-for="o in options" :label="o.label" :val="o.val" :key="o.val"/>
                </t-checkbox-group>
              </t-col>
            </t-row>
          </div>
          <checkbox-indeterminate></checkbox-indeterminate>
        </div>
        <div class="demo-block">
          <div class="subtitle">checkbox limit</div>
          <div class="source">
            <t-row :gutter="20">
              <t-col :span="24">
                <!--<t-checkbox-group v-model="v3" :max="3">-->
                  <t-checkbox label="西瓜" val='1' v-model="v3"/>
                  <t-checkbox label="苹果" val='2' v-model="v3"/>
                  <t-checkbox label="栗子" val='3' v-model="v3"/>
                  <t-checkbox label="香蕉" val='4' v-model="v3"/>
                <!--</t-checkbox-group>-->
              </t-col>
            </t-row>
            {{ v3 }}
          </div>
          <checkbox-limit></checkbox-limit>
        </div>
        <div class="demo-block">
          <div class="subtitle">checkbox border</div>
          <div class="source">
            <t-row :gutter="20">
              <t-col :span="24">
                <t-checkbox-group>
                  <t-checkbox label="北京" val='1' outbox/>
                  <t-checkbox label="上海" val='2' outbox/>
                  <t-checkbox label="成都" val='3' outbox/>
                  <t-checkbox label="广州" val='4' outbox/>
                </t-checkbox-group>
              </t-col>
            </t-row>
          </div>
          <checkbox-border></checkbox-border>
        </div>
    </div>
</template>
<script>
import CheckboxMd from '../documents/checkbox/checkbox.md'
import CheckboxGroup from '../documents/checkbox/checkboxGroup.md'
import CheckboxStyle from '../documents/checkbox/checkboxStyle.md'
import CheckboxIndeterminate from '../documents/checkbox/checkboxIndeterminate.md'
import CheckboxLimit from '../documents/checkbox/checkboxLimit.md'
import CheckboxBorder from '../documents/checkbox/checkboxBorder.md'

const arr = ['1', '2', '3', '4', '5']
export default {
  components: {
    CheckboxMd,
    CheckboxGroup,
    CheckboxStyle,
    CheckboxIndeterminate,
    CheckboxLimit,
    CheckboxBorder
  },
  data () {
    return {
      options: [
        {label: 'l1', val: '1'},
        {label: 'l2', val: '2'},
        {label: 'l3', val: '3'},
        {label: 'l4', val: '4'},
        {label: 'l5', val: '5'}
      ],
      cities: arr,
      v1: ['Beijing'],
      v2: [],
      v3: ['1', '2', '3'],
      isIndeterminate: false,
      checkAll: false,
      checkedCities: ['1', '2', '3']
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? [...this.cities] : []
      this.isIndeterminate = false
    },
    handleOptionChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
