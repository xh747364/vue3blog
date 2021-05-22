<template>
  <el-skeleton :loading="loading">
    <template #template>
      <div class="loading-wrap">
        <i class="el-icon-loading"></i>
        <p>正在努力加载中</p>
      </div>
    </template>
    <template #default>
      <slot />
    </template>
  </el-skeleton>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Loading",
  props: {
    loading: {
      type: Boolean,
      defalut: false,
    },
  },
});
</script>
<style scoped>
.loading-wrap {
  width: 100%;
  height: 100%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-icon-loading {
  color: cornflowerblue;
  font-size: 3em;
}
</style>
