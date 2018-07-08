<template>
  <div class="rome-warp">
    <div class="rome">
      <side-menu activeMenu='account'></side-menu>
      <div class="rome-main">
        <h2 class="page-header blpl">我的账户</h2>
        <div class="rome-amount-warp">
          <div>
            <p class="ra-title">
              当前可用ROME币
              <i class="icon-tip"></i>
            </p>
            <p>
              <i class="icon-r"></i>

              <span class="rome-num-big">
                3,012
              </span>
              <span class="fs14">
                兑换现金
              </span>
            </p>
          </div>
          <div>
            <p class="ra-title">
              昨日收益
              <i class="icon-tip"></i>
            </p>
            <p>
              <i class="icon-r"></i>

              <span class="rome-num-big theme-color">
                3,012
              </span>
            </p>
          </div>
          <div>
            <p class="ra-title">累计ROME币收益
              <i class="icon-tip"></i>
            </p>
            <p>
              <i class="icon-r"></i>
              <span class="rome-num-big theme-color">
                3,012
              </span>
            </p>
          </div>

        </div>
        <div class="withdraw-warp">
          <p class="rome-amount-footer text-r fs14 color333">
            <span>
              ROME赠送
              <i class="rome-num-normal">￥100</i>
            </span>
            <span>
              可用现金
              <i class="rome-num-big">￥2,188</i>
            </span>
            <span>
              <router-link to="/account/withdraw">提 现</router-link>

            </span>
          </p>
        </div>
        <div class="echarts-warp">
          <div id="echarts-warp" style="width: 803px;height:363px;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/Sidemenu/index";

import echarts from "../../../static/echarts.min.js";
export default {
  components: {
    SideMenu
  },
  data() {
    return {};
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
        },
        axisLine: {
          symbol: ["none", "arrow"],
          symbolSize: [6, 12]
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
              image: "" //img
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
    myChart.setOption(option);
  }
  //   destroyed() {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "../../styles/home.scss";

@import "../../styles/user.scss";
</style>
