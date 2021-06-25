<template>
  <div class="content-wrap common-layout">
    <el-container>
      <el-container>
        <el-aside>
          <HeaderView class="hidden-md-and-down"></HeaderView>
          <NavView />
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
          <el-footer>
            <p>
              © 2019 — 2021
              <el-divider direction="vertical"></el-divider>
              <i class="fa fa-user"></i>
              记昨日书
            </p>
            <p>
              <span class="SiteRunningTime">本站已运行了： {{ runTimes }}</span>
            </p>
            <p>
              ❤️感谢
                <span id="busuanzi_container_site_pv">
                  <span id="busuanzi_value_site_pv"></span>
                </span>
                小伙伴的
                <span id="busuanzi_container_site_uv">
                  <span id="busuanzi_value_site_uv"></span>
                </span>
                次光临！❤️
              <el-divider direction="vertical"></el-divider>
              <a href="https://beian.miit.gov.cn" target="_blank"
                >京ICP备2021014015号-1</a
              >
            </p>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import HeaderView from "./components/header.vue";
import NavView from "./components/nav.vue";
import { runTime } from "../hooks/useRunTime";
export default defineComponent({
  components: {
    HeaderView,
    NavView,
  },
  setup() {
    const { runTimes } = runTime();
    return {
      runTimes,
    };
  },
});
</script>
<style scoped>
.content-wrap {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}

.el-footer {
  margin-top: 30px;
  text-align: center;
}

.el-main {
  padding: 0;
  overflow: hidden;
  min-height: auto;
}

.el-aside {
  overflow: hidden;
}

.el-footer {
  height: auto !important;
  padding-bottom: 20px;
}
</style>