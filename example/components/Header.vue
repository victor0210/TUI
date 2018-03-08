<template>
    <t-row>
        <t-col :span="10" class="logoCol">
          <a href="/#"><img src="../assets/logo.png" alt="" class="logo-img"></a>
        </t-col>
        <t-col :span="5">
            <div class="search">
                <t-input placeholder="搜索组件....">
                    <t-button slot="suffix" type="primary" icon="fa fa-search"></t-button>
                </t-input>
            </div>
        </t-col>
        <t-col :span="8" class="navCol">
            <ul>
                <li>
                    <a href="#">
                        <span>指南</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>组件</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>教程</span>
                    </a>
                </li>
            </ul>

        </t-col>
    </t-row>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
    @import "../styles/header";
</style>
