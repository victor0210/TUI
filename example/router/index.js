import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/guide/intro'
    },
    {
      path: '/guide',
      redirect: '/guide/intro'
    },
    {
      path: '/components',
      redirect: '/components/color'
    },
    {
      path: '/guide/intro',
      name: 'introduce',
      component: r => require.ensure([], () => r(require('../pages/intro.vue')))
    },
    {
      path: '/guide/install',
      name: 'install',
      component: r => require.ensure([], () => r(require('../pages/install.vue')))
    },
    {
      path: '/guide/usage',
      name: 'usage',
      component: r => require.ensure([], () => r(require('../pages/usage.vue')))
    },
    {
      path: '/components/color',
      name: 'color',
      component: r => require.ensure([], () => r(require('../pages/color.vue')))
    },
    {
      path: '/components/font',
      name: 'font',
      component: r => require.ensure([], () => r(require('../pages/font.vue')))
    },
    {
      path: '/components/grid',
      name: 'grid',
      component: r => require.ensure([], () => r(require('../pages/grid.vue')))
    },
    {
      path: '/components/layout',
      name: 'layout',
      component: r => require.ensure([], () => r(require('../pages/layout.vue')))
    },
    {
      path: '/components/button',
      name: 'button',
      component: r => require.ensure([], () => r(require('../pages/button.vue')))
    },
    {
      path: '/components/dialog',
      name: 'dialog',
      component: r => require.ensure([], () => r(require('../pages/dialog.vue')))
    },
    {
      path: '/components/input',
      name: 'input',
      component: r => require.ensure([], () => r(require('../pages/input.vue')))
    },
    {
      path: '/components/input-number',
      name: 'input-number',
      component: r => require.ensure([], () => r(require('../pages/input-number.vue')))
    },
    {
      path: '/components/checkbox',
      name: 'checkbox',
      component: r => require.ensure([], () => r(require('../pages/checkbox.vue')))
    },
    {
      path: '/components/radio',
      name: 'radio',
      component: r => require.ensure([], () => r(require('../pages/radio.vue')))
    },
    {
      path: '/components/switch',
      name: 'switch',
      component: r => require.ensure([], () => r(require('../pages/switch.vue')))
    },
    {
      path: '/components/select',
      name: 'select',
      component: r => require.ensure([], () => r(require('../pages/select.vue')))
    },
    {
      path: '/components/cascader',
      name: 'cascader',
      component: r => require.ensure([], () => r(require('../pages/cascader.vue')))
    },
    {
      path: '/components/datepicker',
      name: 'datepicker',
      component: r => require.ensure([], () => r(require('../pages/datepicker.vue')))
    },
    {
      path: '/components/timepicker',
      name: 'timepicker',
      component: r => require.ensure([], () => r(require('../pages/timepicker.vue')))
    },
    {
      path: '/components/form',
      name: 'form',
      component: r => require.ensure([], () => r(require('../pages/form.vue')))
    },
    {
      path: '/components/table',
      name: 'table',
      component: r => require.ensure([], () => r(require('../pages/table.vue')))
    },
    {
      path: '/components/tag',
      name: 'tag',
      component: r => require.ensure([], () => r(require('../pages/tag.vue')))
    },
    {
      path: '/components/progress',
      name: 'progress',
      component: r => require.ensure([], () => r(require('../pages/progress.vue')))
    },
    {
      path: '/components/tree',
      name: 'tree',
      component: r => require.ensure([], () => r(require('../pages/tree.vue')))
    },
    {
      path: '/components/pagination',
      name: 'pagination',
      component: r => require.ensure([], () => r(require('../pages/pagination.vue')))
    },
    {
      path: '/components/badge',
      name: 'badge',
      component: r => require.ensure([], () => r(require('../pages/badge.vue')))
    },
    {
      path: '/components/alert',
      name: 'Alert',
      component: r => require.ensure([], () => r(require('../pages/alert.vue')))
    },
    {
      path: '/components/loading',
      name: 'Loading',
      component: r => require.ensure([], () => r(require('../pages/loading.vue')))
    },
    {
      path: '/components/message',
      name: 'message',
      component: r => require.ensure([], () => r(require('../pages/message.vue')))
    },
    {
      path: '/components/notify',
      name: 'notify',
      component: r => require.ensure([], () => r(require('../pages/notify.vue')))
    },
    {
      path: '/components/menu',
      name: 'menu',
      component: r => require.ensure([], () => r(require('../pages/menu.vue')))
    },
    {
      path: '/components/dropdown',
      name: 'dropdown',
      component: r => require.ensure([], () => r(require('../pages/dropdown.vue')))
    },
    {
      path: '/components/tabs',
      name: 'tabs',
      component: r => require.ensure([], () => r(require('../pages/tabs.vue')))
    },
    {
      path: '/components/breadcrumb',
      name: 'breadcrumb',
      component: r => require.ensure([], () => r(require('../pages/breadcrumb.vue')))
    },
    {
      path: '/components/step',
      name: 'step',
      component: r => require.ensure([], () => r(require('../pages/step.vue')))
    },
    {
      path: '/components/modal',
      name: 'modal',
      component: r => require.ensure([], () => r(require('../pages/modal.vue')))
    },
    {
      path: '/components/popover',
      name: 'popover',
      component: r => require.ensure([], () => r(require('../pages/popover.vue')))
    },
    {
      path: '/components/tooltip',
      name: 'tooltip',
      component: r => require.ensure([], () => r(require('../pages/tooltip.vue')))
    },
    {
      path: '/components/collsape',
      name: 'collsape',
      component: r => require.ensure([], () => r(require('../pages/collsape.vue')))
    },
    {
      path: '/components/upload',
      name: 'upload',
      component: r => require.ensure([], () => r(require('../pages/upload.vue')))
    },
    {
      path: '/components/backtop',
      name: 'backtop',
      component: r => require.ensure([], () => r(require('../pages/backtop.vue')))
    },
    {
      path: '/components/divider',
      name: 'divider',
      component: r => require.ensure([], () => r(require('../pages/divider.vue')))
    },
    {
      path: '/components/slider',
      name: 'slider',
      component: r => require.ensure([], () => r(require('../pages/slider.vue')))
    }
  ]
})
