<template>
  <div class="app-header">
    <div>
        <span @click="toggleNav" class="menu">三</span>
        <span class="title">卖座电影</span>
    </div>

    <div>
        <span class="city">北京</span>
        <span class="user">人</span>
    </div>
  </div>
</template>

<script>

import angel from '../event_bus'

export default {
  name: 'AppHeader',
  data () {
    return {
      
    }
  },
  methods:{
      toggleNav(){
          angel.$emit('toggleNav')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app-header{
        height: 50px;
        background: #282828;
        position: relative;
        z-index: 1000;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        span{
            padding: 0 15px;
        }
    }
</style>
