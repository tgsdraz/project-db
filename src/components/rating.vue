<template>
    <div class="movie-rating-img" :class="'img'+rating"></div>
</template>
<script>
export default {
    props:{
        rating:{
            type:Number
        }
    }
}
</script>
<style lang="stylus">
            .movie-rating-img
                width 5rem
                height 1rem
                background-size 100%
                background-image url(../assets/rating.png)
                background-repeat no-repeat
                margin-right 1rem
                &.img10
                    background-position 0rem 0rem
                &.img9
                    background-position 0rem -1rem
                &.img8
                    background-position 0rem -2rem
                &.img7
                    background-position 0rem -3rem
                &.img6
                    background-position 0rem -4rem
                &.img5
                    background-position 0rem -5rem
                &.img4
                    background-position 0rem -6rem
                &.img3
                    background-position 0rem -7rem
                &.img2
                    background-position 0rem -8rem
                &.img1
                    background-position 0rem -9rem
                &.img0
                    background-position 0rem -10rem
</style>
