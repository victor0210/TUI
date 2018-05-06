<template>
  <div>
    <guide title="导航菜单" des="用于显示网站菜单的导航组件"/>
    <div class="demo-block">
      <div class="title">Horizon水平菜单</div>
      <div class="sub-title">水平布局的menu组件</div>
      <div class="source">
        <div class="panel">
          <t-divider content="默认样式" content-align="left"/>
          <t-menu :data="menu"/>
        </div>
        <div class="panel">
          <t-divider content="Info样式" content-align="left"/>
          <t-menu :data="menu" type="info"/>
        </div>
      </div>
      <menu-horizon/>
    </div>

    <div class="demo-block">
      <div class="title">Vertical垂直菜单</div>
      <div class="sub-title">垂直菜单默认选中</div>
      <div class="source">
        <div class="half">
          <t-divider content="默认样式" content-align="left"/>
          <t-menu :data="menu" vertical default-active-index="0-2"/>
        </div>
        <div class="half">
          <t-divider content="Info样式" content-align="left"/>
          <t-menu :data="menu" vertical type="info" default-active-index="1"/>
        </div>
      </div>
      <menu-vertical/>
    </div>

    <div class="demo-block">
      <div class="title">Collsape垂直菜单</div>
      <div class="sub-title">适用于页面主内较多的场景</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12" style="height: 500px">
            <t-menu :data="menu2" vertical :collsape="c" type="inverse" @click="handleClick"/>
          </t-col>
          <t-col :span="12">
            <t-switch active-text="收起" inactive-text="展开" v-model="c"/>
          </t-col>
        </t-row>
      </div>
      <menu-collsape/>
    </div>

    <div class="api-docs">
      <t-divider content="Attributes" class="document-divider"/>
      <div class="source">
        <t-table :data="menuApis">
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
        <t-table :data="menuMethods">
          <t-table-column label="事件" prop="name" :width="150"/>
          <t-table-column label="描述" prop="desc" :width="300"/>
          <t-table-column label="参数" prop="params"/>
        </t-table>
      </div>
    </div>

    <div class="api-docs">
      <t-divider content="Config Props" class="document-divider"/>
      <div class="source">
        <t-table :data="configApis">
          <t-table-column label="属性" prop="name"/>
          <t-table-column label="描述" prop="desc"/>
          <t-table-column label="类型" prop="type"/>
          <t-table-column label="可选值" prop="choice" :width="200"/>
          <t-table-column label="默认值" prop="default"/>
        </t-table>
      </div>
    </div>
  </div>
</template>

<script>
import MenuHorizon from '../documents/menu/menu-horizon.md'
import MenuVertical from '../documents/menu/menu-vertical.md'
import MenuCollsape from '../documents/menu/menu-collsape.md'

export default {
  components: {
    MenuVertical,
    MenuCollsape,
    MenuHorizon
  },
  methods: {
    handleClick (item) {
      this.$TMessage.show({
        content: '点击了' + item.name,
        type: 'info'
      })
    }
  },
  data () {
    return {
      configApis: [
        {name: 'name', desc: '菜单文案', type: 'String', choice: '—', default: '—'},
        {name: 'icon', desc: '菜单Icon类名', type: 'String', choice: '—', default: '—'},
        {name: 'path', desc: 'router-link路由地址', type: 'String', choice: '—', default: '—'},
        {name: 'link', desc: 'a标签跳转地址', type: 'String', choice: '—', default: '—'},
        {name: 'target', desc: 'a标签target', type: 'String', choice: '—', default: '—'},
        {name: 'subMenu', desc: '子菜单', type: 'Array', choice: '—', default: '—'}
      ],
      menuApis: [
        {name: 'data', desc: '菜单数据', type: 'Array', choice: '见底部Config文档', default: '—'},
        {name: 'type', desc: '菜单主题', type: 'String', choice: 'info', default: '—'},
        {name: 'default-active-index', desc: '默认选中菜单索引', type: 'String', choice: '—', default: '—'},
        {name: 'vertical', desc: '垂直采单', type: 'Boolean', choice: '—', default: 'false'},
        {name: 'collsape', desc: '垂直采单', type: 'Boolean', choice: '—', default: 'false'}
      ],
      menuMethods: [
        {name: 'click', desc: '点击菜单时触发', params: 'item（当前点击的菜单item对象）'}
      ],
      c: false,
      menu: [
        {
          name: '首页',
          icon: 'fa fa-home',
          subMenu: [
            {
              name: '首页一',
              path: '/components/tooltip'
            },
            {
              name: '首页二',
              link: 'http://www.baidu.com',
              target: '_blank'
            },
            {
              name: '首页三',
              subMenu: [
                {
                  name: '首页一',
                  path: '/components/tooltip'
                },
                {
                  name: '首页二',
                  path: '/components/tooltip'
                },
                {
                  name: '首页三',
                  subMenu: [
                    {
                      name: '首页一',
                      path: '/components/tooltip'
                    },
                    {
                      name: '首页二',
                      path: '/components/tooltip'
                    },
                    {
                      name: '首页三',
                      path: '/components/tooltip'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '下载',
          icon: 'fa fa-download',
          path: '/components/tooltip'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper',
          path: '/components/tooltip'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user',
          path: '/components/tooltip'
        }
      ],
      menu2: [
        {
          name: '首页',
          icon: 'fa fa-home',
          subMenu: [
            {
              name: '首页一'
            },
            {
              name: '首页二'
            },
            {
              name: '首页三',
              subMenu: [
                {
                  name: '首页一'
                },
                {
                  name: '首页二'
                },
                {
                  name: '首页三',
                  subMenu: [
                    {
                      name: '首页一'
                    },
                    {
                      name: '首页二'
                    },
                    {
                      name: '首页三'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: '下载',
          icon: 'fa fa-download'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user'
        }
      ]
    }
  }
}
</script>

<style></style>
