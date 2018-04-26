export default class TFile {
  constructor (file) {
    this.file = file
    this.uuid = ~~(Math.random() * 100000000)
    this.loading = false
    this.percent = 0
    this.uploadSuccess = false
    this.uploadError = false
    this.prepearUpload = false
  }
}
