export default class TAjax {
  send (url, method, data, headers) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()

      if (method === 'post' || method === 'put') {
        xhr.open(method, url, true)
        for (let k in headers) {
          xhr.setRequestHeader(k, headers[k])
        }

        xhr.send(data)
      } else {
        throw new Error('upload method except [POST] or [PUT] but got [' + method.toUpperCase() + '] !')
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(new AjaxResponse(xhr))
          } else {
            reject(new AjaxError(xhr))
          }
        }
      }
    })
  }
}

class AjaxResponse {
  constructor (xhr) {
    this.data = xhr.responseText.trim() ? JSON.parse(xhr.responseText) : null
    this.status = xhr.status
    this.statusText = xhr.statusText
    this.headers = xhr.getAllResponseHeaders()
  }
}

class AjaxError {
  constructor (xhr) {
    this.response = xhr.responseText.trim() ? JSON.parse(xhr.responseText) : null
    this.status = xhr.status
    this.statusText = xhr.statusText
  }
}
