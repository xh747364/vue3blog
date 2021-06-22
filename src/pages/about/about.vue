<template>
  <el-card class="box-card" shadow="always">
    <h1 class="about-title">关于我</h1>
    <v-md-preview :text="htmlDecode(aboutMD)"></v-md-preview>
  </el-card>
</template>

<script>
  import { aboutMD } from './about';
  import { htmlDecode } from '@/hooks/useHTMLAnalysis'
  import { defineComponent } from "@vue/runtime-core";
  export default defineComponent({
    setup(){
      return{
        aboutMD,
        htmlDecode
      }
    }
  });
</script>

<style scoped>
.about-title{
  text-align: center;
  font-size: 22px;
  padding-top: 20px;
}
</style>