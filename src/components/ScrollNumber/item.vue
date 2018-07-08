<template>
    <p class="scroll-item" ref="scrollItem">
        <span>0</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>0</span>
    </p>
</template>

<script>
export default {
  name: "ScrollNumber",
  props: {
    from: {
      default: 0
    },
    to: {
      default: 0
    }
  },
  components: {},
  data() {
    return { show: true };
  },
  watch: {},
  computed: {
    scrollItem: function() {
      return this.$refs.scrollItem;
    },
    scrollItemHeight: function() {
      return this.scrollItem.clientHeight;
    },
    scrollHeight: function() {
      return this.scrollItemHeight * 10;
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    },
    scroll(totalRange) {
      let timer = 10;
      let scrollRange = 0;
      let _interval = setInterval(() => {
        if (this.scrollItem.scrollTop == this.scrollHeight) {
          this.scrollItem.scrollTop = 0;
          scrollRange = scrollRange + this.scrollItemHeight;
          return;
        } else {
          this.scrollItem.scrollTop++;
        }
        scrollRange++;
        if (scrollRange >= totalRange) {
          clearInterval(_interval);
        }
      }, 10);
    },
    update() {
      //显示默认位置
      this.scrollItem.scrollTop = this.scrollItemHeight * this.from;
      //差值
      let diff = this.to - this.from;
      let totalRange = 0;
      if (diff < 0) {
        totalRange = (10 - this.from + this.to + 1) * this.scrollItemHeight;
      } else {
        totalRange = diff * this.scrollItemHeight;
      }
      this.scroll(totalRange);
    }
  },
  created() {},
  mounted() {
    //显示默认位置
    this.scrollItem.scrollTop = this.scrollItemHeight * this.from;
    //差值
    let diff = this.to - this.from;
    let totalRange = 0;
    if (diff < 0) {
      totalRange = (10 - this.from + this.to + 1) * this.scrollItemHeight;
    } else {
      totalRange = diff * this.scrollItemHeight;
    }
    this.scroll(totalRange);
  },
  watch: {
    to: function(val) {
      if (this.from !== val) {
        this.update();
      }
    }
  },
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/transition.scss";
.scroll-item {
  display: inline-block;
  width: 50px;
  height: 30px;
  overflow: hidden;
  span {
    display: inline-block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background-color: #e5e5e5;
  }
}
</style>
