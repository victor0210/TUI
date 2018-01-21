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

  const dialogDomStyle = component.$el.style
  const dialogContainerStyle = document.querySelector('.t-dialog__container').style
  const bodyDomStyle = document.body.style

  const domOutTransition = function () {
    dialogDomStyle.opacity = '0'

    dialogContainerStyle.marginTop = '-10px'

    bodyDomStyle.overflow = ''
  }

  const domInTransition = function () {
    dialogDomStyle.opacity = '1'

    dialogContainerStyle.top = `${Instance.top}px`
    dialogContainerStyle.width = `${Instance.width}px`
    dialogContainerStyle.margin = 'auto'
    dialogContainerStyle.marginTop = '0'

    bodyDomStyle.overflow = 'hidden'
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
