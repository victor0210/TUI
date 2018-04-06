<template>
  <div>
    <guide title="警告" des="用于一些警告信息的提示组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="show">show</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">定制样式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-button @click="show(c1)">show</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">组件加载状态接口</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" :loading="loading2">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age" />
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
            </t-table>
          </t-col>
          <t-col :span="24" style="margin-top: 20px">
            <t-button @click="loading2 = !loading2">切换加载状态</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">v-t-loading指令</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <div style="width: 300px; height: 300px; border: 1px solid #eee" v-t-loading="[loading1, c1]">
              <p>
                我是任意元素，在我上面使用 v-t-loading 即可
              </p>
            </div>
          </t-col>
          <t-col :span="24" style="margin-top: 20px">
            <t-button @click="loading1 = !loading1">切换加载状态</t-button>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>
<script>
import RadioGroup from '../documents/radio/radioGroup.md'

export default {
  components: {
    RadioGroup
  },

  data () {
    return {
      c1: {
        contentBgColor: 'rgba(0,0,0, .3)',
        iconColor: '#fff',
        textColor: '#fff',
        maskBgColor: 'rgba(0,0,0,0)',
        width: 120,
        height: 100,
        iconClass: 'fa fa-circle-notch fa-spin',
        iconSize: '2em',
        text: '拼命加载中...'
      },
      loading1: false,
      loading2: false,
      data: [
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
        {name: 'name4', age: 'ag4', phone: 'phone4', role: 'role4', a: 'a4', b: 'b4', c: 'c4', d: 'd4'}
      ]
    }
  },

  methods: {
    show (o) {
      this.$TLoading.show(o)
      setTimeout(() => {
        this.$TLoading.hide()
      }, 3000)
    }
  }
}
</script>
