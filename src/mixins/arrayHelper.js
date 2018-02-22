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
  },
  between (val, left, right) {
    return val >= left && val < right
  },
  addToStoreWithIndex (arr, val, idx) {
    for (let i = arr.length - 1; i >= idx; i--) {
      arr.pop()
    }
    arr.push(val)
    return arr
  },
  mapValue (arr) {
    let dist = []
    for (let i = arr.length - 1; i >= 0; i--) {
      dist[i] = arr[i]
    }
    return dist
  }
}
