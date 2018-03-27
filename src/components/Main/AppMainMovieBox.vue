<template>
  <div class="AppMainMovieBox">
    <app-main-movie-item :film='film' v-for="(film,i) in films" :key="film.id"></app-main-movie-item>
  </div>
</template>

<script>

import AppMainMovieItem from './AppMainMovieItem'
import axios from 'axios'

export default {
  name: 'AppMainMovieBox',
  data () {
    return {
      films:[]
    }
  },
  methods:{
    getFilms(){
      let that = this
      axios.get('http://localhost:3000/maizuo/v4/api/film/now-playing?__t='+Date.now()+'&page=1&count=5')
         .then((res)=>{
           that.films = res.data.data.films
         })
    }
  },
  components:{
    AppMainMovieItem
  },
  mounted () {
    this.getFilms()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .AppMainMovieBox{
    width: 100%;
    padding:0 15px;
    height: 100%;
  }
</style>
