<template>
  <el-card class="box-card"
           shadow="always">
    <h1>标签</h1>
    <p v-if="data">目前共计 {{data.length}} 个标签</p>
    <el-link v-for="item in data"
             :key="item._id">
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
    let data = ref();
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

<style>
</style>