#Todo and Checklist
##select
1. remote search debounce
2. performance optimization
3. check remote request contains async
4. remote source adapter transfer to [{value, label}, ...]
5. animation bug

##form
1. name prop

##demopanel
1. add animation of toggle
2. add jsfiddle

##table
1. add eomplex table head

##scroll
let EventUtil = {
  addHandler: function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false)
    } else if (element.attachEvent) {
      element.attachEvent('on' + type, handler)
    } else {
      element['on' + type] = handler
    }
  },
  getEvent: function (event) {
    return event ? event : window.event
  },
  stopPropagation: function (event) {
    event = event || window.event
    if (event.stopPropagation) {
      event.stopPropagation()
    } else {
      event.cancelBubble = true
    }
  }
}

Vue.directive('scroll', {
  inserted: function (el) {
    EventUtil.addHandler(el, 'mousewheel', handleMouseWheel)
    EventUtil.addHandler(el, 'DOMMouseScroll', handleMouseWheel)

    function handleMouseWheel (event) {
      EventUtil.stopPropagation(event)
      event = EventUtil.getEvent(event)
      let value = event.wheelDelta || -event.detail
      let delta = Math.max(-1, Math.min(1, value))
      if (delta < 0) {
        if (el.scrollTop + el.clientHeight >= el.children[0].clientHeight) return false
      } else {
        if (el.scrollTop === 0) return false
      }
    }
  }
})
