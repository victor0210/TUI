import Loading from './loading.js'

let loadingInstance = null

const getInstance = (props) => {
  loadingInstance = loadingInstance || Loading.initial(props)
  return loadingInstance
}

const loading = (action, props) => {
  const c = getInstance(props)

  switch (action) {
    case 'show':
      c.show()
      break
    case 'hide':
      c.hide()
      loadingInstance = null
      break
  }
}

export default {
  show (props) {
    loading('show', props)
  },

  hide () {
    loading('hide')
  }
}
