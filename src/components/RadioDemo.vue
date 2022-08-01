<template>
  <article class="markdown-body">
    <h1>Radio 单选框</h1>
    <p>参数：checked，disabled，label，name</p>
    <p>label为其中的数据，name为区分radio组别的参数</p>
  </article>
  <Demo :component="RadioDemo1"></Demo>
  <Demo :component="RadioDemo2"></Demo>
  <Demo :component="RadioDemo3"></Demo>
</template>

<script>
import Demo from './Demo.vue';
import RadioDemo1 from './RadioDemos/RadioDemo1.vue';
import RadioDemo2 from './RadioDemos/RadioDemo2.vue';
import RadioDemo3 from './RadioDemos/RadioDemo3.vue';

export default {
  components: {Demo, RadioDemo1, RadioDemo2, RadioDemo3},
  setup() {
    return {
      RadioDemo1,
      RadioDemo2,
      RadioDemo3,
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