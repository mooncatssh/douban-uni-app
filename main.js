import App from './App'
import store from './store/store.js'
//导入网络请求的包
import {$http} from '@escook/request-miniprogram'
uni.$http = $http 
//全局根路径
$http.baseUrl="http://120.79.164.150"

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'

//封装弹框的方法
uni.$showMsg=function(title='数据加载失败',duration=1500){
	uni.showToast({
		title,
		duration,
		icon:'none'
	})
}
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif