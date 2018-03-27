import Vue from 'vue'
import Router from 'vue-router'
import AppMain from '../components/Main/AppMain.vue'
import AppList from '../components/List/AppList.vue'
import AppTheather from '../components/Theather/AppTheather.vue'
import AppMe from '../components/Me/AppMe.vue'
import AppDetail from '../components/detail/AppDetail.vue'

console.log('router')
Vue.use(Router)   //全局插件使用

export default new Router({
  routes: [                 //创建路由
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'AppMain',
      component: AppMain
    },
    {
      path: '/list',
      name: 'AppList',
      component: AppList
    },
    {
      path: '/theather',
      name: 'AppTheather',
      component: AppTheather
    },
    {
      path: '/me',
      name: 'AppMe',
      component: AppMe
    },
    {
      path: '/detail/:id',
      name: 'AppDetail',
      component: AppDetail
    }
  ]
})
