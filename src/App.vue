<template>
  <div id="app">
    <div class="header-wrapper">
      <div class="main-wrapper">
          <router-link :to="{name:'main'}" class="main-title">
            豆瓣
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
import axios from "axios";
export default {
  name: "App"
};
</script>

<style lang="stylus">
#app
  width 100%
  height 100vh
  padding 0 1rem
  .header-wrapper
    width 100%
    height 5rem
    line-height 5rem
    display flex
    border-bottom 0.1rem solid #F0F8FF
    box-sizing border-box
    .main-wrapper
      flex 0 0 10rem
      height 100%
      font-size 3rem
      .main-title
        display block
        width 100%
        height 100%
        color #00b600
        font-family 'Microsoft YaHei'
        font-weight 600
    .item-wrapper
      flex 1
      height 100%
      .items
        width 100%
        height 100%
        display flex
        li
          flex 1
          text-align center
          font-size 1.6rem
          a
            display block
            width 100%
            height 100%
          .book-title
            color #9F7860
          .broadcast-title
            color #E4A813
        
</style>
