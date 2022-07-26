<template>
  <article class="markdown-body">
    <h1>Dialog弹窗</h1>
    <p>参数：visible，closeOnClickOverlay，ok，cancel</p>
  </article>
  <Demo :component="DialogDemo1"></Demo>
  <Demo :component="DialogDemo2"></Demo>
</template>

<script lang="ts">
import DialogDemo1 from './DialogDemos/DialogDemo1.vue';
import DialogDemo2 from './DialogDemos/DialogDemo2.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {
      DialogDemo1,
      DialogDemo2
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