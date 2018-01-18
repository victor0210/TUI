import Toast from './toast.js'
let toastInstance

const getToastInstance = () => {
  toastInstance = toastInstance || Toast.initial({})
  return toastInstance
}

const toast = function (type, duration) {
  const instance = getToastInstance()
  instance.toast({
    type: type,
    duration: duration
  })
}

export default {
  show (duration) {
    return toast('show', duration)
  },
  hide (duration) {
    return toast('hide', duration)
  },
  destroy () {
    const instance = getToastInstance()
    toastInstance = null
    instance.destroy()
  }
}
