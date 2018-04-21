export default {
  methods: {
    getElementViewLeft (element) {
      let p = element.getBoundingClientRect();

      return p.left
    },

    getElementViewTop (element) {
      let p = element.getBoundingClientRect();

      return p.top
    }
  }
}
