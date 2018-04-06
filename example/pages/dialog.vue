<template>
    <div>
      <guide title="提示框" des="提示框用于提醒用户一些信息"/>
        <div class="demo-block">
          <div class="subtitle">提示框</div>
          <div class="source">
            <t-button type="success" v-on:click="showSuccess()">success</t-button>
            <t-button type="info" @click="showInfo()">info</t-button>
            <t-button type="warning" @click="showWarning()">warning</t-button>
            <t-button type="danger" @click="showDanger()">danger</t-button>
          </div>
          <Dialog></Dialog>
        </div>
    </div>
</template>
<script>
import Dialog from '../documents/dialog/dialog.md'
export default {
  components: {
    Dialog
  },
  methods: {
    showSuccess () {
      this.$TDialog.success({
        showFooter: true
      })
    },
    showInfo () {
      this.$TDialog.info({
        showFooter: true
      })
    },
    showDanger () {
      this.$TDialog.danger({
        showFooter: true
      })
    },
    showWarning () {
      this.$TDialog.warning({
        showFooter: true
      })
    }
  }
}
</script>
