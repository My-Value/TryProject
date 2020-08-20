<template>
 <div>
      <h1>
      这是登录的界面
  </h1>
  <button class="loginbutton" @click="login()">登录</button>
 </div>
</template>

<script>
import {Loging,userLogin} from '@/service/login.js'

export default{
    methods:{
        login:function(){
            alert(userLogin);
            Loging();
            alert(userLogin);
        }
    }
}
</script>

<style>
.loginbutton{
    margin: auto;
}
</style>