<template>
  <div class="create-account">
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="创建账号"  prop="userAccount">
        <el-input v-model="form.userAccount" type="text"></el-input>
      </el-form-item>
      <el-form-item label="初始密码" >
        <el-input v-model="form.loginPass" type="text" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleCreate">
          确认创建
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { MessageBox } from 'element-ui'
  export default {
    data() {
      const validateUserAccount = (rule, value, callback) => {
        if (value.length < 1) {
          callback(new Error('账号不能为空'))
        } else {
          callback()
        }
      }
      return {
        rules: {
          userAccount: [{ required: true, trigger: 'blur', validator: validateUserAccount }]
        },
        form: {
          userAccount: '',
          loginPass: '123456'
        }
      }
    },
    methods: {
      handleCreate() {
        this.$refs.form.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('CreateAccount', this.form).then(() => {
              this.form.userAccount='';
              this.loading = false
              this.$alert('账号创建成功', '创建成功', {
                confirmButtonText: '确定',
                center: true
              })
            }).catch((message) => {
              this.loading = false
              MessageBox.alert(message, '创建失败', {
                type: 'error',
                confirmButtonText: '确定',
                center: true
              })
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .create-account{
    width: 400px;
    margin:50px auto 0 auto;
  }
</style>
