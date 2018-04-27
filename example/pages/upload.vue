<template>
  <div>
    <guide title="开关" des="用于输入的表单开关组件"/>
    <div class="demo-block">
      <div class="subtitle">Switch</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-upload
              :auto-upload="false"
              action="http://upload.test"
              :before-upload="beforeUpload"
              :on-upload-success="uploadSuccess"
              :on-upload-error="uploadError"
              :before-remove="beforeRemove"
              :on-remove="onRemove"
              webkitdirectory
              multiple
              draggable
            >
              <template slot="tip">
                只能上传jpg/png文件，且不超过500kb
              </template>
              <!--<t-button type="sm" icon="fa fa-cloud-upload-alt">上传</t-button>-->
            </t-upload>
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

  methods: {
    uploadSuccess (resp) {
      console.log(resp, 'success')
    },

    uploadError (err) {
      console.log(err, 'error')
    },

    beforeUpload (fileList, file) {
      return true
    },

    beforeRemove (fileList, file) {
      console.log('before remove', fileList, file)
      return true
    },
    onRemove (fileList, file) {
      console.log('on remove', fileList, file)
    }
  }
}
</script>

<style></style>
