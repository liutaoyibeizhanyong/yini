<template>
  <div class="banners">
    <van-swipe class="swiper" :autoplay="3000" indicator-color="red">
  <van-swipe-item  v-for="(item,index) in lunbanner " :key="index"><img :src="item | dalImg " alt=""></van-swipe-item>
</van-swipe>
  </div>
</template>
<script>
export default {
  name:'DetailBanner',
  props:{
    lunbanner:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  filters: {
    dalImg(val) {
      if(val.startsWith("//")) {
        return 'http:'+val
      }
      return val
    }
  }
}
</script>
<style  scoped>
.swiper{
  height: 280px;
  overflow: hidden;
}
.swiper img {
  width: 100%;
}
</style>