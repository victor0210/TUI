:::demo
```html
<div class="demo-block">
    <t-button type="success" v-on:click="showSuccess()">success</t-button>
    <t-button type="info" @click="showInfo()">info</t-button>
    <t-button type="warning" @click="showWarning()">warning</t-button>
    <t-button type="danger" @click="showDanger()">danger</t-button>
</div>

<script>
export default {
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
```
:::
