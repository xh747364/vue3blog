<template>
  <el-card class="box-card" shadow="always">
    <div class="th-title">
      <h2>{{ data._id }} 标签</h2>
      <p>目前共计 {{ data.postsData.length }} 篇文章</p>
    </div>
    <ul class="th-wrap">
      <li
        class="th-item"
        v-for="item in data.postsData"
        :key="item._id"
        @click="goDetail(item._id)"
      >
        <span class="category-list-count">{{ item.createDate }}</span>
        {{ item.title }}
      </li>
    </ul>
  </el-card>
</template>

<script lang="ts">
import { GetTagsListDetail } from "@/api";
import { ThTagsDetail, ThTagsList } from "@/interface/ThTags";
import { defineComponent, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useFormatDate } from "@/hooks/useFormatDate";
export default defineComponent({
  setup() {
    let data = ref<ThTagsDetail>({
      postsData: [],
      count: 0,
      _id: "",
    });
    const route = useRoute();
    const router = useRouter();
    const title = route.params.title;
    GetTagsListDetail(title).then((res) => {
      let result = res.data[0].postsData;
      result.map((x: ThTagsList) => {
        x.createDate = useFormatDate(x.createDate, 'yyyy-MM-dd');
      });

      data.value = res.data[0];
    });
    const goDetail = (id: string) => {
      router.push(`/detail/${id}`);
    };
    return {
      data,
      goDetail,
    };
  },
});
</script>

<style scoped>
.th-title {
  text-align: center;
}
.th-wrap {
  padding: 0 40px;
}
.category-list-count {
  color: #bbb;
}
.th-wrap li {
  list-style: circle;
  cursor: pointer;
  opacity: 0.75;
}
.th-item:hover {
  opacity: 1;
}
</style>