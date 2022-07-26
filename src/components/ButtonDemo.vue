<template>
  <article  class="markdown-body">
    <h1>Button按钮</h1>
    <p>参数：theme，size，level，disabled，loading</p>
  </article>
  <br/>
  <Demo :component="ButtonDemo1"></Demo>
  <br/>
  <Demo :component="ButtonDemo2"></Demo>
  <br/>
  <Demo :component="ButtonDemo3"></Demo>
  <br/>
  <Demo :component="ButtonDemo4"></Demo>
  <br/>
  <Demo :component="ButtonDemo5"></Demo>
</template>

<script lang="ts">
import {Button} from '../lib/index.ts';
import ButtonDemo1 from './ButtonDemos/ButtonDemo1.vue'
import ButtonDemo2 from './ButtonDemos/ButtonDemo2.vue'
import ButtonDemo3 from './ButtonDemos/ButtonDemo3.vue'
import ButtonDemo4 from './ButtonDemos/ButtonDemo4.vue'
import ButtonDemo5 from './ButtonDemos/ButtonDemo5.vue'
import Demo from './Demo.vue';
export default {
  components:{
    Button,
    Demo,
  },
  setup(){
    return{
      ButtonDemo1,
      ButtonDemo2,
      ButtonDemo3,
      ButtonDemo4,
      ButtonDemo5
    }
  }
};
</script>

<style lang="scss" scoped >
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