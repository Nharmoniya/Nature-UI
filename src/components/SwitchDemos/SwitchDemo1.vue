<demo>常规用法</demo>
<template>
  <div>
    <Switch v-model:value="bool"></Switch>
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
<script>
  import Demo from '../Demo';
  export default {
    components: {Demo}
  };
</script>