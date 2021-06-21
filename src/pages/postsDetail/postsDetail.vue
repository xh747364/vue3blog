<template>
  <el-card class="box-card"
           shadow="always"
           v-if="data">
    <h1 class="posts-h1">{{data.title}}</h1>
    <el-row class="posts-desc">
      <el-col class="second-title">
        <span><i class="fa fa-calendar-o post-meta-item-icon"></i>创建时间：{{data.createDate}}</span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="fa fa-calendar-check-o post-meta-item-icon"></i>修改时间：{{data.updateDate}}</span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <i class="fa fa-folder-o post-meta-item-icon"></i>
          分类与：
          <el-link :underline="false" type="info" v-for="i in data.categories" :key="i._id">
            {{i}}
          </el-link>
        </span>
      </el-col>
    </el-row>
    <v-md-preview :text="htmlDecode(data.content)"></v-md-preview>
    <el-row type="flex" justify="center">
      <el-link v-for="(item, index) in data.tags" :key="index">
        <i class="fa fa-tag"></i>
        {{item}}
      </el-link>
    </el-row>
    <el-divider></el-divider>
    <el-row type="flex" justify="start">
      <el-link v-if="data.relate[0]?.title" :href="'/detail/'+data.relate[0]._id">
        <i class="fa fa-chevron-left"></i>
        {{data.relate[0].title}}
      </el-link>
      <el-link v-else disabled>已经是第一篇啦~</el-link>
    </el-row>
    <el-row type="flex" justify="end">
      <el-link v-if="data.relate[1]?.title" :href="'/detail/'+data.relate[1]._id">
        {{data.relate[1].title}}
        <i class="fa fa-chevron-right"></i>
      </el-link>
      <el-link v-else disabled>已经是最后一篇啦~</el-link>
    </el-row>
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

<style scoped>
.posts-desc{
  text-align: center;
  margin: 10px 0;
}
.posts-h1{
  padding-top: 20px;
  text-align: center;
}
</style>