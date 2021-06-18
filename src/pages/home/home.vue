<template>
  <transition-group>
    <LoadingView :loading="loading">
      <div>
        <MainView
          v-for="item in archiveList"
          :key="item.title"
          :postsItem="item"
        ></MainView>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="countPage"
          @current-change="pageCurrentChange"
        ></el-pagination>
      </div>
    </LoadingView>
  </transition-group>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import MainView from "@/components/main.vue";
import LoadingView from "@/components/loading.vue";
import { GetArchiveList } from "@/api";
export default defineComponent({
  name: "layout",
  components: {
    MainView,
    LoadingView,
  },
  setup() {
    let loading = ref(true);
    let archiveList = ref();
    let nowPage = ref(0);
    let countPage = ref(0);
    let params = {
      page: 0,
    }

    GetArchiveList(params).then((res) => {
      console.log(res)
      archiveList.value = res.data;
    }).finally(()=> {
      loading.value = false;
    })

    const pageCurrentChange = (val: number) => {
      params.page = val;
      GetArchiveList(params).then((res) => {
        archiveList.value = res.data;
      }).finally(()=> {
        loading.value = false;
      })
    }
    return {
      loading,
      archiveList,
      nowPage,
      countPage,
      pageCurrentChange,
    };
  },
});
</script>

<style scoped>
.el-pagination {
  text-align: center;
}
</style>