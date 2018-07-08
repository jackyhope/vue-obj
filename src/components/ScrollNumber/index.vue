<template>
  <transition-group name="list" tag="div">
    <item v-for="(item,index) in numbers" :from="item.from" :to="item.to" :key="index"></item>
  </transition-group>

</template>

<script>
import item from "./item.vue";

export default {
  name: "ScrollNumber",
  props: {
    original: {
      required: true,
      default: "0"
      // type: ["Number", "String"]
    },
    current: {
      required: true,
      default: "0"
      // type: ["Number", "String"]
    }
  },
  components: {
    item
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    numbers: function() {
      var _current = this.current;
      var _original = this.original;
      var _currArray = (_current + "").split("");
      var _oriArray = (_original + "").split("");
      var _from = 0;
      var numberArray = _currArray.map((item, index) => {
        _from = _oriArray[index] ? _oriArray[index] : 0;
        return { to: Number(item), from: Number(_from) };
      });
      let _numberArray = JSON.stringify(numberArray);
      return JSON.parse(_numberArray);
    }
  },
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
/*for*/
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
