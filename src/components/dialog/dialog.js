import Dialog from './dialog.vue'
import Vue from 'vue'

Dialog.initial = properties => {
  const _props = properties || {}

  const Instance = new Vue({
    render (h) {
      return h(Dialog, {
        props: _props,
        on: {
          close: this.closeHandler,
          ok: this.okHandler
        }
      })
    },
    methods: {
      closeHandler () {
        this.onClose()
        this.remove()
      },
      okHandler () {
        this.onOk()
        this.remove()
      },
      onClose () {},
      onOk () {},
      remove () {
        domOutTransition()
        setTimeout(() => {
          this.destroy()
          this.onRemove()
        }, 300)
      },
      destroy () {
        this.$destroy()
        document.body.removeChild(this.$el)
      }
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const dialog = Instance.$children[0]

  // user options bind instance
  Object.keys(_props).forEach(function (key) {
    Instance[key] = _props[key]
  })

  const dialogContainerStyle = document.querySelector('.t-dialog__container').style
  const dialogMaskStyle = document.querySelector('.t-dialog__mask').style
  const wrapperMaskStyle = document.querySelector('.t-dialog__wrapper').style
  const bodyDomStyle = document.body.style

  const domInit = function () {
    dialogContainerStyle.top = `${Instance.top}px`
    dialogContainerStyle.width = `${Instance.width}px`
    dialogContainerStyle.margin = 'auto'
    dialogContainerStyle.marginTop = '-10px'

    dialogMaskStyle.opacity = 0
  }

  domInit()

  const domOutTransition = function () {
    dialogContainerStyle.marginTop = '-10px'
    dialogContainerStyle.opacity = 0

    bodyDomStyle.overflow = ''

    dialogMaskStyle.opacity = 0
    wrapperMaskStyle.opacity = 0
  }

  const domInTransition = function () {
    dialogContainerStyle.marginTop = 0
    dialogContainerStyle.opacity = 1

    bodyDomStyle.overflow = 'hidden'

    dialogMaskStyle.opacity = 1
    wrapperMaskStyle.opacity = 1
  }

  return {
    component: dialog,
    show () {
      setTimeout(function () {
        domInTransition()
      }, 100)
    },
    remove () {
      domOutTransition()
      Instance.remove()
    }
  }
}

export default Dialog
