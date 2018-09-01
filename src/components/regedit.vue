<template>
    <div id="regedit">
        <div class="regedit-title">
            欢迎加入豆瓣
        </div>
        <div class="regedit-wrapper">
            <input type="text" name="username" id="user" ref="user" placeholder="账号">
            <input type="password" name="password" id="psword" ref="psword" placeholder="密码">
            <input type="text" name="alisename" id="alise-name" ref="aliseName" placeholder="昵称">
            <input type="submit" value="立即注册" id="submit" @click="regedit">
        </div>
    </div>
</template>
<script>

export default {
    data(){
        return {
            userInfo:[]
        }
    },
    created(){
        
    },
    methods:{
        regedit(){
            let obj = {
                    add:(arr)=>{
                        window.localStorage.setItem('data',JSON.stringify(arr))
                    },
                    get:() => {
                        return JSON.parse(window.localStorage.getItem("data"))
                    }
                }
            if(window.localStorage){
                if(obj.get()!==null){
                    this.userInfo = obj.get()
                }
            }
            this.$nextTick(()=>{
                    let userVal = this.$refs.user.value
                    let psVal = this.$refs.psword.value
                    let aliseVal = this.$refs.aliseName.value
                    if(userVal == '' || psVal == ''){
                        alert("账号或密码不能为空")
                        return 
                    }
                    if(this.userInfo.length == 0){
                        this.userInfo.push({
                            name:userVal,
                            password:psVal,
                            aliseName:aliseVal
                        })
                        alert('注册成功，点击确定跳转登录页面')
                        window.location.href = 'http://localhost:8080/#/login'
                    }else{
                        for(let i = 0; i < this.userInfo.length;i++){
                            if(this.userInfo[i].name == userVal){
                                return 
                            }
                        }
                        this.userInfo.push({
                            name:userVal,
                            password:psVal,
                            aliseName:aliseVal
                        })
                        alert('注册成功，点击确定跳转登录页面')
                        window.location.href = 'http://localhost:8080/#/login'
                    }
                    obj.add(this.userInfo)
                })
            
            }
    }
}
</script>
<style lang="stylus">
#regedit
    width 100%
    .regedit-title
        width 100%
        padding 8rem 0
        text-align center
        font-size 4rem
        color #00b600
    .regedit-wrapper
        width 100%
        display flex
        flex-direction column
        align-items center
        justify-content center
        input
            width 100%
            height 3rem
            margin-bottom 2rem
            border 0.1rem solid gray
            outline none
            border-radius 0.5rem
            padding 0.5rem 1rem
            line-height 3rem
        #submit
            border 0
            height 5rem
            background #00b600
            font-size 2rem
            color #ffffff

</style>