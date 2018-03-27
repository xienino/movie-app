// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'  //即同级的App.vue 被引入模板
import router from './router'  //引入router文件夹下的index

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({           //创建根实例，即根组件
  el: '#app',       //提供的#app作为挂载点
  router,           //全局注入router
  template: '<App/>',  //配置组件   组件的模板需要template
  components: { App } //注册组件    包含Vue实例的可用组件的哈希表，语法规定
})
