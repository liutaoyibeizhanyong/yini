<template>
  <div class="cart_list">
    <scroll class="content">
      <cart-list-item @click.native="del(index)" v-for="(item,index) in list" :key="index" :product="item"/>
  </scroll>
  </div>
</template>
<script>
  import scroll from '../../../components/common/scroll/Scroll'
  import  CartListItem from './CartListItem'
export default {

  name:'CartList',
  data() {
    return {
      list:this.$store.state.cartList
    }
  },
  components:{
    scroll,
    CartListItem

  },
  methods: {
    del(index){
    this.list.splice(index,1)
  },
  },
}
</script>
<style scoped>
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 100px;
  left: 0;
  right: 0;
}
</style>