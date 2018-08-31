<template>
    <div id="login">
        <div class="login-title">注册成功</div>
        <div class="login-wrapper">
            <input type="text" id="user" ref="username">
            <input type="password" id="password" ref="password">
            <input type="submit" value="登录" id="submit" @click="login">
        </div>
        <div class="user-regedit">
            <button  @click="toRegedit">用户注册</button>
            <button>忘记密码</button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        login(){
            let datalist = JSON.parse(window.localStorage.getItem('data'))
            this.$nextTick(()=>{
                let usernameVal = this.$refs.username.value
                let passwordVal = this.$refs.password.value
                if(usernameVal == '' || passwordVal == ''){
                    return 
                }
                console.log(datalist)
                
                for(let i = 0; i < datalist.length; i++){
                    if(datalist[i].name == usernameVal && datalist[i].password == passwordVal){
                        console.log(usernameVal,passwordVal)
                        window.location.href = 'http://localhost:8080/#/main'
                    }
                }
                return 
            })
        },
        toRegedit(){
            console.log(111)
            window.location.href = 'http://localhost:8080/#/regedit'
        }
    }
}
</script>
<style lang="stylus">
#login
    width 100%
    z-index 10000 !importent 
    .login-title
        padding 6rem 0
        color #00b600
        font-size 4rem
        text-align center
    .login-wrapper
        width 100%
        display flex
        flex-direction column
        justify-content center
        input 
            width 100%
            // height 2rem
            padding 1rem 2rem
            margin-bottom 2rem
            border 0.1rem solid lime
            border-radius 0.5rem
        #submit
            border 0
            background #00b600
            color #ffffff
            font-size 2rem
    .user-regedit
        display flex
        justify-content center
        button 
            flex 1
            width 10rem
            height 3rem
            margin 1rem
            background #00b600
            border 0
            border-radius 0.5rem
            color #ffffff
</style>
