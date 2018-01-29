<template>
    <t-row class="t-footer-row">
        <t-col :span="5" offset="2">
            <h4 class="footer-col-title">
                <span>GitHub</span>
            </h4>
            <ul>
                <li>iView</li>
                <li>iView Cli</li>
                <li>iView Admin</li>
                <li>iView Doc</li>
                <li>iView Project</li>
            </ul>
        </t-col>
        <t-col :span="5">
            <h4 class="footer-col-title">
                <span>相关站点</span>
            </h4>
            <ul>
                <li>iView</li>
                <li>iView Cli</li>
                <li>iView Admin</li>
                <li>iView Doc</li>
                <li>iView Project</li>
            </ul>
        </t-col>
        <t-col :span="5">
            <h4 class="footer-col-title">
                <span>社区</span>
            </h4>
            <ul>
                <li>iView</li>
                <li>iView Cli</li>
                <li>iView Admin</li>
                <li>iView Doc</li>
                <li>iView Project</li>
            </ul>
        </t-col>
        <t-col :span="5" offset="1" class="t-col-last">
            <img src="../assets/logo.png" alt="">
            <p>当前呈现版本：</p>
            <p>Vue.js 2.5.13, T-UI 1.1.0</p>
        </t-col>
    </t-row>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .t-footer-row{
        .t-col{
            padding: 20px 0;
            .footer-col-title{
                margin-bottom: 10px;
            }
            ul{
                li{
                    height: 20px;
                    font-size: 13px;
                    color: red;
                }
            }
        }
        .t-col-last{
            text-align: center;
            img{
                width: 40px;
            }
            p{
                font-size: 14px;
                color: #999;
            }
        }
    }
</style>