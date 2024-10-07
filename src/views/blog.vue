<template>
  <div>
    <header>
      <nav class="list">
        <div class="navList">
          <router-link
            v-for="item in navs"
            :key="item.biaoti"
            :to="item.go"
          >
            {{ item.biaoti }}
          </router-link>
        </div>
      </nav>

      <div v-if="$store.state.close" class="login">
        <router-view name="login"></router-view>
      </div>

      <div class="show">
        <div class="carousel">
          <el-carousel :interval="5000" arrow="always">
            <el-carousel-item
              v-for="(image, index) in images"
              :key="index"
            >
              <img :src="image" alt="Carousel Image" class="carousel-image" />
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="hot">
          <div class="tit">热门</div>
          <ul>
            <li v-for="list in this.remen">
              <router-link :to="{path:'/textDetail',query:{id:list.id}}">
                <div>{{ list.tittle }}</div>
                <div class="text">{{ list.content}}</div>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="navs">
          <span>前端</span>
          <span>学习</span>
          <span>后端</span>
        </div>
      </div>
    </header>

    <div class="post">
      <div class="bu">
        <div class="textNav">
          <router-link to="/text">全部</router-link>
          <router-link to="/love">关注</router-link>
        </div>
       <router-view name="text"></router-view>
      </div>
      <div class="tuijian">
        <span class="tuijianSize">
          推荐
        </span>
        <ul>
            <li class="tuijianList" v-for="list in tuijianList">
              <router-link :to="{path:'/textDetail',query:{id:list.id}}">
                <div>{{ list.tittle }}</div>
                <div class="textList">{{ list.content }}</div>
              </router-link>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>



<script>
 import {tuijianApi,GetSortTextApi} from '@/request/api'; 
export default {
  name: "MyBlog",
  data() {
    return {
      ruleForm: {
        title: '',
        content: ''
      },
      remen:[],
      tuijianList:[],
      rules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
        ]
      },
      count: 0,
      close: true,
      images: [
        require("@/assets/img1.jpg"),
        require("@/assets/img2.jpg"),
        require("@/assets/img3.jpg")
      ],
      navs: [
        { biaoti: '后端', go: 'a' },
        { biaoti: '前端', go: 'b' },
        { biaoti: 'Java', go: 'c' },
        { biaoti: 'Python', go: 'd' },
        { biaoti: '开源', go: 'e' },
        { biaoti: '网络', go: 'f' },
        { biaoti: 'PHP', go: 'f' },
        { biaoti: 'C++', go: 'g' },
      ]
    };
  },
  mounted(){
    window.addEventListener("scroll", this.handleScroll);
  },
  created(){
    this.tuijian();
    this.c();
   }, 
  methods: {
    //初始化热门
    c(){
      GetSortTextApi().then(res=>{
        this.remen = res
      });
    },

    handleScroll(){

    },

    //初始化推荐
    async tuijian(){
      await tuijianApi().then(res=>{
        this.tuijianList = res
      }).catch((res)=>{
      })
    },

    load() {
      this.count += 2;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('提交成功！');
        } else {
          console.log('提交失败！');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
  
<style scoped>
  a{
    list-style: none;
    color: black;
  }
  .tuijianSize{
    display: block;
    padding-bottom: 10px;
    border-bottom: 1px solid;
    font-size: 20px;
    color: rgb(236, 98, 105);
  }
  .post {
    display: flex;
    justify-content: space-between;
    width: 1500px;
    margin: 0 auto;
  }
  

  .bu{
    width: 1000px;
  }

  .tuijian{
    margin-top: 10px;
    width: 300px;
    height: 400px;
    border: 1px solid;
    border-radius: 20px;
    padding: 20px;
  }
  
  .navs {
    width: 150px;
    height: 200px;
    margin: 0 80px 0 auto;
    font-size: 25px;
    border-left: 2px solid pink;
    border-radius: 20px 0 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .navs span {
    text-align: right;
    padding: 15px;
    border-top: 2px solid pink;
  }
  
  .navs span:first-child {
    border-radius: 15px 0 0 0;
  }

  .navs span:last-child {
    border-bottom: 2px solid pink;
    border-radius: 0 0 0 15px;
  }

  .show {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1500px;
    height: 350px;
    background-color: #fff;
    margin: 20px auto 0;
  }

  .el-carousel,
  .el-carousel__container,
  .el-carousel__item {
    height: 350px;
    z-index: 1;
  }

  .text{
    font-size: 12px;
  }

  header {
    position: relative;
    padding-top: 10px;
    width: 100%;
    height: 440px;
    background-color: rgba(167, 166, 166, 0.1);
  }

  .list {
    width: 1500px;
    height: 70px;
    margin: 0 auto;
    line-height: 70px;
    background-color: #fff;
  }

  .navList {
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-size: 20px;
  }

  .navList a {
    width: 80px;
    color: black;
  }

  .navList a:hover {
    background-color: aqua;
  }

  .login {
    position: absolute;
    top: 50px;
    left: 35%;
  }

  .carousel {
    overflow: hidden;
    position: relative;
    width: 700px;
    height: 350px;
    background-color: #fff;
  }

  .el-button-group > .el-button {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    height: 70px;
    font-size: 30px;
    border: #fff;
    background: rgba(0, 0, 0, 0.5);
  }

  .el-button-group > .el-button:not(:last-child) {
    left: 6%;
  }

  .el-button-group > .el-button:last-child {
    left: 94%;
  }

  .hot {
    margin-left: 50px;
    padding-top: 40px;
    width: 300px;
    height: 350px;
  }

  .hot .tit {
    color: rgb(228, 126, 143);
    text-shadow: 0 8px 10px pink;
    font-weight: bolder;
    padding-bottom: 5px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  }

  .hot li{
    list-style: none;
    padding-bottom: 7px;
    border-bottom: 1px solid;
  }

  .hot div{
    margin-top: 2px;
  }


  .textNav {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    width: 200px;
  }

  .textNav a {
    list-style: none;
    padding-bottom: 10px;
    color: rgba(0, 0, 0, 0.4);
  }

  .easyText {
    color: rgba(0, 0, 0, 0.6);
  }


  .textNav a.router-link-active {
    color: black;
    border-bottom: 2px solid rgb(0, 0, 0);
  }

  .tuijianList{
    margin: 10px 0 10px 0;
    font-size: 20px;
    overflow: hidden;
    padding: 9px;
    border-bottom: 1px solid;
  }

  .tuijianList .textList{
    font-size: 13px;
    color: rgb(48, 47, 47);
  }

  .tuijianList:last-child{
    border: none;
  }
</style>