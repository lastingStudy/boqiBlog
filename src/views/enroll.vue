<template>
    <div class="w">
        <div class="enroll">
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户昵称" prop="petName">
    <el-input v-model="ruleForm.petName"></el-input>
  </el-form-item>
            <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
       <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
       </div>
    </div>
  </template>
  
  <script>
 import {EnrollApi} from '@/request/api'; 
  export default {
    data() {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          password: '',
          checkPass: '',
          username: '',
          petName:''
        },
        rules: {
          password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ],
          petName: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 15, message: '长度在 3 到 15 个字符', trigger: 'blur' }
          ]

        }
      };
    },
    methods: {
     submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            await EnrollApi(this.ruleForm.username,this.ruleForm.password,this.ruleForm.petName).then((res)=>{
              if(res){
                console.log(res)
              }else{
                alert("登录失败")
              }
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
    }
  }
</script>
  
  <style scoped>
    .w{
      position:absolute;
      background-color: pink;
      width: 100%;
      height: 100%;
    }
    .enroll{
      border-radius: 20px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform:translate(-50%,-50%);
      background-color: rgb(255, 255, 255);
      height: 500px;
      width: 500px;
    }

    .demo-ruleForm{
      margin: 50px;
    }
  </style>
  