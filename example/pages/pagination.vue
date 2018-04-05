<template>
  <div>
    <guide title="分页组件" des="用于分页展示数据"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-pagination total="50"/>
          </t-col>
          <t-col :span="12">
            <t-pagination total="120"/>
          </t-col>
        </t-row>
      </div>
      <radio-disabled/>
    </div>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-pagination total="1000"/>
          </t-col>
          <t-col :span="24">
            <t-pagination total="1000" layout="total, pager"/>
          </t-col>
          <t-col :span="24">
            <t-pagination total="1000" layout="total, pager, size" :sizes="sizes"/>
          </t-col>
          <t-col :span="24">
            <t-pagination total="1000" layout="total, size, pager, jump" :sizes="sizes"/>
          </t-col>
        </t-row>
      </div>
      <radio-disabled/>
    </div>
  </div>
</template>
<script>
import RadioDisabled from '../documents/radio/radioDisabled.md'

export default {
  components: {
    RadioDisabled
  },

  data () {
    return {
      sizes: [100, 200, 300, 400]
    }
  },

  methods: {
    sizeChange (s) {
      console.log(s)
    },
    currentChange (c) {
      console.log(c)
    }
  }
}
</script>
