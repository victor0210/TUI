<template>
  <div class="log-item">
    <t-divider :content="log.version" content-align="left"/>
    <p v-for="(i, idx) in log.list" :class="i.key" :key="idx">
      {{ idx + 1 }} . <i :class="icons[i.key]"></i> {{ i.content }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      icons: {
        fix: 'fa fa-wrench',
        feat: 'fa fa-thumbs-up'
      }
    }
  },
  props: {
    log: {}
  }
}
</script>

<style scoped>
.log-item {
  margin-top: 50px;
}
.fix {
  color: #f33816;
}
.feat {
  color: #5285f4;
}
p {
  line-height: 30px;
}
</style>
