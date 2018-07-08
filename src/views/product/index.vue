<template>
  <div class="app-container">
    <el-form :inline="true">
      <el-form-item label="产品名称">
        <el-input prefix-icon="el-icon-search" v-model="q.productDisplayName" placeholder="支持模糊查询" clearable></el-input>
      </el-form-item>
      <el-form-item label="上架日期">
        <el-date-picker format="yyyy年MM月dd日" v-model="queryDay" type="daterange" align="right"
           unlink-panels value-format="yyyy-MM-dd HH:mm:ss" :default-time="['00:00:00','23:59:59']" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">

        </el-date-picker>
      </el-form-item>
      <el-form-item label="产品状态">
        <el-select v-model="q.productStatus" placeholder="请选择">
          <el-option label="全部" key="" value=""></el-option>
          <el-option
            v-for="item in statusList"
            :key="item.code"
            :label="item.message"
            :value="item.code">
          </el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary" icon="el-icon-search" @click="search">查询</el-button>
      <el-row>
        <!--<el-button type="success" icon="el-icon-search">添加产品</el-button>-->
        <el-button type="success" icon="el-icon-search" @click="batchAdd">批量添加</el-button>
        <el-button type="warning" icon="el-icon-search" @click="putOnProduct">产品上架</el-button>
        <el-button type="danger" icon="el-icon-search" @click="putOffProduct">产品下架</el-button>
      </el-row>
    </el-form>
    <el-table :data="tableData" stripe border tooltip-effect="dark" @selection-change="handleSelectionChange" height="600" style="margin:40px 0;width: 100%">
      <el-table-column type="selection" width="35"></el-table-column>
      <el-table-column label="产品大类" width="150">
        <template slot-scope="scope">{{getCategoryName(scope.row.categoryCode)}}</template>
      </el-table-column>
      <el-table-column prop="productDisplayName" label="产品名称" fixed show-overflow-tooltip></el-table-column>
      <el-table-column v-if="saleChannel=='GAN'" label="预约产品" width="80" align="center">
        <template slot-scope="scope">{{scope.row.isReservationProduct==1?'是':'否'}}</template>
      </el-table-column>

      <el-table-column prop="productStatusDesc" label="产品状态" width="80" align="center"></el-table-column>
      <el-table-column prop="productStartTime" label="上架时间" width="180"></el-table-column>
      <el-table-column prop="address" label="操作" width="185">
        <template slot-scope="scope">
          <el-button size="small" icon="el-icon-search" @click="productDetail(scope.row.productCode,scope.$index)">查看</el-button>
          <el-button size="small" type="warning" icon="el-icon-search" v-if="scope.row.productStatus==1" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" style="text-align:right">
      <!--<span class="demonstration">完整功能</span>-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="q.pageNo"
        :page-sizes="[10,30, 50, 100]"
        :page-size="30"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage">
      </el-pagination>
    </div>

    <div class="product-pages"></div>

    <el-dialog title="导入结果" :visible.sync="addProduct.show" width="30%" center>
      <p style="text-align:center">读取产品 {{addProduct.totalCount}} 支<br>成功导入 {{addProduct.successCount}} 支</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="addProductClose">确 定</el-button>
      </span>
    </el-dialog>

    <editForm v-if="showEdit" :productCode="productCode" :saleChannel="saleChannel" :category="category"
              @UpdateCategory="UpdateCategory" @saveEdit="showEditAction"></editForm>

    <el-dialog title="产品详情" :visible.sync="showProductDetail" width="30%" center>
      <p>初始编号：{{detail.productCode }}</p>
      <p>初始产品：{{detail.productName}}</p>
      <p>产品大类：{{getCategoryName(detail.categoryCode)}}</p>
      <p>产品名称：{{detail.productDisplayName}}</p>
      <p v-if="saleChannel=='GAN'">预约产品：{{detail.isReservationProduct==1?'是':'否'}}</p>
      <p>产品额度：{{detail.totalAmount}}元</p>
      <p>收益率：{{detail.minYieldRate}}%</p>
      <p>产品期限：{{detail.investPeriod}}天</p>
      <p>起息日：{{detail.valueTime}}</p>
      <p>上架时间：{{detail.productStartTime}}</p>
      <p>产品状态：{{detail.productStatusDesc}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showProductDetail=false">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import { getList, batchAdd, getCategory, productDetail, putOnProduct, putOffProduct, getStatusList } from '@/api/product'
  import editForm from './edit'
  import {formatDate} from "../../utils";

  let end = new Date();
  let start = new Date();



  export default {
    components: {
      editForm
    },
    data() {
      return {
        defaultTime:['00:00:00','23:59:59'],
        q: {
          pageNo: 1,
          searchOn: false,
          pageSize: 30,
          productDisplayName: '',
          startTime: '',
          endTime: '',
          productStatus: ''
        },
        queryDay: [start, end],
        tableData: [],
        addProduct: {
          show: false,
          successCount: 0,
          totalCount: 0
        },
        editCategoryCode: 0,
        multipleSelection: [],
        showEdit: false,
        productCode: false,
        statusList: [],
        detail: {},
        category: [],
        totalPage: 1,
        oldSaleChannel: 0,
        showProductDetail: false,
      }
    },
    computed: {
      saleChannel() {
        return this.$route.meta.channel;
      }
    },
    created() {
      this.UpdateCategory();
      this.getStatusList();
    },
    updated() {
      if (this.saleChannel !== this.oldSaleChannel) {
        this.oldSaleChannel = this.saleChannel;
        this.getLocalDate()
        this.q = {
          pageNo: 1,
          searchOn: false,
          pageSize: 30,
          productDisplayName: '',
          startTime: formatDate(start),
          endTime: formatDate(end),
          productStatus: '',
          saleChannel: this.saleChannel
        }
        this.getList();
      }
    },
    methods: {
      getLocalDate(){
        end = new Date();
        start = new Date();
        end.setHours(23)
        end.setSeconds(59)
        end.setMinutes(59);
        end.setMilliseconds(999)
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
        start.setHours(0)
        start.setSeconds(0)
        start.setMinutes(0);
        start.setMilliseconds(0)
        this.queryDay=[start,end];
        // console.log([start, end])
      },
      getStatusList() {
        getStatusList(this.saleChannel).then((d) => {
          this.statusList = d.data;
        })
      },
      getCategoryName(id) {
        var name;
        this.category.forEach((row) => {
          if (row.categoryCode === id) {
            name = row.categoryName
          }
        })
        return name;
      },
      getList() {
        var query = JSON.parse(JSON.stringify(this.q));
        this.multipleSelection = [];
        // console.log(this.q)
        if (query.searchOn) {
          if (this.queryDay) {
            query.startTime = formatDate(this.queryDay[0])
            query.endTime = formatDate(this.queryDay[1])
          } else {
            query.startTime = '';
            query.endTime = ''
          }
        } else {
          query.productDisplayName = '';
          query.productStatus = '';
          query.startTime = formatDate(start);
          query.endTime = formatDate(end)
        }
        getList(query).then((d) => {
          this.tableData = d.data.rows;
          this.totalPage = d.data.totalPage;
        })
      },
      UpdateCategory() {
        getCategory(this.saleChannel).then((d) => {
          this.category = d.data;
        })
      },
      batchAdd() {
        batchAdd(this.saleChannel).then((d) => {
//        var res=d.data;
          this.addProduct.successCount = d.data.successCount;
          this.addProduct.totalCount = d.data.totalCount;
          this.addProduct.show = true;
        })
      },
      addProductClose() {
        this.addProduct.show = false;
        this.getList();
      },
      showEditAction() {
        this.showEdit = false;
        this.getList();
      },
      handleEdit(index, row) {
        this.productCode = row.productCode;
        this.showEdit = true;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        // console.log(val)
      },
      productDetail(id, index) {
        productDetail(this.saleChannel, id).then((d) => {
          this.detail = d.data;
          this.detail.productStatusDesc = this.tableData[index].productStatusDesc;
          this.showProductDetail = true
        })
      },
      putOnProduct() {
        var ids = [];
        this.multipleSelection.forEach((row) => {
          ids.push(row.productCode);
        })
        // console.log(ids)
        if (ids.length) {
          putOnProduct(this.saleChannel, ids).then(() => {
            this.$message('上架成功');
            this.getList();
          })
        } else {
          this.$message('请选择要上架的产品')
        }
      },
      putOffProduct() {
        var ids = [];
        this.multipleSelection.forEach((row) => {
          ids.push(row.productCode);
        })
        // console.log(ids)
        if (ids.length) {
          putOffProduct(this.saleChannel, ids).then(() => {
            this.$message('下架成功');
            this.getList();
          })
        } else {
          this.$message('请选择要下架的产品')
        }
      },
      search() {
        this.q.searchOn = true;
        this.q.pageNo = 1;
        this.q.saleChannel = this.saleChannel;
        if (this.queryDay) {
          this.q.startTime = formatDate(this.queryDay[0])
          this.q.endTime = formatDate(this.queryDay[1])
        } else {
          this.q.startTime = '';
          this.q.endTime = ''
        }

        if(new Date(this.queryDay[1])-new Date(this.queryDay[0])>30*24*60*60*1000){
          this.$message('查询时间不能超过30天');
          return false;
        }

        this.getList();
      },
      handleSizeChange(v) {
        this.q.pageSize = v;
        this.getList();
      },
      handleCurrentChange(v) {
        this.q.pageNo = v;
        this.getList();
      }
    }
  }
</script>

<style scoped>

</style>

