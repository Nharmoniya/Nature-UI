<demo>
支持size参数
</demo>
<template>
  <div>
    <div>
      <Button theme="text" size="big">文本</Button>
      <Button theme="text">文本</Button>
      <Button theme="text" size="small">文本</Button>
    </div>
    <div>
      <Button theme="link" size="big">链接</Button>
      <Button theme="link">链接</Button>
      <Button theme="link" size="small">链接</Button>
    </div>
    <div>
      <Button size="big">普通</Button>
      <Button>普通</Button>
      <Button size="small">普通</Button>
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