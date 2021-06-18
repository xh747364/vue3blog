<template>
  <el-card class="box-card" shadow="always">
    <div class="th-title">
      <h2>文章分类</h2>
      <p>目前共计 {{data.length}} 个分类</p>
    </div>
    <ul class="th-wrap">
      <li v-for="item in data" :key="item._id">
        <el-link :href="'/th/' + item._id">{{ item._id }}</el-link>
        <span class="category-list-count">{{item.count}}</span>
      </li>
    </ul>
  </el-card>
</template>

<script>
import { GetThList } from "@/api";
import { defineComponent, ref } from "@vue/runtime-core";
export default defineComponent({
  setup() {
    let data = ref([]);
    GetThList().then((res) => {
      data.value = res.data;
    });

    return {
      data,
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
.category-list-count:before {
  display: inline;
  content: " (";
}
.category-list-count:after {
  display: inline;
  content: ") ";
}
.th-wrap li {
    list-style: circle;
}
</style>