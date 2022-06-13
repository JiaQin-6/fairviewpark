/*
 * @Author: 嘉嘉 1723470065@qq.com
 * @Date: 2022-06-13 15:08:30
 * @LastEditors: 嘉嘉 1723470065@qq.com
 * @LastEditTime: 2022-06-13 16:02:12
 * @FilePath: \dtX-consumer-frontendc:\Users\Shinelon\Desktop\Fairview Park\fairviewpark\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
