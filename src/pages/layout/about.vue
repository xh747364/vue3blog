<template>
  <el-card class="box-card" shadow="always">
    about
    <!-- <h1>{{data.title}}</h1> -->
    <!-- <v-md-preview :text="htmlDecode(data.content)"></v-md-preview> -->
  </el-card>
</template>

<script>
  import { Request } from "@/hooks/useRequest";
  import { defineComponent } from "@vue/runtime-core";
  import { htmlDecode } from "@/hooks/useHTMLAnalysis"
  export default defineComponent({
  });
</script>

<style>
</style>