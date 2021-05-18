<template>
  <div class="content-wrap common-layout">
    <el-container>
      <el-container>
        <el-aside>
          <HeaderView class="hidden-md-and-down"></HeaderView>
          <NavView />
        </el-aside>
        <el-main>
          <router-view />
          <el-footer>
            <p>
              © 2019 — 2021
              <el-divider direction="vertical"></el-divider>
              <i class="fa fa-user"></i>
              记昨日书
            </p>
            <p>
              <i class="fa fa-eye"></i>
              总访问量 14972
              <el-divider direction="vertical"></el-divider>
              <a href="https://beian.miit.gov.cn" target="_blank">京ICP备2021014015号-1</a>
            </p>
          </el-footer>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import HeaderView from "./layout/components/header.vue";
  import NavView from "./layout/components/nav.vue";
  export default defineComponent({
    components: {
      HeaderView,
      NavView,
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
  }
</style>