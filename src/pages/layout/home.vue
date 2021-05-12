<template>
  <el-skeleton animated :loading="loading" :count="5">
    <template #template>
      <el-card class="box-card" shadow="always">
        <el-skeleton-item variant="h1" style="width: 50%" />
        <el-skeleton-item variant="text" style="margin-right: 16px" />
        <el-skeleton-item variant="text" style="margin-right: 14px" />
        <el-skeleton-item variant="button" style="margin-right: 16px" />
      </el-card>
    </template>
    <template #default>
      <MainView v-for="(item) in data" :key="item.title" :postsItem="item" ></MainView>
    </template>
  </el-skeleton>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainView from "./components/main.vue";
import { Request } from "../../hooks/useRequest"
export default defineComponent({
  name: "layout",
  components: {
    MainView,
  },
  setup() {
    let {loading, data, errMessage} = Request({
      method: 'get',
      url: '/apis/posts'
    })
    return {
      data,
      loading,
      errMessage
    };
  },
});
</script>