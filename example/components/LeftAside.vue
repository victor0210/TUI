<template>
    <ul class="aside-item">
        <li class="t-menu-item">
            <a href="#">
                <span>安装</span>
            </a>
        </li>
        <li class="t-menu-item">
            <a href="#">
                <span>快速上手</span>
            </a>
        </li>
        <li class="t-menu-item">
            <a href="#">
                <span>概览</span>
            </a>
        </li>
        <li class="t-menu-item">
            <a href="#">
                <span>定制主题</span>
            </a>
        </li>
        <li class="t-menu-item">
            <a href="#">
                <span>更新日志</span>
            </a>
        </li>
        <div class="navigate-group">组件</div>
        <!--基础组件-->
        <li class="t-menu-item-group">
            <div class="t-menu-item-title">
                Basic
            </div>
            <ul class="t-menu-item-list">
                <li>
                    <a href="#">
                        <span>Button</span>
                        <span class="chinese">按钮</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Grid</span>
                        <span class="chinese">栅格</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Layout</span>
                        <span class="chinese">布局</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Color</span>
                        <span class="chinese">色彩</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Font</span>
                        <span class="chinese">字体</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Icon</span>
                        <span class="chinese">图标</span>
                    </a>
                </li>
            </ul>
        </li>
        <!--表单组件-->
        <li class="t-menu-item-group">
            <div class="t-menu-item-title">
                Form
            </div>
            <ul class="t-menu-item-list">
                <li>
                    <a href="#">
                        <span>Input</span>
                        <span class="chinese">输入框</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Radio</span>
                        <span class="chinese">单选框</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Layout</span>
                        <span class="chinese">布局</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>CheckBox</span>
                        <span class="chinese">多选框</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Table</span>
                        <span class="chinese">表格</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span>Form</span>
                        <span class="chinese">表单</span>
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
        .aside-item{
            border-right: 1px solid #eee;
            .t-menu-item{
                height: 45px;
                line-height: 45px;
                padding-left: 15px;
                a{
                    width: 100%;
                    height: 100%;
                    display: block;
                    color: #333 !important;
                    &:hover{
                        span{
                            color: red;
                        }
                    }
                }
            }
            .navigate-group{
                height: 45px;
                line-height: 45px;
                font-size: 18px;
            }
            .t-menu-item-group{
                line-height: 45px;
                padding-left: 15px;
                .t-menu-item-title{
                    color: #999;
                }
                .t-menu-item-list{
                    padding-left: 10px;
                    a{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #333 !important;
                        .chinese{
                            font-size: 13px;
                            color: #999;
                        }
                        &:hover{
                            span{
                                color: red;
                            }
                        }
                    }
                }
            }
        }
</style>