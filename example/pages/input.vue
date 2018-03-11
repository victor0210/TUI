<template>
    <div>
      <guide title="输入框" des="用于用户输入信息"/>
        <div class="demo-block">
          <div class="subtitle">普通输入框</div>
          <div class="source">
            <t-row :gutter="20">
                <t-col :span="5"><t-input placeholder="请输入"/></t-col>
            </t-row>
          </div>
          <input-md></input-md>
        </div>

        <div class="demo-block">
          <div class="subtitle">设置宽度输入框</div>
          <div class="source">
            <t-row :gutter="20">
                <t-col :span="8"><t-input placeholder="请输入" :width="200"/></t-col>
                <t-col :span="8"><t-input placeholder="请输入" :width="150"/></t-col>
                <t-col :span="8"><t-input placeholder="请输入" :width="120"/></t-col>
            </t-row>
          </div>
          <inputW></inputW>
        </div>

        <div class="demo-block">
          <div class="subtitle">组合按钮输入框</div>
          <div class="source">
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
        </div>

        <div class="demo-block">
          <div class="subtitle">组合文字图标输入框</div>
          <div class="source">
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
        </div>

        <div class="demo-block">
          <div class="subtitle">任意组合</div>
          <div class="source">
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
