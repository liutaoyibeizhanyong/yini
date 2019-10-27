<template>
  <div id="app">
    <keep-alive exclude="Detail,Open">
      <!-- <keep-alive>不让路由销毁  exclude 把路由排除在外-->
    <router-view/>
    </keep-alive>
    <maintabar/>
  </div>
</template>
<script>
import maintabar from './components/content/mainTabbar/MainTabBar'
export default {
  name:'app',
  components:{
  maintabar
  }
}
</script> 
<style>
@import "./assets/css/base.css";
</style>
