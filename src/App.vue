<template>
  <suspense>
    <HtmlView />
  </suspense>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import HtmlView from './pages/blogView.vue';
  export default defineComponent({
    components: {
      HtmlView
    }
  });
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
  }

  #app::before {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #222;
  }

  a {
    text-decoration: none;
    color: #333333;
  }
</style>