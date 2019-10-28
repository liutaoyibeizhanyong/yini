<template>
  <div class="recommend">
      <div class="recommend_item" @click="tiao" v-for="(item,index) in recommends" :key="index">
        <img :src="item.image" alt="推荐">
        <div>{{item.title}}</div>
      </div>
  </div>
</template>
<script>
export default {
  name:'RecommendView',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    tiao(){
      this.$router.push({
        name:'Category'
      })
    }
  },
}
</script>
<style  scoped>
.recommend{
  display:flex;
  width:100%;
  font-size: 13px;
  padding: 12px 0 22px;
  border-bottom: 10px solid #eee;
}
.recommend_item{
   display:flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: tomato;
}
.recommend_item{
  flex: 1
}
.recommend_item img{
  height: 72px;
  width: 72px;
  margin-bottom: 12px;
}
</style>