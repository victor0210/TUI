<template>
  <div>
    <guide title="Input 输入框" des="用于用户输入的组件"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">基本的input组件</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24"><t-input placeholder="请输入" width="150px"/></t-col>
        </t-row>
      </div>
      <input-md/>
    </div>

    <div class="demo-block">
      <div class="title">组合按钮</div>
      <div class="sub-title">配合按钮组成更针对业务需求的输入框，如：搜索</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-input placeholder="Search ...">
              <t-button slot="suffix" icon="fa fa-search" type="primary" @click="search" :loading="loading"></t-button>
            </t-input>
          </t-col>
          <t-col :span="8">
            <t-input placeholder="Search ..." prefix-icon="fa fa-search"/>
          </t-col>
        </t-row>
      </div>
      <input-button/>
    </div>

    <div class="demo-block">
      <div class="title">组合文字图标输入框</div>
      <div class="sub-title">除按钮外，也可加入相关的辅助性提示</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="8">
            <t-input placeholder="请输入">
              <p slot="prefix">www.</p>
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
      <input-icon/>
    </div>

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">TUI一共为您提供了四种按钮尺寸，分别是 lg 、default 、sm 、mini</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="6"><t-input placeholder="lg" size="lg"/></t-col>
          <t-col :span="6"><t-input placeholder="default"/></t-col>
          <t-col :span="6"><t-input placeholder="sm" size="sm"/></t-col>
          <t-col :span="6"><t-input placeholder="mini" size="mini"/></t-col>
        </t-row>
      </div>
      <input-size/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="apis">
          <t-table-column label="属性" prop="name" :width="120"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="250"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Slots" class="document-divider"/>
      <div class="source">
        <t-table :data="slots">
          <t-table-column label="name" prop="name" :width="200"/>
          <t-table-column label="描述" prop="desc"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="methods">
          <t-table-column label="事件" prop="name" :width="200"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="参数" prop="params"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import InputMd from '../documents/input/input.md'
import InputButton from '../documents/input/inputButton.md'
import InputIcon from '../documents/input/inputIcon.md'
import InputSize from '../documents/input/inputSize.md'

export default {
  components: {
    InputMd,
    InputButton,
    InputIcon,
    InputSize
  },
  data () {
    return {
      loading: false,
      apis: [
        {name: 'v-model', desc: '绑定值', type: 'String/Number', choice: '—', default: '—'},
        {name: 'type', desc: '类型', type: 'String', choice: 'text/number/textarea', default: 'text'},
        {name: 'width', desc: '宽度', type: 'String', choice: '—', default: '—'},
        {name: 'size', desc: '尺寸', type: 'String', choice: 'lg/sm/mini', default: '—'},
        {name: 'prefix-icon', desc: '头部图标', type: 'String', choice: '—', default: '—'},
        {name: 'prepend-icon', desc: '尾部图标', type: 'String', choice: '—', default: '—'},
        {name: 'placeholder', desc: '占位文本', type: 'String', choice: '—', default: '—'},
        {name: 'max', desc: '设置最大值', type: 'Number', choice: '—', default: '—'},
        {name: 'min', desc: '设置最小值', type: 'Number', choice: '—', default: '—'},
        {name: 'rows', desc: 'textarea行数', type: 'Number', choice: '—', default: '3'},
        {name: 'resize', desc: 'textarea可否调节尺寸', type: 'String', choice: 'none/both/horizontal/vertical', default: 'vertical'},
        {name: 'readonly', desc: '是否只读', type: 'Boolean', choice: '—', default: 'false'}
      ],
      slots: [
        {name: 'prefix', desc: '头部内容，可添加按钮，文本等'},
        {name: 'suffix', desc: '尾部内容，可添加按钮，文本等'}
      ],
      methods: [
        {name: 'focus', desc: '在输入框获得焦点时触发', params: 'event（事件对象）'},
        {name: 'blur', desc: '在输入框失去焦点时触发', params: 'event（事件对象）'},
        {name: 'change', desc: '在输入框值变化时触发', params: 'value（当前输入框的值）'}
      ]
    }
  },

  methods: {
    search () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$TMessage.show({
          'title': 'Search Complete!!'
        })
      }, 3000)
    }
  }
}
</script>
