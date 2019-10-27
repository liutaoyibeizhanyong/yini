<template>
  <div class="goods_item" @click='godetail'>
  <img :src="show" alt="图片" @load="imageLoad">
  <div class="goods_info">
      <p>{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>

  </div>
</template>
<script>
export default {
  name:"GoodsListItem",
  props:{
    goodsitem:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  computed:{
    show(){
      return this.goodsitem.image||this.goodsitem.show.img
    }
  },
  methods: {
    imageLoad(){
      // if(this.$route.path.indexOf('/home')){
      // this.$bus.$emit('imageLoad')
      // }else if(this.$route.path.indexOf('/detail')){
      //   this.$bus.$emit('detailimageLoad')
      // }
      this.$bus.$emit('imageLoad')
    },
    godetail(){
    this.$router.push({path:'/detail/',
    query:{
      id: this.goodsitem.iid}})
    }
  },
}
</script>
<style scoped>
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
    
  }
</style>

