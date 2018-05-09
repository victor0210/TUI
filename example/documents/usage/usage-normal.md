::: mk
```javascript 
import Vue from 'vue'
import App from './App'
import router from './router'

// import full tui
import Tui from 'vuetui'
import 'vuetui/dist/style.min.css'

// mount
Vue.use(Tui)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
```
:::
