<template>
  <div class="home">
    <navbar class="home_nav"><div slot="center">衣你</div></navbar>
    <!-- 吸顶 -->
      <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabCounts" class="tabcontrol"
      v-show="isFiexd"/>
      <scroll class="content" ref="scroll" :probetype="3" @scroll="scroll" :pullupload="true" @pullingUp="loadMove" >
          <banner :banners="banners" @swiper="swiper"/>
          <recommendview :recommends ="recommends" />
          <feature/>
      <tabcontrol :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabCount"/>
          <goodslist :goods ="show" />
    </scroll>
      <booktop @click.native="goTop" v-show="isShow"/>
  </div>
</template>
<script>
import navbar from '../../components/common/navbar/NavBar'
import scroll from '../../components/common/scroll/Scroll'
import tabcontrol from '../../components/content/tabControl/TabControl'
import goodslist from '../../components/content/goods/GoodsList'
import booktop from '../../components/content/bookTop/BookTop'

import {getHomeMultidata,getHomeGoods} from "../../network/home"
import {debounce} from '../../common/utils'

import recommendview  from "./childComps/RecommendView"
import banner  from "./childComps/Banner"
import feature  from "./childComps/FeatureViex"
export default {
  name: 'Home',
  data(){
    return{
    isShow:false,
    banners:[],
    recommends:[],
    goods:{
      'pop':{papg:0,list:[]},
      'new':{papg:0,list:[]},
      'sell':{papg:0,list:[]},
    },
    currentType:'pop',
    tabOffsetTop:0,
    isFiexd:false
    }
  },
  computed: {
    show(){
      return this.goods[this.currentType].list
    }
  },
  components: {
    navbar,
    banner,
    recommendview,
    feature,
    tabcontrol,
    goodslist,
    scroll,
    booktop
  },
  methods: {
    getHomeMultidata(){
    getHomeMultidata().then(res=>{
    this.banners=res.data.banner.list
    this.recommends=res.data.recommend.list
    })
    },
    getHomeGoods(type){
      const page = this.goods[type].papg+1
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].papg++
        this.$refs.scroll.finishPullUp()
    })
    },
    // 上面网络请求相关的
    // 下面事件相关
    tabClick(index){
      switch (index) {
        case 0:
            this.currentType='pop'
          break;
        case 1:
            this.currentType='new'
          break;
        default:
            this.currentType='sell'
          break;
      }
      this.$refs.tabCounts.falgIndex=index
      this.$refs.tabCount.falgIndex=index
    },
    goTop(){
      // 回到顶部
      this.$refs.scroll.scrollTo(0,0)
    },
    scroll(position){
      //回到顶部是否显示
    this.isShow=(-position.y)>1000?true:false
    this.isFiexd = (-position.y)>this.tabOffsetTop
    },
    loadMove(){
      //加载更多
      this.getHomeGoods(this.currentType)
    },
    swiper(){
      //因为移动端图片加载也会影响高度的变化
        this.tabOffsetTop=this.$refs.tabCount.$el.offsetTop
    }
  },
  mounted() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
    const refresh = debounce(this.$refs.scroll.refresh,60)
    this.$bus.$on("imageLoad",()=>{
      //事件总线 监听图片加载 调用刷新高度
      refresh()
      //防抖 refresh()
    // this.$refs.scroll.refresh()
    // this.getHomeGoods(this.currentType)
    })
},
}
</script>
<style scoped>
.home{
  height: 100vh;
  position: relative;
}
.home_nav{
  color:red;
  background:peachpuff;
  font-size: 18px;
}
.van-swipe-item{
  height:390px ;
}
/*.tabcontrol{
   position: sticky;
  吸顶效果 但是游览器兼容不好 
  top:44px;
  z-index: 9;
  background: pink; 
}*/
.content{
  overflow: hidden;
  position: absolute;
  top:43px;
  bottom:50px;
  left: 0;
  right: 0;
}
.tabcontrol{
  position: relative;
  z-index: 9;
  background:#fff;
}
</style>