<demo>
支持disabled参数
</demo>
<template>
  <div>
    <div>
      <Button theme="text" disabled>文本</Button>
      <Button disabled>文本</Button>
      <Button theme="link" disabled>文本</Button>
    </div>
  </div>
</template>

<script lang="ts">
import {Button} from '../../lib/index.ts';
export default {
  components:{Button},
};
</script>

<style lang="scss" >

</style>