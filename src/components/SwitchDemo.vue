<template>
  <div>
    <article  class="markdown-body">
      <h1>Swtich开关</h1>
      <p>表示两个状态之间的切换，多用于触发「开/关」。</p>
      <p>参数：value，disabled</p>
    </article>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './SwitchDemos/SwitchDemo1.vue';
import Switch2Demo from './SwitchDemos/SwitchDemo2.vue';
import Demo from './Demo.vue';
import {
  ref
} from 'vue';

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Switch1Demo,
      Switch2Demo,
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
