<template>
  <van-tabbar v-show="$store.state.isShow" v-model="active">
  <van-tabbar-item  to="/home" icon="home-o">首页</van-tabbar-item>
  <van-tabbar-item  to="/category" icon="qr" dot  >分类</van-tabbar-item>
  <van-tabbar-item  to="/cart" icon="cart-o" :info="$store.getters.getAllCount">购物车</van-tabbar-item>
  <van-tabbar-item  to="/profile" icon="contact" info="9">我的</van-tabbar-item>
</van-tabbar>
</template>

<script>
  export default {
    name: "MainTabBar",
    data() {
      return {
      active:0
      }
    },
    watch: {
    $route() {
      if (this.$route.name == "Home") {
        this.active = 0;
      } else if (this.$route.name == "Category") {
        this.active = 1;
      } else if (this.$route.name == "Cart") {
        this.active = 2;
      } else if (this.$route.name == "Profile") {
        this.active = 3;
      }
    }
  }
  }
</script>

<style scoped>
.van-tabbar-item--active {
  color: red;
}
.van-tabbar-item--active ::before{
  font-size: 24px;
}
</style>
