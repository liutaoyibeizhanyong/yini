<template>
  <div class="cart_nav">
    <nav-bar>
      <div slot="center" class="title">
      <div>购物车({{$store.getters.getAllCount}})</div>
    </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from '../../../components/common/navbar/NavBar'
export default {
  name:'CartNavBar',
  components:{
    NavBar
  },
}
</script>
<style scoped>
.cart_nav{
background: salmon
}
.title{
  color: aliceblue;
  font-size: 18px;
}
</style>