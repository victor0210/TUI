<script>
import TModalTemp from './model-temp.vue'
import Vue from 'vue'

export default {
  name: 't-modal',

  data () {
    return {
      initial: false,
      instance: null
    }
  },

  props: {
    show: Boolean
  },

  render (h) {
    if (!this.initial) {
      this.createInstance()
      this.initial = true
    } else {
      this.show ? this.instance.showModal() : this.instance.hideModal()
    }

    return h()
  },

  methods: {
    createInstance () {
      const _this = this._self
      let Modal = new Vue({
        render (h) {
          return h(TModalTemp, {}, [_this.$slots.default, _this.$slots.header, _this.$slots.footer])
        },

        data () {
          return {
            isShow: false
          }
        },

        methods: {
          showModal () {
            !this.isShow && document.body.appendChild(this.$el)
            this.isShow = true
          },
          hideModal () {
            this.isShow && document.body.removeChild(this.$el)
            this.isShow = false
          },
          remove () {
            this.$destroy()
            _this.initial && document.body.removeChild(this.$el)
          }
        }
      })

      this.instance = Modal.$mount()
    }
  },

  beforeDestroy () {
    this.instance && this.instance.remove()
  }
}
</script>
