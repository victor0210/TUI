<template>
  <div class="t-upload">
    <div class="t-upload__trigger" @click="() => {$refs.upload.click()}">
      <slot></slot>
    </div>
    <div class="t-upload__file-list">
      <div class="t-upload__file-info" v-for="(f, idx) in fileList" :key="idx">
        <div class="t-upload__file-name">
          <span><i class="fa fa-file-alt"></i> {{ f.name }}</span>
          <i class="fa fa-times"></i>
        </div>
        <div class="t-upload__file-progress">
          <t-progress :percentage="uploadPercentage"/>
        </div>
      </div>
    </div>
    <input type="file" style="display: none" ref="upload" @change="onFileLoad">
  </div>
</template>

<script>
import Uploader from './uploader'
export default {
  name: 't-upload',

  data () {
    return {
      fileList: [],
      uploadPercentage: 50,
      uploader: null
    }
  },

  props: {
    action: String,
    method: {
      type: String,
      default: 'post'
    },
    //  input name
    name: {
      type: String,
      default: 'file'
    },
    headers: {},

    autoUpload: {
      type: Boolean,
      default: true
    }
  },

  mounted () {
    this.uploader = new Uploader(
      this.action,
      this.method,
      this.name,
      this.headers
    )
  },

  //  TODO: 1.select; => single / multiple / draggable
  //  TODO: 2.validate; => user validate / default config params
  //  TODO: 3.push fileList => autoUpload && upload => then(show success/deletable) / catch(show error/can re-upload)
  //  TODO: 4.delete file
  methods: {
    onFileLoad (e) {
      let file = e.target.files[0]
      this.fileList.push(e.target.files[0])

      if (this.autoUpload) this.uploadFile(file)
    },

    uploadFile (file) {
      this.uploader.upload(file)
        .then(resp => {
          this.$emit('on-upload-success', resp)
        })
        .catch(err => {
          this.$emit('on-upload-error', err)
        })
    }
  }
}
</script>
