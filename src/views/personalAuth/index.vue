<template>
  <div class="rome-warp">
    <div class="rome">
      <side-menu activeMenu='personalAuth'></side-menu>
      <div class="rome-main">
        <h2 class="page-header blpl">个人认证</h2>
        <div class="auth-progress">
          <ul class="progress-header">
            <li :class="{active:auth_progress==0}">基本信息认证 ></li>
            <li :class="{active:auth_progress==1}">审核资料 ></li>
            <li :class="{active:auth_progress==2}">审核结果</li>
          </ul>
        </div>
        <div v-if='auth_progress==0' class="auth-main auth-main0">
          <el-form autoComplete="on" :model="authForm" :rules="authRules" ref="authForm" label-position="left" label-width="0px" class="">
            <ul>
              <li>
                <div class="fl auth-label">
                  <span class="theme-color">* </span>真实姓名：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="realname">
                    <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="请输入真实姓名" />
                  </el-form-item>
                </div>
              </li>
              <li class="idcard">
                <div class="fl auth-label ">
                  <span class="theme-color">* </span>身份证号：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="idcard">
                    <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="请输入身份证号" />
                  </el-form-item>
                </div>
              </li>
              <li class="idcard-tip">
                <div class="fl auth-label">
                  <span class="theme-color">* </span>手持身份证照片：
                </div>
                <div class="fl fs12c9 auth-text">
                  （需本人手持身份证，脸部无遮挡，身份证内容清晰，格式JPG / GIF / PNG，2M以内）
                </div>
              </li>
              <li class="idcard-upload">
                <div class="fl auth-label">
                </div>
                <div class="fl fs12c9 auth-text">
                  <img v-if="idcardBase64" :src="idcardBase64" ref="idcardImg" alt="">
                  <label v-else for="file-idcard">上传手持身份证照片</label>
                  <input accept="image/*" @change="upIdCard" type="file" id="file-idcard" style="position:absolute;clip:rect(0 0 0 0);">
                  <span @click="removeIdCard" class="delete-card">删除</span>
                </div>
              </li>
              <li class="limit-tip">
                <div class="fl auth-label">
                </div>
                <div class="fl fs12c9 auth-text">
                  注：本月还可修改5次个人信息，请谨慎修改
                </div>
              </li>
            </ul>

            <el-form-item class="auth-submit">
              <el-button type="primary" :loading="loading" @click.native.prevent="handleAuth">
                确认并提交
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if='auth_progress==1' class="auth-main auth-main1">
          <p class="progress-result">实名认证资料已提交成功，ROME会在1-2个工作日内审核您的资料。</p>
        </div>
        <div v-if='auth_progress==2' class="auth-main auth-main2">
          <p class="progress-result">您的实名认证资料审核未通过！</p>
          <p class="progress-result-tip">未通过原因：照片模糊，无法识别</p>
          <p class="auth-submit">
            <el-button type="primary">
              重新认证
            </el-button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/Sidemenu/index";
export default {
  components: {
    SideMenu
  },
  data() {
    const validateRealname = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("真实姓名不能为空"));
      } else {
        callback();
      }
    };
    const validateIdcard = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("身份证号不能为空"));
      } else {
        callback();
      }
    };
    return {
      authForm: {
        realname: "",
        idcard: ""
      },
      authRules: {
        realname: [
          { required: true, trigger: "blur", validator: validateRealname }
        ],
        idcard: [{ required: true, trigger: "blur", validator: validateIdcard }]
      },
      auth_progress: 0, //0:基本信息认证，1：审核资料,2:审核结果
      idcardBase64: "",
      loading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleAuth() {},
    //删除上传的图片
    removeIdCard() {
      this.idcardBase64 = "";
    },
    /*上传图片 */
    upIdCard(event) {
      let self = this;
      let that = this.$refs.idcardImg;
      // 根据这个 <input> 获取文件的 HTML5 js 对象
      var files = event.target.files,
        file;
      if (files && files.length > 0) {
        // 获取目前上传的文件
        file = files[0];
        // 来在控制台看看到底这个对象是什么
        console.log("img:", file);
        // 那么我们可以做一下诸如文件大小校验的动作
        if (file.size > 1024 * 1024 * 2) {
          alert("图片大小不能超过 2MB!");
          return false;
        }

        // 图片预览 function 1
        if (window["FileReader"]) {
          var reader = new FileReader();
        } else {
          alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        }
        var reader = new FileReader();
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
          alert("请选择图片！");
          return;
        }
        //读取完成
        reader.onload = function(e) {
          //图片路径设置为读取的图片
          self.idcardBase64 = this.result;
        };
        reader.readAsDataURL(file);
        //that.fileUpload(file); //预览出现后调用上传方法，传值为一个file对象，也可以传demand.image预览地址，看服务器那边怎么要求的
      }
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
</style>
