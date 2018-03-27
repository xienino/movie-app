<template>
  <div id="app">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view class="view"></router-view>

  </div>
</template>

<script>              //要暴露模板，只需要写name和对应id 的键值对就行了

import AppHeader from './components/AppHeader'
import AppNav from './components/AppNav'

export default {
  components: {
    AppHeader,
    AppNav
  }     
}
</script>

<style lang="scss">
  #app{
    display: flex;
    flex-direction: column;
  }

  @import './style/reset.scss';

  .view{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: scroll;
    flex: 1;
  } 

</style>
