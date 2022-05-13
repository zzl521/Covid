<template>
  <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
    <h2 style="text-align: center">教职工信息填写</h2>
  <el-form-item label="姓名" prop="name">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
    <el-form-item label="性别" prop="sex">
    <el-input v-model="form.sex"></el-input>
  </el-form-item>

  <el-form-item label="院系" prop="depart">
    <el-select v-model="form.depart" placeholder="请选择所属院系">
      <el-option label="电子信息学院" value="电子信息学院"></el-option>
      <el-option label="教育学院" value="教育学院"></el-option>
         <el-option label="英语学院" value="英语学院"></el-option>
      <el-option label="经济管理学院" value="经济管理学院"></el-option>
    </el-select>

      </el-form-item>
      <el-form-item label="职务" prop="work">
    <el-input v-model="form.work"></el-input>
  </el-form-item>

  </el-form-item>
      <el-form-item label="体温" prop="temp">
    <el-input v-model="form.temp"></el-input>
  </el-form-item>


  <el-form-item>
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
          form: {},
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' },
            { min: 2, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
            sex: [
            { required: true, message: '请填写性别', trigger: 'change' }
          ],
            card: [
            { required: true, message: '请填写学号', trigger: 'change' }
          ],
            depart: [
            { required: true, message: '选择所属院系', trigger: 'change' }
          ],
             state: [
            { required: true, message: '填写状态', trigger: 'change' }
          ],
            temp: [
            { required: true, message: '请填写该项', trigger: 'change' }
          ],
          date1: [
            { type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', message: '请选择时间', trigger: 'change' }
          ],
           travel: [
            { required: true, message: '填写出行方式', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '必须填写该项', trigger: 'change' }
          ],
        
        }
      };
    },
    methods: {
       submitForm() {
        var vm =this;
        console.log('submit!');
         if(vm.form==null){
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
           }   
            this.axios({
       headers: {
        
            'Content-Type': 'application/json;charset=utf-8'
        },
      //  transformRequest: [function(data) {
      //    return  qs.stringify(data)
      //   }],
        method: "POST",
        url: "http://106.13.30.60:8089/teacher/save",

         data: JSON.stringify(vm.form),

        }).then(function(resp){
          if(resp.data=="success"){
        //  vm.$alert('这是一段内容', '标题名称', {
        //   confirmButtonText: '确定',
        //   callback: action => {
        //     vm.$message({
        //       type: 'info',
        //       message: `s`
        //     });
        //   }
        // });
           vm.$message({
            type: 'success',
            message: '填报成功!'
            
          });
        //    console.log(resp)
                  setTimeout(() => {
            vm.$router.push("/respond");
            }, 1500)
          }
    
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>