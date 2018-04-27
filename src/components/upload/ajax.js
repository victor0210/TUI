export default class TAjax {
  send (url, method, data, headers, handleProgressChange, tfile) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()

      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          handleProgressChange(e, tfile)
        }
      }
      xhr.onloadstart = function (e) {
        handleProgressChange(e, tfile, 'start')
      }

      if (method === 'post' || method === 'put') {
        xhr.open(method, url, true)
        for (let k in headers) {
          xhr.setRequestHeader(k, headers[k])
        }

        xhr.send(data)
      } else {
        throw new Error('upload method except [POST] or [PUT] but got [' + method.toUpperCase() + '] !')
      }

      xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            handleProgressChange(e, tfile, 'success')
            resolve(new AjaxResponse(xhr))
          } else {
            handleProgressChange(e, tfile, 'error')
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
