<template>
  <div class="content-wrap">
    <el-row :gutter="10">
      <el-col :span="5">
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
      <el-col :span="19">
        <router-view />
      </el-col>
    </el-row>
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
<style>
.content-wrap {
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
}
</style>