<demo>支持disabled</demo>
<template>
  <div>
    <Switch v-model:value="bool" disabled></Switch>
  </div>
</template>

<script>
import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {
      bool
    };
  }
};
</script>

<style lang="scss">
</style>