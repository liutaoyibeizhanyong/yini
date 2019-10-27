<template>
  <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="red">
    <van-swipe-item v-for="(item,index) in banners" :key="index"><img class="img" :src="item.image" alt="轮播图"  @load="imageLoad" ></van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name:'Banner',
  data(){
    return{
      isload:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    imageLoad(){
      //因为要发送四次 而只需要一次就知道高  所以只获取一次
      if(!this.isload){
      this.$emit('swiper')
      this.isload=true
      }
    }
  },
}
</script>
<style scoped>
.img{
  width: 100%;
  height: 200px;
}
</style>