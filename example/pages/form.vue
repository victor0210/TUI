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
                <t-input v-model="form.name"/>
              </t-form-item>
              <t-form-item label="年龄">
                <t-input-number v-model="form.age"/>
              </t-form-item>
              <t-form-item label="电话">
                <t-input v-model="form.phone"/>
              </t-form-item>
              <t-form-item label="电话">
                <t-select v-model="form.refer">
                  <t-option label="胡孟涛" val="h"></t-option>
                  <t-option label="贾亚丽" val="j"></t-option>
                </t-select>
              </t-form-item>
              <t-form-item label="城市">
                <t-checkbox-group v-model="form.city">
                  <t-checkbox label="上海" val="shanghai"></t-checkbox>
                  <t-checkbox label="北京" val="beijing"></t-checkbox>
                  <t-checkbox label="广州" val="guangzhou"></t-checkbox>
                  <t-checkbox label="四川" val="sichuan"></t-checkbox>
                </t-checkbox-group>
              </t-form-item>
              <t-form-item label="性别">
                <t-radio-group v-model="form.sex">
                  <t-radio label="男" val="man"></t-radio>
                  <t-radio label="女" val="women"></t-radio>
                </t-radio-group>
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
        refer: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
