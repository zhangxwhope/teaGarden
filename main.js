import Vue from 'vue'
import App from './App'
import store from './store'

import mixin from './common/mixin/mixin'
Vue.mixin(mixin) 

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
