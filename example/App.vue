<template>
  <div id='app'>
    <t-back-top :bottom="120"/>
    <div id="toggle-issue-modal" @click="showModal = !showModal" :class="[
      showModal ? 'is-open' : ''
    ]">
      <template v-if="!showModal">
        反馈问题 <i class="fa fa-comment-alt"></i>
      </template>
      <template v-else>
        <i class="fa fa-times"></i>
      </template>
    </div>
    <t-modal side="right" :show.sync="showModal" :hide-on-click="false">
      <template slot="header">
        <div style="text-align: center">
          <img src="./assets/TV.jpg" alt="" style="width: 200px">
        </div>
        <h1 style="text-align: center">快速提交问题</h1>
        <p style="text-align: center; color: #f33816">以下表单只帮助生成issue，请在跳转后的github页面点击提交</p>
      </template>
      <template slot="body">
        <t-form :rules="rules">
          <t-form-item label="问题类型" name="type">
            <t-select v-model="form.type">
              <t-option :label="o" :val="o" v-for="o in typeList" :key="o"/>
            </t-select>
          </t-form-item>

          <t-form-item label="标题" name="title">
            <t-input v-model="form.title"/>
          </t-form-item>

          <t-form-item label="浏览器版本" name="browserVersion">
            <t-input v-model="form.browserVersion"/>
          </t-form-item>

          <t-form-item label="node版本" name="nodeVersion">
            <t-input v-model="form.nodeVersion"/>
          </t-form-item>

          <t-form-item label="主要内容" name="content">
            <t-input v-model="form.content" type="textarea"/>
          </t-form-item>

          <t-form-item>
            <t-submit type="primary" @click="submitForm">提交</t-submit>
            <t-reset>重置</t-reset>
          </t-form-item>

        </t-form>
      </template>
      <template slot="footer">

      </template>
    </t-modal>
    <!--<a href="https://github.com/Bennnis/TUI" target="_blank" style="position: absolute; right: 60px; top: 100px; z-index: 10"><img-->
      <!--src="https://img.shields.io/github/stars/Bennnis/TUI.svg?style=social&label=Star&maxAge=2592000" alt=""></a>-->
    <t-layout flex-direction="vertical" class="frame">
      <t-row>
        <t-col :span="22" :offset="1">
          <t-header class="header" style="height: 53px;">
            <t-head></t-head>
            <div class="bottom-line"></div>
          </t-header>
          <t-layout flex-direction="row" class="container">
            <t-aside class="left-aside" width="250px">
              <left-aside></left-aside>
            </t-aside>
            <t-content class="main-content">
              <router-view></router-view>
            </t-content>
          </t-layout>
        </t-col>
      </t-row>
      <!--<t-footer>-->
        <!--<t-foot></t-foot>-->
      <!--</t-footer>-->
    </t-layout>
  </div>
</template>

<script>
import THead from './components/Header.vue'
import LeftAside from './components/LeftAside.vue'
import RightAside from './components/RightAside.vue'
import TFoot from './components/Footer.vue'

export default {
  name: 'App',

  components: {
    THead,
    LeftAside,
    RightAside,
    TFoot
  },

  data () {
    return {
      showModal: false,
      form: {
        type: '',
        title: '',
        browserVersion: '',
        nodeVersion: '',
        content: ''
      },
      rules: {
        type: {required: true},
        title: {required: true},
        browserVersion: {required: true},
        nodeVersion: {required: true},
        content: {required: true}
      },
      typeList: ['bug', 'enhancement', 'question', 'suggestion']
    }
  },

  methods: {
    submitForm (validator) {
      validator.validate(this.form, (errors, fields) => {
        if (!errors) {
          // pass validate and do something
          this.openFormatIssueUrl()
        } else {
          this.$TMessage.show({
            type: 'danger',
            content: '请将信息填写完整!',
            showIcon: true
          })
        }
      })
    },

    openFormatIssueUrl () {
      let body = []

      body.push('nodejs 版本号：' + this.form.nodeVersion)
      body.push('')
      body.push('---')
      body.push('')

      body.push(this.form.content)

      body.push('')
      body.push('<!-- label: ' + this.form.type + ' -->')
      body.push('<!-- by create-issue -->')
      body.push('<!-- 上面2个注释请不要删除，登录您的帐号提交 issue 即可 -->')

      window.open('https://github.com/bennnis/TUI/issues/new?title=' + encodeURIComponent(this.form.title) + '&body=' + encodeURIComponent(body.join('\n')))
    }
  }
}
</script>

<style lang="scss">
  @import '../src/styles/index.scss';
  @import "styles/app";
</style>
