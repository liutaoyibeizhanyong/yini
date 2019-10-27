<template>
    <div class="tabcontrol">
        <div class="tabcontrol_item" v-for="(item,index) in titles" :key="index">
          <span :class="{active:index===falgIndex}" @click="dian(index)">{{item}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"TabControl",
    data(){
      return{
        falgIndex:0
      }
    },
    methods: {
      dian(index){
        this.falgIndex=index;
        this.$emit('tabClick',index)
      }
    },
    props:{
      titles:{
        type:Array,
        dafault(){
          return []
        }
      }
    }
}
</script>
<style  scoped>
.tabcontrol{
  display: flex;
  text-align: center;
  height:40px ;
  line-height: 40px;
}
.tabcontrol_item{
flex: 1;
}
.tabcontrol_item span{
  padding: 5px;
}
.active{
  color: salmon;
  border-bottom: 2px solid salmon;

}
</style>