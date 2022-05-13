<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" label-width="120px">
      <el-form-item label-width="0">
        <el-alert show-icon>请务必仔细填写并核对</el-alert>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱账号" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="自检周期" prop="tall">
        <el-input v-model="form.tall"></el-input>
      </el-form-item>
    </el-form>
    <div class="pay-button-group">
      <el-button type="primary" @click="handleSubmit">下一步</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          phone:'',
          email:'',
         tall: '6'
        },
        rules: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
          ],
          email: [
            { required: true, message: '请输入邮箱号', trigger: 'blur' },
            { type: 'email', message: '账户名应为邮箱格式', trigger: 'blur' },
          ],
          tall: [
            { required: true, message: '请输入转账金额', trigger: 'blur' },
            { pattern: /^(\d+)((?:\.\d+)?)$/, message: '请输入合法数字' },
          ],
        },
      }
    },
    methods: {
      handleSubmit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.$emit('change-step', 2, this.form)
          }
        })
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
