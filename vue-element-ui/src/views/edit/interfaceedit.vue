<template>
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="外网地址">
    <el-input v-model="form.network"></el-input>
  </el-form-item>
    <el-form-item label="内网地址">
    <el-input v-model="form.localhost"></el-input>
  </el-form-item>
    <el-form-item label="解释">
    <el-input v-model="form.expl"></el-input>
  </el-form-item>


  <el-form-item> 
    <el-button type="primary" @click="onSubmit">修改数据</el-button>
    <el-button @click="cancel"> 取消</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        form: {
        
        }
      }
    },
    created(){
        this.fatchDataById();

    },
    methods: {
      
      cancel(){

        this.$message({
          message: '已取消对当前数据的修改！',
          type: 'warning'
        });
        this.$router.push("/interfacemanager/index");
      },

      //刷新数据
        fatchDataById(){
              var vm =this;
            var id =this.$route.params.id;
            this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/scan/findById/"+id

        }).then(function(resp){

          vm.form=resp.data
          console.log(resp)
        });
        },
      onSubmit() {
        console.log('submit!');
            
             var vm =this;
           
            this.axios({
       headers: {
        
            'Content-Type': 'application/json;charset=utf-8'
        },
      //  transformRequest: [function(data) {
      //    return  qs.stringify(data)
      //   }],
        method: "PUT",
        url: "http://106.13.30.60:8089/scan/update",

         data: JSON.stringify(vm.form),
        }).then(function(resp){
            

          if(resp.data=="success"){
           vm.$message({
            type: 'success',
            message: '修改成功!'
            
          });
           console.log(resp)
           vm.$router.push("/interfacemanager/index");
          
          }
    
        });
      }

    }
    
  }
</script>