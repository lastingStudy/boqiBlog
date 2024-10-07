<template>
  <div>
    <header>
        <div class="logo">
         <router-link to="/">
           <img src="@/assets/logo.png" alt="">
           <span>波奇网</span>
         </router-link>
        </div>

        <div class="label">
          <nav>
            <router-link :to="item.go"  v-for="item in navigationList" :key="item.id">
              <li>{{ item.name }}</li>
            </router-link>
          </nav>
        </div>

        <div class="search">
          <input type="text">
          <div class="searchLabel">
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
          </div>
        </div>

        <div class="user">
          <nav>

            <div class="tou" @mouseover="userShow" @mouseout="userNotShow">
              <router-link to="/login">
              <div class="el-icon-user" ref="notTou"></div>
              <div class="userName" ref="notLogin">{{ this.$store.state.name }}</div>
              </router-link>
              <div class="userXinxi" v-show="userClose">
                <button @click="closeLogin">退出登录</button>
              </div>
            </div>

            <router-link :to="item.go"  v-for="item in userList" :key="item.id">
              <li>{{ item.name }}</li>
            </router-link>
            <div class="fabu">
              <router-link to="#" @click.native="denglu">
               <el-button type="primary" icon="el-icon-edit">发布</el-button>
              </router-link>
            </div>
          </nav>
        </div>
      </header>
      <div class="occupation"></div>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>
  
  <script>

  export default {
    name:"MyNavigation",
    methods:{
      denglu(){
        if(this.$store.state.userState === false){
          this.$router.push('/login')
        }else{
          this.$router.push('/fabu')
        }
      },
      closeLogin(){
        this.$store.commit('logout');
        this.$router.push('/login');
      },
      userShow(){
        if(this.$store.state.userState){
          this.userClose=true
        }
      },
      userNotShow(){
        this.userClose=false
      },
    },
    data() {
      return {
        userClose:false,
        navigationList : [
          {
            id:1,
            name:'博客',
            go:'blog'
          },
          {
            id:2,
            name:'学习',
            go:'studen'
          },
          {
            id:3,
            name:'购买',
            go:'shopping'
          },
          {
            id:4,
            name:'小知识',
            go:'tittle'
          }
    ],
    userList : [
          {
            id:1,
            name:'创作中心',
            go:'d'
          },
          {
            id:2,
            name:'消息',
            go:'a'
          },
          {
            id:3,
            name:'历史访问',
            go:'b'
          },
    ],
      }
    },
  }

  </script>
  
  <style scoped>
  .occupation{
    height: 50px;
  }
    header{
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    background-color: rgb(255, 255, 255);
    width: 2000px;
    height: 50px;
    border-bottom: 1px solid rgba(151,151,151, 0.5);

    color: rgb(63, 60, 60);
    font-size: 15pt;
  }

  .logo img{
    margin: 10px 10px 10px 10px;
    width: 30px;
    height: 30px;
    vertical-align: middle;
  }
  .logo span{
    padding-right: 50px;
    color: pink;
    font-size:20px;
  }

  .label{
    width: 400px;
  }
  .label nav{
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
  .label nav li{
    text-align: center;
    width: 60px;
    height: 50px;
    line-height: 46px;
  }
  .label a{
    color: black;
  }
  .label a.router-link-active{
    border-bottom: 5px solid rgb(200, 100, 200);
  }

  .open{
    height: 50px;
  }

  .search{
    display: flex;
    align-items: center;
    width: 600px;
    line-height: 42px;
  }
  .searchLabel{
    display: flex;
    align-items: center;
  }
  .search img{
    width: 25px;
    height: 25px;
  }
  .search input{
    margin-left: 50px;
    padding-left: 10px;
    border-radius: 20px 0px 0px 20px;
    border: 2px solid rgb(241, 101, 124);
    width: 600px;
    height: 25px;
  }
  .search input:focus{
    outline: none;
  }

  .el-icon-search{
    background-color: rgb(241, 101, 124);
  }
  
  .searchLabel button.el-button.el-button--primary{
    display: flex;
    align-items: center;
    border: 2px solid rgb(241, 101, 124);
    border-radius: 0px 20px 20px 0px;
    background-color: rgb(241, 101, 124);
    height: 29px;
    
  }
  .user{
    width: 600px;
    position: relative;
  }
  .user nav{
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .user nav li{
    text-align: center;
    height: 50px;
    line-height: 46px;
  }
  .user a{
    color: black;
  }
  .user a.router-link-active{
    border-bottom: 5px solid rgb(200, 100, 200);
  }
  .user a{
    display: flex;
    align-items: center;
  }
  .user .el-icon-user{
    border: 1px solid silver;
    padding: 2px;
    border-radius: 50%;
    font-size: 25px;
  }
  .user .userName{
    color: silver;
    padding: 5px;
    font-size: 15px;
  }

  .addImg{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background-color: pink;
  }
  .add{
    display: flex;
    justify-content: center;
    width: 80px;
    height: 30px;
    background-color: rgb(241, 101, 124);
    border-radius: 30px;
  }

  .user button.el-button.el-button--primary{
    display: flex;
    align-items: center;
    height: 30px;
    background-color: rgb(241, 101, 124);
    border-radius: 20px;
  }

  .tou a.router-link-active{
    border-bottom: none;
  }
  .tou{
    position: relative;
  }
  .user .userXinxi{
    transition: 0.5s;
    z-index: 99;
    position: absolute;
    transform:translate(-40%,0);
    width: 300px;
    height: 400px;
    background-color: aliceblue;
  }
  .fabu a.router-link-active{
    border-bottom:0 solid;
  }
  </style>
  