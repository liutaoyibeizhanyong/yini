<template>
  <div class="cart_bottom">
    <div class="quan">
      <img @click="quanxuan" :class="{active:isSelectAll}" src="../../../assets/img/cart/tick.svg" alt="">
      <span>全选</span>
    </div>
    <div class="heji">
    合计:{{totalPrice}}
    </div>
    <div class="jisuan"  @click="goumai">付款: {{checkedLength}}</div>
  </div>
</template>
<script>
export default {
  name:'CartBottomBar',
  data(){
    return{}
  },
  methods: {
    quanxuan(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item=>item.checked=false)
      }else{
        this.$store.state.cartList.forEach(item=>item.checked=true)
      }
    },
    goumai(){
      if(!this.checkedLength){
      this.$toast('请选择购买的物品');
      }
    }
  },
  computed: {
    totalPrice(){
      return '￥'+ this.$store.state.cartList.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue+item.price * item.count
      },0)
    },
    checkedLength(){
      return this.$store.state.cartList.filter(item=>item.checked).length
    },
    isSelectAll(){
    return !(this.$store.state.cartList.filter(item=>!item.checked).length)
    }
  },
}
</script>
<style  scoped>
.cart_bottom{
  height: 55px;
  background: #eee;
  position: fixed;
  bottom: 44px;
  right: 0;
  left: 0;
  display: flex;
line-height: 55px
}
.quan{
height: 100%;
font-size:16px ;
color: thistle;
width: 30%;


}
.quan img{
  border-radius: 50%;
  border: 1px  solid pink;
  margin:0 10px;

}
.heji{
  color: salmon; 
  width: 30%;
}
.jisuan{
  color:papayawhip;
  margin-left:10% ;
  width: 30%;
  background: red;
  text-align: center;
  font-size: 18px;
}
 .active{
  background: tomato;
}
</style>