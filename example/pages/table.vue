<template>
  <div>
    <guide title="Table" des="用于数据展示的表格组件"/>
    <div class="demo-block">
      <div class="subtitle">普通表格</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" :loading="true">
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

    <div class="demo-block">
      <div class="subtitle">斑马条纹</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" stripe>
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

    <div class="demo-block">
      <div class="subtitle">带边框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" border>
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

    <div class="demo-block">
      <div class="subtitle">带状态表格</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" :row-class-name="setRowClasses">
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

    <div class="demo-block">
      <div class="subtitle">固定表头</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data2" :body-height="300">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age" />
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="A" prop="a"/>
              <t-table-column label="B" prop="b"/>
              <t-table-column label="C" prop="c"/>
              <t-table-column label="D" prop="d"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">固定列</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data3">
              <t-table-column label="姓名" prop="name" fixed/>
              <t-table-column label="年龄" prop="age" width="300"/>
              <t-table-column label="身份" prop="role" width="300"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="A" prop="a"/>
              <t-table-column label="B" prop="b"/>
              <t-table-column label="C" prop="c" fixed-right/>
              <t-table-column label="D" prop="d"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">固定表头和列</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data2" :body-height="300">
              <t-table-column label="操作" prop="name" width="300" fixed-right>
                <template slot-scope="{row}">
                  <t-button type="primary" size="sm" @click="addHandler(row)">添加</t-button>
                  <t-button type="danger" size="sm" class="text--danger">删除</t-button>
                </template>
              </t-table-column>
              <t-table-column label="年龄" prop="age" />
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="A" prop="a"/>
              <t-table-column label="B" prop="b"/>
              <t-table-column label="C" prop="c"/>
              <t-table-column label="D" prop="d"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">表格排序</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data">
              <t-table-column label="姓名" prop="name" :sort-method="sortMethod"/>
              <t-table-column label="年龄" prop="age" />
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">流体高度</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" :body-max-height="200">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="操作" prop="option">
                <template slot-scope="scope">
                  <t-button @click="removeItem(scope.idx, data)">移除</t-button>
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">自动编号</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="data" :body-max-height="200">
              <t-table-column type="index" width="60"/>
              <t-table-column label="姓名" prop="name" :width="200"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="操作" prop="option">
                <template slot-scope="scope">
                  <t-button @click="removeItem(scope.idx, data)">移除</t-button>
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">单选</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="data" :body-max-height="300" highlight-current-row :current-change="currentChange" ref="t_table">
              <t-table-column type="index" width="60"/>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="操作" prop="option">
                <template slot-scope="scope">
                  <t-button size="sm" @click="removeItem(scope.idx, data)">移除</t-button>
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="24">
            <t-button @click="setRow(1)">选中第二行</t-button>
            <t-button @click="setRow()">重置</t-button>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">多选</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="data" :body-max-height="300" selection :selection-change="selectionChange" ref="t_table_selection">
              <t-table-column type="selection" width="55"/>
              <t-table-column type="index" width="60"/>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="操作" prop="option">
                <template slot-scope="scope">
                  <t-button size="sm" @click="removeItem(scope.idx, data)">移除</t-button>
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="24">
            <t-button @click="setSelectionRow([data[2], data[3]])">切换第二，三行</t-button>
            <t-button @click="setSelectionRow()">重置</t-button>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">展开行</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="data" selection :selection-change="selectionChange" ref="t_table_selection">
              <t-table-column width="50" type="expand">
                <template slot-scope="scope">
                  <t-button>button</t-button>
                </template>
              </t-table-column>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="操作" prop="option">
                <template slot-scope="scope">
                  <t-button size="sm" @click="removeItem(scope.idx, data)">移除</t-button>
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <time-md/>
    </div>

    <div class="demo-block">
      <div class="subtitle">展开行</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="data" selection :selection-change="selectionChange" ref="t_table_selection">
              <t-table-column width="50" type="expand">
                <template slot-scope="scope">
                  <t-button>button</t-button>
                </template>
              </t-table-column>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="身份" prop="role"/>
              <t-table-column label="电话" prop="phone"/>
              <t-table-column label="操作" prop="option" :width="180">
                <template slot-scope="scope">
                  <t-select>
                    <t-option label="a" val="1"/>
                  </t-select>
                </template>
              </t-table-column>
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
        {name: 'name2', age: 'ag2', phone: 'phone2', role: 'role2', a: 'a2a2a2a2a2a2a2a2a2', b: 'b2', c: 'c2', d: 'd2'},
        {name: 'name3', age: 'ag3', phone: 'phone3', role: 'role3', a: 'a3', b: 'b3', c: 'c3', d: 'd3'},
        {name: 'name1', age: 'ag1', phone: 'phone1', role: 'role1', a: 'a1', b: 'b1', c: 'c1', d: 'd1'},
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
      this.$TDialog.success({
        title: '添加成功',
        msg: row.name,
        showFooter: true,
        closable: false,
        okText: '确定'
      })
    },
    sortMethod (a, b) {
      return a.name > b.name
    },
    removeItem (idx, data) {
      data.splice(idx, 1)
    },
    currentChange (val) {
      console.log(val)
    },
    selectionChange (val, old) {
      console.log(val)
    },
    setRow (row) {
      this.$refs.t_table.setCurrentRow(row)
    },
    setSelectionRow (row) {
      this.$refs.t_table_selection.toggleRowSelection(row)
    }
  }
}
</script>

<style scoped>

</style>
