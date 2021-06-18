<template>
  <el-card class="box-card"
           shadow="always"
           v-if="data">
    <h1>{{data.title}}</h1>
    <v-md-preview :text="htmlDecode(data.content)"></v-md-preview>
  </el-card>
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core'
import { htmlDecode } from '@/hooks/useHTMLAnalysis'
import { useRoute } from 'vue-router'
import { GetArchiveDetail } from '@/api'
export default defineComponent({
  setup() {
    // 获取路由参数 id
    const route = useRoute()
    const { id } = route.params

    let loading = ref(true);
    let data = ref()
    GetArchiveDetail(id).then(res => {
      data.value = res.data;
    }).finally(() => {
      loading.value = false;
    })
    return {
      data,
      loading,
      htmlDecode,
    }
  },
})
</script>

<style>
</style>