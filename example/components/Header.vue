<template>
    <t-row>
        <t-col :span="4" class="logoCol">
            <a href="#" class="logo">
                <img src="../assets/logo.png" alt="" class="logo-img">
                <span class="logo-span">T-UI</span>
            </a>
        </t-col>
        <t-col :span="5">
            <div class="search">
                <t-input placeholder="搜索组件....">
                    <t-button slot="suffix" icon="fa fa-search"></t-button>
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
<style lang="scss">
        .logoCol{
            .logo{
                color: #333333;
                line-height: 60px;
                height: 60px;
                padding-left: 15px;
                .logo-img{
                    width: 25px;
                    vertical-align: middle;
                    margin-right: 5px;
                }
                .logo-span{
                    font-size: 20px;
                    font-style: italic;
                }
            }
        }
        .search{
            height: 40px;
            margin-top: 10px;
        }
        .navCol{
            float: right;
            ul{
                height: 60px;
                line-height: 60px;
                text-align: center;
                li{
                    float: left;
                    height:100%;
                    min-width: 72px;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #333;
                        &:hover{
                            border-top: 2px solid red;
                            span{
                                color: red;
                            }
                        }
                    }
                }
            }
        }
</style>