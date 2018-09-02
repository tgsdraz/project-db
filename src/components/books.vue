<template>
    <div id="book">
        <div class="book-search">
            <input type="text" placeholder="请输入关键字" value="a" ref="search" @input="search">
        </div>
        <div class="book-wrapper">
            <ul class="book-wrapper-list">
                <li class="book-item" v-for="(item,index) in books" :key="index">
                    <div class="book-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="book-content">
                        <div class="book-title">{{item.title}}</div>
                        <div class="book-author">
                            <span class="book-text">作者:</span>
                            {{item.author}}
                        </div>
                        <div class="book-rating-wrapper">
                            <rating-temp :rating="Math.floor(item.rating.average)"></rating-temp>
                            <span>{{item.rating.average}}</span>
                        </div>
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
            books:[]
        }
    },
    methods:{
        search(){
            this.$nextTick(() => {
                this.init(0)
            })
        }
    },
    created(){
        let index = 0
        this.init = (index) => {
            this.$nextTick(() => {
            let bookVal = this.$refs.search.value
            axios({method:'GET',url:'/api/book/search?q='+bookVal+'&start='+index+'&count=10'}).then(res => {
                this.books = res.data.books
                this.books.forEach((item) => {
                    let authorStr = ''
                    item.author.forEach((item1,index1) => {
                        if(index1 == item.author.length - 1){
                            authorStr +=  item1
                        }else{
                            authorStr +=  item1 + '/'
                        }
                    })
                    item.author = authorStr
                })
            })
        })
        }
        this.init(index)
    }
}
</script>
<style lang="stylus">
#book
    width 100%
    .book-search
        width 100%
        padding 1rem 0
        text-align center
        input 
            display inline-block
            width 90%
            height 3rem
            border 0.1rem solid lime
            border-radius 0.5rem
            padding 0 2rem
            outline 0
    .book-wrapper
        width 100%
        .book-wrapper-list
            width 100%
            .book-item
                width 100%
                display  flex
                padding 2rem 5%
                .book-img
                    flex 0 0 10rem
                    margin-right 2rem
                    img  
                        width 100%
                .book-content
                    display flex
                    flex-direction column
                    align-items flex-start
                    justify-content center
                    .book-title
                        font-size 1.6rem
                        font-weight 600
                        margin-bottom 1rem
                    .book-author
                        color #EE7600
                        margin-bottom 1rem
                        .book-text
                            color #DC143C
                    .book-rating-wrapper
                        display flex
                        align-items center


</style>
