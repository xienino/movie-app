<template>
  <div class="AppMain">
    <app-main-movie-box></app-main-movie-box>
  </div>
</template>

<script>

import AppMainMovieBox from './AppMainMovieBox'

export default {
  name: 'AppMain',
  data () {
    return {
      
    }
  },
  components:{
    AppMainMovieBox
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .AppMain{
    width: 100%;
  }
</style>
