<template>
  <transition-group>
    <LoadingView :loading="loading">
      <div>
        <MainView v-for="item in data.data" :key="item.title" :postsItem="item"></MainView>
        <el-pagination background layout="prev, pager, next" :total="data.countPage"></el-pagination>
      </div>
    </LoadingView>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MainView from "@/components/main.vue";
import { Request } from "@/hooks/useRequest";
import { PostsGet } from "@/interface/Request";
import LoadingView from "@/components/loading.vue";
export default defineComponent({
  name: "layout",
  components: {
    MainView,
    LoadingView,
  },
  setup() {
    let { loading, data, errMessage } = Request<PostsGet>({
      method: "get",
      url: "/v1/posts",
      params: {
        page: 0,
      },
    });
    return {
      data,
      loading,
      errMessage,
    };
  },
});
</script>

<style scoped>
.el-pagination {
  text-align: center;
}
</style>