<template>
  <div>
    <guide title="表单" des="可验证用户输入，提高用户更好的表单输入体验"/>
    <div class="demo-block">
      <div class="subtitle">普通表单</div>
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
              <t-form-item label="城市">
                <t-checkbox-group>
                  <t-checkbox label="上海" val="shanghai"></t-checkbox>
                  <t-checkbox label="北京" val="beijing"></t-checkbox>
                  <t-checkbox label="广州" val="guangzhou"></t-checkbox>
                  <t-checkbox label="四川" val="sichuan"></t-checkbox>
                </t-checkbox-group>
              </t-form-item>
            </t-form>
          </t-col>
        </t-row>
      </div>
      <m-d></m-d>
    </div>

    <div class="demo-block">
      <div class="subtitle">表单排版</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-radio-group v-model="style">
              <t-radio label="左对齐" val="left"></t-radio>
              <t-radio label="右对齐" val="right"></t-radio>
              <t-radio label="顶部对齐" val="vertical"></t-radio>
              <t-radio label="行内排列" val="oneline"></t-radio>
            </t-radio-group>
          </t-col>
          <t-col :span="18">
            <t-form>
              <t-form-item label="姓名:" :oneline="style === 'oneline'"
                           :inline="style === 'left' || style === 'right'"
                           :label-right="style === 'right'"
                           :vertical="style === 'vertical'"
              >
                <t-input/>
              </t-form-item>

              <t-form-item label="年龄:" :oneline="style === 'oneline'"
                           :inline="style === 'left' || style === 'right'"
                           :label-right="style === 'right'"
                           :vertical="style === 'vertical'">
                <t-input/>
              </t-form-item>

              <t-form-item :oneline="style === 'oneline'"
                           :inline="style === 'left' || style === 'right'"
                           :label-right="style === 'right'"
                           :vertical="style === 'vertical'">
                <t-button type="primary">提交</t-button>
              </t-form-item>
            </t-form>
          </t-col>
        </t-row>
      </div>
      <m-d></m-d>
    </div>

    <div class="demo-block">
      <div class="subtitle">表单验证</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-form :rules="rules">
              <t-form-item label="姓名" name="name" trigger="change">
                <t-input v-model="form.name" placeholder="name"/>
              </t-form-item>

              <t-form-item label="电话" name="phone" trigger="change">
                <t-input v-model="form.phone" type="number" placeholder="phone"/>
              </t-form-item>

              <t-form-item label="邮箱" name="email">
                <t-input v-model="form.email" placeholder="email"/>
              </t-form-item>

              <t-form-item label="爱好" name="habit" trigger="change">
                <t-select v-model="form.habit" placeholder="habit" multiple editable>
                  <t-option label="篮球" val="basketball"></t-option>
                  <t-option label="足球" val="football"></t-option>
                  <t-option label="游泳" val="swim"></t-option>
                </t-select>
              </t-form-item>

              <t-form-item label="身份" name="role" trigger="change">
                <t-select v-model="form.role" placeholder="role">
                  <t-option label="学生" val="student"></t-option>
                  <t-option label="老师" val="teacher"></t-option>
                </t-select>
              </t-form-item>

              <t-form-item label="身价" name="price" trigger="change">
                <t-cascader :options="option" v-model="form.price" placeholder="price"/>
              </t-form-item>

              <t-form-item label="生日" name="birthday" trigger="change">
                <t-date-picker v-model="form.birthday" placeholder="birthday"/>
              </t-form-item>

              <t-form-item label="时间" name="time" trigger="change">
                <t-time-picker v-model="form.time" placeholder="time"/>
              </t-form-item>

              <t-form-item label="城市" name="city" trigger="change">
                <t-checkbox-group v-model="form.city">
                  <t-checkbox label="上海" val="shanghai"></t-checkbox>
                  <t-checkbox label="北京" val="beijing"></t-checkbox>
                  <t-checkbox label="广州" val="guangzhou"></t-checkbox>
                  <t-checkbox label="四川" val="sichuan"></t-checkbox>
                </t-checkbox-group>
              </t-form-item>

              <t-form-item label="性别" name="sex" trigger="change">
                <t-radio-group v-model="form.sex">
                    <t-radio label="男" val="man"></t-radio>
                    <t-radio label="女" val="women"></t-radio>
                </t-radio-group>
              </t-form-item>

              <t-form-item>
                <t-submit type="primary" @click="submitForm">提交</t-submit>
                <t-reset outline>重置</t-reset>
              </t-form-item>

            </t-form>
          </t-col>
        </t-row>
      </div>
      <m-d></m-d>
    </div>
  </div>
</template>

<script>
import MD from '../documents/date-picker/date-default-value.md'
export default {
  components: {
    MD
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
      style: 'left'
    }
  },
  methods: {
    submitForm (validator) {
      validator.validate(this.form, (errors, fields) => {
        if (!errors) {
          // pass validate and do something
          this.$Dialog.success({
            showFooter: false,
            msg: '验证通过!'
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
