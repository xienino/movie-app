<template>
  <div class="app-nav">

      <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
        <div class="nav" v-if="isNavShow">
            <ul>
                <li @click="isNavShow=!isNavShow" v-for="(nav,i) in navs" :key="i">
                    <router-link :to='nav.path'>
                        {{nav.title}} 
                        <span>></span>
                    </router-link>
                </li>
            </ul>
        </div>
      </transition>

      <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="mask" v-if="isNavShow"></div>
      </transition>
  </div>
</template>

<script>

import angel from '../event_bus'

export default {
  name: 'AppNav',
  data () {
    return {
      navs:[
          {title:'首页',path:'/'},
          {title:'影片',path:'list'},
          {title:'影院',path:'theather'},
          {title:'我的',path:'me'}          
      ],
      isNavShow:false
    }
  },
  methods:{
      
  },
  mounted(){
      let that = this;
      angel.$on('toggleNav',function(){
          that.isNavShow=!that.isNavShow
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app-nav{
        width: 100%;
        height: 0;
        position: absolute;
        z-index: 999;
        top: 0;left: 0;

        .mask{
            width: 100%;
            height: 100vh;
            position: absolute;
            top: 0;left: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1;
        }

        .nav{
            width: 2.67rem;
            
            position: absolute;
            top: 0;left: 0;
            z-index: 2;
            height: 100vh!important;
            height: 100%;
            background: #282828;
            padding-top: 50px;

            li{
                
                padding: 15px;
                border-bottom: 1px solid #333;

                a{
                    color: #fff;
                    display: flex;
                    justify-content: space-between;
                    
                }
            }
        }
    }
</style>
