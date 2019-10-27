<template>
  <div class="bottom-bar">
    <van-goods-action>
      <a href="tel:18339464616"><van-goods-action-icon icon="chat-o" text="客服" /></a>
    <van-goods-action-icon icon="cart-o" :info="$store.getters.getAllCount"  text="购物车" @click="gocart"/>
    <van-goods-action-button type="warning" text="加入购物车" @click="addCart" />
    <van-goods-action-button type="danger" text="立即购买" @click="momy" />
  </van-goods-action>
  </div>
</template>

<script>
	export default {
		name: "DetailBottomBar",
    methods: {
      gocart(){
        this.$router.push({
        name: "Cart"
      });
      },
      addCart() {
        this.$emit('addcart')
        this.$toast('加入购物车成功');
      },
      momy(){
        this.$toast('网络繁忙');
      }
    }
	}
</script>
