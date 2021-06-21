<template>
  <el-card class="box-card"
           shadow="always">
    <div class="th-title">
      <h2>文章标签</h2>
      <p>目前共计 {{data.length}} 个标签</p>
    </div>
    <el-link v-for="item in data"
             :key="item._id" :href="'/tags/' + item.title">
      {{item.title}}
    </el-link>
  </el-card>
</template>

<script>
import { GetTagsList } from '@/api';
import { defineComponent, ref } from '@vue/runtime-core'
export default defineComponent({
  setup() {
    let loading = ref(true);
    let data = ref([]);
    GetTagsList().then(res => {
      data.value = res;
    })
    return {
      loading,
      data,
    }
  },
})
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