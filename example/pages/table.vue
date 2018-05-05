<template>
  <div>
    <guide title="Table 表格" des="用于数据展示的表格组件"/>
    <div class="demo-block">
      <div class="title">普通表格</div>
      <div class="sub-title">表格的基本用法，所有可以给column设置宽度，若不设置则均分</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-normal/>
    </div>

    <div class="demo-block">
      <div class="title">加载状态</div>
      <div class="sub-title">加载状态结合Loading组件实现，更详细的说明请转至 <code><router-link to="/components/loading">TLoading</router-link></code></div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal" loading>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-loading/>
    </div>

    <div class="demo-block">
      <div class="title">斑马条纹</div>
      <div class="sub-title">带有斑马条纹的表格更易于区分行</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal" stripe>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-stripe/>
    </div>

    <div class="demo-block">
      <div class="title">带边框</div>
      <div class="sub-title">带有边框的表格显得更规则</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal" border>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-border/>
    </div>

    <div class="demo-block">
      <div class="title">带状态表格</div>
      <div class="sub-title">可为特定行设置对应的状态</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal" :row-class-name="setRowClasses">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-class/>
    </div>

    <div class="demo-block">
      <div class="title">固定表头</div>
      <div class="sub-title">表头固定的表格</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal" :body-height="200">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-header/>
    </div>

    <div class="demo-block">
      <div class="title">固定列</div>
      <div class="sub-title">列固定的表格，列只能被固定在侧方</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataExpandWidth">
              <t-table-column label="姓名" prop="name" fixed/>
              <t-table-column label="年龄" prop="age" :width="200"/>
              <t-table-column label="爱好" prop="habit" :width="200"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
              <t-table-column label="家乡" prop="home" :width="200"/>
              <t-table-column label="工作经验" prop="exp" :width="200"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-column/>
    </div>

    <div class="demo-block">
      <div class="title">固定表头和列</div>
      <div class="sub-title">固定表头和列</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataExpandWidth" :body-height="200">
              <t-table-column label="姓名" prop="name" fixed/>
              <t-table-column label="年龄" prop="age" :width="200"/>
              <t-table-column label="爱好" prop="habit" :width="200"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
              <t-table-column label="家乡" prop="home" :width="200"/>
              <t-table-column label="工作经验" prop="exp" :width="200"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-column-header/>
    </div>

    <div class="demo-block">
      <div class="title">表格排序</div>
      <div class="sub-title">可自定义排序方法进行表格排序</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataExpandWidth" :body-height="200">
              <t-table-column label="姓名" prop="name" fixed/>
              <t-table-column label="年龄" prop="age" :width="200" :sort-method="sortMethod"/>
              <t-table-column label="爱好" prop="habit" :width="200"/>
              <t-table-column label="座右铭" prop="flag" :width="250"/>
              <t-table-column label="家乡" prop="home" :width="200"/>
              <t-table-column label="工作经验" prop="exp" :width="200"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-sort/>
    </div>

    <div class="demo-block">
      <div class="title">流体高度</div>
      <div class="sub-title">根据表格数据变化动态设置高度</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal2" :body-max-height="200">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag"/>
              <t-table-column label="操作">
                <template slot-scope="{row}">
                  <t-button @click="removeItem(scope.idx, dataNormal)" size="sm">移除 {{ row.name }}</t-button>
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-height-change/>
    </div>

    <div class="demo-block">
      <div class="title">自动编号</div>
      <div class="sub-title">自动为列标注下表</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataExpandWidth">
              <t-table-column type="index" width="60"/>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag"/>
              <t-table-column label="家乡" prop="home"/>
              <t-table-column label="工作经验" prop="exp"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-index/>
    </div>

    <div class="demo-block">
      <div class="title">单选</div>
      <div class="sub-title">带有单选功能的表格</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="dataNormal" highlight-current-row :current-change="currentChange" ref="t_table">
              <t-table-column type="index" width="60"/>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag"/>
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
      <table-select/>
    </div>

    <div class="demo-block">
      <div class="title">多选</div>
      <div class="sub-title">带有多选功能的表格</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="dataNormal" selection :selection-change="selectionChange" ref="t_table_selection">
              <t-table-column type="selection" width="55"/>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag"/>
            </t-table>
          </t-col>
        </t-row>
        <t-row>
          <t-col :span="24">
            <t-button @click="setSelectionRow([dataNormal[2], dataNormal[3]])">切换第二，三行</t-button>
            <t-button @click="setSelectionRow()">重置</t-button>
            <t-button @click="getSelectionRow()">获取当前选中值</t-button>
          </t-col>
        </t-row>
      </div>
      <table-selection/>
    </div>

    <div class="demo-block">
      <div class="title">自定义行内容</div>
      <div class="sub-title">通过 <code>slot-scope</code> 获取行变量，可直接解构获取</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-table :data="dataNormal" :body-max-height="200">
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag">
                <template slot-scope="{row}">
                  <t-tooltip :content="row.flag" theme="dark" position="left">
                    <t-tag>查看座右铭</t-tag>
                  </t-tooltip>
                </template>
              </t-table-column>
              <t-table-column label="未解构获取" prop="idx">
                <template slot-scope="scope">
                  索引：{{ scope.idx }}
                </template>
              </t-table-column>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-slot/>
    </div>

    <div class="demo-block">
      <div class="title">展开行</div>
      <div class="sub-title">如果想展示行数据以外的其他相关行信息，可使用展开行</div>
      <div class="source">
        <t-row>
          <t-col :span="24">
            <t-table :data="dataNormal">
              <t-table-column width="60" type="expand">
                <template slot-scope="{row}">
                  <t-row>
                    <t-col>
                      <h1>个人简历</h1>
                    </t-col>
                    <t-col :span="12">
                      <p>姓名：{{ row.name }}</p>
                      <p>年龄：{{ row.age }}</p>
                      <p>爱好：{{ row.habit }}</p>
                      <p>座右铭：{{ row.flag }}</p>
                    </t-col>
                    <t-col :span="12">
                      <img src="/static/img/TV.278ceeb.jpg" alt="" style="width: 100px; height: 100px;display: block">
                    </t-col>
                  </t-row>
                </template>
              </t-table-column>
              <t-table-column label="姓名" prop="name"/>
              <t-table-column label="年龄" prop="age"/>
              <t-table-column label="爱好" prop="habit"/>
              <t-table-column label="座右铭" prop="flag"/>
            </t-table>
          </t-col>
        </t-row>
      </div>
      <table-expand/>
    </div>

    <div class="api-docs">
      <t-divider content="Table Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tableApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
    <div class="api-docs">
      <t-divider content="Table Functions" class="document-divider"/>
      <div class="source">
        <t-table :data="tableFunctions">
          <t-table-column label="属性" prop="name" :width="200"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="传入参数" prop="args" :width="250"/>
          <t-table-column label="返回参数" prop="returnArgs"/>
        </t-table>
      </div>
    </div>
    <div class="api-docs">
      <t-divider content="Table Column Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tableColumnApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="200"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import tableNormal from '../documents/table/table-normal.md'
import tableLoading from '../documents/table/table-loading.md'
import tableStripe from '../documents/table/table-stripe.md'
import tableBorder from '../documents/table/table-border.md'
import tableClass from '../documents/table/table-class.md'
import tableColumnHeader from '../documents/table/table-column-header.md'
import tableColumn from '../documents/table/table-column.md'
import tableHeightChange from '../documents/table/table-height-change.md'
import tableHeader from '../documents/table/table-header.md'
import tableSelect from '../documents/table/table-select.md'
import tableSelection from '../documents/table/table-selection.md'
import tableSort from '../documents/table/table-sort.md'
import tableExpand from '../documents/table/table-expand.md'
import tableIndex from '../documents/table/table-index.md'
import tableSlot from '../documents/table/table-slot.md'

export default {
  components: {
    tableNormal,
    tableLoading,
    tableStripe,
    tableBorder,
    tableClass,
    tableColumnHeader,
    tableColumn,
    tableHeightChange,
    tableHeader,
    tableSelection,
    tableSelect,
    tableSort,
    tableExpand,
    tableIndex,
    tableSlot
  },
  data () {
    return {
      tableApis: [
        {name: 'data', desc: '列表数据', type: 'Array', choice: '—', default: '—'},
        {name: 'loading', desc: '加载状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'stripe', desc: '斑马条纹', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'border', desc: '表格边框', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'highlight-current-row', desc: '开启单选', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'selection', desc: '开启多选', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'body-height', desc: '表格高度', type: 'Number', choice: '—', default: '—'},
        {name: 'body-max-height', desc: '流体最大高度', type: 'Number', choice: '—', default: '—'},
        {name: 'body-min-height', desc: '流体最小高度', type: 'Number', choice: '—', default: '—'},
        {name: 'row-class-name', desc: '添加行类名', type: 'Function', choice: '—', default: '—'},
        {name: 'current-change', desc: '单选时值变化回调', type: 'Function', choice: '—', default: '—'},
        {name: 'selection-change', desc: '单选时值变化回调', type: 'Function', choice: '—', default: '—'}
      ],
      tableColumnApis: [
        {name: 'prop', desc: '列key值', type: 'String', choice: '—', default: '—'},
        {name: 'label', desc: '列表头', type: 'String', choice: '—', default: ''},
        {name: 'type', desc: '列类型', type: 'String', choice: 'index/selection/expand', default: '—'},
        {name: 'width', desc: '列宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'fixed', desc: '固定左边', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'fixed-right', desc: '固定右边', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'sort-method', desc: '列排序规则', type: 'Function', choice: '—', default: '—'}
      ],
      tableFunctions: [
        {name: 'setCurrentRow', desc: '单选是选中指定行', args: '对应的行索引（Number/String）', returnArgs: '—'},
        {name: 'toggleRowSelection', desc: '切换多选时选项状态', args: '对应的行对象（Array）', returnArgs: '—'},
        {name: 'getSelectionRows', desc: '获取多选结果集', args: '—', returnArgs: '当前选中结果集'}
      ],
      dataNormal: [
        {name: '小红', age: '20', habit: '网球', flag: '人生没有回头路'},
        {name: '小李', age: '18', habit: '篮球，游戏', flag: '为中华民族的振兴而编程'},
        {name: '小张', age: '32', habit: '羽毛球，跑步', flag: '吃吃喝喝开开心心，一切平安才是福'},
        {name: '小王', age: '22', habit: '游泳，健身', flag: '身体是革命的本钱'},
        {name: '小刘', age: '29', habit: '看电视，玩ps', flag: '休息是为了更好的工作'},
        {name: '小胡', age: '20', habit: '呵呵呵', flag: '哼哼哈哈嘿嘿呼呼'}
      ],
      dataNormal2: [
        {name: '小红', age: '20', habit: '网球', flag: '人生没有回头路'},
        {name: '小李', age: '18', habit: '篮球，游戏', flag: '为中华民族的振兴而编程'},
        {name: '小张', age: '32', habit: '羽毛球，跑步', flag: '吃吃喝喝开开心心，一切平安才是福'},
        {name: '小王', age: '22', habit: '游泳，健身', flag: '身体是革命的本钱'},
        {name: '小刘', age: '29', habit: '看电视，玩ps', flag: '休息是为了更好的工作'},
        {name: '小胡', age: '20', habit: '呵呵呵', flag: '哼哼哈哈嘿嘿呼呼'}
      ],
      dataExpandWidth: [
        {name: '小红', age: '20', habit: '网球', flag: '人生没有回头路', home: '北京丰台', exp: '3年'},
        {name: '小李', age: '18', habit: '篮球，游戏', flag: '为中华民族的振兴而编程', home: '广东深圳', exp: '实习'},
        {name: '小张', age: '32', habit: '羽毛球，跑步', flag: '吃吃喝喝开开心心，一切平安才是福', home: '山西太原', exp: '12年'},
        {name: '小王', age: '22', habit: '游泳，健身', flag: '身体是革命的本钱', home: '四川成都', exp: '3年'},
        {name: '小刘', age: '29', habit: '看电视，玩ps', flag: '休息是为了更好的工作', home: '甘肃兰州', exp: '8年'},
        {name: '小胡', age: '20', habit: '呵呵呵', flag: '哼哼哈哈嘿嘿呼呼', home: '河北沧州', exp: '1年'}
      ],
      data: [
        {name: '北京烤鸭', price: '20.00', rank: '1'},
        {name: '宫保鸡丁', price: '19.90', rank: '2'},
        {name: '冷吃牛肉', price: '25.00', rank: '3'},
        {name: '京酱肉丝', price: '32.00', rank: '4'}
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
      if (rowIndex === 2) return 'row-success'
      if (rowIndex === 4) return 'row-danger'
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
      return a.age > b.age
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
    setRow (idx) {
      this.$refs.t_table.setCurrentRow(idx)
    },
    setSelectionRow (row) {
      console.log(this.$refs.t_table_selection)
      this.$refs.t_table_selection.toggleRowSelection(row)
    },
    getSelectionRow () {
      console.log(this.$refs.t_table_selection.getSelectionRows())
    }
  }
}
</script>

<style scoped>

</style>
