<template>
  <div>Button 实例</div>
  <h1>实例1</h1>
  <div>
    <Button theme="text" disabled>文本</Button>
    <Button theme="link">链接</Button>
    <Button disabled>普通</Button>
  </div>
  <h1>实例2</h1>
  <div>
    <Button  disabled>你好</Button>
    <Button theme="normal" loading>你好</Button>
  </div>
</template>

<script lang="ts">
import {Button} from '../lib/index.ts';
export default {
  components:{Button},
};
</script>

<style lang="scss" >

</style>