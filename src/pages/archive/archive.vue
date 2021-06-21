<template>
  <el-card class="box-card" shadow="always">
    <div class="archive-desc">嗯..! 目前共计 {{ data.count }} 篇日志。 继续努力。</div>
    <el-divider></el-divider>
    <div v-for="(value, key, index) in data.result" :key="index">
      <h3>{{ key }}</h3>
      <ul class="th-wrap">
        <li class="th-item" v-for="item in value" :key="item._id">
          <a :href="'/detail/' + item._id">
            <span class="category-list-count">{{ item.createDate }}</span>
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script>
import { GetArchives } from "@/api";
import { useFormatDate } from "@/hooks/useFormatDate";
import { defineComponent, ref } from "@vue/runtime-core";
export default defineComponent({
  setup() {
    let data = ref([]);
    GetArchives().then((res) => {
      let postsData = res.data.result;
      postsData.map((x) => {
        x.createDate = useFormatDate(x.createDate, "yyyy");
      });
      postsData = postsData.reduce(
        (p, c) => ({
          ...p,
          [c.createDate]: [
            ...(p[c.createDate] || []),
            { id: c._id, title: c.title },
          ],
        }),
        {}
      );
      const result = {
        result: postsData,
        count: res.data.resultCount,
      };
      data.value = result;
    });
    return {
      data,
    };
  },
});
</script>

<style scoped>
.archive-desc{
  margin-bottom: 20px;
  padding-top: 20px;
}
.th-wrap {
  padding: 0 40px;
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