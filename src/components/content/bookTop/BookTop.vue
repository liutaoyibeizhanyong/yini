<template>
  <div class="top">
    <img src="../../../assets/img/common/top.png" alt="回到顶部">
  </div>
</template>
<script>
export default {
  name:"BookTop",
  methods: {
  },
}
</script>
<style scoped>
.top{
  position:fixed;
  bottom: 60px;
  right: 16px;
  z-index: 1;
}
.top img{
  width: 40px;
  height: 40px;
}
</style>