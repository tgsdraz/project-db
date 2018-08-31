<template>
    <div id="movie" >
        <div class="single-movie-item">
            <div class="movie-img">
                <img :src="singleMovie.images.medium" alt="">
            </div>
            <div class="movie-title">{{singleMovie.title}}</div>
            <div class="movie-rating">
                <rating-temp :rating="rating"></rating-temp>
                <div class="rating">{{singleMovie.rating.average}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import ratingTemp from './rating'
export default {
  components:{
      ratingTemp
  },
  props: {
    singleMovie: {
      type: Object
    }
  },
  data(){
      return {
          rating:Math.floor(this.singleMovie.rating.average)
      }
  },
  created(){
       
  }
};
</script>
<style lang="stylus">
#movie
    width 100%
    .single-movie-item
        width 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        margin-right 0.5rem
        .movie-img
            width 100%
            img 
                width 100%
                height 12rem
        .movie-title
            font-size 1.2rem
            font-weight 700
            margin-top 1rem
        .movie-rating
            width 100%
            display flex
            justify-content center
            align-items center
</style>
