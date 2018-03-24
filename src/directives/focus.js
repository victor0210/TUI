import Vue from 'vue'

const TFocus = Vue.directive('tfocus', function () {
  const autoFocus = setTimeout(function () {
    document.getElementsByClassName('t-select__editor-input')[0].focus()
    clearTimeout(autoFocus)
  })
})

export default TFocus
