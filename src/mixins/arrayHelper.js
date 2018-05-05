export default {
  removeFromStoreByKey (arr, key, val) {
    arr.forEach(function (el, idx) {
      if (el[key] === val) {
        arr.splice(idx, 1)
      }
    })
    return arr
  },
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
  clone (arr) {
    let dist = []
    for (let i = arr.length - 1; i >= 0; i--) {
      dist[i] = arr[i]
    }
    return dist
  }
  // limit (arr, min, max) {
  //   let limit = []
  //   if (min && arr.length < min) {
  //     limit = arr.splice(0, min)
  //   } else if (max && arr.length > max) {
  //     limit = arr.splice(0, min)
  //   } else {
  //     limit = arr
  //   }
  //
  //   return limit
  // }
}
