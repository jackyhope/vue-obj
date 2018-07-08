<template>
  <section class="app-container">
    <div class="edit-account">
      <el-table :data="dataList" ref="multipleTable" max-height="500" @select-all="hintBox" @select="handleChange" border style="width: 851px">
        <el-table-column prop="userId" type="selection" :selectable="selectable" width="100" align="center"></el-table-column>
        <el-table-column prop="userAccount" label="账号" width="240" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建日期" width="180" align="center"></el-table-column>
        <el-table-column prop="deleteTime" label="删除日期" width="180" align="center"></el-table-column>
        <el-table-column prop="accountStatus" label="状态" width="150" align="center"></el-table-column>
      </el-table>

      <el-row class="btn">
        <el-button type="danger" @click.native.prevent="filAccount(userId, 'delete')">删除账号</el-button>
        <el-button type="warning" @click.native.prevent="filAccount(userId)">重置密码</el-button>
      </el-row>
    </div>
  </section>
</template>

<script>
  import { getAccountList, deleteAccount, resetAccountPwd } from '@/api/user'
  export default {
    data() {
      return {
        dataList: [],
        userId: ''
      }
    },
    created() {
      this.getAcList()
    },
    methods: {
      getAcList() {
        getAccountList().then(d => {
          this.dataList = d.data.map((item) => {
            if (item.accountStatus === 0) {
              item.accountStatus = '正常'
            } else if (item.accountStatus === 2) {
              item.accountStatus = '已删除'
            }
            return item
          })
        })
      },
      handleChange(row) {
        if (row.length > 1)
          this.hintBox();
          this.userId = row[0].userId
      },
      filAccount(userId, mark){
        if(userId){
          if(mark === 'delete'){
            deleteAccount({userId: userId}).then(d => {
              this.hintToast(d.message,'success')
              this.getAcList()
            }).catch(err => {
              this.hintToast(err.message,'error')
            })
          }else {
            resetAccountPwd({userId: userId}).then(d => {
              this.hintToast(d.message,'success')
              this.getAcList()
            }).catch(err => {
              this.hintToast(err.message,'error')
            })
          }
        }else {
          this.hintToast('请选择账号','warning')
        }
      },
      hintToast(word, sty) {
        this.$message({
          showClose: true,
          message: word,
          type: sty
        });
      },
      hintBox() {
        this.$alert('暂不支持批量处理！', {
          title: '温馨提示',
          showClose: false,
          confirmButtonText: '确定',
          callback: action => {
            if(action === 'confirm'){
              this.userId = '';
              this.$refs.multipleTable.clearSelection();
            }
          }
        })
      },
      selectable(row) {
        if (row.accountStatus === '正常')
          return true;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .edit-account .btn{margin-top: 50px}
</style>

