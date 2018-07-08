<template>
  <div class="resume-detail-main mar-bom">
    <el-form :key="21" :model="resumeForm" :rules="resumeRules" ref="resumeForm" label-position="left" label-width="80px">
      <div class="add-project-warp">
        <p class="input-group-add">
          <el-form-item prop="schoolname" label="学校名称：">
            <el-input maxlength="100" name="schoolname" type="text" v-model="resumeForm.schoolname">
            </el-input>
          </el-form-item>
          <el-form-item prop="majorname" label="专业名称：">
            <el-input maxlength="100" name="majorname" type="text" v-model="resumeForm.majorname">
            </el-input>
          </el-form-item>
        </p>
        <div class="input-group-warp">
          <p class="input-group-add">
            <el-form-item prop="starttime" label="开始时间：" class="data-icon-correct">
              <el-date-picker name="starttime" v-model="resumeForm.starttime" :editable="false" :clearable="false" type="date" align="right">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop="endtime" label="结束时间：" class="data-icon-correct">
              <el-date-picker name="endtime" v-model="resumeForm.endtime" :editable="false" :clearable="false" type="date" align="right">
              </el-date-picker>
            </el-form-item>
          </p>
          <p class="input-group-add">
            <el-form-item prop="degree" label="学历：">
              <el-input maxlength="100" name="degree" :readonly="true" @focus="EducationFouse" type="text" v-model="resumeForm.degree">
                <svg-icon icon-class="down-arrow" class="down-arrow cursor-p" slot="suffix" @click="EducationFouse" />
              </el-input>
            </el-form-item>
            <el-form-item prop="generalRecruitment" label="是否统招：">
              <el-checkbox v-model="resumeForm.generalRecruitment">是</el-checkbox>
            </el-form-item>
          </p>
        </div>
        <div class="resume-detail-main recommended-reasons major-desc">
          <p>专业描述：</p>
          <el-form-item prop="majorDesc">
            <el-input maxlength="1000" name="majorDesc" type="textarea" v-model="resumeForm.majorDesc" placeholder="">
            </el-input>
          </el-form-item>
        </div>
        <div class="form-footer">
          <el-button class="bor-rad0" @click="submit" type="primary">完成</el-button>
          <el-button class="bor-rad0" @click="cancel" plain>取消</el-button>
        </div>
      </div>
    </el-form>
    <degree v-if="dialogRegionVisible" :defaultID="resumeForm.degreeid" :defaultName="resumeForm.degree" :defaultPID="defaultPID" :defaultPName="defaultPName" :dialogVisible='dialogRegionVisible' @closeRegion='closeRegion' @selectedOption='selectedRegion'>
    </degree>
  </div>
</template>
<script>
import { uuid } from "../../utils/index";
import degree from "../../components/dialog/degree";
export default {
  components: {
    degree
  },
  props: {
    operationType: {
      type: String,
      default: "add"
    },
    data: {}
  },
  data() {
    return {
      //弹框
      dialogRegionVisible: false,
      regionID: 0,
      regionName: "",
      regionPID: 0,
      regionPName: "",
      defaultID: "",
      defaultName: "",
      defaultPID: "",
      defaultPName: "",
      //弹框
      resumeForm: {
        schoolname: "", //学校名称
        majorname: "", //专业名称
        starttime: "", //开始时间
        endtime: "", //开始时间
        degree: "", //学位
        degreeid: "",
        generalRecruitment: false, //是否统招
        majorDesc: "", //专业描述
        id: "", //唯一编号
        ismodify: false //是否修改状态
      },
      resumeRules: {
        schoolname: [
          { required: true, message: "请填学校名称", trigger: "blur" }
        ],
        majorname: [
          { required: true, message: "请填专业名称", trigger: "blur" }
        ],
        starttime: [
          { required: true, message: "请填开始时间", trigger: "blur" }
        ],
        endtime: [{ required: true, message: "请填结束时间", trigger: "blur" }],
        degree: [{ required: true, message: "请填学历", trigger: "blur" }],
        generalRecruitment: [{ required: false }],
        majorDesc: [{ required: false }]
      }
    };
  },
  created() {
    if (this.data && this.data.id) {
      this.resumeForm = this.data;
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggleRegionVisible() {
      this.dialogRegionVisible = true;
    },
    closeRegion() {
      this.dialogRegionVisible = false;
    },
    //接收选定信息并绑定ui
    selectedRegion(data) {
      if (data) {
        this.resumeForm.degreeid = data.id;
        this.resumeForm.degree = data.name;
      }
      this.dialogRegionVisible = false;
    },
    /*学历*/
    EducationFouse() {
      this.dialogRegionVisible = true;
    },
    /*提交*/
    submit() {
      this.$refs.resumeForm.validate(valid => {
        if (valid) {
          if (this.data && this.data.id) {
            this.$emit("educationEdit", this.resumeForm);
          } else {
            this.resumeForm.id = uuid();
            this.$emit("educationAdd", this.resumeForm);
            return;
          }
        } else {
          console.log("education submit :", valid);
        }
      });
    },
    /*取消*/
    cancel() {
      this.$emit("educationCancel");
    }
  },

  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
