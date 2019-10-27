<template>
  <div class="goods">
    <goodslistitem v-for="(item,index) in goods" :key="index" :goodsitem ="item"/>
  </div>
</template>
<script>
import goodslistitem from './GoodsListItem'
export default {
  name:"GoodsList",
  components:{
    goodslistitem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return[]
      }
    },
  }
}
</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }
</style>
