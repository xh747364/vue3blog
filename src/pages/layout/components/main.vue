<template>
  <div>
    <ul v-for="(item,index) in 30" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: "main",
  });
</script>
<style>

</style>