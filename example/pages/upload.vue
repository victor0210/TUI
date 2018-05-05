<template>
  <div>
    <guide title="Upload 上传组件" des="用于用户操作文件上传的控件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">上传组件的基本用法</div>
      <div class="source">
        <div class="half" style="min-height: 300px">
          <t-divider content="上传成功" content-align="left"/>
          <t-upload action="http://upload.test/index.php"
                    :on-upload-success="uploadSuccess"
                    :on-upload-error="uploadError"
          >
            <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
            <template slot="tip">
              Tips: 上传成功后可清除
            </template>
          </t-upload>
        </div>
        <div class="half" style="min-height: 300px">
          <t-divider content="上传失败" content-align="left"/>
          <t-upload action="http://upload.test/error.php"
                    :on-upload-success="uploadSuccess"
                    :on-upload-error="uploadError"
          >
            <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
            <template slot="tip">
              Tips: 上传失败的文件可快捷重传
            </template>
          </t-upload>
        </div>
      </div>
      <upload-normal/>
    </div>

    <div class="demo-block">
      <div class="title">拖拽上传</div>
      <div class="sub-title">TUI提供了默认的拖拽区域样式，您也可以添加 <code>默认插槽</code> 覆盖默认样式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-upload action="http://upload.test/index.php" drag/>
          </t-col>
        </t-row>
      </div>
      <upload-drag/>
    </div>

    <div class="demo-block">
      <div class="title">手动上传</div>
      <div class="sub-title">手动点击上传文件，默认为自动上传</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-upload action="http://upload.test/index.php" :auto-upload="false">
              <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
              <template slot="tip">
                Tips: 选择文件后手动点击文件item右侧上传按钮
              </template>
            </t-upload>
          </t-col>
        </t-row>
      </div>
      <upload-auto-load/>
    </div>

    <div class="demo-block">
      <div class="title">文件列表限制</div>
      <div class="sub-title">限制文件个数并捕获超出事件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-upload action="http://upload.test/index.php"
              :limit="2"
              :on-exceed="onExceed"
            >
              <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
              <template slot="tip">
                Tips: 最多上传2个文件
              </template>
            </t-upload>
          </t-col>
        </t-row>
      </div>
      <upload-limit/>
    </div>

    <div class="demo-block">
      <div class="title">事件钩子</div>
      <div class="sub-title">自定义文件验证，<code>TFile</code> 对象为TUI包装后的文件对象</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-upload action="http://upload.test/index.php"
                      :before-upload="beforeUpload"
                      :before-remove="beforeRemove"
                      :on-remove="onRemove"
                      :on-file-list-change="onFileListChange"
            >
              <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
              <template slot="tip">
                Tips: 自定义限制只能上传两个文件
              </template>
            </t-upload>
          </t-col>
        </t-row>
      </div>
      <upload-event/>
    </div>

    <div class="demo-block">
      <div class="title">图片预览列表</div>
      <div class="sub-title">文件列表会以图片列表方式展示</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-upload action="http://upload.test/index.php"
                      list-type="pic"
                      accept="image/*"
                      :on-preview="onPreview"
            >
              <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
              <template slot="tip">
                Tips: 点击上传后的图片可放大预览
              </template>
            </t-upload>
          </t-col>
        </t-row>
      </div>
      <upload-preview/>
    </div>

    <div class="demo-block">
      <div class="title">上传文件夹</div>
      <div class="sub-title">上传文件夹，内嵌文件夹会递归上传</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-upload action="http://upload.test/index.php"
                      webkitdirectory
            >
              <t-button icon="fa fa-folder" type="sm">上传文件夹</t-button>
              <template slot="tip">
                Tips: 只能上传文件夹
              </template>
            </t-upload>
          </t-col>
        </t-row>
      </div>
      <upload-directory/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="uploadApis">
          <t-table-column label="属性" prop="name" :width="200"/>
          <t-table-column label="描述" prop="desc" :width="180"/>
          <t-table-column label="类型" prop="type" :width="140"/>
          <t-table-column label="可选值" prop="choice" :width="100"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

  </div>
</template>

<script>
import UploadNormal from '../documents/upload/upload-normal.md'
import UploadDrag from '../documents/upload/upload-drag.md'
import UploadAutoLoad from '../documents/upload/upload-autoupload.md'
import UploadLimit from '../documents/upload/upload-limit.md'
import UploadEvent from '../documents/upload/upload-event.md'
import UploadPreview from '../documents/upload/upload-preview.md'
import UploadDirectory from '../documents/upload/upload-directory.md'

export default {
  components: {
    UploadNormal,
    UploadDrag,
    UploadAutoLoad,
    UploadLimit,
    UploadEvent,
    UploadPreview,
    UploadDirectory
  },

  data () {
    return {
      uploadApis: [
        {name: 'action', desc: '文件上传地址', type: 'String（必填）', choice: '—', default: '—'},
        {name: 'name', desc: '原生属性', type: 'String', choice: '—', default: '—'},
        {name: 'method', desc: '请求方式', type: 'String', choice: 'post/put', default: 'post'},
        {name: 'accept', desc: '原生属性，上传文件类型', type: 'String', choice: '—', default: '—'},
        {name: 'list-type', desc: '文件列表类型', type: 'String', choice: 'pic', default: '—'},
        {name: 'headers', desc: '请求头', type: 'Object', choice: '—', default: '{"Content-Type": "multipart/form-data; charset=utf-8;"}'},
        {name: 'limit', desc: '上传文件个数限制', type: 'Number', choice: '—', default: '—'},
        {name: 'with-credentials', desc: '支持发送 cookie', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'auto-upload', desc: '自动上传', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'multiple', desc: '多文件上传', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'drag', desc: '拖动上传', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'disabled', desc: '禁用状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'webkitdirectory', desc: '支持上传文件夹', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'show-file-list', desc: '展示文件里婊', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'before-upload', desc: '上传前验证', type: 'Function', choice: '—', default: '—'},
        {name: 'before-remove', desc: '删除前验证', type: 'Function', choice: '—', default: '—'},
        {name: 'on-upload-success', desc: '上传成功回调', type: 'Function', choice: '—', default: '—'},
        {name: 'on-upload-error', desc: '上传失败回调', type: 'Function', choice: '—', default: '—'},
        {name: 'on-remove', desc: '文件删除回调', type: 'Function', choice: '—', default: '—'},
        {name: 'on-exceed', desc: '文件上传超出limit回调', type: 'Function', choice: '—', default: '—'},
        {name: 'on-file-list-change', desc: '文件列表变化回调', type: 'Function', choice: '—', default: '—'},
        {name: 'on-preview', desc: '文件预览回调', type: 'Function', choice: '—', default: '—'}
      ]
    }
  },

  methods: {
    uploadSuccess (resp) {
      console.log(resp, 'success')
    },

    uploadError (err) {
      console.log(err, 'error')
    },

    beforeUpload (fileList, tfile) {
      if (fileList.length < 2) {
        this.$TMessage.show({
          title: '验证通过',
          type: 'success',
          showIcon: true
        })

        return true
      } else {
        this.$TMessage.show({
          title: '验证未通过',
          type: 'danger',
          showIcon: true
        })

        return false
      }
    },

    beforeRemove (fileList, tfile) {
      if (fileList.length > 1) {
        return true
      } else {
        this.$TMessage.show({
          title: '文件删除前验证失败',
          type: 'danger',
          showIcon: true
        })
        return false
      }
    },

    onRemove (fileList, tfile) {
      this.$TMessage.show({
        title: '文件删除成功',
        type: 'success',
        showIcon: true
      })
    },

    onFileListChange (fileList) {
      console.log('fileList change')
    },

    onExceed (tfile) {
      console.log('文件列表个数超出', tfile)
    },

    onPreview (tfile) {
      console.log('preview:', tfile.file.name)
    }
  }
}
</script>

<style></style>
