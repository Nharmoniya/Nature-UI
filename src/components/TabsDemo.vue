<template>
  <article class="markdown-body">
    <h1>Tabs导航栏</h1>
    <p>参数：value，disabled</p>
    <p style="color: red">注意！内部标签必须为Tab否则会报错</p>
  </article>
  <Demo :component="TabsDemo1"></Demo>
</template>

<script lang="ts">

import {
  ref
} from 'vue';
import Demo from './Demo.vue';
import TabsDemo1 from './TabsDemos/TabsDemo1.vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      TabsDemo1
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
article {
  padding: 24px;
  background-color: white;
  color: #1d2c40;

  > pre {
    background-color: #dcdfe6;
  }

  > p {
    > code {
      background-color: rgb(243, 244, 244);
    }

    > a {
      text-decoration: none;
      color: #52c41a;
    }
  }
}
</style>