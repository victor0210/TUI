import Notify from './notify'

const notify = (props, type) => {
  let instance = Notify.initial(props, type)

  setTimeout(() => {
    instance.show()
  }, 50)
}

//  TODO: get notify instance / add remove methods
export default {
  show (props) {
    notify(props)
  },
  success (props) {
    notify(props, 'success')
  },
  info (props) {
    notify(props, 'info')
  },
  warning (props) {
    notify(props, 'warning')
  },
  danger (props) {
    notify(props, 'danger')
  }
}
