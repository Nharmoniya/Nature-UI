<template>
  <article class="markdown-body">
    <h1>Input输入框</h1>
    <p>参数：intype，disabled，placeholder，maxlength，clearable</p>
  </article>
  <Demo :component="InputDemo1"></Demo>
  <Demo :component="InputDemo2"></Demo>
  <Demo :component="InputDemo3"></Demo>
  <Demo :component="InputDemo4"></Demo>
  <Demo :component="InputDemo5"></Demo>
</template>

<script lang="ts">
import Input from '../lib/Input.vue';
import Demo from './Demo.vue';
import InputDemo1 from './InputDemos/InputDemo1.vue';
import InputDemo2 from './InputDemos/InputDemo2.vue';
import InputDemo3 from './InputDemos/InputDemo3.vue';
import InputDemo4 from './InputDemos/InputDemo4.vue';
import InputDemo5 from './InputDemos/InputDemo5.vue';

export default {
  components: {
    Demo,
    Input,
  },
  data() {
    return {
      input: ''
    };
  },
  setup() {
    return {
      InputDemo1,
      InputDemo2,
      InputDemo3,
      InputDemo4,
      InputDemo5
    };
  }
};
</script>

<style lang="scss" scoped>
$border-color:#d9d9d9;
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