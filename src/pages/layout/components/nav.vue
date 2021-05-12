<template>
  <div class="nav-wrap">
    <div class="header-inner">
      <div class="site-brand-wrapper">
        <a class="site-title" href="/">谢欢</a>
        <p>山有木兮卿有意，昨夜星辰恰似你</p>
      </div>
      <div class="menu">
        <ul>
          <li
            :class="{ active: item.active }"
            v-for="(item, index) in routerList"
            :key="index"
          >
            <a href="/"
              ><i class="post-meta-item-icon" :class="item.icon"></i
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
    <el-affix>
      <div class="sidebar-inner">
        <section class="site-overview-wrap sidebar-panel sidebar-panel-active">
          <div class="site-overview" style="max-height: 809px">
            <div
              class="site-author motion-element"
              itemprop="author"
              itemscope=""
              itemtype="http://schema.org/Person"
            >
              <p class="site-author-name" itemprop="name">谢欢</p>
              <p class="site-description motion-element" itemprop="description">
                日拱一卒，功不唐捐。
              </p>
            </div>

            <nav class="site-state motion-element">
              <div class="site-state-item site-state-posts">
                <a href="/archives/">
                  <span class="site-state-item-count">9</span>
                  <span class="site-state-item-name">日志</span>
                </a>
              </div>

              <div class="site-state-item site-state-categories">
                <a href="/categories/index.html">
                  <span class="site-state-item-count">3</span>
                  <span class="site-state-item-name">分类</span>
                </a>
              </div>

              <div class="site-state-item site-state-tags">
                <a href="/tags/index.html">
                  <span class="site-state-item-count">14</span>
                  <span class="site-state-item-name">标签</span>
                </a>
              </div>
            </nav>

            <div
              class="links-of-blogroll motion-element links-of-blogroll-inline"
            >
              <div class="links-of-blogroll-title">
                <i class="fa fa-fw fa-link"></i>
                友情链接
              </div>
              <ul class="links-of-blogroll-list">
                <li class="links-of-blogroll-item">
                  <a href="http://scuzivn.top/" title="羽毛" target="_blank"
                    >羽毛</a
                  >
                </li>

                <li class="links-of-blogroll-item">
                  <a
                    href="https://www.fengjinqi.com/"
                    title="冯金琪"
                    target="_blank"
                    >冯金琪</a
                  >
                </li>

                <li class="links-of-blogroll-item">
                  <a
                    href="https://www.nanbk.com/"
                    title="南岸南"
                    target="_blank"
                    >南岸南</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div class="back-to-top" style="">
          <i class="fa fa-arrow-up"></i>
          <span id="scrollpercent"><span>0</span>%</span>
        </div>
      </div>
    </el-affix>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
interface NavList {
  name: string;
  icon: string;
  active?: boolean;
}
export default defineComponent({
  async setup() {
    let navList: NavList[] = [
      { name: "首页", icon: "menu-item-icon fa fa-fw fa-home", active: true },
      { name: "关于", icon: "menu-item-icon fa fa-fw fa-user" },
      { name: "标签", icon: "menu-item-icon fa fa-fw fa-tags" },
      { name: "分类", icon: "menu-item-icon fa fa-fw fa-th" },
      { name: "归档", icon: "menu-item-icon fa fa-fw fa-archive" },
      { name: "相册", icon: "menu-item-icon fa fa-fw fa-photo" },
      { name: "搜索", icon: "menu-item-icon fa fa-search fa-fw" },
    ];
    const routerList = ref<NavList[]>(navList);
    
    return {
      routerList,
    };
  },
});
</script>
<style>
.nav-wrap {
  width: 240px;
}

.header-inner {
  background: #fff;
  text-align: center;
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

.menu {
  padding: 20px 0;
  margin-bottom: 20px;
}

.menu li {
  line-height: 2;
  text-align: left;
}

.menu li:hover,
.menu li.active {
  background: #f9f9f9;
}

.menu li a {
  display: block;
  font-size: 13px;
  position: relative;
  box-sizing: border-box;
  padding: 5px 20px;
  text-align: left;
  line-height: inherit;
  transition-property: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
}

.menu li.active a:after {
  content: " ";
  position: absolute;
  top: 50%;
  margin-top: -3px;
  right: 15px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #bbb;
}

.sidebar-inner{
  background: #fff;
}
</style>