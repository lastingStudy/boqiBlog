<template>
    <div class="s">
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
          <li v-for="i in count" class="infinite-list-item">
            <div>标题</div>
            <div class="easyText">大概内容</div>
          </li>
       </ul>
    </div>
  </template>
  
  <script>
export default {
  data() {
    return {

    };
  },
};
  </script>
  
  <style scoped>
  .s{
    width: 500px;
    height: 500px;
    background-color: rgb(0, 0, 0);
  }
    .infinite-list-item{
    margin-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  </style>
  