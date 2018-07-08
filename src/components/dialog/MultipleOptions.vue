<template>
  <el-dialog custom-class="region-dialog" @close="cancel" :close-on-click-modal="false" :lock-scroll="true" :show-close='true' :visible.sync="visible">
    <p class="dialog-title" slot="title">选择城市
      <span>(暂时只支持中国内陆城市)</span>
    </p>
    <div class="options-main">
      <p class="options-title">最多选择 1 项
        <span class="options-selected" v-if="selectedName && !haschild">{{selectedName}}</span>
      </p>
      <p class="category1">
        <span :class="{inactive:showChildCategory}" @click="hideChildCategory">全国
          <i class="icon-down-arrow"></i>
        </span>
        <span v-if="showChildCategory">
          {{preSelectedParentName}}
          <i class="icon-down-arrow"></i>
        </span>
      </p>
      <div class="category1-item-warp">
        <div class="category1-item" :class="{'display-none':showChildCategory}">
          <p class="category1-item-title">
            <span>热门城市</span>
          </p>
          <div class="category1-item-list">
            <p class="active">
              <span :class="{'active':selectedID=='1001'}" @click="select('1001','北京')">北京</span>
            </p>
            <p>
              <span :class="{'active':selectedID=='1002'}" @click="select('1002','上海')">上海</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
          </div>
        </div>
        <div class="category1-item" :class="{'display-none':showChildCategory}">
          <p class="category1-item-title">
            <span>
              全部省份
            </span>
          </p>
          <div class="category1-item-list province">
            <p>
              <span :class="{'active':selectedID=='2000' ,'active-self':selectedParentID=='2000'}" @click="selectParent('2000','江苏')">
                江苏
              </span>
              <i>1</i>
            </p>
            <p>
              <span>江苏</span>
            </p>
            <p>
              <span>浙江</span>
            </p>
            <p>
              <span>安徽</span>
            </p>
            <p>
              <span>福建</span>
            </p>
            <p>
              <span>甘肃</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
            <p>
              <span>广西</span>
            </p>
          </div>
        </div>
        <div class="category1-item category2 province" :class="{'display-none':!showChildCategory}">
          <p class="category1-item-title  theme-color">
            <span :class="{'active':selectedID=='2000' ,'active-self':selectedParentID=='2000'}" @click="select('2000','江苏')">
              {{preSelectedParentName}}
            </span>
            <i>1</i>
          </p>
          <div class="category1-item-list">
            <p class="active">
              <span :class="{'active':selectedID=='2001'}" @click="select('2001','南京','2000','江苏')">南京</span>
            </p>
            <p>
              <span :class="{'active':selectedID=='2002'}" @click="select('2002','无锡','2000','江苏')">无锡</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
            <p>
              <span>北京</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit">确定</el-button>
      <el-button plain @click="cancel">取消</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    defaultID: "",
    defaultName: "",
    defaultPID: "",
    defaultPName: ""
  },
  components: {},
  data() {
    return {
      visible: true,
      selectedID: 0, //选中项ID,可以理解为最终的选项，可以为子选项，可以为父选项
      selectedName: "", //选中项name
      selectedParentID: 0, //选中的父级id
      selectedParentName: 0, //选中的父级Name
      preSelectedParentID: 0, //选中的父级id
      preSelectedParentName: 0, //选中的父级Name
      haschild: false, //是否包含子选项
      showChildCategory: false //展示子菜单
    };
  },
  watch: {
    dialogVisible: function(val) {
      this.visible = val;
    }
  },
  computed: {},
  methods: {
    /*dialog关闭回调*/
    close() {
      this.$emit("closeCB", false);
    },
    /**
      选中热门选型/子选项
      id:子选项id
      name:子选项name
      haschild：是否包含子选项
     */
    select(id, name, parentid, parentname) {
      this.selectedID = id;
      this.selectedName = name;
      if (parentid) {
        this.selectedParentID = parentid;
        this.selectedParentName = parentname;
      } else {
        this.selectedParentID = 0;
        this.selectedParentName = "";
      }
      this.showChildCategory = false;
    },
    selectCallBack() {
      this.$emit("selectedOption", {
        id: this.selectedID,
        name: this.selectedName,
        pid: this.selectedParentID,
        pname: this.selectedParentName
      });
    },
    /**
      父级选项
     */
    selectParent(id, name, selected) {
      if (selected) {
        this.selectedParentID = id;
        this.selectedParentName = name;
      } else {
        this.preSelectedParentID = id;
        this.preSelectedParentName = name;
      }
      //TODO 添加显示子选项的内容
      this.showChildCategory = true;
    },
    /**
      切换显示子选项
     */
    hideChildCategory() {
      this.showChildCategory = false;
    },
    /**提交 */
    submit() {
      this.selectCallBack();
    },
    /**取消 */
    cancel() {
      this.$emit("closeRegion");
    }
  },
  created() {
    if (this.defaultID) {
      this.selectedID = this.defaultID;
    }
    if (this.defaultName) {
      this.selectedName = this.defaultName;
    }
    if (this.defaultPID) {
      this.selectedParentID = this.defaultPID;
    }
    if (this.defaultPName) {
      this.selectedParentName = this.defaultPName;
    }
  },
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>
