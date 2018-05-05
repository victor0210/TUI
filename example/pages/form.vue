<template>
  <div>
    <guide title="From 表单" des="可验证用户输入，提高用户更好的表单输入体验"/>
    <div class="demo-block">
      <div class="title">普通表单</div>
      <div class="sub-title">表单的基本使用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-form>
              <t-form-item label="姓名">
                <t-input/>
              </t-form-item>
              <t-form-item label="年龄">
                <t-input-number/>
              </t-form-item>
              <t-form-item label="电话">
                <t-input type="number"/>
              </t-form-item>
              <t-form-item label="婚否">
                <t-switch inactive-text="未婚" active-text="已婚"/>
              </t-form-item>
              <t-form-item label="城市">
                <t-checkbox-group>
                  <t-checkbox label="上海" val="shanghai"/>
                  <t-checkbox label="北京" val="beijing"/>
                  <t-checkbox label="广州" val="guangzhou"/>
                  <t-checkbox label="四川" val="sichuan"/>
                </t-checkbox-group>
              </t-form-item>
              <t-form-item>
                <t-submit type="primary" @click="submit">提交</t-submit>
              </t-form-item>
            </t-form>
          </t-col>
        </t-row>
      </div>
      <form-normal/>
    </div>

    <div class="demo-block">
      <div class="title">表单排版</div>
      <div class="sub-title">根据不同需求设置不同的表单排版，改变排版时下一个demo的也会变化，感受更直观哦</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-radio-group v-model="style">
              <t-radio label="左对齐" val="left"/>
              <t-radio label="右对齐" val="right"/>
              <t-radio label="竖直排列" val="vertical"/>
              <t-radio label="行内排列" val="oneline"/>
            </t-radio-group>
          </t-col>
          <div class="half" style="height: 400px">
            <t-divider content="设置form-item" content-align="left"/>
            <t-form>
              <t-form-item label="姓名:" :layout="style">
                <t-input/>
              </t-form-item>

              <t-form-item label="年龄:" :layout="style">
                <t-input/>
              </t-form-item>

              <t-form-item :layout="style">
                <t-button type="primary">提交</t-button>
              </t-form-item>
            </t-form>
          </div>
          <div class="half" style="height: 400px">
            <t-divider content="设置form" content-align="left"/>
            <t-form :layout="style">
              <t-form-item label="覆盖了父级样式:" layout="vertical">
                <t-input/>
              </t-form-item>

              <t-form-item label="年龄:">
                <t-input/>
              </t-form-item>

              <t-form-item>
                <t-button type="primary">提交</t-button>
              </t-form-item>
            </t-form>
          </div>
        </t-row>
      </div>
      <form-layout/>
    </div>

    <div class="demo-block">
      <div class="title">表单验证</div>
      <div class="sub-title">下面是一个比较全的表单验证demo</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-form :rules="rules">
              <t-form-item label="姓名" name="name" :layout="style">
                <t-input v-model="form.name" placeholder="name"/>
              </t-form-item>

              <t-form-item label="电话" trigger="change" name="phone" :layout="style">
                <t-input v-model="form.phone" type="number" placeholder="phone"/>
              </t-form-item>

              <t-form-item label="邮箱" name="email" :layout="style">
                <t-input v-model="form.email" placeholder="email"/>
              </t-form-item>

              <t-form-item label="爱好" name="habit" :layout="style">
                <t-select v-model="form.habit" placeholder="habit" multiple editable>
                  <t-option label="篮球" val="basketball"/>
                  <t-option label="足球" val="football"/>
                  <t-option label="游泳" val="swim"/>
                </t-select>
              </t-form-item>

              <t-form-item label="身份" name="role" :layout="style">
                <t-select v-model="form.role" placeholder="role">
                  <t-option label="学生" val="student"/>
                  <t-option label="老师" val="teacher"/>
                </t-select>
              </t-form-item>

              <t-form-item label="身价" name="price" :layout="style">
                <t-cascader :options="option" v-model="form.price" placeholder="price"/>
              </t-form-item>

              <t-form-item label="生日" name="birthday" :layout="style">
                <t-date-picker v-model="form.birthday" placeholder="birthday"/>
              </t-form-item>

              <t-form-item label="时间" name="time" :layout="style">
                <t-time-picker v-model="form.time" placeholder="time"/>
              </t-form-item>

              <t-form-item label="城市" name="city" :layout="style">
                <t-checkbox-group v-model="form.city">
                  <t-checkbox label="上海" val="shanghai"/>
                  <t-checkbox label="北京" val="beijing"/>
                  <t-checkbox label="广州" val="guangzhou"/>
                  <t-checkbox label="四川" val="sichuan"/>
                </t-checkbox-group>
              </t-form-item>

              <t-form-item label="性别" name="sex" :layout="style">
                <t-radio-group v-model="form.sex">
                  <t-radio label="男" val="man"/>
                  <t-radio label="女" val="women"/>
                </t-radio-group>
              </t-form-item>

              <t-form-item :layout="style">
                <t-submit type="primary" @click="submitForm">提交</t-submit>
                <t-reset>重置</t-reset>
              </t-form-item>

            </t-form>
          </t-col>
        </t-row>
      </div>
      <form-validator/>
    </div>

    <div class="api-docs">
      <t-divider content="Form Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="formApis">
          <t-table-column label="属性" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="250"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Form Item Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="formItemApis">
          <t-table-column label="属性" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="250"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="250"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import formNormal from '../documents/form/form-normal.md'
import formLayout from '../documents/form/form-layout.md'
import formValidator from '../documents/form/form-validator.md'
export default {
  components: {
    formNormal,
    formLayout,
    formValidator
  },
  data () {
    return {
      form: {
        name: '',
        age: '',
        city: '',
        phone: '',
        sex: '',
        role: '',
        birthday: '',
        price: [],
        habit: []
      },
      rules: {
        name: {type: 'string', required: true},
        phone: {required: true, len: 11},
        role: {required: true},
        city: {type: 'array', required: true},
        birthday: {required: true},
        time: {required: true},
        sex: {required: true},
        price: {required: true},
        habit: {required: true}
      },
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
      ],
      style: 'left',
      layout: String,
      formApis: [
        {name: 'rules', desc: '验证规则', type: 'Object', choice: '—', default: '—'},
        {name: 'layout', desc: '表单排列方式', type: 'String', choice: 'right/oneline/vertical', default: '—'}
      ],
      formItemApis: [
        {name: 'label', desc: 'item标题', type: 'String', choice: '—', default: '—'},
        {name: 'name', desc: '验证所需rules对象的key', type: 'String', choice: '—', default: '—'},
        {name: 'layout', desc: '表单排列方式（会覆盖form的layout）', type: 'String', choice: 'right/oneline/vertical', default: '—'},
        {name: 'trigger', desc: '验证触发方式', type: 'String', choice: 'blur/change', default: 'blur'}
      ]
    }
  },
  methods: {
    submit () {
      this.$TMessage.show({
        title: '提交成功!',
        showIcon: true
      })
    },
    submitForm (validator) {
      validator.validate(this.form, (errors, fields) => {
        if (!errors) {
          // pass validate and do something
          this.$TMessage.show({
            title: '提交成功!',
            showIcon: true
          })
        } else {
          this.$TMessage.show({
            type: 'danger',
            title: '验证失败!',
            showIcon: true
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
