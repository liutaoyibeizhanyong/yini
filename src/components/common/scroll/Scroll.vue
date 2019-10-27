<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  name:"Scroll",
  props:{
    probetype:{
      type:Number,
      default:0
    },
    pullupload:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll= new BScroll(this.$refs.wrapper,{
      click:true,
      // 这样可以需要监听的时候监听  节省性能
      probeType:this.probetype,
      pullUpLoad:this.pullupload
    })
    //监听滚动条事件
      this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    //监听上拉事件
    if(this.pullupload){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }
  },
  methods: {
    scrollTo(x,y,time=300){
    this.scroll && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp()
    },
    refresh(){
    this.scroll && this.scroll.refresh()
    }
  },
}
</script>