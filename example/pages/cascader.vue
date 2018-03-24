<template>
  <div>
    <guide title="级联下拉框" des="用于输入的表单级联下拉组件"/>
    <div class="demo-block">
      <div class="subtitle">普通复选框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op1"/>
          </t-col>
        </t-row>
      </div>
      <cascader-normal/>
    </div>

    <div class="demo-block">
      <div class="subtitle">禁用复选框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op2" disabled/>
          </t-col>
        </t-row>
      </div>
      <cascader-disabled/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可清除</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op3" clearable/>
          </t-col>
        </t-row>
      </div>
      <cascader-clearable/>
    </div>

    <div class="demo-block">
      <div class="subtitle">只显示最后一级</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op3" only-last/>
          </t-col>
        </t-row>
      </div>
      <cascader-last/>
    </div>

    <div class="demo-block">
      <div class="subtitle">可搜索</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6">
            <t-cascader :options="option" v-model="op3" searchable/>
          </t-col>
        </t-row>
      </div>
      <cascader-searchable/>
    </div>
  </div>
</template>

<script>
import cascaderNormal from '../documents/cascader/cascader-normal.md'
import cascaderDisabled from '../documents/cascader/cascader-disabled.md'
import cascaderClearable from '../documents/cascader/cascader-clearable.md'
import cascaderLast from '../documents/cascader/cascader-last.md'
import cascaderSearchable from '../documents/cascader/cascader-searchable.md'

export default {
  components: {
    cascaderNormal,
    cascaderDisabled,
    cascaderClearable,
    cascaderLast,
    cascaderSearchable
  },
  data () {
    return {
      op1: [''],
      op2: ['hp', '1000000', '1000000'],
      op3: ['hp', '1000000', '1000000'],
      option: [
        {
          label: '高价',
          val: 'hp',
          children: [
            {
              label: '1000000',
              val: '1000000',
              children: [
                {
                  label: '1000000',
                  val: '1000000'
                },
                {
                  label: '2000000',
                  val: '2000000'
                },
                {
                  label: '3000000',
                  val: '3000000'
                }
              ]
            },
            {
              label: '2000000',
              val: '2000000'
            },
            {
              label: '3000000',
              val: '3000000'
            }
          ]
        },
        {
          label: '低价',
          val: 'lp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'a价',
          val: 'ap',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'b价',
          val: 'bp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'c价',
          val: 'cp',
          children: [
            {
              label: '10000',
              val: '10000'
            },
            {
              label: '20000',
              val: '20000'
            },
            {
              label: '30000',
              val: '30000'
            }
          ]
        },
        {
          label: 'd价',
          val: 'dp',
          children: [
            {
              label: '1000000',
              val: '1000000',
              children: [
                {
                  label: '1000000',
                  val: '1000000'
                },
                {
                  label: '2000000',
                  val: '2000000'
                },
                {
                  label: '3000000',
                  val: '3000000'
                },
                {
                  label: '4000000',
                  val: '4000000'
                },
                {
                  label: '5000000',
                  val: '5000000'
                },
                {
                  label: '6000000',
                  val: '6000000'
                },
                {
                  label: '7000000',
                  val: '7000000'
                },
                {
                  label: '8000000',
                  val: '8000000'
                },
                {
                  label: '9000000',
                  val: '9000000'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
