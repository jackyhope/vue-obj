<template>
    <div class="sidebar">
        <ul>
            <li class="user-info">
                <img class="user-phone" src="../../assets/user/user-phone.png" alt="">
                <h1>红色猎人</h1>
                <div class="user-tag">
                    <i class="ranking-icon"></i>
                    ROME诚信
                    <span class="score">93.6</span>
                    <span class="icon-evaluate">极好</span>
                </div>
            </li>
            <li class="user-menu bb ">
                <router-link :class="{active:activeMenu=='account'}" to="/account">我的账户</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:activeMenu=='myvisit'}" to="/myvisit">我的访问</router-link>
            </li>
            <li class="user-menu bb">
                <router-link :class="{active:activeMenu=='myshare'}" to="/myshare">我的共享</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:activeMenu=='accountProfit'}" to="/account/profit">我的收益</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:activeMenu=='withdrawrecord'}" to="/account/withdrawrecord">提现记录</router-link>
            </li>
            <li class="user-menu bb">
                <router-link :class="{active:activeMenu=='accountManagement'}" to="/account/management">现金管理账户</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:activeMenu=='task'}" to="/task">我的任务</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:activeMenu=='personalAuth'}" to="/personal-auth">个人认证</router-link>
            </li>
            <li class="user-menu">
                <router-link :class="{active:activeMenu=='managementPassword'}" to="/management-password">密码管理</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    activeMenu: ""
  },
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
</style>

        