<template>
    <div class="project-detail">
        <el-form :model="projectForm" :rules="projectRules" ref="projectForm" label-position="left" label-width="80px">
            <h3 class="project-title">项目经验：</h3>
            <p class="input-group-add">
                <el-form-item prop="projectname" label="项目名称：">
                    <el-input maxlength="100" name="projectname" type="text" v-model="projectForm.projectname">
                    </el-input>
                </el-form-item>
                <el-form-item prop="starttime" style="width:24%;" label="开始时间：" class="data-icon-correct">
                    <el-date-picker name="starttime" v-model="projectForm.starttime" :editable="false" :clearable="false" type="date" align="right">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="endtime" style="width:24%;" label="结束时间：" class="data-icon-correct">
                    <el-date-picker name="endtime" v-model="projectForm.endtime" :editable="false" :clearable="false" type="date" align="right">
                    </el-date-picker>
                </el-form-item>
            </p>
            <div class="resume-detail-main recommended-reasons major-desc">
                <p>
                    <span class="snowflake">*</span>项目描述：</p>
                <el-form-item prop="projectDesc">
                    <el-input maxlength="1000" name="projectDesc" type="textarea" v-model="projectForm.projectDesc">
                    </el-input>
                </el-form-item>
            </div>
            <div style="margin-top:10px;" class="resume-detail-main recommended-reasons major-desc">
                <p>
                    <span class="snowflake">*</span>职责和业绩：</p>
                <el-form-item prop="projectOfjobFunction">
                    <el-input maxlength="1000" name="projectOfjobFunction" type="textarea" v-model="projectForm.projectOfjobFunction">
                    </el-input>
                </el-form-item>
            </div>
            <div class="form-footer">
                <el-button @click="submit" class="bor-rad0" type="primary">保存项目</el-button>
                <el-button @click="cancel" class="bor-rad0" plain>取消</el-button>
            </div>
        </el-form>
    </div>
</template>

<script>
import { uuid } from "../../utils/index";

export default {
  components: {},
  data() {
    return {
      projectForm: {
        projectname: "", //项目名称
        starttime: "", //开始时间
        endtime: "", //开始时间
        projectDesc: "", //项目描述
        projectOfjobFunction: "" //职责和业绩
      },
      projectRules: {
        projectname: [
          { required: true, message: "请填项目名称", trigger: "blur" }
        ],
        starttime: [
          { required: true, message: "请填开始时间", trigger: "blur" }
        ],
        endtime: [{ required: true, message: "请填结束时间", trigger: "blur" }],
        projectDesc: [
          { required: true, message: "请填项目描述", trigger: "blur" }
        ],
        projectOfjobFunction: [
          { required: true, message: "请填职责和业绩", trigger: "blur" }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    //取消
    cancel() {
      this.$emit("cancel");
    },
    //保存
    submit() {
      this.$refs.projectForm.validate(valid => {
        if (valid) {
          if (this.data && this.data.id) {
            this.$emit("projectEdit", this.projectForm);
          } else {
            this.projectForm.id = uuid();
            this.$store.dispatch("addProject", this.projectForm);
            //this.$emit("projectAdd", this.projectForm);
            return;
          }
        }
      });
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
