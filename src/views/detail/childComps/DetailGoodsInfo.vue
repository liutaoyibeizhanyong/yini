<template>
  <div v-if="Object.keys(datainfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{datainfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{datainfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item, index) in datainfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
	export default {
		name: "DetailGoodsInfo",
    props: {
      datainfo: {
        type: Object
      }
    },
    data(){
      return{
      count: 0,
      }
    },
    methods: {
      imgload(){
      this.count++
      if(this.count==this.datainfo.detailImage[0].list.length){
      this.$emit('imageLoad')
    }
    },
  }
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 1px;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
    display: block;
  }
</style>
