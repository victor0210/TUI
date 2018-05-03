<template>
    <t-row>
        <t-col :span="6" class="logoCol">
          <a href="/#"><img src="../assets/TV.jpg" alt="" class="logo-img"></a>
          <span style="font-size: 20px; color: #606060; font-family: 'Apple Chancery'">Think-UI</span>
        </t-col>
      <t-col :span="8" class="navCol">
        <ul>
          <li>
            <a href="#">
              <span>指南</span>
            </a>
          </li>
          <li>
            <router-link to="/components" class="header-link">组件</router-link>
          </li>
          <li>
            <a href="#">
              <span>教程</span>
            </a>
          </li>
        </ul>
      </t-col>
        <t-col :span="10">
            <div class="search">
                <t-input placeholder="搜索组件" prefix-icon="fa fa-search"></t-input>
            </div>
        </t-col>
    </t-row>
</template>
<script>
export default {
}
</script>
<style lang="scss">
    @import "../styles/header";
</style>
