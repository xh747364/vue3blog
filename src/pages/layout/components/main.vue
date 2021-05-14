<template>
  <el-card class="box-card" shadow="always">
    <el-link :underline="false" >
      <h1 class="posts-h1">{{ postsItem.title }}</h1>
    </el-link>
    <el-row>
      <el-col class="second-title">
        <span><i class="fa fa-calendar-o post-meta-item-icon"></i>创建时间：{{postsItem.createDate}}</span>
        <el-divider direction="vertical"></el-divider>
        <span><i class="fa fa-calendar-check-o post-meta-item-icon"></i>修改时间：{{postsItem.updateDate}}</span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <i class="fa fa-folder-o post-meta-item-icon"></i>
          分类与：
          <el-link :underline="false" type="info" v-for="i in postsItem.categories" :key="i._id">
            {{i}}
          </el-link>
        </span>
      </el-col>
    </el-row>
    <el-row>{{postsItem.desc}}</el-row>
    <el-button plain class="posts-btn" >
      <el-link :underline="false" :href="'detail/'+postsItem._id">
        阅读全文
      </el-link>
    </el-button>
  </el-card>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    postsItem: {
      type: Object
    }
  },
});
</script>
<style>
  .box-card{
    margin-bottom: 20px;
    text-align: center;
  }

  .second-title{
    font-size: 12px;
    color: #999;
    line-height: 1.5;
    margin-bottom: 30px;
  }

  .second-title a{
    font-size: 12px;
  }

  .post-meta-item-icon{
    margin-right: 3px;
  }

  .el-button.posts-btn{
    margin-top: 40px;
  }

  .posts-h1{
    line-height: 1.5;
  }
</style>