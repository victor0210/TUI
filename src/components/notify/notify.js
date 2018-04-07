import Notify from './notify.vue'
import Vue from 'vue'

let notifyCollections = {
  'top-right': [],
  'top-left': [],
  'bottom-right': [],
  'bottom-left': []
}

let positions = {
  'right': {
    start: {
      right: '-100px',
      left: ''
    },
    end: {
      right: '15px',
      left: ''
    }
  },
  'left': {
    start: {
      right: '',
      left: '-100px'
    },
    end: {
      right: '',
      left: '15px'
    }
  }
}

const iconClasses = {
  'success': 'fa fa-check-circle',
  'danger': 'fa fa-times-circle',
  'warning': 'fa fa-exclamation-circle',
  'info': 'fa fa-info-circle'
}

Notify.initial = (_props, _type) => {
  const _defaults = {
    position: 'top-right',
    duration: 3000,
    closable: true,
    title: 'Please Edit Title',
    type: _type,
    iconClass: iconClasses[_type]
  }

  let props = Object.assign({}, _defaults, _props)

  let arr = notifyCollections[props.position]

  const instance = new Vue({
    data () {
      return {
        pidx: arr.length,
        offset: _props.offset || 0
      }
    },
    render (h) {
      const _this = this
      return h(Notify, {
        props: props,
        on: {
          close: _this.remove
        }
      })
    },

    mounted () {
      this.initPosition()
    },

    methods: {
      show () {
        const {left, right} = positions[props.position.split('-')[1]].end

        this.$el.style.opacity = 1
        this.$el.style.left = left
        this.$el.style.right = right
      },
      hide () {
        const {left, right} = positions[props.position.split('-')[1]].start

        this.$el.style.opacity = 0
        this.$el.style.left = left
        this.$el.style.right = right
      },
      remove () {
        this.hide()
        setTimeout(() => {
          this.removeAndResetPositions(this.pidx)
          this.$destroy()
          document.body.removeChild(this.$el)
        }, 200)
      },
      setIndex (idx) {
        this.pidx = idx
      },
      removeAndResetPositions (rIdx) {
        const height = arr.splice(rIdx, 1)[0].$el.offsetHeight + 15
        const _this = this

        switch (props.position.split('-')[0]) {
          case 'top':
            arr.forEach(function (el, idx) {
              console.log('remove', idx, rIdx)
              if (idx >= rIdx) {
                el.setIndex(idx)
                el.$el.style.top = `${el.$el.offsetTop - height}px`
              }
            })
            break
          case 'bottom':
            arr.forEach(function (el, idx) {
              if (idx >= rIdx) {
                let bottom = _this.getBottom(idx)
                el.setIndex(idx)
                el.$el.style.bottom = `${bottom - height}px`
              }
            })
            break
        }
      },
      initPosition () {
        const _this = this
        switch (props.position.split('-')[0]) {
          case 'top':
            if (arr.length > 0) {
              _this.$el.style.top = `${arr[arr.length - 1].$el.offsetTop + arr[arr.length - 1].$el.offsetHeight + 15}px`
            } else {
              _this.$el.style.top = `${15 + _this.offset}px`
            }
            break
          case 'bottom':
            if (arr.length > 0) {
              _this.$el.style.bottom = _this.getBottom()
            } else {
              _this.$el.style.bottom = `${15 + _this.offset}px`
            }
            break
        }
        this.hide()
      },
      getBottom (idx) {
        if (!idx) {
          let h = 15
          arr.forEach(function (el) {
            h += el.$el.offsetHeight + 15
          })

          return `${h}px`
        } else {
          let h = 15
          arr.some(function (el, index) {
            h += el.$el.offsetHeight + 15
            if (idx === index) return true
          })

          return h
        }
      }
    }
  })

  const component = instance.$mount()
  document.body.appendChild(component.$el)

  arr.push(component)

  return component
}

export default Notify
