<template>
  <div id="app">
<transition mode="out-in">
  <keep-alive exclude="Detail,Open,Login,Profile">
      <router-view class="container"></router-view>
    </keep-alive>
    </transition>
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
