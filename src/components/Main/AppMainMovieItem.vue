<template>
  <div class="app-main-movie-item" @click="toDetail">
    <img :src="film.cover.origin" />
    <div class="movie-info">
      <div class="left">
        <h5 v-text="film.name"></h5>
        <p>{{film.cinemaCount}}家影院上线 {{film.watchCount}}人观看</p>
      </div>
      <div class="right">{{film.grade}}</div>
    </div>
  </div>
</template>

<script>

import router from '../../router'
// console.log(router)
export default {
  name: 'AppMainMovieItem',
  props:['film'],
  data () {
    return {
      
    }
  },
  methods:{
    toDetail(){
      console.log("hahaha")
      router.push({ name: 'detail', params: { id: this.film.id }})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .app-main-movie-item{
    width: 100%;
    box-shadow:0.5px 0.5px 1px #a8a8a8;
    background: #fff;
    margin: 20px 0;

    img{
      width: 100%;
      height: 100%;
    }

    .movie-info{
      display: flex;
      justify-content: space-between;
      padding:0 15px;

      .left{
        padding: 5px 0;

        h5{
          font-size: 12px;
          font-weight: normal;
        }

        p{
          font-size: 12px;
          color: #999;
        }
      }

      .right{
        color:#f78360;
        display: inline-block;
        line-height: 50px;
        font-size: 18px;
      }
    }
  }
</style>
