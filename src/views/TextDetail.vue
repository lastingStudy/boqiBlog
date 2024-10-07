<template>
    <div>
        <div>
            <div class="tittle">{{ this.text.tittle }}</div>
            <div> 作者:{{ this.text.username }}</div>
            <div>{{ this.text.content }}</div>
        </div>
    </div>
  </template>
  
  <script>
 import {selectText} from '@/request/api'; 
  export default {
    data(){
    return{
        text:{}
    }
    },
    created(){
        this.select();
    },
    methods: {
        select(){
            selectText(this.$route.query.id).then(res=>{
            this.text = res
            console.log(this.text)
        })
        }
    },
    }
  </script>
  
  <style scoped>
    .tittle{
        font-size: 20px;
    }
  </style>
  