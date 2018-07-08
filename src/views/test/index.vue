<template>
  <div>
    <div id="echarts-warp" style="width: 600px;height:400px;"></div>
    <br/>
    <div class="scroll-warp">
      <scroll-number :original="original" :current="current"></scroll-number>
    </div>
    {{current}}
    <input type="button" value='add' @click="add">
    <input type="button" value='remove' @click="remove">

  </div>
</template>

<script>
import echarts from "../../../static/echarts.min.js";
import ScrollNumber from "@/components/ScrollNumber/index";
export default {
  data() {
    return {
      original: "1234",
      current: 987
    };
  },
  components: {
    ScrollNumber
  },
  mounted: function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("echarts-warp"));

    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        type: "category",
        data: ["05-01", "05-02", "05-03", "05-04", "05-05", "05-06", "05-07"],
        position: "bottom",
        offset: 5,
        name: "日期",
        nameLocation: "end",
        axisTick: {
          show: false
        }
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "line"
        },
        label: {
          show: true
        }
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          symbol: ["none", "arrow"],
          symbolSize: [6, 12]
        },
        axisTick: {
          show: false
        },
        name: "R",
        nameLocation: "end",
        nameTextStyle: {
          rich: {},
          backgroundColor:
            // '#123234',
            {
              image:
                "data:image/Png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAYAAADRJblSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALASURBVFhH5ZY7cuMwDIZ9qa1UuvExdIF0PkB8gsy4cZPRBeLSjSqnywF0gTTpt9yOyxcogARImpJ37NniG49FEI8fIKXN7z9KPTPTNBE4mxyrC9CaSCu4+Ja4Ty/AUu5yBJ5JhP9KAC6vJgEepsCfd7V93aiN4fSuJs4GsVgAcMA5+rdc1QsUTtirC2svIwrAFWn+j+fOB9up4w/dsxxf2MeVWfPgrnPk9jLUCzDt+YBVQlzVZaLPWIE/d96n3MnLB4qtx/4S9gDzXi5GTN0REIsHcqP3rY4nbOf+d+cxSg7ZiV3EvgxGfO6Zs48F4ASpEACdN5SYdTb2c2Ap6dzI4j3I7gVNS5w0mQDwgRskitcqQHDOd3lOKDcFOngyqtEeIc547tXhCyVdnEZPxVvBsKIAtHMxiQBvB5JgWDeJC1Oz/fy2HRyGdI3D2OMcOMoCoGSwQztO+AgYpPFLutarIRpFfkJS+tGNcRJbn/0tuQvcs9IFbQXgzsYMvWSgy2wX0NgFn0k3aVJgxwlgirV22AfEiP3a58z3gW5KyMXHxFQIoBFG0qIDH+EYJAIMSULxMQmxyZR0SedmgUDAq+qDvcP4ToXc22mT6isfAc/0dVAdcayxI48m5PRL/7oEp2lUhzdkG+x5/0TkYciuy1No7qn4tTjfXUFs8KmpF0BUUfosjUDTITFfqMzZDQKgtdxkAkh0UQBY4AvMQ0dz4Tc6KQjvwVNGhcxfnuW4iQA3iYDPbVBa/jLLEeJnC+J8xfE8Pp9cTeY5OQI54wSxWw76xZYXAeJCbF6EkpBu+sRLFj3Da8U7QHIwF9jRLzVM4WYHcknem2YBnOI7W3w2eT0p5u0R3ukPRlEAjpqO1dg8AjfdAbBesjPU2LSwtt8mAbi1W1jih9u7xN9NAqzFmnHAV6u/pjvgHkhFlIorredR6i9nc/ZQiMngsAAAAABJRU5ErkJggg=="
            },
          width: 94,
          height: 46
        }
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          showAllSymbol: false
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    //myChart.setOption(option);

    setTimeout(() => {
      //this.number = "1234560";
    }, 1000);
  },
  methods: {
    add() {
      this.current = Number(this.current) + 1;
      //修改滚动起始值
      setTimeout(() => {
        this.original = this.current;
      }, 10);
    },
    remove() {
      this.current = Number(this.current) - 1;
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>
