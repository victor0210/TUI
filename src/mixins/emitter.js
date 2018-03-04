const _broadcast = function (componentName, eventName, args) {
  this.$children.forEach(function (child) {
    let name = _getComponentName(child)
    if (name === componentName) {
      child.$emit(eventName, args)
    } else {
      _broadcast.apply(child, [componentName, eventName, args])
    }
  })
}

const _getComponentName = function (el) {
  return el.$options.name
}

export default {
  methods: {
    dispatch (componentName, eventName, args) {
      let parent = this.$parent || this.$root
      let name = _getComponentName(parent)

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent
        parent && (name = _getComponentName(parent))
      }

      parent.$emit(eventName, args)
    },

    broadcast (componentName, eventName, args) {
      _broadcast.apply(this, [componentName, eventName, args])
    }
  }
}
