<template>
  <div id="cart_item">
    <div class="item-selector">
      <img @click="istrue" :class="{active:product.checked}" src="../../../assets/img/cart/tick.svg" alt="">
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">商品描述: {{product.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
        <div class="item-shi">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"CartListItem",
  props:{
    product:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods: {
    istrue(){
      this.product.checked=! this.product.checked
    }
  },
}
</script>
<style scoped>
  #cart_item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }

  .item-selector {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-selector img{
    border-radius: 50%;
    border: 1px  solid pink
  }

  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
  }

  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }

  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }

  .item-info {
    font-size: 16px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
    width: 90%;
  }

  .item-info .item-desc {
    font-size: 12px;
    color:peru;
    margin-top: 15px;
  }

  .item-bottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    display: flex;
    justify-content:space-between;
    padding: 0 10px;
    line-height: 30px
  }
  .item-count{
    color: orangered;
  }
  .item-bottom .item-price {
    color: orangered;
  }
  .active{
  background: tomato;
}
.item-shi{
  height: 28px;
  width: 56px;
  color: red;
  text-align: center;
  line-height: 26px;
  border-radius:5px;
  background:salmon
}
</style>
