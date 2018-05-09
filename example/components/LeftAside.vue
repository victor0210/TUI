<template>
  <div>
    <ul class="aside-item">
      <div class="navigate-group">开发指南</div>
      <li class="t-menu-item">
        <router-link to="/guide/intro">概览</router-link>
      </li>
      <li class="t-menu-item">
        <router-link to="/guide/install">安装</router-link>
      </li>
      <li class="t-menu-item">
        <router-link to="/guide/usage">快速上手</router-link>
      </li>
      <!--<li class="t-menu-item">-->
        <!--<a href="#">-->
          <!--<span>更新日志</span>-->
        <!--</a>-->
      <!--</li>-->
      <div class="navigate-group">组件</div>
      <!--基础组件-->
      <li class="t-menu-item-group">
        <div class="t-menu-item-title">
          Basic
        </div>
        <ul class="t-menu-item-list">
          <li v-for="(i, k) in basicList" :key="k">
            <router-link :to="i.route">
              <span>{{ i.name }}</span>
              <span class="chinese">{{ i.chinese }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!--表单组件-->
      <li class="t-menu-item-group">
        <div class="t-menu-item-title">
          Form
        </div>
        <ul class="t-menu-item-list">
          <li v-for="(i, k) in formList" :key="k">
            <router-link :to="i.route">
              <span>{{ i.name }}</span>
              <span class="chinese">{{ i.chinese }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!--数据展示组件-->
      <li class="t-menu-item-group">
        <div class="t-menu-item-title">
          Data
        </div>
        <ul class="t-menu-item-list">
          <li v-for="(i, k) in dataList" :key="k">
            <router-link :to="i.route">
              <span>{{ i.name }}</span>
              <span class="chinese">{{ i.chinese }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!--用户提示组件-->
      <li class="t-menu-item-group">
        <div class="t-menu-item-title">
          Notice
        </div>
        <ul class="t-menu-item-list">
          <li v-for="(i, k) in noticeList" :key="k">
            <router-link :to="i.route">
              <span>{{ i.name }}</span>
              <span class="chinese">{{ i.chinese }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!--导航组件-->
      <li class="t-menu-item-group">
        <div class="t-menu-item-title">
          Menu
        </div>
        <ul class="t-menu-item-list">
          <li v-for="(i, k) in menuList" :key="k">
            <router-link :to="i.route">
              <span>{{ i.name }}</span>
              <span class="chinese">{{ i.chinese }}</span>
            </router-link>
          </li>
        </ul>
      </li>
      <!--其他组件-->
      <li class="t-menu-item-group">
        <div class="t-menu-item-title">
          Other
        </div>
        <ul class="t-menu-item-list">
          <li v-for="(i, k) in otherList" :key="k">
            <router-link :to="i.route">
              <span>{{ i.name }}</span>
              <span class="chinese">{{ i.chinese }}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      basicList: [
        {
          route: '/components/color',
          name: 'Color',
          chinese: '色彩'
        },
        {
          route: '/components/font',
          name: 'Font',
          chinese: '字体'
        },
        {
          route: '/components/button',
          name: 'Button',
          chinese: '按钮'
        },
        {
          route: '/components/grid',
          name: 'Grid',
          chinese: '栅格'
        },
        {
          route: '/components/layout',
          name: 'Layout',
          chinese: '布局'
        }
      ],
      formList: [
        {
          route: '/components/input',
          name: 'Input',
          chinese: '输入框'
        },
        {
          route: '/components/input-number',
          name: 'InputNumber',
          chinese: '计数器'
        },
        {
          route: '/components/checkbox',
          name: 'CheckBox',
          chinese: '多选框'
        },
        {
          route: '/components/radio',
          name: 'Radio',
          chinese: '单选框'
        },
        {
          route: '/components/switch',
          name: 'Switch',
          chinese: '开关'
        },
        {
          route: '/components/select',
          name: 'Select',
          chinese: '下拉框'
        },
        {
          route: '/components/cascader',
          name: 'Cascader',
          chinese: '级联'
        },
        {
          route: '/components/upload',
          name: 'Upload',
          chinese: '文件上传'
        },
        {
          route: '/components/datepicker',
          name: 'Datepicker',
          chinese: '日期选择器'
        },
        {
          route: '/components/timepicker',
          name: 'Timepicker',
          chinese: '时间选择器'
        },
        {
          route: '/components/form',
          name: 'Form',
          chinese: '表单'
        }
      ],
      dataList: [
        {
          route: '/components/table',
          name: 'Table',
          chinese: '表格'
        },
        {
          route: '/components/tag',
          name: 'Tag',
          chinese: '标签'
        },
        {
          route: '/components/progress',
          name: 'Progress',
          chinese: '进度条'
        },
        {
          route: '/components/tree',
          name: 'Tree',
          chinese: '树型控件'
        },
        {
          route: '/components/pagination',
          name: 'Pagination',
          chinese: '分页组件'
        },
        {
          route: '/components/badge',
          name: 'Badge',
          chinese: '标记'
        }
      ],
      noticeList: [
        {
          route: '/components/alert',
          name: 'Alert',
          chinese: '警告'
        },
        {
          route: '/components/loading',
          name: 'Loading',
          chinese: '加载'
        },
        {
          route: '/components/message',
          name: 'Message',
          chinese: '消息'
        },
        {
          route: '/components/notify',
          name: 'Notify',
          chinese: '通知'
        }
      ],
      menuList: [
        {
          route: '/components/menu',
          name: 'Menu',
          chinese: '导航菜单'
        },
        {
          route: '/components/dropdown',
          name: 'Dropdown',
          chinese: '下拉菜单'
        },
        {
          route: '/components/tabs',
          name: 'Tabs',
          chinese: '标签页'
        },
        {
          route: '/components/breadcrumb',
          name: 'Breadcrumb',
          chinese: '面包屑'
        },
        {
          route: '/components/step',
          name: 'Step',
          chinese: '步骤条'
        }
      ],
      otherList: [
        {
          route: '/components/dialog',
          name: 'Dialog',
          chinese: '提示框'
        },
        {
          route: '/components/modal',
          name: 'Modal',
          chinese: '模态框'
        },
        {
          route: '/components/popover',
          name: 'Popover',
          chinese: '弹出层'
        },
        {
          route: '/components/tooltip',
          name: 'Tooltip',
          chinese: '文字提示'
        },
        {
          route: '/components/collsape',
          name: 'Collsape',
          chinese: '折叠面板'
        },
        {
          route: '/components/backtop',
          name: 'BackTop',
          chinese: '返回顶部'
        },
        {
          route: '/components/divider',
          name: 'Divider',
          chinese: '分割线'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped="">
  @import "../styles/leftAside";
</style>
