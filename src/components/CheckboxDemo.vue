<template>
  <article class="markdown-body">
    <h1>CheckBox 多选框</h1>
    <p>参数：checked，disabled,label</p>
  </article>
  <Demo :component="CheckBoxDemo1"></Demo>
  <Demo :component="CheckBoxDemo2"></Demo>
  <Demo :component="CheckBoxDemo3"></Demo>
</template>

<script>
import Demo from './Demo.vue';
import CheckBoxDemo1 from './CheckBoxDemos/CheckBoxDemo1.vue';
import CheckBoxDemo2 from './CheckBoxDemos/CheckBoxDemo2.vue';
import CheckBoxDemo3 from './CheckBoxDemos/CheckBoxDemo3.vue';

export default {
  components: {Demo, CheckBoxDemo1,CheckBoxDemo2,CheckBoxDemo3},
  setup() {
    return {
      CheckBoxDemo1,
      CheckBoxDemo2,
      CheckBoxDemo3,
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