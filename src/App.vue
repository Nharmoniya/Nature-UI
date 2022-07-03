<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { ref, provide } from "vue";
import {router} from './router.ts'
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide("menuVisible", menuVisible); // set
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false;
      }
    });
  },
}
</script>
<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar{
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb{
  background-color: #73d13d;
  background-image: -webkit-linear-gradient(45deg,rgb(255,255,255,0.4));
  border-radius: 32px;
}
::-webkit-scrollbar-track{
  background-color: #f0f0f0;
  border-radius:32px;
}
</style>
