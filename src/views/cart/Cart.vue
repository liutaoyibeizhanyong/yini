<template>
  <div class="cart">
  <nav-bar/>
  <cart-list/>
  <cart-bottom-bar/>
  </div>
</template>
<script>
import NavBar from './childComps/CartNavBar'
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'
export default {
  name: 'Cart',
  components: {
    NavBar,
    CartList,
    CartBottomBar
  }
}
</script>