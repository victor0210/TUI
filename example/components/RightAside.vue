<template>
    <ul class="right-aside">
        <li>
            <a href="#">按钮类型</a>
        </li>
        <li>
            <a href="#">图标按钮</a>
        </li>
        <li>
            <a href="#">按钮尺寸</a>
        </li>
        <li>
            <a href="#">按钮组合</a>
        </li>
    </ul>
</template>
<script>
    export default {}
</script>
<style lang="scss">
    .right-aside{
        ul{
            border-left: 1px solid #eeeeee;
            li{
                height: 25px;
                line-height: 25px;
                padding-left: 18px;
                a{
                    color: #333 !important;
                    font-size: 13px;
                }
                &:hover{
                    a{
                        color: red;
                    }
                }
            };
        }
    }
</style>