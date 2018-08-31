<template>
    <div id="movie" ref="movie">
        <movie-template :movieList1="movieList1" :movieList2="movieList2"></movie-template>
    </div>
</template>
<script>
import movieTemplate from './movieTemplate'
import axios from 'axios'

export default {
    components:{
        movieTemplate
    },
    data(){
        return {
            movieList1:{},
            movieList2:{},
        }
    },
    created(){
        let index = 0
        axios({method:'GET',url:'/api/movie/in_theaters?city=118221&start='+ index +'&count=10'}).then(res => {
            this.movieList1 = res.data
            
        })
        axios({method:'GET',url:'/api/movie/coming_soon?city=118221&start='+ index +'&count=10'}).then(res => {
            this.movieList2 = res.data
        })
        // axios({method:'GET',url:'/api/movie/us_box'}).then(res => {
        //     this.movieList.push(res.data)
        // })
        // console.log(this.movieList[0])
       
    },
    
}
</script>
<style>

</style>
