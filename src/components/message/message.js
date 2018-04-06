import Message from './message.vue'
import Vue from 'vue'

Message.initial = _props => {
  const instance = new Vue({
    render (h) {
      return h(Message, {
        props: Object.assign({}, _props),
        on: {
          'close': this.remove
        }
      })
    },
    methods: {
      remove () {
        setTimeout(() => {
          this.hide()
        }, 300)
      },
      hide () {
        this.$destroy()
        document.body.removeChild(this.$el)
      }
    }
  })

  const component = instance.$mount()
  document.body.appendChild(component.$el)

  const el = component.$el
  setTimeout(() => {
    el.style.opacity = '1'
    el.style.marginTop = '0'
  }, 100)

  return instance
}

export default Message
