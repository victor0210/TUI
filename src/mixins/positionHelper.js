export default {
  methods: {
    getElementViewLeft (element) {
      let actualLeft = element.offsetLeft
      let currentOffsetLeft = element.offsetParent
      let currentScrollLeft = element.parentElement
      let elementScrollLeft = 0

      while (currentOffsetLeft !== null) {
        actualLeft += currentOffsetLeft.offsetLeft
        currentOffsetLeft = currentOffsetLeft.offsetParent
      }

      while (currentScrollLeft !== null) {
        elementScrollLeft += currentScrollLeft.scrollLeft
        currentScrollLeft = currentScrollLeft.parentElement
      }

      return actualLeft - elementScrollLeft
    },

    getElementViewTop (element) {
      let actualTop = element.offsetTop
      let currentOffsetTop = element.offsetParent
      let currentScrollTop = element.parentElement
      let elementScrollTop = 0

      while (currentOffsetTop !== null) {
        actualTop += currentOffsetTop.offsetTop
        currentOffsetTop = currentOffsetTop.offsetParent
      }

      while (currentScrollTop !== null) {
        elementScrollTop += currentScrollTop.scrollTop
        currentScrollTop = currentScrollTop.parentElement
      }

      return actualTop - elementScrollTop
    }

    //  for popover
  }
}
