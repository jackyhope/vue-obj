<template>
  <div class="search-containter">
    <slot name="region">1212</slot>
    <div class="search-main-warp">
      <div class="search-type">
        <p @click='toggleSearchType' :class="{active:searchType=='job'}">职位</p>
        <p @click='toggleSearchType' :class="{active:searchType=='company'}">公司</p>
      </div>
      <div class="search-main">
        <span class="svg-container ">
          <svg-icon icon-class="search" class="svg-container-search" />
        </span>
        <input class="search-word" type="text" v-model="searchWord" placeholder='输入职位、公司等搜索'>
        <input class="search-btn btn cursor-p" type="button" value='搜索' @click="search">
      </div>
      <div class="hot-search">
        猜你喜欢：
        <span>项目经理</span>
        <span>总经理</span>
        <span>销售主管</span>
        <span>理财顾问</span>
        <span>人力资源</span>
        <span>研发经理</span>
        <span>客户经理</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      searchType: "job",
      searchWord: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    toggleSearchType() {
      if (this.searchType == "job") {
        this.searchType = "company";
      } else {
        this.searchType = "job";
      }
    },
    /*搜索*/
    search() {
      this.$router.push({
        path: "/share",
        query: {
          searchType: this.searchType,
          searchWord: this.searchWord
        }
      });
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";
</style>
