<demo>一键打开弹窗</demo>
<template>
  <Button @click="showDialog">打开弹窗</Button>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/index.ts';
import {h} from 'vue';
export default {
  components:{
    Button,
  },
  setup(){
    const showDialog=()=>{
      openDialog({
        title:h('strong',{},'标题'),
        content:'你好',
        ok(){
          console.log('ok')
        },
        cancel(){
          console.log('cancel')
        }
      })
    }
    return { showDialog};
  }
};
</script>

<style scoped>

</style>