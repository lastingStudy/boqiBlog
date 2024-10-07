<template>
    <div v-show="this.$store.state.show" class="zhong">
        <div class="den">
            <div class="el-icon-close" @click="cl">
            </div>
            <div class="window">
                <span>请登录</span>
                <el-input v-model="user.username" placeholder="请输入账号"></el-input>
                <span class="userAlter" v-show="userAlter">账号或者密码错误</span>
                <el-input placeholder="请输入密码" v-model="user.password" show-password></el-input>
                <el-button round @click="clickLogin">登录</el-button>
                <router-link class="enr" to="/enroll">注册</router-link>
                <router-link to=""></router-link>
            </div>
        </div>
    </div>
</template>
  
<script>
 import {LoginApi} from '@/request/api'; 
 export default {
    data(){
    return{
        userAlter:false,
        user:{
            username:"",
            password: "",
        }
    }
    },
    methods: {
        cl(){
            this.$router.back()
        },
        async clickLogin(){
            //判断用户账号密码是否正确
           await LoginApi(this.user).then((res)=>{
            if(res){
                //登录成功后修改vuex信息
                this.$store.commit('negate')
                this.$store.commit('setname',res.petName)
                this.$store.commit('setId',res.id)
                this.$router.back()
            }else{
                this.userAlter = true
            }
           }).catch((res)=>{
           })

        }
    },
}
</script>
  
<style>
    .zhong{
        z-index: 999999;
        position: relative;
    }
    .enr{
        margin-top: 10px;
        font-size: 15px;
    }

    .den{
        display: inline-block;
        position: fixed;
        top: 50%;
        left: 50%;
        transform:translate(-50%,-50%);
        width: 400px;
        height: 500px;
        background-color: pink;
    }
    .el-icon-close{
       font-size: 20px;
       color: rgb(255, 255, 255);
    }

    .window{
        margin: 40px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        background-color: rgb(255, 255, 255);
        width: 300px;
        height: 400px;
    }
    .el-input{
        margin: 10px 0px 10px 0px;
        width: 240px;
    }
    .loginButton{
        margin: 20px;
        width: 100px;
        height: 30px;
        background-color: pink;
    }

    .el-button--default{
        width: 100px;
        color: rgb(255, 255, 255);
        background-color: pink;
    }
    
    .userAlter{
        color: red;
        font-size: 10px;
    }
</style>
  