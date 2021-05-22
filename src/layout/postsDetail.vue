<template>
  <el-card class="box-card" shadow="always">
    <h1>{{data.title}}</h1>
    <v-md-preview :text="htmlDecode(data.content)"></v-md-preview>
  </el-card>
</template>

<script>
import { Request } from "@/hooks/useRequest";
import { defineComponent } from "@vue/runtime-core";
import { htmlDecode } from "@/hooks/useHTMLAnalysis"
import { useRoute } from "vue-router";
export default defineComponent({
  setup() {
    // 获取路由参数 id
    const route = useRoute();
    const { id } = route.params;
    // 获取文章详情
    let { loading, data, errMessage } = Request({
      method: "get",
      url: `/v1/posts/${id}`,
    });
    return {
      data,
      loading,
      errMessage,
      htmlDecode
    };
  },
});
</script>

<style>
</style>