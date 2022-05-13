<template>
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="性别">
    <el-input v-model="form.sex"></el-input>
  </el-form-item>

    <el-form-item label="院系">
    <el-input v-model="form.depart"></el-input>
  </el-form-item>

      <el-form-item label="职务">
    <el-input v-model="form.work"></el-input>
  </el-form-item>
    <el-form-item label="体温">
    <el-input v-model="form.temp"></el-input>
  </el-form-item>
      <el-form-item label="所在状态">
    <el-input v-model="form.state"></el-input>
  </el-form-item>
     <el-form-item label="是经过高风险区">
    <el-input v-model="form.risk"></el-input>
  </el-form-item>
     <el-form-item label="填写时间">
    <el-input v-model="form.writetime"></el-input>
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
        this.$router.push("/example/teachers");
      },

      //刷新数据
        fatchDataById(){
              var vm =this;
            var id =this.$route.params.id;
            this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/teacher/findById/"+id

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
        url: "http://106.13.30.60:8089/teacher/update",

         data: JSON.stringify(vm.form),
        }).then(function(resp){
            

          if(resp.data=="success"){
           vm.$message({
            type: 'success',
            message: '修改成功!'
            
          });
           console.log(resp)
           vm.$router.push("/example/teachers");
          
          }
    
        });
      }

    }
    
  }
</script>