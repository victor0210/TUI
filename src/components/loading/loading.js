import Loading from './loading.vue'
import Vue from 'vue'

Loading.initial = _props => {
  const instance = new Vue({
    data () {
      return {
        isShow: false
      }
    },

    render (h) {
      let props = Object.assign({
        isShow: this.isShow,
        width: 150,
        height: 120
      }, _props)

      return h(Loading, {
        props: props
      })
    },

    methods: {
      show () {
        this.isShow = true
      },

      hide () {
        this.isShow = false
        setTimeout(() => {
          this.$destroy()
        }, 200)
      }
    },

    beforeDestroy () {
      document.body.removeChild(this.$el)
    }
  })

  const component = instance.$mount()
  const el = component.$el
  document.body.appendChild(el)

  return {
    show () {
      component.show()
      document.body.style.overflow = 'hidden'
    },

    hide () {
      component.hide()
      document.body.style.overflow = 'auto'
    }
  }
}

export default Loading
