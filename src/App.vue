<template>
  <router-view />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
  });
</script>
<style>
  html,
  body,
  div,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul,li{
    list-style: none;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
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