<template>


    <div  class="button">  <el-button slot="reference" type="success" @click="closeWin()">关闭界面</el-button>

</div>
   
</template>

<script>
  export default {
        created() {
    
    this.open1();
    this.time();
  },
    methods: {
      open1() {
        this.$notify({
          title: '填写凭证',
          message: '于'+this.time()+'----------------------------------------------------'+'完成了信息填报',
          type: 'success',
          duration: 0
        });
      },

    time(){

      var _this = this;
    let yy = new Date().getFullYear();
    let mm = new Date().getMonth()+1;
    let dd = new Date().getDate();
    let hh = new Date().getHours();
    let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
    
    return _this.gettime;
  
    },
    closeWin(){

window.open("about:blank", "_top").close();
    

    }
    
    }
  }
</script>
<style>
.button {
    min-width: 100px;
  padding-right: 100px;
   position: absolute;
    left: 63%;
    top:50%;
    transform: translate(-50%,-50%);

}
</style>