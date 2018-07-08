<template>
  <div>
    <div class="top-nav-containter">
      <div class="top-nav">
        <div class="fl">
          您好，欢迎入驻智汇ROME！
        </div>
        <div class="menus fr">
          <router-link v-if="!logged" to="/index" class="theme-color">登录 | 免费注册</router-link>
          <a v-if="logged" class="theme-color" href="javascript:void(0);" @click="signOut">喾莳豆豆 | 退出</a>
          <a>联系客服</a>
          <a>帮助中心</a>
        </div>
      </div>
    </div>
    <div class="main-nav-containter">
      <div class="main-nav">
        <div class="fl">
          <img class="top-logo" src="../../../assets/index/logo.png" alt="智汇ROME">
          <span class="mission">让4亿人才信息流动起来！</span>
        </div>
        <div class="menus fr">
          <router-link to="/index" :class="{'theme-color':currentRouter=='/index'}">首页</router-link>
          <router-link to="/share" :class="{'theme-color':currentRouter=='/share'}">人才信息</router-link>
          <router-link to="/account" :class="{'theme-color':currentRouter=='/account'}">个人中心</router-link>
          <router-link class="share" to="/resume/add">共享人才信息</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { removeToken } from "@/utils/auth";
import { mapGetters } from "vuex";
export default {
  components: {},
  computed: {
    ...mapGetters({
      logged: "token"
    })
  },
  data() {
    return {
      // logged: !!this.$store.getters.token,
      currentRouter: this.$route.path
    };
  },
  methods: {
    //TODO:根据当前路由改变头部菜单颜色
    signOut() {
      this.$store
        .dispatch("LogOut")
        .then(() => {
          this.$router.push("/index");
        })
        .catch(e => {
          console.log("signOut:" + e);
        });
    },
    toggleMuneColor(router) {
      this.currentRouter = router.path;
      console.log(router.path);
    }
  },
  created() {},
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "toggleMuneColor"
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>