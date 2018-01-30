export default {
  removeFromStore (arr, val) {
    let index = arr.indexOf(val)
    if (index > -1) {
      arr.splice(index, 1)
    }
    return arr
  },
  addToStore (arr, val) {
    let index = arr.indexOf(val)
    if (index === -1) {
      arr.push(val)
    }
    return arr
  }
}
