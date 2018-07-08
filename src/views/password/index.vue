<template>
    <div class="rome-warp">
        <div class="rome">
            <side-menu activeMenu='managementPassword'></side-menu>
            <div class="rome-main">
                <h2 class="page-header blpl">密码管理</h2>
                <div class="auth-progress">
                    <ul class="progress-header cursor-p">
                        <li @click="togglePWDType" :class="{active:passwordType==0}">登录密码</li>
                        <li @click="togglePWDType" :class="{active:passwordType==1}">交易密码</li>
                    </ul>
                </div>
                <div v-if='passwordType==0' class="auth-main auth-main0">
                    <el-form autoComplete="on" :model="authForm" :rules="authRules" ref="authForm" label-position="left" label-width="0px" class="">
                        <ul>
                            <li>
                                <div class="fl auth-label">
                                    <span class="theme-color">* </span>当前登录密码：
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="realname">
                                        <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="" />
                                    </el-form-item>

                                </div>
                                <router-link to='/' class="input-tip">忘记登录密码？</router-link>
                            </li>
                            <li class="idcard">
                                <div class="fl auth-label ">
                                    <span class="theme-color">* </span>新登录密码：
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="idcard">
                                        <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="密码为8-16位字母+数字组合" />
                                    </el-form-item>
                                </div>
                            </li>
                            <li class="imgyzm">
                                <div class="fl auth-label ">
                                    <span class="theme-color">* </span>图片验证码：
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="idcard">
                                        <el-input class="captcha-input" name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="密码为8-16位字母+数字组合" />
                                        <img :src="captchaUrl" alt="点击刷新" class="captcha" @click="getCaptcha">
                                    </el-form-item>
                                </div>
                            </li>
                        </ul>

                        <el-form-item class="auth-submit password-submit">
                            <el-button type="primary" :loading="loading" @click.native.prevent="handleAuth">
                                确认
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div v-if='passwordType==1' class="auth-main auth-main0">
                    <template v-if="payType==0">
                        <p class="progress-result">您还未完成
                            <span class="theme-color">个人认证</span>，请先完成认证，再设置交易密码</p>
                        <p class="progress-result-tip cursor-p">
                            <router-link to="/personal-auth">马上认证 >></router-link>
                        </p>
                    </template>
                    <el-form v-else autoComplete="on" :model="authForm" :rules="authRules" ref="authForm" label-position="left" label-width="0px" class="">
                        <ul>
                            <li :class="{'display-none':payType!=1}">
                                <div class="fl auth-label">
                                    <span class="theme-color">* </span>当前交易密码：
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="realname">
                                        <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="" />
                                    </el-form-item>

                                </div>
                                <router-link to='/' class="input-tip">忘记交易密码？</router-link>
                            </li>
                            <li class="idcard">
                                <div class="fl auth-label ">
                                    <span class="theme-color">* </span>{{payType==1?'新交易密码：':'设置交易密码：'}}
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="idcard">
                                        <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="密码为8-16位字母+数字组合" />
                                    </el-form-item>
                                </div>
                                <p class="important-tip">*必须与登录密码不相同</p>
                            </li>
                            <li class="idcard">
                                <div class="fl auth-label ">
                                    <span class="theme-color">* </span>确认交易密码：
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="idcard">
                                        <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="密码为8-16位字母+数字组合" />
                                    </el-form-item>
                                </div>
                            </li>
                            <li class="imgyzm">
                                <div class="fl auth-label ">
                                    <span class="theme-color">* </span>图片验证码：
                                </div>
                                <div class="fl auth-text">
                                    <el-form-item prop="idcard">
                                        <el-input class="captcha-input" name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="密码为8-16位字母+数字组合" />
                                        <img :src="captchaUrl" alt="点击刷新" class="captcha" @click="getCaptcha">
                                    </el-form-item>
                                </div>
                            </li>
                        </ul>

                        <el-form-item class="auth-submit password-submit">
                            <el-button type="primary" :loading="loading" @click.native.prevent="handleAuth">
                                确认
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideMenu from "@/components/Sidemenu/index";
import { captcha } from "@/api/login";

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
        idcard: "",
        captCode: ""
      },
      authRules: {
        realname: [
          { required: true, trigger: "blur", validator: validateRealname }
        ],
        idcard: [{ required: true, trigger: "blur", validator: validateIdcard }]
      },
      passwordType: 1,
      payType: 1, //0：未完成“个人认证”,1:设置交易密码，2：修改交易密码
      idcardBase64: "",
      captchaUrl: "",
      loading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    getCaptcha() {
      captcha()
        .then(({ data }) => {
          this.captchaUrl = data.captcha;
          this.authForm.captCode = data.captCode;
        })
        .catch(message => {
          console.log("get captcha error", message);
        });
    },
    //切换密码类型
    togglePWDType() {
      this.passwordType = !this.passwordType;
    },
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
  created() {
    captcha()
      .then(({ data }) => {
        this.captchaUrl = data.captcha;
        this.authForm.captCode = data.captCode;
      })
      .catch(message => {
        console.log("get captcha error", message);
      });
  },
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/user.scss";
</style>
