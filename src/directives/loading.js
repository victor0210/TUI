import Vue from 'vue'
import Loading from '../components/loading/loading.vue'

let loadingQueue = {}

const TLoading = Vue.directive('t-loading', {
  inserted: function (el, value) {
    let props = {}
    let isShow = false
    if (Array.isArray(value.value)) {
      isShow = value.value[0]
      props = value.value[1]
    } else {
      isShow = value.value
    }

    el.style.position = 'relative'

    const loading = new Vue({
      data () {
        return {
          isShow: isShow
        }
      },
      render (h) {
        const _this = this
        return h(Loading, {
          props: Object.assign({}, {
            isShow: _this.isShow,
            type: 'inbox'
          }, props)
        })
      },
      methods: {
        show () {
          this.isShow = true
          this.$el.style.zIndex = 1
        },
        hide () {
          this.isShow = false
          this.$el.style.zIndex = -99
        },
        remove () {
          el.removeChild(this.$el)
          this.$destroy()
        }
      }
    }).$mount()

    el.appendChild(loading.$el)
    loading.$el.style.zIndex = -99

    el.tToadingKey = ~~(Math.random() * 1000000000)
    loadingQueue[el.tToadingKey] = loading
  },
  update: function (el, value) {
    if (Array.isArray(value.value)) {
      if (value.value[0]) {
        loadingQueue[el.tToadingKey].show()
      } else {
        loadingQueue[el.tToadingKey] && loadingQueue[el.tToadingKey].hide()
      }
    } else {
      if (value.value) {
        loadingQueue[el.tToadingKey].show()
      } else {
        loadingQueue[el.tToadingKey] && loadingQueue[el.tToadingKey].hide()
      }
    }
  },
  unbind: function (el) {
    loadingQueue[el.tToadingKey].remove()
    delete loadingQueue[el.tToadingKey]
  }
})

export default TLoading
