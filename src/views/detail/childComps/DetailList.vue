<template>
  <div class="goods" >
    <div class="goods_item"  v-for="(item,index) in goods" :key="index">
    <img :src="item.image" alt="">
      <div class="goods_info">
      <p>{{item.title}}</p>
      <span class="price">{{item.price}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"GoodsList",
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


  .goods_info .collect {
    position: relative;
    color:salmon;
  }

  .goods_info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
    color: red
  }
  .goods_item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods_item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods_info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods_info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    color: #ccc;
  }

  .goods_info .price {
    color:salmon;
    margin-right: 20px;
  }
</style>

