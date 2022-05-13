<template>
  <div>
    <div class="pay-top-content">
      <vab-icon class="pay-success" :icon="['fas', 'check-circle']"></vab-icon>
      <p>配置成功</p>
    </div>
    <el-form
      ref="form"
      :model="form"
      :rules="rules"
      label-width="120px"
      class="pay-bottom"
    >
      <el-form-item label="预警手机号：">
        {{ infoData.phone }}
      </el-form-item>
      <el-form-item label="预警邮箱号：">
        {{ infoData.email }}
      </el-form-item>
      <el-form-item label="自检周期：">
        <strong>
          {{ infoData.tall }}
        </strong>
      </el-form-item>
    </el-form>
    <div class="pay-button-group">
      <el-button type="primary" @click="handlePrev">再次添加</el-button>
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
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            setTimeout(() => {
              this.$emit('change-step', 3)
              this.loading = false
            }, 2000)
          } else {
            this.loading = false
          }
        })
      },
      handlePrev() {
        this.$emit('change-step', 1)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .pay-top-content {
    text-align: center;

    .pay-success {
      display: block;
      margin: 20px auto 5px auto;
      font-size: 40px;
      color: rgb(9, 168, 9);
    }
  }

  .pay-bottom {
    padding: 20px;
    margin-top: 20px;
    background: #f5f7f8;
    border: 1px dashed rgb(9, 168, 9);
  }

  .pay-button-group {
    display: block;
    margin: 20px auto;
    text-align: center;
  }
</style>
