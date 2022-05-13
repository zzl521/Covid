<template>
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="姓名">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="性别">
    <el-input v-model="form.sex"></el-input>
  </el-form-item>
    <el-form-item label="学号">
    <el-input v-model="form.card"></el-input>
  </el-form-item>
    <el-form-item label="院系">
    <el-input v-model="form.depart"></el-input>
  </el-form-item>
    <el-form-item label="体温">
    <el-input v-model="form.temp"></el-input>
  </el-form-item>
    <el-form-item label="出行时间">
    <el-input v-model="form.gate"></el-input>
  </el-form-item>
    <el-form-item label="离校时间">
    <el-input v-model="form.wate"></el-input>
  </el-form-item>
    <el-form-item label="出行方式">
    <el-input v-model="form.travel"></el-input>
  </el-form-item>
     <el-form-item label="出发地">
    <el-input v-model="form.place"></el-input>
  </el-form-item>
     <el-form-item label="目的地">
    <el-input v-model="form.destination"></el-input>
  </el-form-item>
     <el-form-item label="车次">
    <el-input v-model="form.train"></el-input>
  </el-form-item>
      <el-form-item label="是否经过风险地区">
    <el-input v-model="form.risk"></el-input>
  </el-form-item>
  
       <el-form-item label="家庭所在省份">
    <el-input v-model="form.home"></el-input>
  </el-form-item>
     <el-form-item label="填写时间">
    <el-input v-model="form.writetime"></el-input>
  </el-form-item>
  <!--  <el-form-item label="活动区域">
    <el-select v-model="form.region" placeholder="请选择活动区域">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
    </el-col>
    <el-col class="line" :span="2">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="即时配送">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
      <el-checkbox label="地推活动" name="type"></el-checkbox>
      <el-checkbox label="线下主题活动" name="type"></el-checkbox>
      <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="form.resource">
      <el-radio label="线上品牌商赞助"></el-radio>
      <el-radio label="线下场地免费"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>-->
  <el-form-item> 
    <el-button type="primary" @click="onSubmit">修改数据</el-button>
    <el-button @click="cancel"> 取消</el-button>
  </el-form-item>
</el-form>
</template>H

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
        this.$router.push("/example/holidayin");
      },

      //刷新数据
        fatchDataById(){
              var vm =this;
            var id =this.$route.params.id;
            this.axios({
          method: "GET",
          url: "http://106.13.30.60:8089/school/findById/"+id

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
        url: "http://106.13.30.60:8089/school/update",

         data: JSON.stringify(vm.form),
        }).then(function(resp){
            

          if(resp.data=="success"){
           vm.$message({
            type: 'success',
            message: '修改成功!'
            
          });
           console.log(resp)
           vm.$router.push("/example/holidayin");
          
          }
    
        });
      }

    }
    
  }
</script>