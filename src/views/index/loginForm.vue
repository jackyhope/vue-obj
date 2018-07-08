<template>
  <div class="login-border">
    <transition-group name="breadcrumb">
      <div class="login-container" v-if="!logged && !isRegister" :key=10>
        <header>
          <p @click="toggleLoginType(true)" :class="{'active':smsLogin}">验证码登录</p>
          <p @click="toggleLoginType(false)" :class="{'active':!smsLogin}">密码登录</p>
          <div class="tab-nav" :class="{'tab-nav-pwd':!smsLogin}"></div>
        </header>
        <transition-group name="breadcrumb">
          <el-form :key="20" v-if="smsLogin" v-loading="smsLoginStepLoading" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <transition-group name="breadcrumb">
              <div :key="1" v-if="smsLoginStep==0">
                <el-form-item prop="phone" :error="asynError.phone">
                  <el-input maxlength="11" name="phone" type="text" v-model="loginForm.phone" placeholder="手机号" />
                </el-form-item>
                <el-form-item prop="captcha" :error="asynError.captcha">
                  <el-input maxlength="4" class="captcha-input fl" name="captcha" type="text" v-model="loginForm.captcha" placeholder="图片验证码" />
                  <img :src="captchaUrl" alt="点击刷新" class="captcha" @click="getCaptcha">
                </el-form-item>
              </div>
              <div :key="2" v-else-if="smsLoginStep==1">
                <p class="sms-send-tip">已将短信验证码发送至您的手机号：</p>
                <p class="smd-phone">{{loginForm.phone}}
                  <span class="fr" @click="toggleSMSLoginStep"><img src="../../assets/index/edit-phone.png" alt="">返回修改</span>
                </p>
                <el-form-item prop="smsCode" :error="asynError.smsCode" class="smscode-warp">
                  <el-input maxlength="6" class="captcha-input fl" name="smsCode" type="text" v-model="loginForm.smsCode" placeholder="短信验证码" />
                  <span class="fr" :class="{'sms-disabled':smsDisabled}" @click="getLoginSMS">{{smsText}}</span>
                </el-form-item>
              </div>
            </transition-group>
            <el-form-item>
              <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
                登 录
              </el-button>
              <p class="tip">还没有账号？
                <span @click="toggleRegister">立即注册</span>
              </p>
            </el-form-item>
          </el-form>
          <el-form :key="21" v-else :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form">
            <el-form-item prop="phone" :error="asynError.phone">
              <el-input maxlength="11" name="phone" type="text" v-model="loginForm.phone" placeholder="手机号" />
            </el-form-item>
            <el-form-item prop="password" :error="asynError.password">
              <el-input maxlength="16" name="password" type="password" v-model="loginForm.password" placeholder="密码" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
                登 录
              </el-button>
              <p class="remember-warp">
                <span class="checkbox" :class="{'ivcheckbox':remember}" checkbox="" @click="toggleRemember"></span>
                <span class="ivyd" @click="toggleRemember">下次自动登录</span>
                <span class="fr forget">忘记密码?</span>
              </p>
              <p class="tip">还没有账号？
                <span @click="toggleRegister">立即注册</span>
              </p>
            </el-form-item>
          </el-form>
        </transition-group>
      </div>
      <div v-else-if="logged && !isRegister" :key=11 class="loged-warp" @click="()=>{this.$router.push('/')}">
        <div class="user-main">
          <img class="user-phone" src="../../assets/user/user-phone.png" alt="">
          <h1>红色猎人</h1>
          <div class="user-tag">
            <i class="ranking-icon"></i>
            ROME诚信
            <span class="score">93.6</span>
            <span class="icon-evaluate">极好</span>
          </div>
          <div class="user-account">
            <div class="fl brp">
              <p class="uc-title">
                <i class="icon-rome"></i>
                <span>可用ROME币</span>
              </p>
              <p class="uc-tip">
                <i class="icon-tip"></i>
                <span class="vm">什么是ROME币?</span>
              </p>
              <p class="uc-rome">
                <i class="icon-r"></i>
                <span class="vm">3,012</span>
              </p>
            </div>
            <div class="fl">
              <p class="uc-title">
                <i class="icon-prefit"></i>
                <span>昨日收益</span>
              </p>
              <p class="uc-tip">
                <span class="vm">&nbsp;</span>
              </p>
              <p class="uc-rome">
                <i class="icon-r"></i>
                <span class="vm">3,012</span>
              </p>
            </div>
          </div>
        </div>
        <div class="withdraw">
          <span>可用现金</span>
          <span class="wd-money">￥2,188</span>
          <span class="wd-btn">提现</span>
        </div>
        <p class="index-mytask">
          <span>我的任务</span>
          <span class="mytask-num">3</span>
        </p>
      </div>
      <div class="login-container" v-else-if="isRegister" :key=12>
        <header>
          <p class="active w100">账户注册</p>
          <div class="tab-nav w100"></div>
        </header>
        <el-form :key="21" :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px" class="card-box login-form register-form">
          <el-form-item prop="phone">
            <el-input maxlength="11" name="phone" type="text" v-model="loginForm.phone" placeholder="中国大陆手机号" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input maxlength="16" name="password" type="password" v-model="loginForm.password" placeholder="密码为8-16位字母+数字组合" />
          </el-form-item>
          <el-form-item prop="captcha">
            <el-input maxlength="4" class="captcha-input fl" name="captcha" type="text" v-model="loginForm.captcha" placeholder="图片验证码" />
            <img :src="captchaUrl" alt="点击刷新" class="captcha" @click="getCaptcha">
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleRegister">
              注册账号
            </el-button>
            <p class="remember-warp">
              <span class="checkbox" :class="{'ivcheckbox':agreement}" checkbox="" @click="toggleAgreement"></span>
              <span class="ivyd" @click="toggleAgreement">接受
                <i class="theme-color fsn">用户服务协议</i>
              </span>
              <span class="fr ivyd has-account">已有账号?
                <i class="theme-color fsn" @click="toggleRegister">立即登录</i>
              </span>
            </p>
          </el-form-item>
        </el-form>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { Message, MessageBox } from "element-ui";
import { captcha, sendSMS } from "@/api/login";
import { isPhoneNumber, isNumber, passwordRule } from "../../utils/validate";
import {mapGetters} from 'vuex';
export default {
  components: {},
  data() {
    const validatePhone = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("手机号码不能为空"));
      }
      if (!isPhoneNumber(value)) {
        callback(new Error("手机号格式不对"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("密码不能为空"));
      } else if (!passwordRule(value)) {
        callback(new Error("密码为8-16位字母+数字组合"));
      } else {
        callback();
      }
    };
    const validateCaptcha = (rule, value, callback) => {
      if (this.captCode === "") {
        callback(new Error("请重新获取图片验证码"));
      } else if (value.length < 1) {
        callback(new Error("图片验证码不能为空"));
      } else if (value.length < 4) {
        callback(new Error("请输入有效的验证码"));
      } else {
        callback();
      }
    };
    const validateSmsCode = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error("请输入验证码"));
      } else if (value.length < 6) {
        callback(new Error("请输入有效的验证码"));
      } else {
        callback();
      }
    };

    return {
      captchaUrl: "",
      loginForm: {
        phone: "",
        password: "",
        captCode: "",
        captcha: "",
        smsCode: ""
      },
      loginRules: {
        phone: [{ required: true, trigger: "blur", validator: validatePhone }],
        password: [
          { required: true, trigger: "blur", validator: validatePass }
        ],
        captcha: [
          { required: true, trigger: "blur", validator: validateCaptcha }
        ],
        smsCode: [
          {}
          // required: true, trigger: "blur", validator: validateSmsCode
        ]
      },
      asynError: {
        phone: "",
        captcha: "",
        smsCode: "",
        password: ""
      },
      loading: false,
      smsLogin: true,
      sms_Interval: 0,
      smsLoginStepLoading: false,
      smsLoginStep: 0,
      countDown: 60, //倒计时60秒
      smsDisabled: false, //短信验证码按钮禁止点击
      smsText: "获取验证码",
      smsDefaultText: "重新获取",
      remember: false,
      isRegister: false,
      agreement: true
    };
  },
  watch: {},
  computed: {
    ...mapGetters({
      logged:'token'
    })
  },
  methods: {
    /*切换用户注册协议 */
    toggleAgreement() {
      this.agreement = !this.agreement;
    },
    /*切换到注册状态 */
    toggleRegister() {
      this.isRegister = !this.isRegister;
    },
    toggleRemember() {
      this.remember = !this.remember;
    },
    getCaptcha() {
      captcha()
        .then(({ data }) => {
          this.captchaUrl = data.captcha;
          this.loginForm.captCode = data.captCode;
        })
        .catch(message => {
          console.log("get captcha error", message);
        });
    },
    /**
     * 获取登录短信验证码
     */
    getLoginSMS() {
      //TODO:目前不要输入完六位验证码自动发送验证码，需要点按钮触发
      //如果要还原请给手机号码input和图形验证码input加keyup事件
      //@keyup.native="getLoginSMS"
      //对应事件：getLoginSMS()
      //-------------------------------------------------------
      //图形验证码
      // if (this.captCode === "") {
      //   return;
      // } else if (this.loginForm.captcha.length < 1) {
      //   return;
      // } else if (this.loginForm.captcha.length < 4) {
      //   return;
      // }
      // //手机号码
      // if (this.loginForm.phone.length < 1) {
      //   return;
      // }
      // if (!isPhoneNumber(this.loginForm.phone)) {
      //   return;
      // }
      if (this.smsDisabled) {
        return;
      }
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.smsLoginStepLoading = true;
          sendSMS().then(
            d => {
              if (d.data.result) {
                this.smsDisabled = false;
                this.smsCounrdown();
                console.log("ok");
                this.smsLoginStepLoading = false;
                this.smsLoginStep = 1;
              }
            },
            d => {
              this.smsLoginStepLoading = false;
              this.toggleSMSLoginStep();
            }
          );
        }
      });
    },
    /*短信倒计时 */
    smsCounrdown() {
      this.smsDisabled = true;
      let _countDown = this.countDown;
      clearInterval(this.sms_Interval);
      this.sms_Interval = setInterval(() => {
        if (_countDown <= 0) {
          this.smsText = this.smsDefaultText;
          this.smsDisabled = false;
          clearInterval(this.sms_Interval);
          return;
        }
        this.smsText = _countDown + "秒后重新获取";
        _countDown--;
      }, 1000);
    },
    /*切换短信登录step */
    toggleSMSLoginStep() {
      if (this.smsLoginStep == 0) {
        this.smsLoginStep = 1;
      } else {
        this.smsLoginStep = 0;
      }
    },
    toggleLoginType(result) {
      this.smsLogin = result;
    },
    /*登录 */
    handleLogin() {
      let loginReq;
      if (this.smsLogin) {
        if (this.smsLoginStep == 0) {
          this.getLoginSMS();
          return;
        }
        //TODO:这种方式有bug，还有用两个表单吧，待修改！！！！
        if (!this.loginForm.smsCode) {
          this.asynError.smsCode = "请输入短信验证码";
          return;
        }
        if (this.loginForm.smsCode.length < 6) {
          this.asynError.smsCode = "请输入正确的验证码长度";
          return;
        }
      }

      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          if (this.smsLogin) {
            loginReq = {
              captcha: this.loginForm.captcha,
              captchaCode: this.loginForm.captCode,
              smsCode: this.loginForm.smsCode,
              userAccount: this.loginForm.phone.trim()
            };
          } else {
            loginReq = {
              loginPass: this.loginForm.password.trim(),
              userAccount: this.loginForm.phone.trim()
            };
          }
          this.submitLogin(loginReq);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitLogin(loginReq) {
      this.$store
        .dispatch("Login", loginReq)
        .then(
          () => {
            this.loading = false;
          },
          function(d) {
            Message({
              //TODO:替换错误的字段
              message: (d && d.errormsg) || "网络异常，请重新输入",
              type: "error",
              duration: 5 * 1000
            });
            this.loginForm.smsCode = "";
            this.loginForm.captcha = "";
            this.smsLoginStep = 0;
            this.getCaptcha();
            this.loading = false;
          }
        )
        .catch(() => {
          Message({
            message: "网络异常，请重新输入",
            type: "error",
            duration: 5 * 1000
          });
          this.loginForm.smsCode = "";
          this.loginForm.captcha = "";
          this.smsLoginStep = 0;
          this.getCaptcha();
          this.loading = false;
        });
    },
    /*注册 */
    handleRegister() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          let registerReq = {
            captcha: this.loginForm.captcha,
            captchaCode: this.loginForm.captCode,
            password: this.loginForm.password,
            userAccount: this.loginForm.phone.trim()
          };

          this.registerLogin(registerReq);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    registerLogin(req) {
      this.$store
        .dispatch("Login", req)
        .then(
          () => {
            this.loading = false;
          },
          function(d) {
            Message({
              //TODO:替换错误的字段
              message: (d && d.errormsg) || "网络异常，请重新输入",
              type: "error",
              duration: 5 * 1000
            });
            this.loginForm.captcha = "";
            this.getCaptcha();
            this.loading = false;
          }
        )
        .catch(() => {
          Message({
            message: "网络异常，请重新输入",
            type: "error",
            duration: 5 * 1000
          });
          this.loginForm.captcha = "";
          this.getCaptcha();
          this.loading = false;
        });
    }
  },
  created() {
    !this.logged && this.getCaptcha();
  },
  mounted() {},
  destroyed() {}
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";
</style>
