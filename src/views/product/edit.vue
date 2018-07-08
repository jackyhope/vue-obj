<template>
  <el-dialog title="编辑产品" :visible.sync="showEdit" @close="close">
    <el-dialog title="新增大类" :visible.sync="showNewClass" append-to-body>
      <el-input v-model="newClassName" placeholder="新大类名称"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="saveNewClass">确认添加</el-button>
      </div>
    </el-dialog>
    <el-form label-position="right" label-width="80px">
      <el-form-item label="初始产品">
        <el-input v-model="edit.productName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="产品大类">
        <el-select v-model="edit.categoryCode" placeholder="请选择">
          <el-option
            v-for="item in category"
            :key="item.categoryCode"
            :label="item.categoryName"
            :value="item.categoryCode">
          </el-option>
        </el-select>

        <el-button @click="showNewClass=true">新增大类</el-button>
      </el-form-item>
      <el-form-item label="产品名称">
        <el-input v-if="canBook" v-model="categoryName"></el-input>
        <el-input v-else v-model="edit.productDisplayName"></el-input>
      </el-form-item>
      <el-form-item label="产品额度">
        <el-input v-model="edit.totalAmount" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="收益率">
        <el-input v-model="edit.minYieldRate" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="产品期限">
        <el-input v-model="edit.investPeriod" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="起息日">
        <el-input v-model="valueTime" :disabled="true" v-if="canBook"></el-input>
        <el-input v-model="edit.valueTime" :disabled="true" v-else></el-input>
      </el-form-item>
      <el-form-item label="预约产品" v-if="canBook">
        <el-input v-model="edit.isBook" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="上架时间">
        <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" v-model="edit.productStartTime" type="datetime" placeholder="选择日期" v-if="canBook"></el-date-picker>
        <el-input v-model="edit.productStartTime" :disabled="true" v-else></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveEditAction('0')">保存</el-button>
      <el-button @click="$emit('saveEdit')">取 消</el-button>
      <el-button type="primary" @click="saveEditAction('1')">保存并上架</el-button>
    </div>
  </el-dialog>

</template>

<script>
  import { saveEdit,saveNewClass,productDetail} from '@/api/product'
  export default {
    props:['productCode','saleChannel','category'],
    data() {
      return {
        showEdit:true,
        showNewClass:false,
        newClassName:'',
        edit:[],
        valueTime:''
      }
    },
    computed:{
      canBook(){
        return this.saleChannel=='GAN' && this.edit.isReservationProduct==1
      },
      editData(){
        return JSON.parse(JSON.stringify(this.edit))
      },
      categoryName(){
        // console.log(this.getCategoryName(this.edit.categoryCode))
        return this.getCategoryName(this.edit.categoryCode)
      }
    },
    created(){
      this.productDetail()
    },
    methods: {
      getCategoryName(id) {
        var name;
        this.category.forEach((row) => {
          if (row.categoryCode === id) {
            name = row.categoryName
          }
        })
        return name;
      },
      productDetail(){
        productDetail(this.saleChannel,this.productCode).then((d)=>{
          this.edit=d.data;
          this.edit.isBook=d.data.isReservationProduct==1?'是':'否';
          // this.productStartTime=this.edit.productStartTime;
        })
      },
      close(){
        this.$emit('saveEdit')
      },
      saveEditAction(isPutOn){
        var data={
          categoryCode:this.edit.categoryCode,
          productCode:this.edit.productCode,
          productDisplayName:this.canBook?this.categoryName:this.edit.productDisplayName,
          saleChannel:this.saleChannel,
          productStartTime:this.edit.productStartTime,
          isPutOn:isPutOn
        }
        saveEdit(data).then(()=>{
          this.$emit('saveEdit')
        })
      },
      saveNewClass() {
        if (this.newClassName.length > 0) {
          saveNewClass(this.saleChannel, this.newClassName).then(() => {
            this.$emit('UpdateCategory');
            this.showNewClass=false;
          })
        } else {
          this.$message('请输入大类名称');
        }
      }
    }
  }
</script>

<style scoped>


</style>

