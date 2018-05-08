<template>
  <div>
    <guide title="Popover 弹出层" des="用于弹出提示简单的信息"/>
    <div class="demo-block">
      <div class="title">触发方式</div>
      <div class="sub-title">使用不同的触发方式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-popover position="bottom">
              <t-button type="primary">hover</t-button>
              <div slot="popover">
                我是Hover弹出层
              </div>
            </t-popover>
            <t-popover position="bottom" trigger="click">
              <t-button type="primary">click</t-button>
              <div slot="popover">
                我是Click弹出层
              </div>
            </t-popover>
            <t-popover position="bottom" trigger="click" hide-on-click>
              <t-button type="primary">click on hide</t-button>
              <div slot="popover">
                点击外部区域也可以关闭哦
              </div>
            </t-popover>
            <t-popover position="bottom" trigger="focus">
              <t-button type="primary">focus</t-button>
              <div slot="popover">
                我是Focus弹出层
              </div>
            </t-popover>
          </t-col>
        </t-row>
      </div>
      <popover-trigger/>
    </div>

    <div class="demo-block">
      <div class="title">不同定位</div>
      <div class="sub-title">一共有12种定位，根据不同的需求选择更适合业务场景的定位方式</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <div class="top" style="text-align: center">
              <t-popover position="top-left">
                <t-button type="primary">上左</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="top">
                <t-button type="primary">上边</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="top-right">
                <t-button type="primary">上右</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
            </div>
            <div class="left" style="width: 50%; float: left">
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="left-top">
                  <t-button type="primary">左上</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            <div style="text-align: center; margin-bottom: 20px;">
              <t-popover position="left">
                  <t-button type="primary">左边</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            <div style="text-align: center; margin-bottom: 20px;">
              <t-popover position="left-bottom">
                  <t-button type="primary">左下</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            </div>
            <div class="right" style="width: 50%; float: left">
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="right-top">
                  <t-button type="primary">右上</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="right">
                  <t-button type="primary">右边</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
              <div style="text-align: center; margin-bottom: 20px;">
                <t-popover position="right-bottom">
                  <t-button type="primary">右下</t-button>
                  <div slot="popover">
                    {{ msg }}
                    <br>
                    {{ msg2 }}
                  </div>
                </t-popover>
              </div>
            </div>
            <div class="bottom" style="text-align: center">
              <t-popover position="bottom-left">
                <t-button type="primary">下左</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="bottom">
                <t-button type="primary">下边</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
              <t-popover position="bottom-right">
                <t-button type="primary">下右</t-button>
                <div slot="popover">
                  {{ msg }}
                  <br>
                  {{ msg2 }}
                </div>
              </t-popover>
            </div>
          </t-col>
        </t-row>
      </div>
      <popover-position/>
    </div>

    <div class="demo-block">
      <div class="title">嵌套内容</div>
      <div class="sub-title">嵌套复杂内容的弹出层</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-popover position="right-bottom" trigger="click" :width="800">
              <t-button type="primary">显示内容</t-button>
              <div slot="popover">
                <t-table :data="data" border stripe>
                  <t-table-column label="姓名" prop="name" :width="100"/>
                  <t-table-column label="年龄" prop="age" :width="100"/>
                  <t-table-column label="爱好" prop="habit"/>
                  <t-table-column label="名言" prop="flag"/>
                </t-table>
              </div>
            </t-popover>
          </t-col>
        </t-row>
      </div>
      <popover-contain/>
    </div>

    <div class="demo-block">
      <div class="title">嵌套操作</div>
      <div class="sub-title">嵌套一些简单的操作也是非常不错的选择哦</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-popover position="bottom" trigger="click" hide-on-click v-model="visible" :width="250">
              <t-button type="primary" style="top: 200px; left: 500px">删除</t-button>
              <div slot="popover">
                <p style="margin-bottom: 10px">您确定删除这段消息吗？</p>
                <div style="text-align: right">
                  <t-button size="sm" type="text" @click="visible = false">取消</t-button>
                  <t-button size="sm" type="primary" @click="visible = false">确定</t-button>
                </div>
              </div>
            </t-popover>
          </t-col>
        </t-row>
      </div>
      <popover-action/>
    </div>

    <div class="demo-block">
      <div class="title">指令方式</div>
      <div class="sub-title">通过指令 <code>v-t-popover</code> 触发弹出层，一个弹出层对应一个触发元素，不能被多个触发元素复用</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-popover position="bottom" ref="popover1">
              <p>Here Is Popover1</p>
            </t-popover>

            <t-popover position="top" ref="popover2">
              <p>Here Is Popover2</p>
            </t-popover>

            <t-popover position="right" :width="250" ref="popover3" v-model="visible2">
              <p style="margin-bottom: 10px">您确定删除这段消息吗？</p>
              <div style="text-align: right">
                <t-button size="sm" type="text" @click="visible2 = false">取消</t-button>
                <t-button size="sm" type="primary" @click="visible2 = false">确定</t-button>
              </div>
            </t-popover>

            <t-button type="primary" style="margin-right: 10px" v-t-popover:popover1>弹出层1</t-button>
            <t-button type="primary" style="margin-right: 10px" v-t-popover:popover2>弹出层2</t-button>
            <t-button type="primary" style="margin-right: 10px" v-t-popover:popover3>弹出层3</t-button>
          </t-col>
        </t-row>
      </div>
      <popover-directive/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="popoverApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

  </div>
</template>

<script>
import PopoverTrigger from '../documents/popover/popover-trigger.md'
import PopoverAction from '../documents/popover/popover-action.md'
import PopoverPosition from '../documents/popover/popover-position.md'
import PopoverDirective from '../documents/popover/popover-directive.md'
import PopoverContain from '../documents/popover/popover-contain.md'

export default {
  components: {
    PopoverTrigger,
    PopoverContain,
    PopoverDirective,
    PopoverPosition,
    PopoverAction
  },
  data () {
    return {
      popoverApis: [
        {name: 'v-modal', desc: '弹出层是否显示', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'hide-on-click', desc: '点击弹出层外部关闭/ESC可关闭', type: 'Boolean', choice: '—', default: 'true'},
        {name: 'position', desc: '弹出层位置', type: 'String', choice: 'top / top-left / top-right / bottom / bottom-left / bottom-right / left / left-top / left-bottom / right / right-top / right-bottom', default: 'top'},
        {name: 'trigger', desc: '触发显示弹出层方式', type: 'String', choice: 'hover/click/focus', default: 'hover'},
        {name: 'theme', desc: '弹出层主题', type: 'String', choice: 'light / dark / dark-gold / success / info / warning / danger', default: '—'},
        {name: 'bg-color', desc: '弹出层背景色', type: 'String', choice: '—', default: '#fff'},
        {name: 'border-color', desc: '弹出层边框颜色', type: 'String', choice: '—', default: 'rgba(0,0,0,0.3)'},
        {name: 'text-color', desc: '弹出层内文本颜色', type: 'String', choice: '—', default: '—'},
        {name: 'width', desc: '弹出层宽度', type: 'Number', choice: '—', default: '—'},
        {name: 'height', desc: '弹出层高度', type: 'Number', choice: '—', default: '—'},
        {name: 'popover-offset', desc: '弹出层到触发元素的距离', type: 'Number', choice: '—', default: '10'}
      ],
      data: [
        {name: '小红', age: '20', habit: '网球', flag: '人生没有回头路'},
        {name: '小李', age: '18', habit: '篮球，游戏', flag: '为中华民族的振兴而编程'},
        {name: '小张', age: '32', habit: '羽毛球，跑步', flag: '吃吃喝喝开开心心，一切平安才是福'},
        {name: '小王', age: '22', habit: '游泳，健身', flag: '身体是革命的本钱'},
        {name: '小刘', age: '29', habit: '看电视，玩ps', flag: '休息是为了更好的工作'},
        {name: '小胡', age: '20', habit: '呵呵呵', flag: '哼哼哈哈嘿嘿呼呼'}
      ],
      msg: 'Welcome TUI !',
      msg2: 'Here is Popover!',
      visible: false,
      visible2: false
    }
  }
}
</script>

<style></style>
