<template>
    <div>
        <h2>普通输入框</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="5"><t-input placeholder="请输入"/></t-col>
            </t-row>
        </div>
        <input-md></input-md>
        <h2>设置宽度输入框</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="8"><t-input placeholder="请输入" :width="100"/></t-col>
                <t-col :span="8"><t-input placeholder="请输入" :width="200"/></t-col>
                <t-col :span="8"><t-input placeholder="请输入" :width="300"/></t-col>
            </t-row>
        </div>
        <inputW></inputW>
        <h2>组合按钮输入框</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="5">
                    <t-input placeholder="default">
                        <t-button slot="suffix" icon="fa fa-search"></t-button>
                    </t-input>
                </t-col>
                <t-col :span="5">
                    <t-input placeholder="primary">
                        <t-button slot="suffix" type="primary" icon="fa fa-search"></t-button>
                    </t-input>
                </t-col>
            </t-row>
        </div>
        <input-button></input-button>
        <h2>组合文字图标输入框</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="8">
                    <t-input placeholder="请输入">
                        <p slot="prefix">www.</p>
                    </t-input>
                </t-col>
                <t-col :span="8">
                    <t-input placeholder="请输入">
                        <i slot="suffix" class="fa fa-circle-notch fa-spin"></i>
                    </t-input>
                </t-col>
                <t-col :span="8">
                    <t-input placeholder="请输入">
                        <p slot="prefix">http://</p>
                        <p slot="suffix">.com</p>
                    </t-input>
                </t-col>
            </t-row>
        </div>
        <input-icon></input-icon>
        <h2>任意组合</h2>
        <div class="demo-block">
            <t-row :gutter="20">
                <t-col :span="8">
                    <t-input placeholder="请输入" prependIcon="fa fa-calendar">
                        <p slot="prefix">calendar</p>
                    </t-input>
                </t-col>
                <t-col :span="8">
                    <t-input placeholder="请输入" prefixIcon="fa fa-search">
                        <t-button slot="suffix">搜索</t-button>
                    </t-input>
                </t-col>
                <t-col :span="8">
                    <t-input placeholder="请输入">
                        <t-button slot="suffix" type="primary" icon="fa fa-search"></t-button>
                        <t-button slot="suffix" type="danger" icon="fa fa-eraser"></t-button>
                    </t-input>
                </t-col>
            </t-row>
        </div>
        <input-any></input-any>
    </div>
</template>
<script>
import InputMd from '../documents/input/input.md'
import InputW from '../documents/input/inputW.md'
import InputButton from '../documents/input/inputButton.md'
import InputIcon from '../documents/input/inputIcon.md'
import InputAny from '../documents/input/inputAny.md'
export default {
  components: {
    InputMd,
    InputW,
    InputButton,
    InputIcon,
    InputAny
  }
}
</script>
