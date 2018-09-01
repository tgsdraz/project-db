<template>
    <div id="main" ref="main">
        <div class="main-menu">
            <div class="menu movie-theater">
                <a href="#/movie">影院热映</a>
            </div>
            <div class="menu ea-theater">
                <a href="#/eaMovie">欧美新碟榜</a>
            </div>
            <div class="menu regedit">
                <a href="#/regedit">注册账户</a>
            </div> 
            <div class="menu login">
                <a href="#/login">登录豆瓣</a>
            </div>
        </div>
        <div class="list-wrapper">
            <ul class="lists">
                <li class="single-list" v-for="(item,index) in eventList" :key="index" @click="toEventList(index)">
                    <div class="list-left">
                        <div class="single-title">{{item.title}}</div>
                        <div class="single-notice">地点：{{item.address}}</div>
                        <div class="single-time">起止时间：{{item.begin_time}}-{{item.end_time}}</div>
                        <span class="single-type">{{item.category_name || ''}}</span>
                    </div>
                    <div class="list-right">
                        <img :src="item.image" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import BScroll from 'better-scroll'
// import Vuex from 'vuex'
// import Vue from 'vue'
// Vue.use(Vuex)
export default {
    data(){
        return {
            eventList:[]
        }
    },
    methods:{
        toEventList(index){
            window.location.href = 'http://localhost:8080/#/eventList?index='+index
        },
    },
    created(){
        let index = 0
        axios({method:'GET',url:'/api/event/list?loc=118221&start='+ index +'&count=10'}).then(res => {
            this.eventList = res.data.events
        })
        this.$nextTick(()=>{
            window.addEventListener('scroll',()=>{
                if(window.scrollY + window.innerHeight-60 >= this.$refs.main.offsetHeight){
                    index += 10
                    axios({method:'GET',url:'/api/event/list?loc=118221&start='+ index +'&count=10'}).then(res => {
                        this.eventList = this.eventList.concat(res.data.events)
                    })
                }
            })
        })
    }
};
</script>
<style lang="stylus">
#main
    width 100%
    .main-menu
        width 100%
        display flex
        justify-content space-around
        flex-wrap wrap
        .menu
            width 40%
            height 4rem
            text-align center
            line-height 4rem
            background #f6f6f6
            margin 1rem 0
            a
                color #494949
    .list-wrapper
        width 100%
        .lists
            width 100%
            .single-list
                width 100%
                display flex
                padding 1rem 0
                margin 0 0 3rem 0
                border-bottom 0.1rem solid #f35f7f
                .list-left
                    position relative
                    flex 1
                    margin-right 1rem
                    .single-title
                        font-size 2rem
                        font-weight 700
                        font-font-family '微软雅黑'
                        margin-bottom 1rem
                    .single-notice,.single-time
                        font-size 1rem
                        color rgba(7,17,27,0.6)
                        font-weight 200
                        margin-bottom 1.2rem
                    .single-type
                        position absolute
                        bottom 0
                        left 0
                .list-right
                    flex 0 0 10rem
                    img     
                        width 100%
                    

</style>
