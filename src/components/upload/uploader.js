import Ajax from './ajax'
let ajax = new Ajax()

export default class Uploader {
  constructor (uploadUrl, method, name, headers) {
    this.uploadUrl = uploadUrl
    this.method = method
    this.name = name
    this.headers = headers
  }

  upload (file) {
    let fd = new FormData
    fd.append(this.name, file)

    return new Promise((resolve, reject) => {
      ajax.send(this.uploadUrl, this.method, fd, this.headers)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
