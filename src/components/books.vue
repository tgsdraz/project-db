<template>
    <div id="book">
        <div class="book-wrapper" v-for="(item,index) in books" :key="index">
            <div class="book-img">
                <img :src="item.img" alt="">
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            books:[]
        }
    },
    created(){
        axios.get('/db/data').then(res => {
            if(res.data.code == 0){
                this.books = res.data.books
            }
            console.log(this.books)
        })
    }
}
</script>
<style lang="stylus">
#book
    width 100%
    .book-wrapper
        width 20rem
        height 30rem
        .book-img
            width 100%
            height 20rem
            img 
                width 100%
                height 100%
</style>
