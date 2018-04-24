<template>
  <div>
    <guide title="导航菜单" des="用于显示网站菜单的导航组件"/>
    <div class="demo-block">
      <div class="subtitle">基本用法</div>
      <div class="source">
        <t-row :gutter="20">
          <t-col :span="24">
            <t-menu :data="menu"/>
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
          <t-checkbox label="collsape" v-model="c"/>
          </t-col>
          <t-col :span="12" style="height: 500px">
            <t-menu :data="menu" vertical :collsape="c" type="inverse" default-item-mode="link"/>
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
  data () {
    return {
      c: false,
      menu: [
        {
          name: '首页',
          icon: 'fa fa-home',
          link: '/tooltip',
          subMenu: [
            {
              name: '首页一',
              link: '/tooltip'
            },
            {
              name: '首页二',
              link: '/tooltip'
            },
            {
              name: '首页三',
              link: '/tooltip',
              subMenu: [
                {
                  name: '首页一',
                  link: '/tooltip'
                },
                {
                  name: '首页二',
                  link: '/tooltip'
                },
                {
                  name: '首页三',
                  link: '/tooltip',
                  subMenu: [
                    {
                      name: '首页一',
                      link: '/tooltip'
                    },
                    {
                      name: '首页二',
                      link: '/tooltip'
                    },
                    {
                      name: '首页三',
                      link: '/tooltip'
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
          link: '/tooltip'
        },
        {
          name: '帮助',
          icon: 'fa fa-hand-paper',
          link: '/tooltip'
        },
        {
          name: '个人中心',
          icon: 'fa fa-user',
          link: '/tooltip'
        }
      ]
    }
  }
}
</script>

<style></style>
