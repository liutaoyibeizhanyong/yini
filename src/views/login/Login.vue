<template>
    <div class="login">
      <img src="../../assets/img/login/login.png" alt="登录">
      <div class="dian">
      <input type="text"  class="txt" v-model="useName"><br/>
      <input type="password"  class="psd" v-model="passWord">
      </div>
      <div class="denglu">
      <button class="deng" @click="denglu">登录</button>
      <button  class="zhu">注册</button>
      </div>
      <img src="../../assets/img/login/logins.png" alt="协议">
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
      return{
        useName:18339464616,
        passWord:520520520
      }
    },
    methods: {
      denglu(){
        if(this.useName===18339464616 &&this.passWord===520520520){
          this.$notify({ type: 'success', duration: 500, message: '登陆成功' });
          this.$router.push({
            name:"Home"
          })
        }else{
          this.$notify({ type: 'danger',duration: 1000, message: '账号或者密码错误' });
        }
      }
    },
    mounted() {
        this.$store.commit("isShow", false);
    },
    destroyed() {
      this.$store.commit("isShow", true);
    },
}
</script>
<style scoped>
.login{
  height: 100vh;
  background:#fafafa;
  position: relative;
}
.login img{
  width: 100%;
  display: block;
}
.dian{
  margin:0 auto ;
  width: 58%;
  display: flex;
  flex-direction: column;

}
.txt{
  height: 32px;
  margin: 1px;
  border: 1px solid sandybrown;
  border-radius:4px;
}
.psd{
  height: 32px;
  margin: 1px;
  border: 1px solid sandybrown;
  border-radius:4px;
}
.denglu{
  margin:20px auto ;
  width: 58%;
  display: flex;
  flex-direction: column;
}
.deng{
  margin-top: 20px;
  height: 36px;
  margin: 1px;
  border: 1px solid sandybrown;
  border-radius:4px;
  background: tomato;
  color:azure;
}
.zhu{
margin-top: 5px;
  height: 36px;
  margin: 1px;
  border: 1px solid sandybrown;
  border-radius:4px;
  background: tomato;
  color:azure;
}

</style>