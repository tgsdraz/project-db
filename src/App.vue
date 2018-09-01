<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="main-wrapper">
          <router-link :to="{name:'main'}" class="main-title">
            <strong>豆瓣</strong>
          </router-link>
      </div>
      <div class="item-wrapper">
        <ul class="items">
          <li class="movie-wrapper">
            <router-link :to="{name:'movie'}" class="movie-title">电影</router-link>
          </li>
          <li class="book-wrapper">
            <router-link :to="{name:'book'}" class="book-title">图书</router-link>
          </li>
          <li class="broadcast-wrapper">
            <router-link :to="{name:'broadcast'}" class="broadcast-title">广播</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'App',
}
</script>

<style lang="stylus">
#app
  width 100%
  padding 0 1rem
  overflow hidden
  .header-wrapper
    position fixed
    background #ffffff
    z-index 300
    width 100%
    height 4.8rem
    line-height 4.8rem
    border-bottom: .1rem solid #f3f3f3
  .header-wrapper::after
      content ''
      display block
      clear both
    .main-wrapper
      float left
      .main-title
        color #00b600
        font-size 3rem
    .item-wrapper
      width 60%
      float right 
      .items
        display flex
        li 
          flex 1
          font-size 2rem
        .book-title
          color rgb(159, 120, 96)
        .broadcast-title
          color rgb(228, 168, 19)
  .content-wrapper
    margin 4.8rem 5px 5px 5px
    padding 0px 5px
    background #ffffff      
    width 100%

    
</style>
