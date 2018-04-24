<template>
  <div>
    <guide title="导航菜单" des="用于显示网站菜单的导航组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-menu :data="menu" @handleClick="handleClick"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">inverse主题</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-menu :data="menu" type="inverse"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">inverse主题</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="12" style="height: 500px">
            <t-menu :data="menu" vertical/>
          </t-col>
          <t-col :span="12" style="height: 500px">
            <t-menu :data="menu" type="inverse" vertical/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>

    <div class="demo-block">
      <div class="subtitle">collsape</div>
      <div class="source">

        <t-row :gutter="20">
          <t-col :span="12" style="margin-bottom: 50px">
          <t-checkbox label="Collsape" v-model="c"/>
          </t-col>
          <t-col :span="12" style="height: 500px">
            <t-menu :data="menu" vertical :collsape="c" type="inverse" @handleClick="handleClick"/>
          </t-col>
        </t-row>
      </div>
      <radio-group/>
    </div>
  </div>
</template>

<script>
import RadioGroup from '../documents/radio/radioGroup.md'

export default {
  components: {
    RadioGroup
  },
  methods: {
    handleClick (item) {
      if (!item.hasSub) {
        this.$router.push(item.path)
      }
    }
  },
  data () {
    return {
      c: false,
      menu: [
        {
          name: '首页',
          icon: 'fa fa-home',
          subMenu: [
            {
              name: '首页一',
              path: '/tooltip'
            },
            {
              name: '首页二',
              path: '/tooltip'
            },
            {
              name: '首页三',
              path: '/tooltip',
              subMenu: [
                {
                  name: '首页一',
                  path: '/tooltip'
                },
                {
                  name: '首页二',
                  path: '/tooltip'
                },
                {
                  name: '首页三',
                  path: '/tooltip',
                  subMenu: [
                    {
                      name: '首页一',
                      path: '/tooltip'
                    },
                    {
                      name: '首页二',
                      path: '/tooltip'
                    },
                    {
                      name: '首页三',
                      path: '/tooltip'
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
          path: '/tooltip'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper',
          path: '/tooltip'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user',
          path: '/tooltip'
        }
      ]
    }
  }
}
</script>

<style></style>
