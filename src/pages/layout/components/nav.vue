<template>
  <div class="nav-wrap">
    <div class="header-inner">
      <div class="site-brand-wrapper">
        <a class="site-title" href="/">谢欢</a>
        <p>山有木兮卿有意，昨夜星辰恰似你</p>
      </div>
      <div>
        <ul v-for="(item, index) in navList" :key="index">
          <li>
            <a href="/"><i :class="item.icon"></i>{{ item.name }}</a>
          </li>
        </ul>
      </div>
      <div class="sidebar">粘贴布局</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
interface NavList {
  name: string;
  icon: string;
}
export default defineComponent({
  name: "nav",
  async setup() {
    let navList;
    try {
      let res = await axios.get("http://10.79.9.133/routerList");
      navList = ref<NavList[]>(res.data.data);
    } catch (e) {
      navList = ref<NavList[]>();
    }
    return {
      navList,
    };
  },
});
</script>
<style>
.nav-wrap {
  width: 240px;
}

.site-brand-wrapper {
  height: 112px;
  background: #222;
  color: white;
  padding: 20px 0;
  box-sizing: border-box;
}

.site-title {
  display: inline-block;
  vertical-align: top;
  line-height: 36px;
  font-size: 20px;
  font-weight: normal;
  color: white;
}

.site-brand-wrapper p {
  font-size: 13px;
  color: #ddd;
  margin: 10px 10px 0 10px;
}

.sidebar {
  position: sticky;
  top: 0;
}
</style>