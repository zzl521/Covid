<template>
<div class="button">
<el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="说明" name="1">
    <div>本部分功能在后端thymeleaf界面，由跳转浏览器跳转实现</div>
    <div>数据库监控需登录，才可查看，登录账号及密码，在按钮上显现</div>
  </el-collapse-item>
</el-collapse>
  <el-popover
    placement="top-start"
    title="作用"
    width="200"
    trigger="hover"
    content="查看系统运行状态，便于排查错误及bug">
    <el-button slot="reference" type="success"  @click="open">日志查看</el-button>
  </el-popover>

  <el-popover
    placement="top-start"
    title="登录密钥"
    width="200"
    trigger="hover"
    content="账号:admin 密码:123456">
     <el-button  slot="reference" type="danger" @click="open">数据库监控</el-button>
  </el-popover>



</div>

</template>
<script>

export default {
 data() {
      return {
        dialogVisible: false,
          activeNames: ['1']
      };
    },
  methods: {
       handleChange(val) {
        console.log(val);
      },
         handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    ,

      open(){
          window.open("http://106.13.30.60:8089/druid/")
      }

  }
}
</script>

<style>
.button {
    min-width: 100px;
  padding-right: 100px;
   position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);

}



</style>