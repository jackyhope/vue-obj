<template>
  <div class="rome-warp">
    <div class="rome">
      <side-menu activeMenu='accountProfit'></side-menu>
      <div class="rome-main">
        <h2 class="page-header blpl">我的收益</h2>
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
      loading: false
    };
  },
  watch: {},
  computed: {},
  methods: {
    togglePayType(type) {
      this.payType = type;
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
