import Ajax from './ajax'
let ajax = new Ajax()

export default class Uploader {
  constructor (uploadUrl, method, name, headers, withCredentials) {
    this.uploadUrl = uploadUrl
    this.method = method
    this.name = name
    this.headers = headers
    this.withCredentials = withCredentials
  }

  upload (tfile, handleProgressChange) {
    return new Promise((resolve, reject) => {
      let fd = new FormData()
      fd.append(this.name, tfile.file)

      ajax.send(this.uploadUrl, this.method, fd, this.headers, this.withCredentials, handleProgressChange, tfile)
        .then(resp => {
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
