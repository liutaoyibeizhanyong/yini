<template>
  <div id="user_info">
    <div class="geren">
          <img :src="obj.avatarUrl" alt="头像">
          <span class="span1">{{obj.nickname}}</span>
          <span class="span2">lv.{{obj.follows}}</span>
    </div>
  </div>
</template>
<script>
import {getShow} from '../../../network/profile'
	export default {
    name: "UserInfo",
    data() {
      return {
        obj:{}
      }
    },
    methods: {
      show(){
        this.obj=this.$store.state.userObj
      }
    },
    created() {
          this.show()
    },
	}
</script>

<style scoped>
.geren{
  margin: 10px 0 0 20px;
}
.geren img {
  height: 80px;
  width: 80px;
  border-radius:50%;
  margin-bottom: 10px;
}
.span1{
  margin:-10px 0 0 20px;
  opacity: .6;
  color:rosybrown
}
.span2{
  margin-left: 10px;
  color:plum;

}
</style>
