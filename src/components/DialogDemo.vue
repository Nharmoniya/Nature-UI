<template>
  <div>
    Dialog实例
  </div>
  <div>
    实例1
  </div>
  <Button @click="toggle">打开弹窗</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="confirm" :cancel="resolve">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <h2>Hello world！</h2>
    </template>
  </Dialog>
  <div>实例2</div>
  <Button @click="showDialog">打开弹窗</Button>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';
import Dialog from '../lib/Dialog.vue';
import {openDialog} from '../lib/index.ts';
import {ref,h} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const confirm = () => {
      return false;
    };
    const resolve = () => {
      return false;
    };
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
    return {x, toggle, confirm, resolve,showDialog};
  }
};
</script>

<style scoped>

</style>