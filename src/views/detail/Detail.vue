<template>
  <div id="detail">
  <navbar class="nav_top" @dian="dian"  ref="DetailNav"/>
  <scroll class="content" ref="scroll" :probetype="3" @scroll="scroll">
  <navbars :lunbanner="lunbanner"/>
  <xiangqing :goods="goods"/>
  <shangjia :shop="shop"/>
  <goodinfo :datainfo="datainfo" @imageLoad="imageLoad"/>
  <paramsinfo ref="params" :paraminfo="paraminfo"/>
  <commentinfo ref="comment" :pinglun="pinglun" />
  <goodslist ref="recommend" :goods="recommends"/>
  </scroll>
  <booktop class="bytop" @click.native="goTop" v-show="isShow"/>
  <detail-bottom-bar @addcart="addCart"/>
  </div>
</template>
<script>
import navbar from './childComps/DetailNavBar'
import goodinfo from './childComps/DetailGoodsInfo'
import navbars from './childComps/DetailBanner'
import paramsinfo from './childComps/DetailParamInfo'
import detailBottomBar from './childComps/DetailBottomBar'
import commentinfo from './childComps/DetailCommentInfo'
import xiangqing from './childComps/DetailBaseInfo'
import shangjia from './childComps/DetailShopInfo'
import {getDetail,Goods,Shop,GoodsParam,getReommend} from '../../network/detail'
import scroll from '../../components/common/scroll/Scroll'
import goodslist from '../../components/content/goods/GoodsList'
import booktop from '../../components/content/bookTop/BookTop'
export default {
  name:'Detail',
  data(){
    return{
      id:this.$route.query.id,
      lunbanner:[],
      goods:{},
      shop:{},
      datainfo:{},
      paraminfo:{},
      pinglun:{},
      recommends:[],
      tiaoYs:[],
      fangTiaoYs:null,
      isShow:false
    }
  },
  components:{
    navbar,
    navbars,
    xiangqing,
    shangjia,
    scroll,
    goodinfo,
    paramsinfo,
    commentinfo,
    goodslist,
    detailBottomBar,
    booktop
  },
  methods: {
    addCart(){
      //获取购物车需要的信息, 然后使用 vuex传输
      const product = {}
      product.image =this.lunbanner[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.checked = true
      product.id = this.id
      this.$store.commit('addCart',product)
    },
    goTop(){
      // 回到顶部
      this.$refs.scroll.scrollTo(0,0)
    },
    dian(index){
      //实现点导航跳到相应数据
    this.$refs.scroll.scrollTo(0,-this.tiaoYs[index],66)
    },
    getReommends(){
      getReommend().then(res=>{
      this.recommends=res.data.list
      })
    },
    getDetails(){
      getDetail(this.id).then(res=>{
        const data = res.result;
        //获得轮播图
        this.lunbanner=res.result.itemInfo.topImages
        //获取商品详情对象
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //获取商店详情对象
        this.shop = new Shop(data.shopInfo)
        //获得穿着效果
        this.datainfo= data.detailInfo
        //获取衣服参数信息
        this.paraminfo= new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //取出评论信息
        if(data.rate.cRate !==0){
          this.pinglun = data.rate.list[0]
        }
      })
    },
    imageLoad(){
      this.$refs.scroll.refresh()
         //因为要等数据渲染完成以后以及图片加载完成
        this.tiaoYs.push(0),
        this.tiaoYs.push(this.$refs.params.$el.offsetTop),
        this.tiaoYs.push(this.$refs.comment.$el.offsetTop),
        this.tiaoYs.push(this.$refs.recommend.$el.offsetTop)

    },
    scroll(proition){
      //获取Y值 滚动内容更改标题栏选中
      const y = -proition.y
      const length= this.tiaoYs.length
      for( let i=0; i<length;i++){
        if(this.countIndex!==i && (i<length-1 && y>=this.tiaoYs[i] && y<=this.tiaoYs[i+1]) || (i===length-1 &&  y>=this.tiaoYs[i])){
          this.$refs.DetailNav.falgIndex=i
        }
      }
      this.isShow=y>1000?true:false
    }
  },
  mounted() {
  this.getReommends();
  this.getDetails();
  this.$store.commit("isShow", false);
  },
  destroyed() {
    this.$store.commit("isShow", true);
  }
}
</script>
<style scoped>
#detail{
  height: 100vh;
  position: relative;
  padding-top: 45px;
}
.nav_top{
  color: yellow;
  position: fixed;
  background:#f8f8ee ;
  z-index: 1;
  top:0;
  left: 0;
  right: 0;
}
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 0;
  left: 0;
  right: 0;
}

</style>