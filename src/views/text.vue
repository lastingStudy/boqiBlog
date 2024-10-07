<template>
  <div class="s">
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="text in texts" :key="text.id" class="infinite-list-item">
        <router-link :to="{path:'/textDetail',query:{id:text.id}}">
          <h1 class="tittle">{{ text.tittle }}</h1>
          <div class="easyText">{{ text.content }}</div>
        </router-link>
        <div class="xinxi">
          <div class="name">{{ text.username }}</div>
          <div class="good" @click="clickGood(text)">点赞数 {{ text.count }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { GetTextApi, clickGoodApi,UpdateCountApi } from '@/request/api'; 

export default {
  data() {
    return {
      texts: [],
    };
  },
  created() {
    this.selectText();
  }, 
  methods: {
    clickGood(text) {
      if (this.$store.state.id === "") {
        this.$router.push("/login"); // 未登录，跳转到登录页面
      } else {
        clickGoodApi(this.$store.state.id, text.id)
          .then(res => {
            if (res == 1) {
              text.count++;
              UpdateCountApi(text).then(res => {})
            } else if (res == 0) {
              text.count--;
              UpdateCountApi(text).then(res => {})
            }
          })
          .catch(error => {
            console.error("API调用失败:", error); // 处理错误
          });
      }

    },
    async selectText() {
      await GetTextApi().then((res) => {
        // 初始化 liked 属性
        this.texts = res.map(text => ({
          ...text,
          liked: false // 默认未点赞
        }));
        console.log(this.texts);
      }).catch((error) => {
        console.error("获取文本失败:", error);
      });
    },
    load() {
      // 这里可以实现无限加载的逻辑
    }
  }
};
</script>

<style scoped>
.infinite-list-item a {
  color: black;
}
.s {
  width: 1000px;
}
.infinite-list-item {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.tittle {
  font-size: 20px;
}
.easyText {
  color: dimgrey;
  margin: 5px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-height: 1.2em;
  max-height: 2.4em;
}
.xinxi {
  width: 200px;
  display: flex;
  color: darkgray;
  font-size: 13px;
}
.name {
  width: 80px;
  margin-right: 30px;
}

</style>