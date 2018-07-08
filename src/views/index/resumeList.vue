<template>
  <div class="resume-list-warp">
    <div class="resume-list-header">
      <h2 class="fl">AI推荐</h2>
      <router-link class="fr" to='/share'>更多人才信息 > ></router-link>
    </div>
    <div class="resume-list">
      <el-carousel :interval="5000" arrow="never" :autoplay='false' trigger="click" height="784px">
        <el-carousel-item v-for="(item,index) in 4" :key="index">
          <resume-item></resume-item>
          <resume-item></resume-item>
          <resume-item></resume-item>
          <resume-item></resume-item>
          <resume-item></resume-item>
          <resume-item></resume-item>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
import resumeItem from "@/components/resumeItem";
export default {
  components: {
    resumeItem
  },
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
