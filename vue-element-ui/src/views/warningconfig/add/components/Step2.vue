<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label-width="0">
        <el-alert show-icon>
          确认后，配置将即时生效，如若修改请进入预警管理。
        </el-alert>
      </el-form-item>
      <el-form-item label="手机号码：">
        {{ infoData.phone }}
      </el-form-item>
      <el-form-item label="邮箱账号：">
        {{ infoData.email}}
      </el-form-item>
      <el-form-item label="自检周期：">
        <strong>
          {{ infoData.tall }}
        </strong>
      </el-form-item>
    </el-form>
    <div class="pay-button-group">
      <el-button type="primary" :loading="loading" @click="handleSubmit">
        提交
      </el-button>
      <el-button @click="handlePrev">上一步</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      infoData: {
        type: Object,
        default: () => {
          return {}
        },
      },
    },
    data() {
      return {
        form: {
         
        },

        loading: false,
      }
    },
    methods: {
      handleSubmit() {
        var vm=this;



       this.axios({
       headers: {
        
            'Content-Type': 'application/json;charset=utf-8'
        },
        method: "POST",
        url: "http://106.13.30.60:8089/send/save",

         data: JSON.stringify(vm.infoData),

        }).then(function(resp){
          if(resp.data=="success"){

           vm.$message({
            type: 'success',
            message: '修改成功!'
            
          });
          }
    
        });


            this.loading = true
            setTimeout(() => {
              this.$emit('change-step', 3)
              this.loading = false
            }, 2000)
         
    
      },
      handlePrev() {
        this.$emit('change-step', 1)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
</style>
