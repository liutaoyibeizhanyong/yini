<template>
    <div class="login">
      <img src="../../assets/img/login/login.png" alt="登录">
      <div class="dian">
      <input type="text"  class="txt" v-model="useName" placeholder="请输入手机号"><br/>
      <input type="password"  class="psd" v-model="passWord" placeholder="密码">
      </div>
      <div class="denglu">
      <button class="deng" @click="show">登录</button>
      </div>
      <img src="../../assets/img/login/logins.png" alt="协议">
    </div>
</template>
<script>
import {getShow} from '../../network/profile'
import {setToken} from '../../utils/anth'
export default {
    name:'Login',
    data(){
      return{
        useName:'',
        passWord:'',
        userObj:{}

      }
    },
    methods: {
      show(){
        if(this.useName!==''||this.passWord!==''){
            if(this.useName.length!==11){
          this.$notify('手机号或密码错误');
        }else{
      getShow(this.useName,this.passWord).then(res=>{
          this.userObj=res.data.profile;
          if(res.status==200){
            this.$store.commit("getObj", this.userObj);
              setToken(this.useName)
            this.$router.go(-1)
          }
        })
        }
        }else{
          this.$notify('手机号或密码不能为空');

        }
      
      },
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
  padding-left: 20px;
}
.psd{
  height: 32px;
  margin: 1px;
  border: 1px solid sandybrown;
  border-radius:4px;
  padding-left: 20px;
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