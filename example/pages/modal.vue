<template>
  <div>
    <!--normal-->
    <t-modal :show.sync="show" @modal-open="onOpen" @modal-close="onClose">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="show = !show">登录</t-button>
      </div>
    </t-modal>

    <!--contain-->
    <t-modal :show.sync="showContain" animation-in="t-bounce-down-in" :hide-on-click="!showContain2">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="showContain2 = !showContain2">登录</t-button>
      </div>
    </t-modal>

    <t-modal :show.sync="showContain2" size="sm" animation-in="t-bounce-down-in" top="130px">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        Hello Modal 2
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="showContain2 = !showContain2">登录</t-button>
      </div>
    </t-modal>

    <!--size-->
    <t-modal :show.sync="showSize" :size="size">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="showSize = !showSize">登录</t-button>
      </div>
    </t-modal>

    <!--for animations -->
    <t-modal :show.sync="showAnimation" :animation-in="animationIn">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="showAnimation = !showAnimation">登录</t-button>
      </div>
    </t-modal>

    <!--side-->
    <t-modal :show.sync="showSide" :side="side">
      <h3 slot="header">
        登录
      </h3>
      <div slot="body">
        <t-form>
          <t-form-item label="Username:">
            <t-input placeholder="name" type="text"/>
          </t-form-item>
          <t-form-item label="Password:">
            <t-input placeholder="password" type="password"/>
          </t-form-item>
        </t-form>
      </div>
      <div slot="footer" style="text-align: right">
        <t-button size="sm" type="primary" @click="showSide = !showSide">登录</t-button>
      </div>
    </t-modal>

    <guide title="Modal 模态框" des="用来创建模态窗口丰富用户体验，或者为用户添加实用功能"/>
    <div class="demo-block">
      <div class="title">基本用法</div>
      <div class="sub-title">创建一个默认样式的模态框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModal">打开窗口</t-button>
          </t-col>
        </t-row>
      </div>
      <modal-normal/>
    </div>

    <div class="demo-block">
      <div class="title">内嵌模态框</div>
      <div class="sub-title">同时打开多个模态框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModalContain">打开窗口</t-button>
          </t-col>
        </t-row>
      </div>
      <modal-contain/>
    </div>

    <div class="demo-block">
      <div class="title">不同尺寸</div>
      <div class="sub-title">不同尺寸的模态框</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModalSize(0)">sm</t-button>
            <t-button @click="showModalSize(1)">xs</t-button>
            <t-button @click="showModalSize(2)">lg</t-button>
            <t-button @click="showModalSize(3)">xl</t-button>
          </t-col>
        </t-row>
      </div>
      <modal-size/>
    </div>

    <div class="demo-block">
      <div class="title">动画使用</div>
      <div class="sub-title">以下列举了所有的TUI预设动画，引入了 <t-tooltip content="非常棒的动画库，推荐给大家哦！" theme="dark"><code><a href="https://github.com/daneden/animate.css">animation.css</a></code></t-tooltip> 的bounce动画，TUI提供了相应的接口，可引入自定义动画</div>
      <div class="source">
        <div class="panel">
          <t-divider content="直线动画" content-align="left"/>
          <t-button @click="showModalAnimation(0)">down</t-button>
          <t-button @click="showModalAnimation(1)">up</t-button>
          <t-button @click="showModalAnimation(2)">left</t-button>
          <t-button @click="showModalAnimation(3)">right</t-button>
        </div>
        <div class="panel">
          <t-divider content="大幅度直线动画" content-align="left"/>
          <t-button @click="showModalAnimation(4)">down</t-button>
          <t-button @click="showModalAnimation(5)">up</t-button>
          <t-button @click="showModalAnimation(6)">left</t-button>
          <t-button @click="showModalAnimation(7)">right</t-button>
        </div>
        <div class="panel">
          <t-divider content="Bounce动画" content-align="left"/>
          <t-button @click="showModalAnimation(8)">bounceDown</t-button>
          <t-button @click="showModalAnimation(9)">bounceUp</t-button>
          <t-button @click="showModalAnimation(10)">bounceLeft</t-button>
          <t-button @click="showModalAnimation(11)">bounceRight</t-button>
        </div>
      </div>
      <modal-animation/>
    </div>

    <div class="demo-block">
      <div class="title">Side模态框</div>
      <div class="sub-title">不是所有模态框都放在侧边哦，适用于内容较多的场景</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12">
            <t-button @click="showModalSide(0)">左边</t-button>
            <t-button @click="showModalSide(1)">上边</t-button>
            <t-button @click="showModalSide(2)">右边</t-button>
            <t-button @click="showModalSide(3)">下边</t-button>
          </t-col>
        </t-row>
      </div>
      <modal-side/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="modalApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Methods" class="document-divider"/>
      <div class="source">
        <t-table :data="modalMethods">
          <t-table-column label="方法" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="传入参数" prop="args"/>
          <t-table-column label="返回参数" prop="returnArgs"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import ModalNormal from '../documents/modal/modal-normal.md'
import ModalContain from '../documents/modal/modal-contain.md'
import ModalAnimation from '../documents/modal/modal-animation.md'
import ModalSide from '../documents/modal/modal-side.md'
import ModalSize from '../documents/modal/modal-size.md'

export default {
  components: {
    ModalNormal,
    ModalContain,
    ModalAnimation,
    ModalSide,
    ModalSize
  },

  data () {
    return {
      modalApis: [
        {name: 'show', desc: '模态框显示状态', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'show-close', desc: '显示关闭按钮', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'no-animation', desc: '是否关闭动画', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'hide-on-click', desc: '点击模态框外部关闭/ESC可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'width', desc: '模态框宽度', type: 'String', choice: '—', default: '—'},
        {name: 'height', desc: '模态框高度', type: 'String', choice: '—', default: '—'},
        {name: 'top', desc: '模态框顶部位置', type: 'String', choice: '—', default: '100px'},
        {name: 'bottom', desc: '模态框底部位置', type: 'String', choice: '—', default: 'auto'},
        {name: 'left', desc: '模态框左边位置', type: 'String', choice: '—', default: 'auto'},
        {name: 'right', desc: '模态框右边位置', type: 'String', choice: '—', default: 'auto'},
        {name: 'animation-in', desc: '模态框打开动画', type: 'String', choice: '—', default: 't-go-down-in'},
        {name: 'animation-out', desc: '模态框打开动画', type: 'String', choice: '—', default: 't-go-down-out'},
        {name: 'animation-duration', desc: '动画时间', type: 'Number', choice: '—', default: '3000'},
        {name: 'size', desc: '模态框尺寸', type: 'String', choice: 'xs/sm/lg/xs', default: '—'},
        {name: 'side', desc: '侧边模态框定位', type: 'String', choice: 'top/right/bottom/left', default: '—'}
      ],
      modalMethods: [
        {name: 'modal-open', desc: '模态框打开事件', args: '—', returnArgs: '—'},
        {name: 'modal-close', desc: '模态框关闭事件', args: '—', returnArgs: '—'}
      ],
      show: false,
      showSize: false,
      showContain: false,
      showContain2: false,
      showSide: false,
      count: 0,
      showAnimation: false,
      animationIn: '',
      animationsIn: [
        't-go-down-in',
        't-go-up-in',
        't-go-left-in',
        't-go-right-in',
        't-go-down-big-in',
        't-go-up-big-in',
        't-go-left-big-in',
        't-go-right-big-in',
        't-bounce-down-in',
        't-bounce-up-in',
        't-bounce-left-in',
        't-bounce-right-in'
      ],
      side: '',
      sides: [
        'left',
        'top',
        'right',
        'bottom'
      ],
      size: '',
      sizes: [
        'xs',
        'sm',
        'lg',
        'xl'
      ]
    }
  },
  methods: {
    showModal () {
      this.show = !this.show
    },
    showModalContain () {
      this.showContain = !this.showContain
    },
    showModalSize (s) {
      this.size = this.sizes[s]
      this.showSize = true
    },
    showModalAnimation (a) {
      this.animationIn = this.animationsIn[a]
      this.showAnimation = true
    },
    showModalSide (s) {
      this.side = this.sides[s]
      this.showSide = true
    },
    onOpen () {
      this.$TMessage.show({
        content: '打开 Modal',
        type: 'info'
      })
    },

    onClose () {
      this.$TMessage.show({
        content: '关闭 Modal',
        type: 'info'
      })
    }
  }
}
</script>

<style></style>
