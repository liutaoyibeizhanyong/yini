<template>
    <div class="list">
        <div class="fiast">
          <van-icon name="chat-o" info="9" />
          <span>我的信息</span>
        </div>
        <div class="wo">
          <van-icon name="shop-collect-o"  />
          <span>积分商城</span>
        </div>
        <div class="wo">
          <van-icon name="vip-card-o" />
          <span>会员卡</span>
        </div>
        <div class="wo" @click="goCart">
          <van-icon name="shopping-cart-o" />
          <span>我的购物车</span>
        </div>
        <div class="wo">
          <van-icon name="setting-o" />
          <span>设置</span>
        </div>
        <div class="wo">
          <van-icon name="exchange" />
          <span @click="isQie">切换登录</span>
        </div>
        <!-- 图标位置 -->
        </div>
</template>

<script>
import {setToken} from '../../../utils/anth'
	export default {
    name: "ListView",
    data() {
        return {
        }
      },
    methods: {
      isQie(){
        setToken('')
        this.$router.push({name:"Login"})
      },
      goCart(){
        this.$router.push('./cart')
      },
    },
	}
</script>

<style scoped>
.list{
  background: #fff;
  display: flex;
  flex-direction: column;
}
.fiast{
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 10px solid rgba(200, 200, 200, 0.2);
  border-top: 10px solid rgba(200, 200, 200, 0.2);
}
.wo{
  display: flex;
  height: 50px;
  align-items: center;
  border-bottom: 2px solid rgba(200, 200, 200, 0.2);
}
.van-icon{
  margin:20px ;
}
.wo span{
  color:sienna
}
.van-icon-chat-o:before{
font-size: 26px;
color: salmon
}
.van-icon-shop-collect-o:before{
  font-size: 26px;
  color:turquoise;
}
.van-icon-vip-card-o:before{
  font-size: 26px;
  color: gold
}
.van-icon-shopping-cart-o:before{
  font-size: 26px;
  color: red
}
.van-icon-setting-o:before{
  font-size: 26px;
  color:teal
}
.van-icon-exchange:before{
  font-size: 26px;
  color:red
}
.ding{
  height: 40%;
  background: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
