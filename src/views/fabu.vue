<template>
    <div class="textFrom">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="标题名称" prop="tittle">
              <el-input v-model="ruleForm.tittle"></el-input>
            </el-form-item>
            <el-form-item label="文章内容" prop="content">
                <textarea type="textarea" v-model="ruleForm.content" class="text"></textarea>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios';

  export default {
    name:"MyFabu",
    data() {
      return {
        ruleForm: {
          username:this.$store.state.name,
          tittle: '',
          content:''
        },
        rules: {
          tittle: [
            { required: true, message: '请输入标题', trigger: 'blur' },
            { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          content: [
            { required: true, message: '请填写文章内容', trigger: 'blur' }
          ]
        },
      }
    },

    methods:{

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
           axios.post("http://localhost:8081/text",this.ruleForm).then((res)=>{

           }).catch((res)=>{
           })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    }
  </script>

  <style scoped>
    .textFrom{
        margin: 100px auto;
        padding: 50px;
        width: 700px;
        height: 500px;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
    }

    .el-input{
        width: 520px;
    }
    textarea{
        padding: 10px;
        resize: none;
        width: 500px;
        height: 300px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        border-radius: 4px;
        border: 1px solid #DCDFE6;
    }
    textarea:focus{
        outline: none;
    }
  </style>