<demo>
支持level参数
</demo>
<template>
  <div>
    <div>
      <Button theme="text" level="main">文本</Button>
      <Button level="main">文本</Button>
      <Button theme="link" level="main">文本</Button>
    </div>
    <br/>
    <div>
      <Button theme="text" level="danger">文本</Button>
      <Button level="danger">文本</Button>
      <Button theme="link" level="danger">文本</Button>
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