import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swiper from "vue-awesome-swiper"


//css
import "font-awesome/css/font-awesome.css"
import 'swiper/css/swiper.min.css'

Vue.config.productionTip = false
Vue.use(Swiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
