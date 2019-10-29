<template>
  <div class="dateilnav">
    <navbar>
      <div slot="left" class="back"><img src="../../../assets/img/common/back.svg" alt="返回" @click="gofanhui"></div>
      <div slot="center" class="title">
      <div v-for="(item,index) in title" :key="index" class="title_item"  :class="{active:index===falgIndex}" @click="dian(index)">{{item}}</div></div>
    </navbar>
  </div>
</template>
<script>
import navbar from '../../../components/common/navbar/NavBar'
export default {
  name:'dateilnav',
  components:{
    navbar
  },
  data(){
    return{
        title:['商品','参数','评论','推荐'],
        falgIndex:0
    }
  },
  methods: {
    dian(index){
    this.falgIndex=index;
    this.$emit('dian',index)
    },
    gofanhui(){
      this.$router.push({
        name:'Home'
      })
    }
  },

}
</script>
<style scoped>
.dateilnav{
  border-bottom: 1px solid #ccc;
}
navbar{
  background: white                                                               
}
.title{
  display: flex;
  font-size: 13px;
}
.title_item{
  flex: 1;
  color: #777
}
.active{
  color: salmon;
}
.back img{
  height: 12px;
  width: 12px;
}
</style>