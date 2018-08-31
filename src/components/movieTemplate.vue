<template>
    <div id="movie-temp" ref="movieTemp">
        <div class="movie-temp-wrapper">
            <div class="movie-header">
                <span class="movie-title">{{movieList1.title}}</span>
                <span class="movie-more">更多</span>
            </div>
            <div class="movie-wrapper" ref="movieWrapper1">
                <ul class="movie-list">
                    <li class="single-movie" v-for="(item,index) in movieList1.subjects" :key="index" @click='toMovie(item.id)'>
                        <movie :singleMovie="item"></movie>
                    </li>
                </ul>
            </div>
        </div>
        <div class="movie-temp-wrapper">
            <div class="movie-header">
                <span class="movie-title">{{movieList2.title}}</span>
                <span class="movie-more">更多</span>
            </div>
            <div class="movie-wrapper" ref="movieWrapper2">
                <ul class="movie-list">
                    <li class="single-movie" v-for="(item,index) in movieList2.subjects" :key="index" @click='toMovie(item.id)'>
                        <movie :singleMovie="item"></movie>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import movie from "./movie";
import Vue from 'vue'
import BScroll from 'better-scroll'
export default {
  props: {
    movieList1: {
      type: Object
    },
    movieList2: {
      type: Object
    }
  },
  components: {
    movie
  },
  created(){
      this.$nextTick(()=>{
          this._initScroll()
      })
  },
  methods:{
    _initScroll(){
          this.$nextTick(()=>{
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.movieWrapper1,{
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:'vertical'
                })
                this.scroll = new BScroll(this.$refs.movieWrapper2,{
                    startX:0,
                    click:true,
                    scrollX:true,
                    scrollY:false,
                    eventPassthrough:'vertical'
                })
            }else{
                this.scroll.refresh()
            } 

        })
    },
    toMovie($id){
        window.location.href = 'http://localhost:8080/#/movieInfo?id='+$id
    }
  }
};
</script>
<style lang="stylus">
#movie-temp
    width 100%
    .movie-temp-wrapper
        width 100%
        .movie-header
            height 4rem
            line-height 4rem
            background #ffffff
            .movie-title
                font-size 1.6rem
            .movie-more
                float right 
                color #00b600
                font-size 1.6rem
        .movie-wrapper
            width 100%
            overflow hidden
            .movie-list
                width 100rem
                display flex
                flex-wrap nowrap
                .single-movie
                    float left
                    width 10rem
                    margin-right 0.5rem

</style>
