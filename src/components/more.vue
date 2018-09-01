<template>
    <div id="more-wrapper" ref="moreWrapper">
        <div class="more-movies-title">{{movieMore.title}}</div>
        <div class="more-movies-content">
            <ul class="more-movies-list">
                <li class="more-single-movie" v-for="(item,index) in movieArr" :key="index">
                    <div class="more-movie-img">
                        <img :src="item.images.medium" alt="">
                    </div>
                    <div class="more-movie-title">
                        {{item.title}}
                    </div>
                    <div class="more-movie-rating">
                        <rating-temp :rating="Math.floor(item.rating.average)"></rating-temp>
                        <span class="more-rating">{{item.rating.average}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import ratingTemp from './rating'
export default {
    components:{
        ratingTemp
    },
    data(){
        return {
            movieMore:{},
            movieArr:[]
        }
    },
    created(){
        let index = 0
        let href = window.location.href
        let type = href.split('?')[1].split('=')[1]
        let fn = (type,index) => {
            axios({method:'GET',url:'/api/movie/'+ type +'?city=118221&start='+ index +'&count=10'}).then(res => {
                this.movieMore = res.data
                this.movieArr = this.movieArr.concat(this.movieMore.subjects)
            })
        }
        fn(type,index)
        this.$nextTick(() => {
            window.addEventListener('scroll',()=>{
                if(this.$refs.moreWrapper.offsetHeight <= window.scrollY + window.innerHeight - 60){
                    index += 10
                    fn(type,index)
                }
            })
        })
    }
}
</script>
<style lang="stylus">
#more-wrapper
    width 100%
    .more-movies-title
        width 100%
        height 4rem
        color #00b600
        font-size 1.6rem
        line-height 4rem
        font-weight 600
    .more-movies-content
        width 100%
        .more-movies-list
            width 100%
            display flex
            justify-content space-around
            
            flex-wrap wrap 
            .more-single-movie
                width 12rem
                display flex
                flex-direction column
                justify-content center
                align-items center
                .more-movie-img
                    width 10rem
                    img 
                        width 100%
                .more-movie-title
                    width 100%
                    height 2rem
                    color #000000
                    font-size 1.2rem
                    line-height 2rem
                    text-align center
                .more-movie-rating
                    width 100%
                    display flex
                    justify-content center

</style>
