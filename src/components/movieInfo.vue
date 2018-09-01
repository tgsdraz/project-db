<template>
    <div id="movie-info">
        <share-temp></share-temp>
        <div class="movie-info-wrapper">
            <div class="movie-info-title">{{movie.title}}</div>
            <div class="movie-info-content">
                <div class="movie-info-introduce">
                    <div class="movie-info-rating">
                        <rating-temp :rating="rating"></rating-temp>
                        <span class='movie-info-rating'>{{movie.rating.average}}</span>
                        <span class="text">{{movie.rating.stars}}人评价</span>
                    </div>
                    <div class="movie-info-msg">
                        {{movie.year}} / {{genres}} / {{casts}}{{directors}}
                    </div>
                    <div class="movie-app">
                        <a href="#/main">用App查看影人资料</a>
                    </div>
                </div>
                <div class="movie-info-img">
                    <img :src="movie.images.medium" alt="">
                </div>
            </div>
            <div class="movie-status">
                <a href="#/login">想看</a>
                <a href="#/movie">看过</a>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import shareTemp from './shareTemp'
import ratingTemp from './rating'
export default {
components:{
    shareTemp,
    ratingTemp
},
data() {
    return {
      rating:0,
      movie: {},
      casts:'',
      genres:'',
      directors:''
    };
  },
created() {
    let href = window.location.href;
    let arr = href.split("?")[1].split("=");
    let fn = (type) => {
            axios({ method: "GET", url: "/api/movie/"+type+"?city=118221" }).then(res => {
            let movies = res.data.subjects;
            movies.forEach((ele, index) => {
                if (ele.id === arr[1]) {
                    this.movie = ele;
                    this.rating = Math.floor(ele.rating.average)
                    ele.casts.forEach((item) => {
                        this.casts += item.name + ' / '
                    })
                    this.genres = ele.genres.join(' / ')
                    ele.directors.forEach((item,index) => {
                        if(index == ele.directors.length - 1){
                            this.directors += item.name
                        }else{
                            this.directors += item.name + ' / '
                        }
                    })
                    console.log(this.casts,this.genres,this.directors)
                //     this.$nextTick(() => {
                // // this.$refs.eventInfoDetails.innerHTML = this.event.content
                //     });
                }
            });
            console.log(this.movie)
        });
    }
    fn('in_theaters')
    fn('coming_soon')
    
  }
}
</script>
<style lang='stylus'>
#movie-info
    width: 100%;
    .movie-info-wrapper
        width 100%
        padding 2rem 1rem 0 1rem 
        .movie-info-title
            color #000000
            font-size 2rem
            font-weight 700
            font-family Microsoft YaHei
            margin-bottom  2rem
        .movie-info-content
            position relative
            width 100%
            display flex
            .movie-info-introduce
                flex 1
                .movie-info-rating
                    display flex
                    margin-bottom 0.5rem
                    .movie-info-rating,.text
                        color rgba(7,17,27,0.5)
                    .movie-info-rating
                        margin-right 1rem
                .movie-info-msg
                    font-size 1.6rem
                .movie-app
                    position absolute
                    bottom 0
                    a
                        color #00b600
                        font-size 1.6rem
            .movie-info-img
                flex 0 0 12rem
                margin-left 2rem
                img 
                    width 100%
        .movie-status
            width 100%
            padding 2rem 0
            a
                display inline-block
                flex 1
                text-align center
                border 0.1rem solid lime
                width 45%
                height 3rem
                line-height 3rem
                color lime
                border-radius 0.5rem
                margin-right 1rem

</style>
