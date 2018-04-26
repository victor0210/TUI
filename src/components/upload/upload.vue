<template>
  <div class="t-upload">
    <div class="t-upload__trigger" @click="() => {$refs.upload.click()}">
      <slot></slot>
    </div>
    <div class="t-upload__tip" v-if="$slots.tip">
      <slot name="tip"></slot>
    </div>
    <div class="t-upload__file-list" v-if="showFileList">
      <div class="t-upload__file-info" v-for="(f, idx) in fileList" :key="idx">
        <div class="t-upload__file-name">
          <span class="t-upload__name"><i class="fa fa-file-alt"></i> {{ f.file.name }}</span>
          <span class="t-upload__alt">
            <i class="fa fa-check-circle" v-show="f.uploadSuccess"></i>
            <t-tooltip content="重新上传" ref="reupload" theme="dark" position="right">
              <i class="fa fa-exclamation-circle" v-show="f.uploadError" @click="uploadFile(f)"></i>
            </t-tooltip>
            <i class="fa fa-arrow-alt-circle-up" v-show="f.prepearUpload" @click="uploadFile(f)"></i>
            <i class="fa fa-times" v-show="!f.loading" @click="removeFile(f)"></i>
          </span>
        </div>
        <transition name="fly-top">
          <div class="t-upload__file-progress" v-if="f.loading">
            <t-progress :percentage="f.percent" v-if="f.loading"/>
         </div>
        </transition>
      </div>
    </div>
    <input type="file" style="display: none" ref="upload" :name="name" @change="onFileLoad" :multiple="multiple">
  </div>
</template>

<script>
import Uploader from './uploader'
import TFile from './tfile'
export default {
  name: 't-upload',

  data () {
    return {
      fileList: [],
      uploadPercentage: 50,
      uploader: null,
      uploadQueue: []
    }
  },

  props: {
    showFileList: {
      type: Boolean,
      default: true
    },
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
    headers: {
      default: () => {
        return {
          'Content-Type': 'multipart/form-data; charset=utf-8; boundary=' + Math.random().toString().substr(2)
        }
      }
    },

    autoUpload: {
      type: Boolean,
      default: true
    },

    multiple: Boolean,

    beforeUpload: Function,
    onUploadSuccess: Function,
    onUploadError: Function,
    beforeRemove: Function,
    onRemove: Function
  },

  mounted () {
    this.uploader = new Uploader(
      this.action,
      this.method,
      this.name,
      this.headers
    )
  },

  //  TODO: 1.select; => draggable
  //  TODO: 2.validate; => default config params
  methods: {
    onFileLoad (e) {
      let len = e.target.files.length
      for (let i = 0; i < len; i++) {
        this.uploadQueue.push(e.target.files[i])
      }

      e.target.value = null
    },

    // run file validate && auto upload
    run (file) {
      let tfile = new TFile(file)

      this.validate(tfile)
        .then(tfile => {
          this.fileList.push(tfile)
          this.autoUpload ? this.uploadFile(tfile) : (tfile.prepearUpload = true)
        })
    },

    validate (file) {
      return new Promise((resolve, reject) => {
        !this.beforeUpload && resolve(file)

        if (this.beforeUpload([...this.fileList], file)) {
          resolve(file)
        }
      })
    },

    uploadFile (tfile) {
      this.uploader.upload(tfile, this.handleProgressChange)
        .then(resp => {
          this.onUploadSuccess && this.onUploadSuccess(resp, tfile)
        })
        .catch(err => {
          this.onUploadError && this.onUploadError(err, tfile)
        })
    },

    removeFile (tfile) {
      if ((this.beforeRemove && this.beforeRemove([...this.fileList], tfile)) || !this.beforeRemove) {
        this.fileList.splice(this.fileList.indexOf(tfile), 1)
        this.onRemove([...this.fileList], tfile)
      }
    },

    handleProgressChange (e, file, uploadCircle) {
      switch (uploadCircle) {
        case 'start':
          file.prepearUpload = false
          file.uploadSuccess = false
          file.uploadError = false
          file.loading = true
          file.uploadPercentage = 0
          break
        case 'success':
          file.uploadSuccess = true
          setTimeout(() => {
            file.loading = false
          }, 1000)
          break
        case 'error':
          file.uploadError = true
          setTimeout(() => {
            file.loading = false
          }, 500)
          break
        default:
          file.percent = e.loaded / e.total * 100
      }
    }
  },
  watch: {
    uploadQueue (q) {
      if (q.length > 0) {
        this.run(q.pop())
      }
    }
  }
}
</script>
