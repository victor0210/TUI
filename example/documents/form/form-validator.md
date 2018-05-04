:::demo
> `rules` 属性为验证规则，在 `form-item` 传入 `name` 为对应的key值，`trigger` 为验证触发方法，验证规则请遵循 <a href="https://github.com/yiminghe/async-validator">async-validator</a>，TUI重写了 `submit` 按钮 `reset`，submit接收一个方法，会传入validator对象作为参数，详情见demo
```html
<t-form :rules="rules">
  <t-form-item label="姓名" name="name" :layout="style">
    <t-input v-model="form.name" placeholder="name"/>
  </t-form-item>

  <t-form-item label="电话" name="phone" :layout="style">
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

<script>
export default {
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
      ]
    }
  },
  methods: {
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
```
:::
