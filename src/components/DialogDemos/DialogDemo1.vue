<demo>常规用法</demo>
<template>
  <Button @click="toggle">打开弹窗</Button>
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="confirm" :cancel="resolve">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <h2>Hello world！</h2>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Dialog from '../../lib/Dialog.vue';
import {ref} from 'vue';

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
    return {x, toggle, confirm, resolve};
  }
};
</script>

<style scoped>

</style>