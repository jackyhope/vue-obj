<template>
  <div>
    <div class="head-warp">
      <div class="carousel-login">
        <carousel :list='carousel_list'></carousel>
        <login-form class="login-warp"></login-form>
      </div>
      <div class="search-warp">
        <statistic></statistic>
        <search></search>
      </div>
    </div>
    <resume-list>
    </resume-list>
    <div class="ranking-list">
      <div class="ranking-warp ">
        <div class="ranking-item fl ">
          <div class="ranking-header">
            <h2 class="fl">收益排行榜</h2>
            <span class="fr">
              如何获取收益?
            </span>
          </div>
          <div class="brpos">
            <div class="ranking-item-warp">
              <span class="icon-num-ranking">1</span>
              <span class="ranking-man">张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计现金收益超过
                <i>￥2323</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking">2</span>
              <span class="ranking-man">张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计现金收益超过
                <i>￥2323</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking">3</span>
              <span class="ranking-man">张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计现金收益超过
                <i>￥2323</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking icon-num-ranking-bg2">4</span>
              <span class="ranking-man"> 张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计现金收益超过
                <i>￥2323</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking icon-num-ranking-bg2">5</span>
              <span class="ranking-man"> 张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计现金收益超过
                <i>￥2323</i>
              </span>
            </div>
          </div>
        </div>
        <div class="ranking-item fr">
          <div class="ranking-header">
            <h2 class="fl">共享排行榜</h2>
            <span class="fr">
              马上共享
            </span>
          </div>
          <div class="">
            <div class="ranking-item-warp">
              <span class="icon-num-ranking">1</span>
              <span class="ranking-man">张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计共享人才信息:
                <i>2323条</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking">2</span>
              <span class="ranking-man">张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计共享人才信息:
                <i>2323条</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking">3</span>
              <span class="ranking-man">张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计共享人才信息:
                <i>2323条</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking icon-num-ranking-bg2">4</span>
              <span class="ranking-man"> 张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计共享人才信息:
                <i>2323条</i>
              </span>
            </div>
            <div class="ranking-item-warp">
              <span class="icon-num-ranking icon-num-ranking-bg2">5</span>
              <span class="ranking-man"> 张某某</span>
              <i class="ranking-icon"></i>
              <span class="icon-evaluate">极好</span>
              <span class="total-profit">累计共享人才信息:
                <i>2323条</i>
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="footer-menu">
      <div class="footer-menu-item active">
        <h1>共享</h1>
        <p>人才信息共享</p>
      </div>
      <div class="footer-menu-item">
        <h1>发现</h1>
        <p>发现人才信息</p>
      </div>
      <div class="footer-menu-item">
        <h1>记录</h1>
        <p>人才信息被访问记录</p>
      </div>
    </div>
  </div>
</template>
<script>
import carousel from "./carousel";
import loginForm from "./loginForm";
import statistic from "./statistic";
import search from "./search";
import resumeList from "./resumeList";

export default {
  components: {
    carousel,
    loginForm,
    statistic,
    search,
    resumeList
  },
  data() {
    return {
      carousel_list: [
        {
          img: "../static/banner2.jpg",
          link: "/#/product"
        },
        {
          img: "../static/banner1.jpg",
          link: "/demo.html"
        },
        {
          img: "../static/phone.png",
          link: "/demo.html"
        }
      ]
    };
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.head-warp {
  width: 100%;
  background-color: #fff;
  .carousel-login,
  .search-warp {
    width: 1201px;
    margin: 0 auto;
    overflow: hidden;
  }
  .login-warp {
    margin-left: 7px;
  }
}
.main-nav-containter {
  border-bottom: none !important;
}
</style>
