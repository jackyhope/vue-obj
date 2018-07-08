<template>
  <div class="rome-warp">
    <div class="rome">
      <side-menu activeMenu='accountManagement'></side-menu>
      <div class="rome-main">
        <h2 class="page-header blpl">现金账户管理</h2>
        <div v-if='withdrawProgress==0' class="auth-main withdraw0">
          <p class="progress-result">您还未完成
            <span class="theme-color">个人认证</span>，请先完成认证，再设置交易密码</p>
          <p class="progress-result-tip cursor-p">
            <router-link to="/personal-auth">马上认证 >></router-link>
          </p>
        </div>
        <div v-if='withdrawProgress==1' class="auth-main withdraw1">
          <el-form autoComplete="on" :model="authForm" :rules="authRules" ref="authForm" label-position="left" label-width="0px" class="">
            <ul>
              <li class="default-userinfo">
                <p>
                  <img src="../../assets/user/idcard.png" alt="">
                  <span>已认证</span>
                  <span class="useit cursor-p">使用</span>
                </p>

              </li>
              <li class="auth-title">
                添加收款账户：
              </li>
              <li>
                <div class="fl auth-label">
                  <span class="theme-color">* </span>收款人姓名：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="realname">
                    <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="" />
                  </el-form-item>
                </div>
              </li>
              <li class="idcard">
                <div class="fl auth-label ">
                  <span class="theme-color">* </span>收款人身份证号：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="idcard">
                    <el-input name="idcard" type="text" v-model="authForm.idcard" autoComplete="on" placeholder="密码为8-16位字母+数字组合" />
                  </el-form-item>
                </div>
              </li>
              <li class="choose-paytype">
                <div class="fl auth-label">
                  <span class="theme-color">* </span>收款方式：
                </div>
                <div class="fl auth-text">
                  <div class="pay-item">
                    <p class="icon-alipay paytype" :class="{'active':payType===0}" @click="togglePayType(0)"></p>
                    <p>支付宝</p>
                  </div>
                  <div class="pay-item">
                    <p class="icon-wechatpay paytype" :class="{'active':payType===1}" @click="togglePayType(1)"></p>
                    <p>微信</p>
                  </div>
                  <div class="pay-item">
                    <p class="icon-bankpay paytype" :class="{'active':payType===2}" @click="togglePayType(2)"></p>
                    <p>银行卡</p>
                  </div>
                </div>
              </li>
              <li class="idcard">
                <div class="fl auth-label">
                  <span class="theme-color">* </span>收款人账号：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="realname">
                    <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="" />
                  </el-form-item>
                </div>
                <span class="input-tip">请确认您所填写的收款帐号与前三项填写的信息相匹配。</span>
              </li>
              <li class="idcard">
                <div class="fl auth-label">
                  <span class="theme-color">* </span>支行名称：
                </div>
                <div class="fl auth-text">
                  <el-form-item prop="realname">
                    <el-input name="realname" type="text" v-model="authForm.realname" autoComplete="on" placeholder="" />
                  </el-form-item>
                </div>
                <span class="input-tip">若选择支付宝或微信零钱时，则不必填写。</span>
              </li>
              <li class="idcard">
                <div class="fl auth-label">

                </div>
                <div class="fl auth-text">
                  <span class="checkbox" :class="{'ivcheckbox':addASdefault}" checkbox="" @click="toggleCheckbox"></span>
                  <span class="ivyd" @click="toggleCheckbox">设为默认收款账户</span>
                </div>
              </li>
            </ul>

            <el-form-item class="auth-submit password-submit">
              <el-button type="primary" :loading="loading" @click.native.prevent="handleAuth">
                保存
              </el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="account-list">
          <div class="account-list-item account-list-title">
            <p class="account-cell">
              收款人
            </p>
            <p class="account-cell">
              收款方式
            </p>
            <p class="account-cell">
              收款账号
            </p>
            <p class="account-cell">
              操作
            </p>
            <p class="account-cell">
              &nbsp;
            </p>
          </div>
          <div class="account-list-item">
            <p class="account-cell">
              张胜利
            </p>
            <p class="account-cell">
              支付宝
            </p>
            <p class="account-cell">
              18916247913
            </p>
            <p class="account-cell">
              <span>删除</span>
            </p>
            <p class="account-cell default-account">
              <span>默认收款账户</span>
            </p>
          </div>
          <div class="account-list-item">
            <p class="account-cell">
              张胜利
            </p>
            <p class="account-cell">
              支付宝
            </p>
            <p class="account-cell">
              18916247913
            </p>
            <p class="account-cell">
              <span>删除</span>
            </p>
            <p class="account-cell" @click="toggleDefaultAccount">
              <span>设为默认账户</span>
            </p>
          </div>
          <div class="account-list-item">
            <p class="account-cell">
              张胜利
            </p>
            <p class="account-cell">
              支付宝
            </p>
            <p class="account-cell">
              18916247913
            </p>
            <p class="account-cell">
              <span>删除</span>
            </p>
            <p class="account-cell " @click="toggleDefaultAccount">
              <span>设为默认账户</span>
            </p>
          </div>
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
      withdrawProgress: 1,
      payType: 0, //0：支付宝 1：微信 2：银行
      idcardBase64: "",
      captchaUrl: "",
      addASdefault: false,
      loading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    /*切换设为默认的checkbox */
    toggleCheckbox() {
      this.addASdefault = !this.addASdefault;
    },
    /*切换支付方式 */
    togglePayType(type) {
      this.payType = type;
    },
    //设置默认账户
    toggleDefaultAccount() {}
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
//临时代码，需要搬到user.scss
.withdraw1 {
  .checkbox {
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid #e4e4e4;
    background-color: #fff;
    vertical-align: middle;
    cursor: pointer;
  }
  .ivcheckbox {
    background-color: #fff;
    background: url(../../assets/index/yesg.png) no-repeat;
    background-size: 11px 9px;
    background-position: 2px 3px;
  }
  .ivyd {
    cursor: pointer;
    margin-left: 0.3rem;
    vertical-align: middle;
    font-size: 14px;
    color: #999;
  }
  .ivyd {
    color: #333;
  }
}
.account-list {
  width: 100%;
  .account-cell {
    font-size: 14px;
    color: #333;
    width: 20%;
    float: left;
    display: block;
    text-align: center;
    background-color: #fff;
    height: 70px;
    line-height: 70px;
    span {
      display: inline-block;
      padding: 8px;
      cursor: pointer;
    }
    &.default-account {
      span {
        cursor: default;
        background-color: #f07026;
        color: #fff;
      }
    }
  }
  .account-list-title {
    .account-cell {
      font-size: 16px;
      font-weight: 700;
      background-color: transparent;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>
