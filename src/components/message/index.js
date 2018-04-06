import Message from './message.js'

let instance

const getInstance = (props) => {
  return Message.initial(props)
}

const message = (props) => {
  instance = getInstance(props)

  return {
    show () {
      instance.show()
    },
    remove () {
      instance.remove()
    }
  }
}

export default {
  show (props) {
    return message(props)
  }
}
