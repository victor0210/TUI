<template>
  <div>
    <guide title="Table" des="用于数据展示的表格组件"/>
    <!--<div class="demo-block">-->
      <!--<div class="subtitle">普通表格</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data">-->
              <!--<t-table-column label="姓名" prop="name"/>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">斑马条纹</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data" stripe>-->
              <!--<t-table-column label="姓名" prop="name"/>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">带边框</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data" border>-->
              <!--<t-table-column label="姓名" prop="name"/>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">带状态表格</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data" :row-class-name="setRowClasses">-->
              <!--<t-table-column label="姓名" prop="name"/>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">固定表头</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data2" body-height="300">-->
              <!--<t-table-column label="姓名" prop="name"/>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
              <!--<t-table-column label="A" prop="a"/>-->
              <!--<t-table-column label="B" prop="b"/>-->
              <!--<t-table-column label="C" prop="c"/>-->
              <!--<t-table-column label="D" prop="d"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">固定列</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data3">-->
              <!--<t-table-column label="姓名" prop="name" fixed/>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
              <!--<t-table-column label="A" prop="a"/>-->
              <!--<t-table-column label="B" prop="b"/>-->
              <!--<t-table-column label="C" prop="c" fixed-right/>-->
              <!--<t-table-column label="D" prop="d"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <!--<div class="demo-block">-->
      <!--<div class="subtitle">固定表头和列</div>-->
      <!--<div class="source">-->
        <!--<t-row :gutter="20">-->
          <!--<t-col :span="24">-->
            <!--<t-table :data="data2" body-height="300">-->
              <!--<t-table-column label="操作" prop="name" width="300" fixed-right>-->
                <!--<template slot-scope="{row}">-->
                  <!--<t-button type="primary" size="sm" @click="addHandler(row)">添加</t-button>-->
                  <!--<t-button type="danger" size="sm" class="text&#45;&#45;danger">删除</t-button>-->
                <!--</template>-->
              <!--</t-table-column>-->
              <!--<t-table-column label="年龄" prop="age" />-->
              <!--<t-table-column label="身份" prop="role"/>-->
              <!--<t-table-column label="电话" prop="phone"/>-->
              <!--<t-table-column label="A" prop="a"/>-->
              <!--<t-table-column label="B" prop="b"/>-->
              <!--<t-table-column label="C" prop="c"/>-->
              <!--<t-table-column label="D" prop="d"/>-->
            <!--</t-table>-->
          <!--</t-col>-->
        <!--</t-row>-->
      <!--</div>-->
      <!--<time-md/>-->
    <!--</div>-->

    <div class="demo-block">
      <div class="subtitle">普通表格</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age" />
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>
  </div>
</template>

<script>
import timeMd from '../documents/time-picker/time.md'

export default {
  components: {
    timeMd
  },
  data () {
    return {
      data: [
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name4', age: 'ag4', phone: 'phone4', role: 'role4', a: 'a4', b: 'b4', c: 'c4', d: 'd4'}
        // {name: 'name5', age: 'ag5', phone: 'phone5', role: 'role5', a: 'a5', b: 'b5', c: 'c5', d: 'd5'},
        // {name: 'name6', age: 'ag6', phone: 'phone6', role: 'role6', a: 'a6', b: 'b6', c: 'c6', d: 'd6'},
        // {name: 'name7', age: 'ag7', phone: 'phone7', role: 'role7', a: 'a7', b: 'b7', c: 'c7', d: 'd7'},
        // {name: 'name8', age: 'ag8', phone: 'phone8', role: 'role8', a: 'a8', b: 'b8', c: 'c8', d: 'd8'}
      ],
      data2: [
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name4', age: 'ag4', phone: 'phone4', role: 'role4', a: 'a4', b: 'b4', c: 'c4', d: 'd4'},
        {name: 'name5', age: 'ag5', phone: 'phone5', role: 'role5', a: 'a5', b: 'b5', c: 'c5', d: 'd5'},
        {name: 'name6', age: 'ag6', phone: 'phone6', role: 'role6', a: 'a6', b: 'b6', c: 'c6', d: 'd6'},
        {name: 'name7', age: 'ag7', phone: 'phone7', role: 'role7', a: 'a7', b: 'b7', c: 'c7', d: 'd7'},
        {name: 'name8', age: 'ag8', phone: 'phone8', role: 'role8', a: 'a8', b: 'b8', c: 'c8', d: 'd8'}
      ],
      data3: [
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name4', age: 'ag4', phone: 'phone4', role: 'role4', a: 'a4', b: 'b4', c: 'c4', d: 'd4'}
      ]
    }
  },
  methods: {
    setRowClasses (row, rowIndex) {
      // return limit:[String, Array]
      if (rowIndex === 0) return 'row-primary'
      if (rowIndex === 1) return 'row-success'
      if (rowIndex === 2) return ['row-danger']
      if (rowIndex === 3) return ['row-warning']
    },
    addHandler (row) {
      this.$Dialog.success({
        title: '添加成功',
        msg: row.name,
        showFooter: true,
        closable: false,
        okText: '确定'
      })
    }
  }
}
</script>

<style scoped>

</style>
