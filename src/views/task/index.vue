<template>
    <div class="rome-warp">
        <div class="rome">
            <side-menu activeMenu='task'></side-menu>
            <div class="rome-main">
                <div class="tasklist">
                    <router-link to='/task'>观看ROME人才信息分享平台教程
                        <span class="fr">去完成</span>
                    </router-link>
                    <router-link to='/personal-auth'>个人身份认证
                        <span class="task-tip">根据中国法律规定，用户必须完成身份实名认证
                        </span>
                        <span class="fr">去完成</span>
                    </router-link>
                    <router-link to='/task'>完成5个人才信息的共享
                        <span class="fr">去完成</span>
                    </router-link>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SideMenu from "@/components/Sidemenu/index";

export default {
  components: {
    SideMenu
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
//TODO:样式引用比较乱，待整理
@import "../../styles/home.scss";

@import "../../styles/user.scss";
</style>
