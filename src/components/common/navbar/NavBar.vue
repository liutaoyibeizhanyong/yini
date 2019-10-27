<template>
  <div class="navbar">
  <!-- 插槽 因为内容不一样 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar'
}
</script>
<style  scoped>
.navbar{
  display: flex;
  line-height:44px;
  text-align: center;
  box-shadow: 0 5px 5px rgba(100,100,100,0);
}
.left{
  width: 60px;
}
.right{
  width: 60px;

}
.center{
  flex :1;
}
</style>