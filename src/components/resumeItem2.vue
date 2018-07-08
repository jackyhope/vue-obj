<template>
  <div class="resume-item">
    <div class="resume-main-warp">
      <div class="resume-main">
        <img class="phone fl" src="../assets/index/phone.png" alt="">
        <div class="resume-info">
          <div class="info-base">
            <h3>张先生</h3>
            <span class="br9">男</span>
            <span class="br9">32岁</span>
            <span>博士</span>
          </div>
          <div>
            <span class="br3">研发经理</span>
            <span>华为技术有限公司</span>
          </div>
          <div>
            <span class="br3">上海</span>
            <span class="br3">互联网</span>
            <span>工作11年</span>
          </div>
        </div>
      </div>
      <div class="education">
        <div>
          2007~2010&nbsp; 湖南科技大学 | 广告设计 | 硕士
        </div>
        <div title="title...........................">
          2007~2010&nbsp; 湖南科技大学 广告设计广告设计广告设计 硕士
        </div>
      </div>
    </div>
    <div class="resume-introduce" title="title...........................">
      <h3>推荐共享理由：</h3> 3年市场营销及媒体公关传播经验，1年海外工作经历，熟悉互联网通信行业 熟悉公关媒体品牌推广运作，具有出色的品牌策略能力及整合传播技巧 品牌意识强，具有出色提案能力和沟通技巧有大型相关策划实务操作经\ 验及成功品牌策划案例 对市场有灵敏的触觉和较强的资讯搜集能力能独力操作品牌营销工 具有传媒，广告，营销，音乐艺术类专业知识背景 告，营销，音乐艺术类专业知识背景工 作 经 验： 华为终...
    </div>
    <div class="visit">
    </div>
    <p class="resume-item-footer">
      <a href="">查看详细</a>
      <a href="">添加最新动态</a>
    </p>
    <p class="visit-date">访问时间：2018-05-10 09：00</p>
  </div>
</template>

<script>
export default {
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

<style rel="stylesheet/scss" lang="scss" scoped>
.resume-item {
  width: 100%;
  margin-top: 7px;
  cursor: default;
  margin-bottom: 0px;
  float: none;
  border-radius: 0;
  &:hover {
    .visit {
      display: none;
    }
  }
  .resume-main-warp {
    float: left;
    width: 380px;
    padding-right: 10px;
  }
  .resume-introduce {
    width: 549px;
    float: right;
    padding-left: 40px;
    padding-top: 38px;
    padding-right: 30px;
    height: 172px;
    line-height: 1.7;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    &:after {
      position: absolute;
      content: " ";
      z-index: 9;
      top: 54px;
      left: 0;
      right: 0;
      width: 1px;
      height: 93px;
      background-color: #eeeeee;
    }
  }
}
</style>
