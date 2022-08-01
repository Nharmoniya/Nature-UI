
<template>
  <article  class="markdown-body">
    <h1>NumberPad 计算板</h1>
    <p>此处只作为展示，若需使用建议直接看源码</p>
  </article>
<Demo :component="NumberPad1"></Demo>
</template>

<script>
import Demo from './Demo.vue';
import NumberPad1 from './NumberPadDemos/NumberPadDemo1.vue'
export default {
  components: {Demo},
  setup(){
    return{
      NumberPad1,
    }
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