<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">衣你</div></nav-bar>
    <!--1.单独封装一个组件: 利用slot知识点-->
    <UserInfo></UserInfo>

    <!--2.没有单独封装: 不同的地方太多, 需要传过多的参数-->
    <section class="account">
      <div class="account-item">
        <div class="number">
          <span class="balance">5.21</span>元
        </div>
        <div class="account-info">我的余额</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">11</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">222</span>分
        </div>
        <div class="account-info">我的积分</div>
      </div>
    </section>
    <!--3.封装成一个整体-->
    <list-view class="order-list"></list-view>
  </div>
</template>

<script>
  import UserInfo from './childComps/UserInfo'
  import ListView from './childComps/ListView'
  import NavBar from '../../components/common/navbar/NavBar'
	export default {
		name: "Profile",
    components: {
		UserInfo, ListView,NavBar
    },
	}
</script>

<style scoped>
#profile{
  background: #fcfcfc
}
  .nav-bar {
  font-size: 18px;
  color: #fff;
  font-size: 18px;
  background: salmon;
  }

  .account {
    display: flex;
  }

  .account-item {
    width: 100%;
    margin-right: 1px;
    text-align: center;
    background:lavenderblush
  }

  .account-item:last-of-type {
    margin-right: 0;
  }

  .account-item {
    color: #666;
    font-size: 13px;
    padding: 18px;
  }

  .account-item .balance {
    font-size: 16px;
    color: #ff5f3e;
    margin-right: 5px;
  }

  .account-info {
    margin-top: 6px;
  }

  .order-list, .service-list {
    margin-top: 12px;
  }

</style>
