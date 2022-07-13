<template>
  <div>
    <Switch v-model:value="bool"></Switch>
  </div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>
  <div>1231123</div>  <div>1231123</div>




</template>

<script>
import Switch from '../lib/Switch.vue';
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