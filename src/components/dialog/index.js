import Dialog from './dialog.js'

let dialogInstance = null

const getDialogInstance = props => {
  dialogInstance = dialogInstance || Dialog.initial(props)
  return dialogInstance
}

const dialog = function (type, props = {}) {
  const _icons = {
    'success': 'fa fa-check-circle',
    'warning': 'fa fa-exclamation-circle',
    'info': 'fa fa-info-circle',
    'danger': 'fa fa-times-circle'
  }

  const _default = {
    type: type,
    top: 120,
    width: 420,
    okText: 'ok',
    cancelText: 'cancel',
    title: 'Title',
    msg: 'content',
    icon: _icons[type],
    iconColor: props.iconColor || `t-text--${type}`,
    onRemove () {
      dialogInstance = null
    }
  }

  const _props = Object.assign({}, _default, props)

  let instance = getDialogInstance(_props)

  return instance.show()
}

export default {
  success (opts) {
    return dialog('success', opts)
  },
  warning (opts) {
    return dialog('warning', opts)
  },
  danger (opts) {
    return dialog('danger', opts)
  },
  info (opts) {
    return dialog('info', opts)
  },
  hide () {
    return dialogInstance.remove()
  }
}
