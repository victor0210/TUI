<template>
  <div>
    <guide title="Tabs 标签页" des="用于数据切换类别显示"/>
    <div class="demo-block">
      <div class="title">默认样式</div>
      <div class="sub-title">可通过双向绑定切换标签页，默认标签页适用于标签较少的场景</div>
      <div class="source">
        <div class="half" style="height: 300px">
          <t-tabs v-model="tabValue">
            <t-tab-panel title="Tab-1">
              <h3>为中华振兴而敲代码-Tab1</h3>
            </t-tab-panel>
            <t-tab-panel title="Tab-2">
              <h3>为中华振兴而敲代码-Tab2</h3>
            </t-tab-panel>
            <t-tab-panel title="Tab-3">
              <h3>为中华振兴而敲代码-Tab3</h3>
            </t-tab-panel>
          </t-tabs>
        </div>
        <div class="half" style="height: 300px">
          <t-radio v-model="tabValue" :val="0" label="tab1"/>
          <t-radio v-model="tabValue" :val="1" label="tab2"/>
          <t-radio v-model="tabValue" :val="2" label="tab3"/>
        </div>
      </div>
      <tabs-normal/>
    </div>

    <div class="demo-block">
      <div class="title">box样式</div>
      <div class="sub-title">box内嵌标签页，适用于标签较多的排版</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs type="box">
              <t-tab-panel v-for="(p, i) in tabPanels" :key="i+10" :title="p.title">
                <h3 style="height: 100px">为中华振兴而敲代码-Tab-{{p.title}}</h3>
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <tabs-box/>
    </div>

    <div class="demo-block">
      <div class="title">pipe样式</div>
      <div class="sub-title">pipe样式适用于增删标签的场景</div>
      <div class="source">
        <div class="panel">
          <t-divider content="在标签栏上滚动鼠标滚轮" content-align="left"/>
          <t-tabs editable @tab-remove="removeHandler" type="pipe">
            <t-tab-panel v-for="(p, i) in tabPanelsPipe" :key="i+10" :title="p.title">
              <h3 style="height: 100px;">为中华振兴而敲代码-Tab-{{p.title}}</h3>
            </t-tab-panel>
          </t-tabs>
          <t-button size="sm" style="margin-top: 30px; float: right" type="primary" @click="addTab">添加新标签</t-button>
        </div>
      </div>
      <tabs-pipe/>
    </div>

    <div class="demo-block">
      <div class="title">自定义Title</div>
      <div class="sub-title">slot自定义标签标题</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-tabs style="height: 150px">
              <t-tab-panel>
                <span slot="title"><i class="fa fa-home"></i> 旅游住店</span>
                旅游住店
              </t-tab-panel>
              <t-tab-panel title="美食餐饮">
                <span slot="title"><i class="fa fa-coffee"></i> 旅游住店</span>
                美食餐饮
              </t-tab-panel>
              <t-tab-panel title="娱乐服务">
                <span slot="title"><i class="fa fa-paper-plane"></i> 娱乐服务</span>
                娱乐服务
              </t-tab-panel>
            </t-tabs>
          </t-col>
        </t-row>
      </div>
      <tabs-title/>
    </div>

    <div class="demo-block">
      <div class="title">不同布局</div>
      <div class="sub-title">tabs组件的不同布局样式</div>
      <div class="source">
        <div class="panel" style="padding-bottom: 25px">
          <t-radio-group v-model="position">
            <t-radio label="top" val="top"/>
            <t-radio label="left" val="left"/>
            <t-radio label="bottom" val="bottom"/>
            <t-radio label="right" val="right"/>
          </t-radio-group>
        </div>
        <div class="panel" style="padding-bottom: 25px">
          <t-tabs :position="position" style="height: 200px;">
            <t-tab-panel title="旅游住店">
              <h3>旅游住店</h3>
            </t-tab-panel>
            <t-tab-panel title="美食餐饮">
              <h3>美食餐饮</h3>
            </t-tab-panel>
            <t-tab-panel title="娱乐服务">
              <h3>娱乐服务</h3>
            </t-tab-panel>
          </t-tabs>
        </div>
        <div class="panel" style="padding-bottom: 25px">
          <t-tabs :position="position" style="height: 200px;" type="box">
            <t-tab-panel title="旅游住店">
              <h3>旅游住店</h3>
            </t-tab-panel>
            <t-tab-panel title="美食餐饮">
              <h3>美食餐饮</h3>
            </t-tab-panel>
            <t-tab-panel title="娱乐服务">
              <h3>娱乐服务</h3>
            </t-tab-panel>
          </t-tabs>
        </div>
        <div class="panel" style="padding-bottom: 25px">
          <t-tabs :position="position" style="height: 200px;" type="pipe">
            <t-tab-panel title="旅游住店">
              <h3>旅游住店</h3>
            </t-tab-panel>
            <t-tab-panel title="美食餐饮">
              <h3>美食餐饮</h3>
            </t-tab-panel>
            <t-tab-panel title="娱乐服务">
              <h3>娱乐服务</h3>
            </t-tab-panel>
          </t-tabs>
        </div>
      </div>
      <tabs-position/>
    </div>

    <div class="api-docs">
      <t-divider content="Tabs Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tabsApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Tab Panel Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="tabPanelApis">
          <t-table-column label="属性" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="200"/>
          <t-table-column label="类型" prop="type" :width="150"/>
          <t-table-column label="可选值" prop="choice" :width="150"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Tab Panel Slots" class="document-divider"/>
      <div class="source">
        <t-table :data="tabPanelSlot">
          <t-table-column label="名称" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
        </t-table>
      </div>
    </div>
  </div>
</template>
<script>
import TabsNormal from '../documents/tabs/tabs-normal.md'
import TabsBox from '../documents/tabs/tabs-box.md'
import TabsPipe from '../documents/tabs/tabs-pipe.md'
import TabsTitle from '../documents/tabs/tabs-title.md'
import TabsPosition from '../documents/tabs/tabs-position.md'

export default {
  components: {
    TabsNormal,
    TabsBox,
    TabsPipe,
    TabsTitle,
    TabsPosition
  },

  data () {
    return {
      tabsApis: [
        {name: 'v-model', desc: '选中的tab下标', type: 'Number', choice: '—', default: '0'},
        {name: 'type', desc: '选项卡样式', type: 'String', choice: 'box/pipe', default: '—'},
        {name: 'position', desc: '选项卡布局', type: 'String', choice: 'top/right/bottom/left', default: 'top'},
        {name: 'editable', desc: '标签能否被编辑', type: 'Boolean', choice: '—', default: 'false'}
        // {name: 'show-close', desc: '一直显示标签关闭按钮', type: 'Boolean', choice: '—', default: 'false'},
      ],
      tabPanelApis: [
        {name: 'title', desc: '选项卡标题', type: 'String/Number', choice: '—', default: 'title'}
      ],
      tabPanelSlot: [
        {name: 'title', desc: '选项卡标题'}
      ],
      tabValue: 1,
      position: 'top',
      tabs: [
        {
          title: '旅游住店',
          content: '旅游住店'
        },
        {
          title: '美食餐饮',
          content: '美食餐饮'
        },
        {
          title: '娱乐服务',
          content: '娱乐服务'
        }
      ],
      tabPanels: [
        {title: '精忠报国'},
        {title: '国富民强'},
        {title: '强作解人'},
        {title: '人命危浅'},
        {title: '浅尝辄止'},
        {title: '止暴禁非'},
        {title: '非同寻常'},
        {title: '常年累月'},
        {title: '月晕而风'},
        {title: '风风雨雨'},
        {title: '雨打风吹'},
        {title: '吹灰之力'},
        {title: '力倍功半'},
        {title: '半筹莫展'},
        {title: '展翅高飞'},
        {title: '飞蛾扑火'},
        {title: '火耕流种'},
        {title: '种豆得豆'},
        {title: '豆蔻年华'},
        {title: '华冠丽服'},
        {title: '服服贴贴'}
      ],
      tabPanelsPipe: [
        {title: '精忠报国'},
        {title: '国富民强'},
        {title: '强作解人'},
        {title: '人命危浅'},
        {title: '浅尝辄止'}
      ]
    }
  },

  methods: {
    removeHandler (idx) {
      this.tabPanelsPipe.splice(idx, 1)
    },
    addTab () {
      this.tabPanelsPipe.push({
        title: 'New Tab',
        content: 'new Tab'
      })
    }
  }
}
</script>
