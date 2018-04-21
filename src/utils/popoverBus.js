let bus = {}

export default {
  get () {
    return bus
  },
  set (key, val) {
    bus[key] = val
  }
}
