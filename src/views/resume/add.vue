<template>
  <div>
    <div class="resume-header">
      <h1>
        共享人才信息
      </h1>
      <span>
        您已累计共享
        <i>333</i>条
      </span>
    </div>
    <el-form :key="21" :model="resumeForm" :rules="resumeRules" ref="loginForm" label-position="left" label-width="80px">
      <div class="resume-warp">
        <p class="title">
          基本信息
        </p>
        <div class="resume-detail-main ">
          <div class="portrait fl">
            <img src="../../assets/user/portrait.png" alt="">
            <p>
              <span>修改</span>
              <span>删除</span>
            </p>
          </div>
          <div class="fl">
            <p class="input-group">
              <el-form-item prop="username" label="姓 名：">
                <el-input maxlength="20" name="username" type="text" v-model="resumeForm.username" placeholder="" />
              </el-form-item>
              <el-form-item label="性 别" prop="sex">
                <el-radio-group v-model="resumeForm.sex">
                  <el-radio label="男"></el-radio>
                  <el-radio label="女"></el-radio>
                </el-radio-group>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="birthday" label="出生日期：" class="birthday-form-item">
                <el-date-picker v-model="resumeForm.birthday" :editable="false" :clearable="false" type="date" placeholder="" align="right">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="婚 姻" prop="sex">
                <el-radio-group v-model="resumeForm.sex">
                  <el-radio label="已婚"></el-radio>
                  <el-radio label="未婚"></el-radio>
                </el-radio-group>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="householdregister" label="原 籍：">
                <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <i class="el-icon-edit el-input__icon" slot="suffix" @click="householdregisterFouse"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="目前住所" prop="residence">
                <el-input maxlength="100" name="residence" :readonly="true" @focus="residenceFouse" type="text" v-model="resumeForm.residence" placeholder="">
                  <i class="el-icon-edit el-input__icon" slot="suffix" @click="residenceFouse"></i>
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="householdregister" label="最高学历：">
                <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <svg-icon icon-class="down-arrow" class="down-arrow cursor-p" slot="suffix" @click="householdregisterFouse" />
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="certificate" label="资格证书：">
                <el-input maxlength="100" name="certificate" type="text" v-model="resumeForm.certificate" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="phone" label="联系电话：">
                <el-input maxlength="100" name="phone" type="text" v-model="resumeForm.phone" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="邮箱：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
          </div>
          <div class="resume-col3 fl">
            <p class="input-group single-line">
              <el-form-item prop="email" label="公司名称：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="职位：">
                <el-input maxlength="100" name="email" type="text" v-model="resumeForm.email" placeholder="">
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="所在行业：">
                <el-input maxlength="100" name="householdregister" :readonly="true" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <svg-icon icon-class="down-arrow" class="down-arrow cursor-p" slot="suffix" @click="householdregisterFouse" />
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="birthday" label="参加工作年份：" class="birthday-form-item join-job">
                <el-date-picker v-model="resumeForm.birthday" :editable="false" :clearable="false" type="date" placeholder="" align="right">
                </el-date-picker>
              </el-form-item>
              <el-form-item label="目前就业状态：" class="current-job" prop="sex">
                <el-radio-group v-model="resumeForm.sex">
                  <el-radio label="在职"></el-radio>
                  <el-radio label="离职"></el-radio>
                </el-radio-group>
              </el-form-item>
            </p>
            <p class="input-group">
              <el-form-item prop="email" label="目前收入：">
                <el-input maxlength="100" name="householdregister" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <span slot="suffix" class="custom-suffix">万/年</span>
                </el-input>
              </el-form-item>
              <el-form-item prop="email" label="期望收入：">
                <el-input maxlength="100" name="householdregister" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <span class="custom-suffix" slot="suffix">万/年</span>
                </el-input>
              </el-form-item>
            </p>
            <p class="input-group single-line">
              <el-form-item prop="email" label="目标企业：">
                <el-input maxlength="100" name="householdregister" @focus="householdregisterFouse" type="text" v-model="resumeForm.householdregister" placeholder="">
                  <span slot="suffix" class="custom-suffix">目标岗位</span>
                </el-input>
              </el-form-item>
            </p>
          </div>
        </div>
      </div>
      <div class="resume-warp">
        <p class="title">
          推荐分享理由
          <span>(必填)</span>
        </p>
        <div class="resume-detail-main recommended-reasons textarea1">
          <el-form-item prop="recommendedReasons" class="reasons-input">
            <el-input maxlength="1000" name="recommendedReasons" type="textarea" v-model="resumeForm.recommendedReasons" placeholder="">
            </el-input>
          </el-form-item>
        </div>
      </div>
    </el-form>
    <div class="resume-warp">
      <p class="title">
        教育经历
      </p>
      <div class="education-list">
        <div class="resume-detail-main education-item" style="margin:0px 42px;" v-for="(item,index) in educationList" :key="index">
          <div class="ohid" v-if="!item.ismodify">
            <p class="school-name column1 edu-column">{{item.schoolname}}
              <span>({{ item.starttime|dateFormat('yyyy.MM')}}-{{item.endtime|dateFormat('yyyy.MM')}})</span>
            </p>
            <p class="column2 edu-column">专业：{{item.majorname}}</p>
            <p class="column3 edu-column">学历：{{item.degree}}</p>
            <p class="column4 edu-column">是否统招：{{item.generalRecruitment | booleanFormat}}</p>
            <p class="fr column5 edu-column" v-if="showEducationEdit">
              <i class="el-icon-edit" @click="ActivateEducationEdit(item.id)"></i>
              <i class="el-icon-delete" @click="educationDelete(item.id)"></i>
            </p>
            <p class="major-desc edu-column" v-if="item.majorDesc">
              <span>专业描述：</span>
              <span class="major-desc-content">{{item.majorDesc}}</span>
            </p>
          </div>
          <education-item :data="item" v-else class="pad0" @educationEdit="educationEdit" @educationCancel="educationCancel" @educationAdd="educationAdd">
          </education-item>
        </div>
      </div>
      <education-item @educationCancel="educationCancel" @educationAdd="educationAdd" v-if="showEducationAdd"></education-item>
    </div>
    <div class="resume-warp " :class="{'add-project-btn':educationList.length==0}" v-if="!showEducationAdd">
      <div class="resume-detail-main" @click="ActivateEducationAdd">
        <p class="text-c cursor-p">
          <span class="resume-add-icon"></span>
          添加教育经历
        </p>
      </div>
    </div>

    <div class="resume-warp">
      <p class="title">
        工作经历
      </p>
      <div class="education-list">
        <div class="resume-detail-main education-item" style="margin:0px 42px;" v-for="(item,index) in educationList" :key="index">
          <div class="ohid" v-if="!item.ismodify">
            <p class="school-name column1 edu-column">{{item.schoolname}}
              <span>({{ item.starttime|dateFormat('yyyy.MM')}}-{{item.endtime|dateFormat('yyyy.MM')}})</span>
            </p>
            <p class="column2 edu-column">专业：{{item.majorname}}</p>
            <p class="column3 edu-column">学历：{{item.degree}}</p>
            <p class="column4 edu-column">是否统招：{{item.generalRecruitment | booleanFormat}}</p>
            <p class="fr column5 edu-column" v-if="showEducationEdit">
              <i class="el-icon-edit" @click="ActivateEducationEdit(item.id)"></i>
              <i class="el-icon-delete" @click="educationDelete(item.id)"></i>
            </p>
            <p class="major-desc edu-column" v-if="item.majorDesc">
              <span>专业描述：</span>
              <span class="major-desc-content">{{item.majorDesc}}</span>
            </p>
          </div>
          <job-item :data="item" v-else class="pad0" @educationEdit="educationEdit" @educationCancel="educationCancel" @educationAdd="educationAdd">
          </job-item>
        </div>
      </div>
      <job-item @educationCancel="educationCancel" @educationAdd="educationAdd" v-if="!showJobAdd"></job-item>
    </div>
    <div class="resume-warp " :class="{'add-project-btn':educationList.length==0}" v-if="!showJobAdd">
      <div class="resume-detail-main" @click="showJobAdd=true">
        <p class="text-c cursor-p">
          <span class="resume-add-icon"></span>
          添加工作经历
        </p>
      </div>
    </div>

    <br/>
    <br/>
    <el-button type="text" @click="toggleRegionVisible">打开嵌套表格的 Dialog</el-button>
    <multiple-options v-if="dialogRegionVisible" :defaultID="defaultID" :defaultName="defaultName" :defaultPID="defaultPID" :defaultPName="defaultPName" :dialogVisible='dialogRegionVisible' @closeRegion='closeRegion' @selectedOption='selectedRegion'>
    </multiple-options>
    {{regionID}}--{{regionName}}--{{regionPID}}--{{regionPName}}
    <br/> {{resumeForm.sex}}
  </div>
</template>
<script>
import MultipleOptions from "../../components/dialog/MultipleOptions";
import educationItem from "../../components/resume/educationItem";
import jobItem from "../../components/resume/jobItem";

export default {
  components: {
    MultipleOptions,
    educationItem,
    jobItem
  },
  data() {
    return {
      dialogRegionVisible: false,
      regionID: 0,
      regionName: "",
      regionPID: 0,
      regionPName: "",
      defaultID: "2002",
      defaultName: "无锡",
      defaultPID: "2000",
      defaultPName: "江苏",
      //教育经历
      showEducationEdit: true, //是否显示修改教育经历
      showEducationAdd: false, //是否显示新加教育经历
      //工作经历
      showJobEdit: true, //是否显示修改教育经历
      showJobAdd: false, //是否显示新加教育经历
      //form-begin
      resumeForm: {
        username: "",
        sex: "",
        birthday: "",
        householdregister: "", //户籍地
        residence: "", //目前住所
        certificate: "", //证书
        phone: "", //联系电话
        email: "", //邮箱
        recommendedReasons: "", //推荐理由
        generalRecruitment: false, //统招
        majorDesc: "" //专业描述
      },
      resumeRules: {
        username: [{ required: true, trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        birthday: [
          { required: true, message: "请填出生日期", trigger: "blur" }
        ],
        householdregister: [
          { required: true, message: "请填原籍", trigger: "blur" }
        ],
        residence: [
          { required: true, message: "请填目前住所", trigger: "blur" }
        ],
        certificate: [{ required: false }],
        phone: [{ required: true, message: "请填联系电话", trigger: "blur" }],
        email: [{ required: true, message: "请填邮箱", trigger: "blur" }],
        recommendedReasons: [
          { required: true, message: "请填推荐理由", trigger: "blur" }
        ],
        generalRecruitment: [{ required: false }],
        majorDesc: [{ required: false }]
      },
      //form-end
      /*教育经历数组*/
      educationList: [
        {
          schoolname: "复旦大学",
          majorname: "计算机维修",
          starttime: "2018-10",
          endtime: "2019-4",
          degree: "博士",
          degreeid: "1001",
          generalRecruitment: false,
          majorDesc: "这个专业很棒，真的！",
          id: "112233445666",
          ismodify: false
        }
      ]
    };
  },
  computed: {},
  created() {},
  methods: {
    toggleRegionVisible() {
      this.dialogRegionVisible = true;
    },
    closeRegion() {
      this.dialogRegionVisible = false;
    },
    selectedRegion(data) {
      if (data) {
        this.regionID = data.id;
        this.regionName = data.name;
        this.regionPID = data.pid;
        this.regionPName = data.pname;
        this.defaultID = data.id;
        this.defaultName = data.name;
        this.defaultPID = data.pid;
        this.defaultPName = data.pname;
      }
      this.dialogRegionVisible = false;
    },
    householdregisterFouse() {
      console.log("householdregisterFouse");
    },
    residenceFouse() {
      console.log("residenceFouse");
    },
    /*激活新加教育经历状态*/
    ActivateEducationAdd() {
      this.showEducationAdd = true;
    },
    /*添加教育经历*/
    educationAdd(data) {
      this.educationList.push(data);
      this.showEducationAdd = false;
      console.log("添加教育经历", this.educationList);
    },
    /*删除教育经历*/
    educationDelete(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.educationList.forEach((item, index) => {
            if (item.id == id) {
              this.educationList.splice(index, 1);
            }
          });
        })
        .catch(() => {});
    },
    /*激活修改教育经历状态*/
    ActivateEducationEdit(id) {
      this.educationList.forEach((item, index) => {
        if (item.id == id) {
          let _item = item;
          _item.ismodify = true;
          this.educationList.splice(index, 1, _item);
        }
      });
    },
    /*修改教育经历*/
    educationEdit(data) {
      this.educationList.forEach((item, index) => {
        if (item.id == data.id) {
          data.ismodify = false;
          this.educationList.splice(index, 1, data);
        }
      });
      console.log("修改教育经历", this.educationList);
    },
    /*取消添加教育经历*/
    educationCancel(id) {
      if (id) {
        this.educationList.forEach((item, index) => {
          if (item.id == id) {
            let _item = item;
            _item.ismodify = false;
            this.educationList.splice(index, 1, _item);
          }
        });
      } else {
        this.showEducationAdd = false;
      }
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
@import "../../styles/multip-options.scss";
@import "../../styles/resume.scss";
</style>
