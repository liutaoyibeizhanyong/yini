<template>
  <div class="open" @click="tiao">
  <van-swipe :autoplay="3000" indicator-color="white">
  <van-swipe-item><img src="../../assets/img/open/opens.jpg" alt="衣服"></van-swipe-item>
  <van-swipe-item><img src="../../assets/img/open/open.jpg" alt="衣服"></van-swipe-item>
</van-swipe>
    <input class="tiao" v-model="count" type="text"/>
  </div>
</template>
<script>
export default {
  name:"Open",
  data() {
    return {
      num:5,
      time:null
    }
  },
  methods: {
    tiao(){
      this.$router.push('./Login')
    }
  },
  mounted() {
  this.$store.commit("isShow", false);
  this.time =setInterval(()=>{
    this.num--
    if(this.num==0){
      this.tiao()
      clearInterval(this.time)
    }
  },1000)
  },
  computed: {
    count(){
      return "跳过"+this.num
    }
  },
  destroyed() {
    clearInterval(this.time)
    this.$store.commit("isShow", true);
  }
}
</script>
<style  scoped>
img{
  width: 100%;
  height: 100%;
  display: block
}
.tiao{
  position: fixed;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 66px;
  border-radius:15px ;
  border: 1px solid #ddd;
  text-align: center;
  opacity: 0.5;
  color: #777

}
</style>