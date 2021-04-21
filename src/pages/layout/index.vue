<template>
  <div class="content-wrap">
    <el-row :gutter="20">
      <el-col :span="8">
        <HeaderView class="hidden-md-and-down"></HeaderView>
        <suspense>
          <template #default>
             <NavView />
          </template>
          <template #fallback>
             <div>加载中...</div>
          </template>
        </suspense>
      </el-col>
      <el-col :span="12">
        <MainView></MainView>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import HeaderView from "./components/header.vue"
  import NavView from "./components/nav.vue"
  import MainView from "./components/main.vue"
  export default defineComponent({
    name: "layout",
    components: {
      HeaderView,
      NavView,
      MainView
    },
    setup() {
      console.log(123)
    }
  });
</script>
<style>
  .content-wrap {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
</style>