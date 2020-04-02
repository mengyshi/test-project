<template>
    <div class="login-body">
        <div class="login clearfix">
            <div class="login-left">
                <div class="left-image"></div>
            </div>
            <div class="login-right">
                <p class="title" style="">DEMO</p>
                <el-form :model="loginForm" status-icon  ref="loginForm" class="login-form">
                    <el-form-item prop="username">
                        <el-input class="input" prefix-icon="el-icon-s-custom" v-model="loginForm.username" placeholder="用户名" @keyup.enter.native="submitForm" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item  prop="password">
                        <el-input prefix-icon="el-icon-unlock" type="password" placeholder="密码" @keyup.enter.native="submitForm" v-model="loginForm.password" ></el-input>
                    </el-form-item>
                    <!-- <el-form-item  prop="validate" v-if="imageValidShow">
                        <el-row :gutter="20">
                            <el-col :span="12">
                                <el-input prefix-icon="el-icon-picture" placeholder="验证码" @keyup.enter.native="submitForm" v-model="loginForm.validate" ></el-input>
                            </el-col>
                            <el-col :span="6"><img style="height:30px;" @click="refreshValiCode" :src="imageAddress"/></el-col>
                        
                        </el-row>

                        
                    </el-form-item> -->
                    <el-form-item>
                        <el-button type="primary" style="width:100%;margin-top:30px;padding:12px 15px;" :loading="loginLoading" @click="submitForm('loginForm')">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            
            
        </div>
    </div>
    
</template>

<script>

// import {
// 		$axios,CONSTANTS,phoneValid
//     } from '@/Util.js'
    
    export default({
    	 name: 'login',
        data(){
            return{
                
                //address:CONSTANTS.httpAddress,
                imageAddress:"",//验证码地址
                //imageValidShow:false,//是否展示验证码
                loginForm:{//密码登录
                    username:"",
                    password:"",
                    
                },
                loginLoading:false
            }
        },
        methods:{
        	  submitForm:function (e) {
                var $this=this;
                if($this.loginForm.username=="admin"&&$this.loginForm.password=="admin"){
                    $this.$router.push({name:"home"});
                    localStorage.setItem("userInfo",JSON.stringify($this.loginForm))
                }
              },
        	  refreshValiCode(){},
           
        },
        created:function(){}
     })
    
            
       
        // beforeCreate:function(){
        //      this.$store.dispatch('delAllViews')
        // }
   
</script>

<style lang="scss" scoped>
    $rt:500px;
    .login-body{
        background:url("../assets/login/bg.png");
        height:100vh;
        min-height: 100vh;
        display: flex;
        align-items: center; /*定义body的元素垂直居中*/
        justify-content: center; /*定义body的里的元素水平居中*/
        background-size: cover;
    }

    .login{
        width:70%;
        margin:0 auto;
        border-radius: 3px;
        padding:60px 60px;

        .login-left{
            width: $rt;
            float: left;
           overflow:hidden;
        }
        /*.left-image{
            width:467px;
            height: 308px;
            margin:0 auto;
            background:url("../assets/login/login-left.png");
            background-size: cover;
        }*/
        .login-right{
           overflow:hidden;
        }
        input{
             opacity:0.5;
            background-color:#f00 !important;
            -webkit-box-shadow: 0 0 0px 1000px ffffff inset;
            
        }
       
        .mess{
            display: block;
            height:100%;
            border: 1px solid #eeeeee;
            width:100%;
        }
        p.title{
            color:#128BF2;
            font-size:22px;
            font-weight:600;
            text-align: center;
            font-family: '微软雅黑';
            background: -webkit-gradient(linear, 0 0, 0 bottom, from(#0069b6), to(#00a0ff));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;  
        }
        
    }
</style>


